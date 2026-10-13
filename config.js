/* ═══════════════════════════════════════════════════════════════
   config.js — Catálogo de la Auditoría 5S Daimay (FM-MOP-0061-DR)
   Aquí se edita TODO lo que cambia: plantas, auditores, áreas,
   departamentos y responsables. index.html no se toca.

   CATALOGO     → auditores / áreas / departamentos por planta
   RESPONSABLES → responsable principal (TO) + 2 correos en copia (CC)
                  por área. Si un área no está aquí, el responsable se captura a mano. El nombre del área
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
      "Angeles Carrillo",
      "Baruch Cardenas",
      "Carlos Niño",
      "Carlos Palacios",
      "Carlos Zartuche",
      "Diana Galvan",
      "Dora Medina",
      "Fannie Gretelle",
      "Fatima Tello",
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
      "Zona 11 - Laboratorio / Tool Crib / Mtto / Lockers",
      "Zona 12 - DQMC / Almacén",
      "Zona 13 - DQMC / Estación 0",
      "Zona 14 - Almacén",
      "Zona 15 - Assy Frame",
      "Zona 16 - Assy Frame Unlit",
      "Zona 17 - Assy Frame Lit"
    ],
    "departamentos": [
      "Calidad",
      "Ensamble",
      "Lanzamientos",
      "Mantenimiento",
      "Manufactura",
      "Materiales",
      "Mejora Continua",
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
      "Fatima Tello",
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
      "Zona 1 - Consolas",
      "Zona 2 - Ford / Stellantis",
      "Zona 3 - GM",
      "Zona 4 - Kia / Tesla",
      "Zona 5 - DQMC",
      "Zona 6 - Tesla / Stellantis / Kia",
      "Zona 7 - Almacén 1",
      "Zona 8 - Almacén 2",
      "Zona 9 - Embarques",
      "Zona 10 - Adhesivo EPP",
      "Zona 11 - Frame y Vanity",
      "Zona 12 - Adhesivo"
    ],
    "departamentos": [
      "Calidad",
      "Mantenimiento",
      "Manufactura",
      "Materiales",
      "Mejora Continua",
      "Sistemas de Calidad"
    ]
  },
  "Planta 3": {
    "auditores": [
      "Esparza De La Fuente Linda Guadalupe",
      "Fatima Tello",
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
      "Zona 1 - Empaque / WIP",
      "Zona 2 - Prensas",
      "Zona 3 - Escritorios / Tool Room",
      "Zona 4 - Huitong",
      "Zona 5 - Hornos",
      "Zona 6 - Material FC"
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
      "Esparza De La Fuente Linda Guadalupe",
      "Fatima Tello",
      "Garcia Granados Guillermo De Jesus",
      "Genet Campos",
      "Gonzalez Delgado Fernando",
      "Hernandez Ramos Misael",
      "Lopez Lopez Alejandro",
      "Martinez Alvarado Ariel Alejandro",
      "Montes Saucedo Bruno Gerardo",
      "Morales Cabello Dennyse Guadalupe",
      "No program",
      "Ozuna Rivera Martha Citlalli",
      "Pruneda Gonzalez Sandra Paola",
      "Ramos Cabrera Fabian",
      "Sanchez Alvarez Silvia Vianely",
      "Toledo Gonzalez Octavio",
      "Trejo Arreaga Ivan",
      "Valdivia Leyva Ricardo",
      "Velasco Villanueva Laura Elena"
    ],
    "areas": [
      "Zona 1 - Almacén zona 2",
      "Zona 2 - Almacén zona 1",
      "Zona 3 - GM Headliner",
      "Zona 4 - Termoformado",
      "Zona 5 - DQMC",
      "Zona 6 - Recibo / Embarques",
      "Zona 7 - Corte y Laminado",
      "Zona 8 - Laboratorio",
      "Zona 9 - Everest",
      "Zona 10 - Moldeo",
      "Zona 11 - Rivian",
      "Zona 12 - Oficinas / Comedor"
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
      "Fatima Tello",
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
      "Mejora Continua",
      "Produccion"
    ]
  },
  "Planta 7": {
    "auditores": [
      "Bravo Rodriguez Edgar",
      "Cabello Delgado Maria De Los Angeles",
      "Fatima Tello",
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
      "Alejandro de la Maza",
      "Barbara Reza",
      "David Martínez",
      "Fatima Estefania Pérez Rdz",
      "Fatima Tello",
      "Genet Campos",
      "Hector Carrillo",
      "Hugo Pérez",
      "Karina Flores",
      "Leonel Cortés Flores",
      "Nancy Dávila",
      "Natalli Puente",
      "Osvaldo Adame"
    ],
    "areas": [
      "Zona 1 - Costura 1",
      "Zona 2 - Costura 2",
      "Zona 3 - Corte",
      "Zona 4 - Laminación",
      "Zona 5 - Foam"
    ],
    "departamentos": [
      "Calidad",
      "Compras",
      "Finanzas",
      "Lanzamientos",
      "Manufactura",
      "Mejora Continua",
      "Recursos Humanos",
      "Sistemas de Calidad"
    ]
  }
};

// RESPONSABLES POR ÁREA (principal = TO, cc1/cc2 = copia). Mismo nombre de área que en CATALOGO.
// Fuente: Sistema_5S_Daimay.xlsx (programa Oct-2026)
const RESPONSABLES = {
  "Planta 1": {
    "Zona 1 - 100's": {"nombre": "Ulises Hernandez", "correo": "Uhernandez@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 2 - 200's": {"nombre": "Ulises Hernandez", "correo": "Uhernandez@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 3 - 300's": {"nombre": "Ulises Hernandez", "correo": "Uhernandez@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 4 - 400's": {"nombre": "Ulises Hernandez", "correo": "Uhernandez@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 5 - 500's": {"nombre": "Arturo Romo", "correo": "ARomo@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 6 - 600's": {"nombre": "Arturo Romo", "correo": "ARomo@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 7 - 700's": {"nombre": "Arturo Romo", "correo": "ARomo@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 8 - 800's": {"nombre": "Arturo Romo", "correo": "ARomo@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 9 - 900's": {"nombre": "Arturo Romo", "correo": "ARomo@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 10 - Oficinas": {"nombre": "Angeles Carrillo", "correo": "ACarrillo@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 11 - Laboratorio / Tool Crib / Mtto / Lockers": {"nombre": "Nestor Estrada", "correo": "Nestrada@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 12 - DQMC / Almacén": {"nombre": "Paola Fernandez", "correo": "PFernandez@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 13 - DQMC / Estación 0": {"nombre": "David Iturralde", "correo": "DIturralde@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 14 - Almacén": {"nombre": "Paola Fernandez", "correo": "PFernandez@daimayus.com", "cc1": "", "cc2": ""}
  },
  "Planta 2": {
    "Zona 1 - Consolas": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 2 - Ford / Stellantis": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 3 - GM": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 4 - Kia / Tesla": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 5 - DQMC": {"nombre": "Emmanuel Wong", "correo": "JAlejo@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 6 - Tesla / Stellantis / Kia": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 7 - Almacén 1": {"nombre": "Julio Olivan", "correo": "JOlivan@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 8 - Almacén 2": {"nombre": "Julio Olivan", "correo": "JOlivan@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 9 - Embarques": {"nombre": "Julio Olivan", "correo": "JOlivan@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 10 - Adhesivo EPP": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 11 - Frame y Vanity": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 12 - Adhesivo": {"nombre": "Federico Torres", "correo": "FTorres@daimayus.com", "cc1": "", "cc2": ""}
  },
  "Planta 3": {
    "Zona 1 - Empaque / WIP": {"nombre": "Daniel Ledezma", "correo": "Dledezma@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 2 - Prensas": {"nombre": "Daniel Ledezma", "correo": "Dledezma@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 3 - Escritorios / Tool Room": {"nombre": "Daniel Ledezma", "correo": "Dledezma@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 4 - Huitong": {"nombre": "Daniel Ledezma", "correo": "Dledezma@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 5 - Hornos": {"nombre": "Daniel Ledezma", "correo": "Dledezma@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 6 - Material FC": {"nombre": "Daniel Ledezma", "correo": "Dledezma@daimayus.com", "cc1": "", "cc2": ""}
  },
  "Planta 4": {
    "Zona 1 - Almacén zona 2": {"nombre": "Fabián Ramos", "correo": "FRamos@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 2 - Almacén zona 1": {"nombre": "Fabián Ramos", "correo": "FRamos@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 3 - GM Headliner": {"nombre": "Jorge Morales", "correo": "JMorales@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 4 - Termoformado": {"nombre": "Jorge Morales", "correo": "JMorales@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 5 - DQMC": {"nombre": "Eduardo Morales", "correo": "EMRodriguez@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 6 - Recibo / Embarques": {"nombre": "Fabián Ramos", "correo": "FRamos@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 7 - Corte y Laminado": {"nombre": "Ariel de León", "correo": "AdeLeon@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 8 - Laboratorio": {"nombre": "Misael Hernández", "correo": "MHernandez@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 9 - Everest": {"nombre": "Ariel de León", "correo": "AdeLeon@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 10 - Moldeo": {"nombre": "Nicolás Aguilar", "correo": "NAguilar@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 11 - Rivian": {"nombre": "Nestor García", "correo": "NGarcia@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 12 - Oficinas / Comedor": {"nombre": "Alejandro López", "correo": "ALLopez@daimayus.com", "cc1": "", "cc2": ""}
  },
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
  },
  "Planta Parras": {
    "Zona 1 - Costura 1": {"nombre": "Natali Puente", "correo": "Apuente@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 2 - Costura 2": {"nombre": "Mauricio Barrera", "correo": "MSalazar@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 3 - Corte": {"nombre": "Jonathan Moreno", "correo": "ACovarrubias@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 4 - Laminación": {"nombre": "Jorge Tavitas", "correo": "jtavitas@daimayus.com", "cc1": "", "cc2": ""},
    "Zona 5 - Foam": {"nombre": "Luis Veloz", "correo": "LVeloz@daimayus.com", "cc1": "", "cc2": ""}
  }
};
