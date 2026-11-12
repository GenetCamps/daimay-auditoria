"""Revisa que quien hizo push solo haya cambiado archivos que le corresponden
según permisos.json (la versión ANTERIOR al push, para que nadie se dé permisos
a sí mismo). Si no, imprime los archivos no permitidos y sale con código 1.

Uso: python revisar_permisos.py <actor> <sha_antes> <sha_despues>
"""
import json
import subprocess
import sys


def git(*args):
    return subprocess.run(["git", *args], check=True, capture_output=True, text=True).stdout


def main():
    actor, before, after = sys.argv[1], sys.argv[2], sys.argv[3]
    if actor.endswith("[bot]") or set(before) == {"0"}:
        print("Push de bot o rama nueva: no se revisa.")
        return 0
    try:
        perm = json.loads(git("show", f"{before}:permisos.json"))
    except subprocess.CalledProcessError:
        print("No había permisos.json antes de este push: no se revisa.")
        return 0

    who = actor.lower()
    if any(a.strip().lower() == who for a in perm.get("admins", [])):
        print(f"{actor} es admin: OK.")
        return 0

    allowed = {app["archivo"] for app in perm.get("apps", [])
               if any(e.strip().lower() == who for e in app.get("editores", []))}
    changed = [f for f in git("diff", "--name-only", before, after).splitlines() if f]
    bad = [f for f in changed if f not in allowed]
    if bad:
        print(f"{actor} no tiene permiso para cambiar: {', '.join(bad)}")
        print(f"Archivos permitidos para {actor}: {', '.join(sorted(allowed)) or '(ninguno)'}")
        return 1
    print(f"{actor} cambió solo archivos permitidos: {', '.join(changed)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
