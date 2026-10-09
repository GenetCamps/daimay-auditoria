/* ═══════════════════════════════════════════════════════════════
   config.js — Catálogo de la Auditoría 5S Daimay (FM-MOP-0061-DR)
   Aquí se edita TODO lo que cambia: plantas, auditores, áreas,
   departamentos y responsables. index.html no se toca.

   CATALOGO     → auditores / áreas / departamentos por planta
   RESPONSABLES → responsable principal (TO) + 2 correos en copia (CC)
                  por área. Solo P6 y P7 por ahora. El nombre del área
                  debe ser IDÉNTICO al de CATALOGO[planta].areas.
   ═══════════════════════════════════════════════════════════════ */

/* Buzón que escucha el flujo "5S_Auditoria_Email_a_SharePoint" */
const MAIL_DESTINO = "gcampos@daimayus.com";
/* Largo máximo del link mailto. Arriba de esto se usa copiar/pegar (Windows
   falla en silencio con links muy largos). Súbelo solo si lo pruebas. */
const MAILTO_MAX = 2000;

const CATALOGO = {
  "Planta 1": {
    "auditores": [
      "Aldo Moreno",
      "Aldo Peña",
      "Baruch Cardenas",
      "Carlos Niño",
      "Carlos Palacios",
      "Carlos Zartuche",
      "Diana Galvan",
      "Dora Medina",
      "Fannie Gretelle",
      "Gerardo Aguilar",
      "Hector Borjon",
      "Hugo Trujillo",
      "Jesus Nava",
      "Jose Ignacio Arias",
      "Lorenzo de la Mora",
      "Luis Mendoza",
      "Miguel Villegas",
      "Monserrat Arana",
      "Paola Maltos",
      "Paola Rodriguez",
      "Roberto Carlos Santos"
    ],
    "areas": [
      "Zona 1 - 100's",
      "Zona 2 - 200's",
      "Zona 3 - 300's",
      "Zona 4 - 400's",
      "Zona 5 - 500's",
      "Zona 6 - 600's",
      "Zona 7 - 700's",
      "Zona 8 - 800's",
      "Zona 9 - 900's",
      "Zona 10 - Oficinas",
      "Zona 11 - Lab / Tool Crib / Mantto / Lockers",
      "Zona 12 - DQMC / Almacen",
      "Zona 13 - DQMC / Est. 0",
      "Zona 14 - Almacen",
      "Zona 15 - Assy Frame",
      "Zona 16 - Assy Frame Unit",
      "Zona 17 - Assy Frame Lit"
    ],
    "departamentos": [
      "Calidad",
      "Ensamble",
      "Lanzamientos",
      "Mantenimiento",
      "Manufactura",
      "Materiales",
      "Produccion Moldeo",
      "Sistemas de Calidad"
    ]
  },
  "Planta 2": {
    "auditores": [
      "Alicia Juarez",
      "Anayeli Rivera",
      "Brandon Quintero",
      "Carlos Lozano",
      "Gabriela Vazquez",
      "Jose Emmanuel Wong",
      "Laura Rubi Concha Leija",
      "Moises Ascano",
      "Uriel Alberto Rodriguez",
      "Victor Manuel Serrano Bautista",
      "Wendy Rincon",
      "Ximena Martinez Soto"
    ],
    "areas": [
      "ALMACEN II / AREA DE EMBARQUES / EMPAQUE",
      "BEZIER UPAL R2 LB R1",
      "Consolas",
      "DQMC I-II / PREP DE MTL",
      "MEA / T1XX A / T1XX B / T1XX C / C1XX",
      "MVA / CL4 / EVEREST / LUCID / TOYOTA / TESLA / 500B",
      "Oficinas",
      "P702 / A24WL / WK / DT / WS",
      "PATIOS / ADHESIVOS",
      "Tool Crib / Metrology / Servicio Médico / Lockers",
      "U728 / P703 / TESLA / CX483 / JL / ZER P708",
      "VANITY / FRAME"
    ],
    "departamentos": [
      "Calidad",
      "Mantenimiento",
      "Manufactura",
      "Materiales",
      "Sistemas de Calidad"
    ]
  },
  "Planta 3": {
    "auditores": [
      "Esparza De La Fuente Linda Guadalupe",
      "Gallegos Hernandez Teresita De Jesus",
      "Genet Campos",
      "Gutierrez Nuñez Omar",
      "Hernandez Valdivia Daniela",
      "Lopez Lopez Alejandro",
      "Martinez Cardona Gustavo",
      "Morales Cabello Dennyse Guadalupe",
      "No program",
      "Ovalle Rodriguez Erik",
      "Recio Martinez Idalia Guadalupe",
      "Valdivia Leyva Ricardo"
    ],
    "areas": [
      "Almacen Materia Prima",
      "Area FG 1-2",
      "Area de Calderas y Pasillo",
      "Bodega 1-2",
      "Contencion EPP",
      "Empaque vacio carton",
      "Everest",
      "Exterior P3 Lateral",
      "Exterior P4",
      "Exterior P4 Patio",
      "Hornos Estructural",
      "Huitong/Huitong Wip",
      "Oficina /Taller de Soldadura",
      "Tool Room/ Adhesivo Everest"
    ],
    "departamentos": [
      "Calidad",
      "Mantenimiento",
      "Manufactura",
      "Materiales",
      "Mejora Continua",
      "No program",
      "Recursos Humanos",
      "Sistemas de Calidad"
    ]
  },
  "Planta 4": {
    "auditores": [
      "Arambulo Rosales Isaac",
      "Cedillo Rios Sonia Janeth",
      "De Leon Martinez Ariel Aaron",
      "Diaz Lopez Daniel Antonio",
      "Garcia Granados Guillermo De Jesus",
      "Genet Campos",
      "Gonzalez Delgado Fernando",
      "Hernandez Ramos Misael",
      "Lopez Lopez Alejandro",
      "Martinez Alvarado Ariel Alejandro",
      "Montes Saucedo Bruno Gerardo",
      "No program",
      "Ozuna Rivera Martha Citlalli",
      "Pruneda Gonzalez Sandra Paola",
      "Ramos Cabrera Fabian",
      "Sanchez Alvarez Silvia Vianely",
      "Toledo Gonzalez Octavio",
      "Trejo Arreaga Ivan",
      "Velasco Villanueva Laura Elena"
    ],
    "areas": [
      "Bodega Expansion 1",
      "Bodega Expansion 2",
      "DQMC",
      "DQMC EVEREST  GM WIP",
      "Embarques",
      "Empaque",
      "Empaque Estructural/ Contencion",
      "Exterior P3",
      "Hornos viseras",
      "Inyeccion Plastico",
      "MX-MS FD  Y ULG",
      "Oficinas. Laboratorio, Comedor",
      "Prensas Corte/ Laminacion",
      "Prensas EPP Viseras",
      "Prensas EPP Viseras/ Prensas EPP Estructural",
      "REAR CARPET / FOOTWELL",
      "Rampas  ( exterior)",
      "Rivian",
      "Termoformado"
    ],
    "departamentos": [
      "Calidad",
      "EHS",
      "Lanzamientos",
      "Manufactura",
      "Materiales",
      "Mejora Continua",
      "No program",
      "Procesos",
      "Recursos Humanos"
    ]
  },
  "Planta 6": {
    "auditores": [
      "Alvarado Espinosa Miguel",
      "Covarrubias Castillo Fernanda Carolina",
      "Farias Colmenares Paula Leonor",
      "Gatica Glz Jorge Adalberto",
      "Guzman Reyes Arely Monserrat",
      "Lopez Torres Giovanna Yaneth",
      "Santiago Gomez Esteban",
      "Santiago Solis Jose Alberto",
      "Tolentino Jose Ignacio",
      "Torres Alvarado David Eduardo",
      "Torres Cedillo Jorge Alberto",
      "Zapata Gonzalez Erik Fernando"
    ],
    "areas": [
      "Bahia 1",
      "Bahia 2",
      "Bahia 3",
      "Cuarentena",
      "Dock Audit - EPC",
      "Jaula Lanzamientos / Contencion",
      "Armado de Carton / Jaulas Mfra",
      "Almacen PT",
      "Almacen Foam",
      "Lineas Rivian"
    ],
    "departamentos": [
      "Calidad",
      "Lanzamientos",
      "Manufactura",
      "Produccion"
    ]
  },
  "Planta 7": {
    "auditores": [
      "Bravo Rodriguez Edgar",
      "Cabello Delgado Maria De Los Angeles",
      "Genet Campos",
      "Hernandez Magaña Ana Lizbeth",
      "Morales Rodriguez Eduardo",
      "Mota Saucedo Antonio",
      "Perez Rodriguez Maria Del Refugio",
      "Rodriguez Cortes Hector Juan",
      "Rodriguez Estrada Eric Alejandro",
      "Sanchez Farias Divani",
      "Vera Delgado Edna Elizabeth",
      "de Hoyos Rodriguez Lizbeth Graciela"
    ],
    "areas": [
      "Carrusel 1-2",
      "Carrusel 3-4",
      "Carrusel 6-7",
      "Carrusel 8-9",
      "DQMC / Dock Audit",
      "Armado de Carton",
      "Cuarentena",
      "Tooling"
    ],
    "departamentos": [
      "Calidad",
      "Mejora Continua",
      "Produccion",
      "Sistemas de Calidad"
    ]
  },
  "Planta Parras": {
    "auditores": [

    ],
    "areas": [

    ],
    "departamentos": [

    ]
  }
};

// RESPONSABLES POR ÁREA — Planta 6 / Planta 7 (1 principal + 2 CC)
const RESPONSABLES = {
  "Planta 6": {
    "Bahia 1": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "MAEspinosa@daimayus.com", "cc2": "JTolentino@daimayus.com", "zona": "Zona 1"},
    "Bahia 2": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "MAEspinosa@daimayus.com", "cc2": "JTolentino@daimayus.com", "zona": "Zona 2"},
    "Bahia 3": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "MAEspinosa@daimayus.com", "cc2": "JTolentino@daimayus.com", "zona": "Zona 3"},
    "Cuarentena": {"nombre": "Arantza Hinojosa", "correo": "ahinojosa@daimayus.com", "cc1": "AMota@daimayus.com", "cc2": "Ahernandez4@daimayus.com", "zona": "Zona 4"},
    "Dock Audit - EPC": {"nombre": "Gabriela Balderas", "correo": "GBalderas@daimayus.com", "cc1": "DASanchez@daimayus.com", "cc2": "Evera@daimayus.com", "zona": "Zona 5"},
    "Jaula Lanzamientos / Contencion": {"nombre": "Elena Gamez", "correo": "EGamez@daimayus.com", "cc1": "Ebravo@daimayus.com", "cc2": "EFZapata@daimayus.com", "zona": "Zona 6"},
    "Armado de Carton / Jaulas Mfra": {"nombre": "Jennifer Garcia", "correo": "JGGregorio@daimayus.com", "cc1": "BEsquivel@daimayus.com", "cc2": "JPrado@daimayus.com", "zona": "Zona 7"},
    "Almacen PT": {"nombre": "Juan Medrano", "correo": "JZertuche@daimayus.com", "cc1": "JMedrano@daimayus.com", "cc2": "", "zona": "Zona 8"},
    "Almacen Foam": {"nombre": "Juan Medrano", "correo": "JZertuche@daimayus.com", "cc1": "JMedrano@daimayus.com", "cc2": "", "zona": "Zona 9"},
    "Lineas Rivian": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "RGarcia2@daimayus.com", "cc2": "", "zona": "Zona 10"}
  },
  "Planta 7": {
    "Carrusel 1-2": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "Dbriones@daimayus.com", "cc2": "EMRodriguez@daimayus.com", "zona": "Zona 1"},
    "Carrusel 3-4": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "Dbriones@daimayus.com", "cc2": "EMRodriguez@daimayus.com", "zona": "Zona 2"},
    "Carrusel 6-7": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "MAlvarado@daimayus.com", "cc2": "EMRodriguez@daimayus.com", "zona": "Zona 3"},
    "Carrusel 8-9": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "MAlvarado@daimayus.com", "cc2": "EMRodriguez@daimayus.com", "zona": "Zona 4"},
    "DQMC / Dock Audit": {"nombre": "Gabriela Balderas", "correo": "GBalderas@daimayus.com", "cc1": "Hrodriguez@daimayus.com", "cc2": "JCedillo@daimayus.com", "zona": "Zona 5"},
    "Armado de Carton": {"nombre": "Berenice Esquivel", "correo": "BEsquivel@daimayus.com", "cc1": "BEsquivel@daimayus.com", "cc2": "JPrado@daimayus.com", "zona": "Zona 6"},
    "Cuarentena": {"nombre": "Arantza Hinojosa", "correo": "ahinojosa@daimayus.com", "cc1": "AMota@daimayus.com", "cc2": "Ahernandez4@daimayus.com", "zona": "Zona 7"},
    "Tooling": {"nombre": "Luis Najera", "correo": "LNajera@daimayus.com", "cc1": "Cnava@daimayus.com", "cc2": "", "zona": "Zona 8"}
  }
};
