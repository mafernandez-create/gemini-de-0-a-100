// =====================================================================
//  CONTENIDO DEL CURSO «GEMINI DE 0 A 100»
//  Para editar un día, cambia el texto aquí. No hace falta tocar index.html.
//  En los textos puedes usar HTML sencillo: <b>, <i>, <br>, <kbd>.
// =====================================================================

const CURSO = {
  alumno: "Néstor",
  firma: "Tu compañero de mesa",
  dedicatoria:
    "Preparado con cariño por tu compañero de mesa. Para Néstor, mi gran colaborador " +
    "en Construdata21 y Alimarket: que la IA te quite lo aburrido y te deje el café.",
};

const SEMANAS = [
  { n: 1, nombre: "Aprendiz", rango: "0 → 25 %", color: "s1",
    insignia: { emoji: "📬", nombre: "Domador de correos", texto: "Ya no hay correo que se te resista." } },
  { n: 2, nombre: "Oficinista turbo", rango: "25 → 50 %", color: "s2",
    insignia: { emoji: "🏗️", nombre: "Cazador de obras", texto: "Construdata21 y Alimarket ya trabajan para ti." } },
  { n: 3, nombre: "Superpoderes", rango: "50 → 75 %", color: "s3",
    insignia: { emoji: "🧙", nombre: "Mago de los Gems", texto: "Tienes asistentes propios a tus órdenes." } },
  { n: 4, nombre: "Maestro", rango: "75 → 100 %", color: "s4",
    insignia: { emoji: "🕵️", nombre: "Detector de trolas", texto: "A ti la IA no te la cuela." } },
];

// Cada día: titulo, frase (chiste de entrada), historia (2 min), pasos (8 min),
// mision (3 min), checks (2 min). Un paso puede llevar "prompt" para copiar.
const DIAS = [
  // ------------------------------------------------------------ SEMANA 1
  {
    n: 1, semana: 1,
    titulo: "Hola, Gemini",
    frase: "Hoy no vas a aprender nada difícil. Hoy solo vas a decir «hola» a tu nuevo becario, que no cobra y no pide vacaciones.",
    historia:
      "Gemini es como un compañero muy listo y muy rápido que <b>ha leído de todo</b>, pero que no sabe nada de tu trabajo hasta que tú se lo cuentas. " +
      "Tu cuenta es <b>Gemini Pro</b>: tienes la versión buena, con subida de archivos, Gems, Deep Research y Canvas. Hoy solo vamos a encontrar los botones.",
    pasos: [
      { t: "Abre el navegador (Chrome, mejor) en tu escritorio de trabajo y entra en <b>gemini.google.com</b>. Guárdala en marcadores con <kbd>Ctrl</kbd>+<kbd>D</kbd>: la vas a usar todos los días." },
      { t: "Comprueba que has entrado con tu cuenta de Google de pago: arriba a la derecha está tu foto, y junto al logo debería aparecer <b>PRO</b>." },
      { t: "Localiza estos cuatro sitios de la pantalla:<br>• La <b>caja de texto</b> de abajo: ahí se escribe.<br>• El botón <b>+</b> junto a la caja: para subir archivos.<br>• El menú de <b>herramientas</b>: Deep Research, Canvas, imágenes…<br>• El <b>menú lateral</b> (las tres rayitas): tus chats anteriores y los Gems." },
      { t: "Tu primer mensaje. Cópialo con el botón, pégalo en Gemini con <kbd>Ctrl</kbd>+<kbd>V</kbd> y pulsa Enter:",
        prompt: "Hola, Gemini. Me llamo Néstor y trabajo en una oficina comercial: correos, hojas de Excel, informes y búsqueda de obras y empresas en bases de datos como Construdata21 y Alimarket. Explícame en 5 puntos cortos, sin tecnicismos, en qué me puedes ayudar en un día normal de trabajo." },
      { t: "Ahora contesta a lo que te diga como si fuera una persona. Por ejemplo: «Explícame mejor el punto 3 con un ejemplo». Esto es lo más importante del curso: <b>Gemini es una conversación, no un buscador</b>." },
    ],
    mision: "Pregúntale a Gemini algo que hoy te haya hecho perder 10 minutos (una duda de Excel, cómo escribir un correo…). Solo para ver qué contesta.",
    checks: ["He guardado Gemini en marcadores", "He visto que pone PRO", "He localizado el botón + y las herramientas", "He tenido mi primera conversación"],
  },
  {
    n: 2, semana: 1,
    titulo: "La receta del cocido (pedir bien)",
    frase: "Si le pides «hazme un correo», te hace un correo. Si le pides el correo bien, te hace EL correo.",
    historia:
      "La calidad de la respuesta depende de lo bien que pidas. Hay una receta con cuatro ingredientes, que llamaremos la <b>receta del cocido</b>:<br>" +
      "🥕 <b>Rol</b>: quién quieres que sea («actúa como un administrativo con experiencia»).<br>" +
      "🍖 <b>Tarea</b>: qué tiene que hacer («redacta», «resume», «ordena»).<br>" +
      "🧄 <b>Contexto</b>: lo que él no sabe y tú sí (para quién es, qué pasó antes).<br>" +
      "🥘 <b>Formato</b>: cómo lo quieres (tabla, 5 puntos, máximo 10 líneas, tono formal).",
    pasos: [
      { t: "Prueba primero la versión «sin receta». Pégala y mira el resultado:",
        prompt: "Escribe un correo para pedir un presupuesto." },
      { t: "Ahora, en un <b>chat nuevo</b>, la versión con los cuatro ingredientes:",
        prompt: "Actúa como un administrativo de oficina con experiencia y buen trato. Redacta un correo para pedir presupuesto a un proveedor de material de oficina. Contexto: necesitamos 20 sillas de escritorio y 10 mesas antes de final de mes, somos clientes desde hace años y nos han atendido bien. Formato: tono cordial pero profesional, máximo 10 líneas, con un asunto claro al principio." },
      { t: "Compara las dos respuestas. ¿Ves la diferencia? La segunda casi se puede enviar tal cual." },
      { t: "Truco extra: <b>no empieces de cero si no te gusta</b>. Pídele cambios en el mismo chat:",
        prompt: "Hazlo más corto y quita la frase del final, que suena muy pelota." },
    ],
    mision: "Escribe tú (sin copiar) un mensaje con los cuatro ingredientes para algo de tu trabajo de hoy.",
    checks: ["Me sé los 4 ingredientes: Rol, Tarea, Contexto, Formato", "He comparado la versión con y sin receta", "He pedido un cambio en el mismo chat"],
  },
  {
    n: 3, semana: 1,
    titulo: "Correos en modo turbo",
    frase: "Hoy aprenderás a contestar a ese correo que llevas tres días mirando de reojo.",
    historia:
      "Los correos son el mejor sitio para empezar a ahorrar tiempo. Gemini sirve para tres cosas: <b>escribir</b> desde unas notas, <b>responder</b> a lo que te llega y <b>cambiar el tono</b> (de «enfadado» a «profesional», por ejemplo).",
    pasos: [
      { t: "<b>De notas a correo.</b> Escribe las ideas como te salgan, sin cuidarlas:",
        prompt: "Convierte estas notas en un correo profesional y cordial, con asunto:\n- reunión del jueves se pasa al viernes a las 10\n- misma sala\n- que traigan los datos del trimestre\n- si alguien no puede que avise hoy" },
      { t: "<b>Responder a un correo.</b> Copia el texto de un correo que hayas recibido (sin datos delicados) y pégalo así:",
        prompt: "Te pego un correo que he recibido. Escribe una respuesta amable y breve diciendo que lo reviso y contesto antes del viernes. Correo:\n\n[PEGA AQUÍ EL CORREO]" },
      { t: "<b>Bajar el tono.</b> Para cuando has escrito algo en caliente:",
        prompt: "Reescribe este mensaje para que suene firme pero educado, sin perder lo importante:\n\n«Es la tercera vez que os pido la factura y sigue sin llegar. No sé qué más tengo que hacer.»" },
      { t: "Pídele <b>dos o tres versiones</b> y quédate con la que más te guste: «Dame 3 versiones: una muy formal, una cercana y una muy corta»." },
    ],
    mision: "El próximo correo de verdad que tengas que escribir hoy, haz el borrador con Gemini. Repásalo siempre antes de enviarlo: tú firmas, tú mandas.",
    checks: ["He convertido notas en correo", "He contestado a un correo con su ayuda", "He bajado el tono a un mensaje", "He pedido varias versiones"],
  },
  {
    n: 4, semana: 1,
    titulo: "Resúmeme esto, que no tengo el día",
    frase: "Ese PDF de 40 páginas acaba de convertirse en 5 puntos. De nada.",
    historia:
      "Con el botón <b>+</b> puedes darle a Gemini archivos: PDF, Word, Excel, imágenes… Él los lee en segundos y te dice lo importante. " +
      "<b>Ojo con tu equipo:</b> el archivo tiene que estar en el escritorio de trabajo (el que ves en pantalla), no en un pendrive conectado a la cajita.",
    pasos: [
      { t: "Busca un PDF largo que no sea confidencial: un catálogo, una norma, un informe público, un pliego de una licitación." },
      { t: "Pulsa <b>+</b>, elige <b>Subir archivo</b>, selecciónalo y escribe:",
        prompt: "Resume este documento en 5 puntos clave. Después dime: fechas importantes, cifras importantes y qué tendría que hacer yo como siguiente paso." },
      { t: "Ahora hazle preguntas sobre el documento, como si se lo hubiera leído un compañero:",
        prompt: "¿En qué página o apartado habla de los plazos? Cítame la frase exacta." },
      { t: "Pedir la <b>frase exacta</b> es un truco buenísimo: así compruebas que no se lo está inventando." },
    ],
    mision: "Resume con Gemini un documento real que tengas pendiente de leer.",
    checks: ["He subido un archivo con el botón +", "He pedido un resumen con siguiente paso", "He pedido una cita exacta para comprobar"],
  },
  {
    n: 5, semana: 1,
    titulo: "Reto: el correo imposible",
    frase: "Viernes de reto. Si lo superas, primera insignia. Si no, también, que esto no es el carné de conducir.",
    historia:
      "Repaso de la semana: <b>conversación</b> (día 1), <b>receta del cocido</b> (día 2), <b>correos</b> (día 3) y <b>archivos</b> (día 4). Hoy lo juntamos todo en un caso inventado.",
    pasos: [
      { t: "El caso: un cliente (inventado) está muy enfadado porque un pedido llega con dos semanas de retraso. Tú no tienes la culpa, pero te toca contestar. Pégale el correo del cliente:",
        prompt: "Actúa como un responsable de atención al cliente con mucha mano izquierda. Tengo que responder a este cliente enfadado. Contexto: el retraso es real, se debe a un problema de transporte, el pedido saldrá el lunes y no podemos ofrecer descuentos. Formato: empatía al principio, explicación breve, solución clara, máximo 12 líneas.\n\nCorreo del cliente:\n«Llevo dos semanas esperando el pedido y nadie me dice nada. Es la última vez que trabajo con ustedes si esto no se soluciona YA.»" },
      { t: "Mejóralo con dos peticiones más en el mismo chat. Por ejemplo: «Quita la palabra \"lamentablemente\"» y «Añade que le llamaré el lunes para confirmarlo»." },
      { t: "Último paso: pídele que haga de cliente y te diga qué le parece tu respuesta:",
        prompt: "Ahora haz de cliente enfadado y dime con sinceridad si esta respuesta te calma o te enfada más, y por qué." },
    ],
    mision: "Guarda la versión final del correo en un documento: será la primera de tu colección de «correos que funcionan».",
    checks: ["He usado la receta del cocido", "He mejorado el correo en el mismo chat", "He puesto a Gemini a hacer de cliente", "¡Semana 1 terminada!"],
  },

  // ------------------------------------------------------------ SEMANA 2
  {
    n: 6, semana: 2,
    titulo: "El susurrador de Excel",
    frase: "BUSCARV, BUSCARX, SI.ERROR… a partir de hoy, que se acuerde Gemini.",
    historia:
      "No hace falta saberse las fórmulas de Excel: basta con <b>explicar lo que quieres en castellano</b>. Gemini te da la fórmula y te explica cómo funciona. También puede limpiar y ordenar datos que pegues.",
    pasos: [
      { t: "<b>Pedir una fórmula.</b> Di qué hay en cada columna y qué quieres conseguir:",
        prompt: "Tengo un Excel en español. En la columna A hay nombres de empresas, en la B la provincia y en la C el importe. Quiero, en la celda F2, la suma de importes solo de las empresas de Málaga. Dame la fórmula y explícame en una frase cómo funciona." },
      { t: "<b>Entender una fórmula</b> que te has encontrado y nadie sabe quién hizo:",
        prompt: "Explícame con palabras sencillas qué hace esta fórmula de Excel: =SI.ERROR(BUSCARV(A2;Hoja2!A:D;4;FALSO);\"No encontrado\")" },
      { t: "<b>Limpiar datos.</b> Copia unas filas de un Excel (sin datos delicados) y pídele:",
        prompt: "Te pego unas filas de un Excel. Pon los nombres de empresa con mayúscula inicial, separa la ciudad y la provincia en dos columnas y devuélvemelo como tabla para copiar en Excel:\n\n[PEGA AQUÍ LAS FILAS]" },
      { t: "Truco: si la tabla que te devuelve no se pega bien, pídele «dámela separada por tabuladores» o usa el botón de copiar de la propia tabla." },
    ],
    mision: "Piensa en una tarea de Excel que hagas a mano todas las semanas y pregúntale a Gemini cómo hacerla con una fórmula.",
    checks: ["He pedido una fórmula en castellano", "He entendido una fórmula ajena", "He limpiado datos con su ayuda"],
  },
  {
    n: 7, semana: 2,
    titulo: "Actas, informes y apuntes",
    frase: "Tus apuntes de la reunión, esos que solo entiendes tú (y a veces ni tú), están a punto de parecer un informe de consultora.",
    historia:
      "Gemini es muy bueno ordenando cosas desordenadas. Le das apuntes sueltos y te devuelve un acta, un informe o una lista de tareas con responsables.",
    pasos: [
      { t: "Pega tus apuntes tal cual, aunque estén fatal:",
        prompt: "Convierte estos apuntes de una reunión en un acta con: asistentes, temas tratados, acuerdos y tareas pendientes (en tabla con responsable y fecha). Si falta algún dato, déjalo marcado como [PENDIENTE] en vez de inventarlo.\n\nApuntes:\nreunion lunes, estaban pepe, ana y yo\n- catálogo nuevo: ana lo revisa antes del 15\n- feria de marzo sí vamos, falta stand\n- pepe mira hoteles\n- próxima reunión 2 semanas" },
      { t: "Fíjate en el truco: <b>«si falta algún dato, márcalo como [PENDIENTE]»</b>. Así Gemini no rellena huecos inventando." },
      { t: "Ahora conviértelo en otro formato:",
        prompt: "Con esta acta, escribe un correo corto para enviar a los asistentes con las tareas de cada uno." },
    ],
    mision: "La próxima reunión o llamada que tengas, toma notas rápidas y conviértelas en acta con Gemini.",
    checks: ["He convertido apuntes en acta", "He usado el truco de [PENDIENTE]", "He convertido el acta en correo"],
  },
  {
    n: 8, semana: 2,
    titulo: "Construdata21 con turbo",
    frase: "Las fichas de obra no se leen solas… bueno, desde hoy, casi.",
    historia:
      "Las fichas de Construdata21 traen muchos datos: promotor, fase, presupuesto, plazos, técnicos… Gemini te ayuda a sacar <b>lo que importa para ti</b> y a preparar el siguiente paso en un momento.",
    pasos: [
      { t: "Abre una ficha de obra en Construdata21, selecciona el texto, cópialo y pégalo así:",
        prompt: "Te pego una ficha de obra de Construdata21. Hazme un resumen de 5 líneas con: qué obra es, dónde, en qué fase está, quién es el promotor y quién decide técnicamente (dirección facultativa, constructora). Al final dime qué dato importante falta.\n\n[PEGA AQUÍ LA FICHA]" },
      { t: "<b>Comparar varias obras.</b> Pega tres o cuatro fichas seguidas (en el mismo mensaje) y pide:",
        prompt: "Con estas fichas, hazme una tabla con: obra, municipio, fase, presupuesto, fecha prevista y una columna «prioridad» (alta, media o baja) según lo cerca que esté de empezar. Ordénala de más a menos prioritaria." },
      { t: "<b>Preparar el contacto.</b> Una vez elegida la obra:",
        prompt: "Para la obra más prioritaria, redacta un correo breve de presentación a la constructora para pedir una reunión. Tono profesional y cercano, máximo 8 líneas, sin prometer nada." },
      { t: "⚠️ Gemini solo sabe lo que pone en la ficha. Si te dice algo que no viene en ella, <b>compruébalo</b>." },
    ],
    mision: "Haz con Gemini el resumen y la tabla de prioridades de las obras que tengas esta semana.",
    checks: ["He resumido una ficha de obra", "He comparado varias obras en una tabla", "He preparado un correo de contacto"],
  },
  {
    n: 9, semana: 2,
    titulo: "Alimarket sin perder la mañana",
    frase: "Leer noticias está bien. Que te las lean y te digan qué hacer con ellas, mejor.",
    historia:
      "Alimarket da mucha información sobre empresas: inversiones, ampliaciones, nuevas fábricas, cambios de directivos… El truco es convertir cada noticia en una <b>oportunidad concreta</b>: qué empresa, qué pasa, a quién llamar.",
    pasos: [
      { t: "Copia el texto de una noticia de Alimarket y pégalo así:",
        prompt: "Te pego una noticia de Alimarket. Dime en pocas líneas:\n1. Qué empresas aparecen y qué hace cada una.\n2. Qué va a pasar (obra, ampliación, inversión) y cuándo.\n3. Si puede ser una oportunidad para una empresa que fabrica y vende materiales para obras e instalaciones, y por qué.\n4. Qué haría yo como siguiente paso.\n\n[PEGA AQUÍ LA NOTICIA]" },
      { t: "<b>El resumen semanal.</b> Pega varias noticias de la semana juntas:",
        prompt: "Con estas noticias, hazme un resumen semanal en tabla: empresa, provincia, qué pasa, oportunidad (sí/no/quizá) y siguiente paso. Debajo, en 3 líneas, lo más importante de la semana." },
      { t: "Ese resumen semanal es oro para enviárselo al jefe. Pídele: «Conviértelo en un correo breve para mi responsable»." },
    ],
    mision: "Escoge las 3 noticias más interesantes de la semana y saca tu primer «resumen semanal Alimarket».",
    checks: ["He convertido una noticia en oportunidad", "He hecho un resumen semanal en tabla", "Lo he convertido en correo"],
  },
  {
    n: 10, semana: 2,
    titulo: "Traductor, corrector y reto semanal",
    frase: "Hoy hablas portugués, inglés y francés. Bueno, Gemini. Pero tú firmas.",
    historia:
      "Gemini traduce muy bien, sobre todo si le dices <b>para quién</b> es la traducción. También corrige faltas y mejora textos sin cambiar lo que quieres decir.",
    pasos: [
      { t: "<b>Traducir con contexto:</b>",
        prompt: "Traduce este correo al portugués de Portugal, con tono profesional, para un cliente con el que tenemos buena relación. Que suene natural, no traducido:\n\n[PEGA TU TEXTO]" },
      { t: "<b>Entender algo que te llega en otro idioma:</b>",
        prompt: "Explícame en castellano qué me dice este correo y qué me piden exactamente. Después, redacta una respuesta en su idioma:\n\n[PEGA EL CORREO]" },
      { t: "<b>Corregir sin reescribir:</b>",
        prompt: "Corrige las faltas de ortografía y puntuación de este texto, pero no cambies el estilo ni las palabras. Marca en negrita lo que has cambiado:\n\n[PEGA TU TEXTO]" },
      { t: "🏆 <b>Reto de la semana:</b> elige una obra de Construdata21 o una noticia de Alimarket y haz de principio a fin: resumen → tabla → correo de contacto. Sin mirar los días anteriores." },
    ],
    mision: "Completa el reto de la semana y quédate con el correo final como plantilla.",
    checks: ["He traducido con contexto", "He corregido un texto sin que cambie mi estilo", "He hecho el reto completo: resumen, tabla y correo", "¡Semana 2 terminada!"],
  },

  // ------------------------------------------------------------ SEMANA 3
  {
    n: 11, semana: 3,
    titulo: "Gems: tu propio asistente",
    frase: "Hoy contratas a tu primer asistente. Sin entrevistas, sin nómina y sin que se coma tu yogur de la nevera.",
    historia:
      "Un <b>Gem</b> es un Gemini al que le das instrucciones fijas una sola vez. Así no tienes que repetir cada día «actúa como…, tono…, formato…». Tú lo abres, pegas el texto y él ya sabe lo que tiene que hacer.",
    pasos: [
      { t: "En el menú lateral, busca <b>Gems</b> (o «Explorar Gems») y pulsa <b>Nuevo Gem</b>." },
      { t: "Ponle de nombre <b>«Redactor de Néstor»</b> y en las instrucciones pega esto (luego cámbialo a tu gusto):",
        prompt: "Eres el asistente de redacción de Néstor, que trabaja en una oficina comercial en España.\nCuando te pegue notas o un correo recibido, escribe un correo listo para enviar.\nReglas:\n- Tono profesional y cercano, nada pelota.\n- Máximo 10 líneas salvo que te pida otra cosa.\n- Pon siempre un asunto claro al principio.\n- Si falta un dato importante (fecha, nombre, cantidad), márcalo como [PENDIENTE] en vez de inventarlo.\n- Firma siempre como: Néstor" },
      { t: "Pulsa <b>Guardar</b> y pruébalo pegándole unas notas cualquiera. Ya no tienes que explicar nada más." },
      { t: "Idea para un segundo Gem: <b>«Analista de obras»</b>, con las instrucciones del día 8 para resumir fichas de Construdata21." },
    ],
    mision: "Crea tu Gem «Redactor de Néstor» y úsalo para el próximo correo de verdad.",
    checks: ["He encontrado dónde se crean los Gems", "He creado el Gem «Redactor de Néstor»", "Lo he probado con un caso real"],
  },
  {
    n: 12, semana: 3,
    titulo: "Gemini tiene ojos",
    frase: "¿Una tarjeta de visita arrugada? ¿Una captura de pantalla? ¿Una tabla en un PDF escaneado? Gemini lo lee todo. Menos tu letra, eso no lo lee nadie.",
    historia:
      "Gemini entiende imágenes: fotos de documentos, capturas de pantalla, tablas escaneadas, tarjetas de visita… y saca los datos ordenados para que no tengas que teclearlos.",
    pasos: [
      { t: "<b>Hacer una captura en tu escritorio:</b> pulsa <kbd>Windows</kbd>+<kbd>Mayús</kbd>+<kbd>S</kbd> (o abre la herramienta <b>Recortes</b>), selecciona la zona y luego pega la imagen directamente en Gemini con <kbd>Ctrl</kbd>+<kbd>V</kbd>." },
      { t: "Prueba con la captura de una tabla que no se pueda copiar (de un PDF escaneado o de una web):",
        prompt: "Pasa la tabla de esta imagen a una tabla que pueda copiar y pegar en Excel. Si algún número no se lee bien, márcalo con [?]." },
      { t: "<b>Tarjetas de visita:</b> sube la foto (desde el móvil la puedes mandar por correo al escritorio de trabajo) y pide:",
        prompt: "Saca de esta tarjeta de visita: nombre, cargo, empresa, teléfono, correo y web. Ponlo en una sola línea separada por punto y coma para pegarlo en Excel." },
      { t: "<b>Explícame esta pantalla:</b> cuando un programa te muestre un error raro, haz una captura y pregunta «¿Qué significa este mensaje y qué hago?»." },
    ],
    mision: "Pasa a Excel con Gemini una tabla que hasta hoy habrías copiado a mano.",
    checks: ["Sé hacer capturas y pegarlas en Gemini", "He convertido una imagen en tabla", "He sacado los datos de una tarjeta o documento"],
  },
  {
    n: 13, semana: 3,
    titulo: "Deep Research: el becario investigador",
    frase: "Hoy le encargas un informe a Gemini y te vas a por un café. Literalmente: tarda unos minutos.",
    historia:
      "<b>Deep Research</b> es una herramienta que busca en decenas de páginas web, lo lee todo y te escribe un informe con las fuentes. Es ideal para conocer un sector, una empresa o una zona antes de una reunión.",
    pasos: [
      { t: "En la caja de texto, abre <b>Herramientas</b> y elige <b>Deep Research</b>." },
      { t: "Pídele algo concreto. Por ejemplo:",
        prompt: "Prepárame un informe sobre las principales obras de infraestructura hidráulica y de urbanización previstas en Andalucía para el próximo año: quién las promueve, presupuesto aproximado y estado. Usa fuentes oficiales y prensa reciente, y cita las fuentes." },
      { t: "Gemini te enseña primero un <b>plan de investigación</b>. Puedes cambiarlo («céntrate solo en Málaga y Granada») o darle a <b>Iniciar</b>." },
      { t: "Cuando termine, mira las <b>fuentes</b> del final. Abre dos o tres y comprueba que dicen lo que dice el informe. Lo veremos más a fondo el día 17." },
      { t: "Puedes pedirle después: «Hazme un resumen de una página» o «Conviértelo en una tabla de empresas»." },
    ],
    mision: "Lanza un Deep Research sobre una empresa o un sector que te interese de verdad para tu trabajo.",
    checks: ["He encontrado Deep Research en herramientas", "He revisado y lanzado un plan de investigación", "He comprobado al menos dos fuentes"],
  },
  {
    n: 14, semana: 3,
    titulo: "Canvas: escribir a cuatro manos",
    frase: "Hoy Gemini y tú escribís juntos. Tú decides; él teclea.",
    historia:
      "<b>Canvas</b> abre el documento a un lado de la pantalla. Puedes editarlo tú directamente o seleccionar un trozo y pedirle a Gemini que lo cambie. Es ideal para documentos más largos que un correo: procedimientos, presentaciones de empresa, informes…",
    pasos: [
      { t: "En <b>Herramientas</b>, elige <b>Canvas</b> y escribe:",
        prompt: "Crea un documento de una página titulado «Cómo damos de alta a un cliente nuevo», con los pasos numerados, responsables y documentos necesarios. Inventa un proceso sencillo que yo luego adaptaré." },
      { t: "Ahora <b>selecciona con el ratón</b> un párrafo del documento. Aparecerá una opción para pedir cambios solo en ese trozo: prueba «hazlo más corto»." },
      { t: "Prueba también las opciones de longitud y tono que salen en la esquina del documento." },
      { t: "Cuando esté listo, búscale el botón de <b>compartir o exportar</b>: puedes llevártelo a Google Docs o copiarlo a Word." },
    ],
    mision: "Usa Canvas para escribir un procedimiento o una guía que en tu oficina «solo sabe una persona».",
    checks: ["He abierto Canvas", "He cambiado solo un trozo seleccionado", "He exportado o copiado el documento"],
  },
  {
    n: 15, semana: 3,
    titulo: "Gemini conectado a tus cosas",
    frase: "Hoy Gemini sale de su caja y se asoma a tu correo y a tus archivos. Con tu permiso, que es muy educado.",
    historia:
      "Con Gemini Pro puedes conectar las aplicaciones de Google de tu cuenta (Gmail, Drive, Calendar…) para que busque en ellas. " +
      "<b>Solo funciona con la cuenta de Google con la que entras a Gemini.</b> Si tu correo de trabajo no es esa cuenta, sáltate la parte de Gmail y quédate con la de subir archivos de Drive.",
    pasos: [
      { t: "Revisa en <b>Ajustes</b> → <b>Aplicaciones</b> (o «Extensiones», según la versión) qué está activado. Activa solo lo que vayas a usar." },
      { t: "En el chat, escribe <b>@</b> y verás las aplicaciones conectadas. Por ejemplo:",
        prompt: "@Gmail busca los correos de la última semana que hablen de presupuestos y hazme una lista: quién, qué pide y si está contestado." },
      { t: "Con Drive:",
        prompt: "@Google Drive busca el documento más reciente que tenga «tarifa» en el título y resúmemelo en 5 puntos." },
      { t: "Con el botón <b>+</b> también puedes elegir un archivo <b>desde Drive</b> en vez de subirlo desde el ordenador." },
    ],
    mision: "Decide qué aplicaciones te compensa conectar (y cuáles no) y haz una búsqueda útil con @.",
    checks: ["He revisado qué aplicaciones están conectadas", "He usado @ en un mensaje", "He abierto un archivo desde Drive", "¡Semana 3 terminada!"],
  },

  // ------------------------------------------------------------ SEMANA 4
  {
    n: 16, semana: 4,
    titulo: "Tu libro de recetas",
    frase: "Los grandes cocineros tienen su libro de recetas. Tú vas a tener el tuyo, pero de mensajes.",
    historia:
      "Después de tres semanas ya tienes mensajes que te funcionan muy bien. Hoy los guardas en un solo sitio para no tener que inventarlos otra vez. Y aprendes un truco: <b>pedirle a Gemini que mejore tus propios mensajes</b>.",
    pasos: [
      { t: "Crea un documento llamado <b>«Mis recetas Gemini»</b> y copia ahí tus 5 mensajes favoritos del curso (correos, fichas de obra, Alimarket, Excel…)." },
      { t: "Ahora el truco del día: que Gemini mejore tu receta.",
        prompt: "Quiero mejorar este mensaje que uso a menudo con Gemini. Hazme preguntas para entender qué busco y luego dame una versión mejorada:\n\n[PEGA TU MENSAJE]" },
      { t: "Si una receta la usas todos los días, conviértela en un <b>Gem</b> (día 11)." },
    ],
    mision: "Deja tu libro de recetas con al menos 5 mensajes y mejora uno de ellos con Gemini.",
    checks: ["He creado «Mis recetas Gemini»", "Tiene al menos 5 recetas", "He mejorado una receta con Gemini"],
  },
  {
    n: 17, semana: 4,
    titulo: "Detector de trolas",
    frase: "Gemini es listísimo, pero a veces se inventa cosas con una seguridad que ya quisiera un vendedor de coches.",
    historia:
      "Las IA a veces <b>se inventan datos</b>: una cifra, una fecha, una ley, una empresa. No lo hacen con mala intención; rellenan huecos. Tu trabajo es saber cuándo desconfiar: <b>siempre que haya números, nombres, fechas o normas</b>.",
    pasos: [
      { t: "Debajo de las respuestas hay un botón para <b>comprobar la respuesta</b> (suele ser una «G» o aparece en el menú de los tres puntos). Busca en Google lo que ha dicho y te marca en verde lo que encuentra confirmado y en otro color lo dudoso. Pruébalo." },
      { t: "Pregúntale directamente por sus dudas:",
        prompt: "De todo lo que me acabas de decir, ¿de qué datos estás menos seguro? Sepáralos de los que estás seguro." },
      { t: "Pide <b>fuentes</b> y ábrelas: «¿De dónde sacas esa cifra? Dame el enlace»." },
      { t: "Regla de oro de la oficina: <b>si un dato va a un cliente o a tu jefe, lo compruebas tú.</b>" },
    ],
    mision: "Pídele a Gemini un dato concreto de tu sector (una cifra, una norma) y compruébalo con el botón de verificar y con una fuente.",
    checks: ["He usado el botón de comprobar respuesta", "Le he preguntado de qué está menos seguro", "He comprobado una fuente yo mismo"],
  },
  {
    n: 18, semana: 4,
    titulo: "El semáforo de la privacidad",
    frase: "Lo que pegas en Gemini no se queda en tu mesa. Hoy aprendemos qué se pega y qué no.",
    historia:
      "Tu cuenta de Gemini es personal, no de la empresa. Por eso hay que tener claro qué se puede pegar. Usa este <b>semáforo</b>:<br>" +
      "🟢 <b>Verde:</b> información pública (noticias, fichas de obras publicadas, normas, catálogos), textos tuyos sin datos personales.<br>" +
      "🟡 <b>Ámbar:</b> correos de clientes o información interna. Quita antes nombres, teléfonos, importes y todo lo que identifique.<br>" +
      "🔴 <b>Rojo:</b> contraseñas, datos bancarios, DNI, datos de salud, precios y condiciones internas, contratos. <b>Nunca.</b>",
    pasos: [
      { t: "Ve a <b>Ajustes</b> → <b>Actividad</b> (o «Actividad en las aplicaciones de Gemini») y mira qué está activado. Ahí decides si tus chats se guardan y durante cuánto tiempo." },
      { t: "Busca la opción de <b>chat temporal</b>: es una conversación que no se guarda en tu historial. Úsala para las cosas en ámbar." },
      { t: "Practica el «disfraz» de datos:",
        prompt: "Quiero pegarte un correo, pero antes quiero quitarle los datos personales. Te lo pego y tú me lo devuelves cambiando nombres de personas, empresas, teléfonos, correos e importes por [PERSONA 1], [EMPRESA 1], [TELÉFONO], etc.\n\n[PEGA EL CORREO]" },
      { t: "Y lo más importante: si en tu empresa hay normas sobre el uso de IA, <b>esas mandan</b>. Ante la duda, pregunta antes." },
    ],
    mision: "Revisa tus ajustes de actividad y decide cómo los quieres. Repasa tus recetas: ¿alguna te pide pegar algo en rojo?",
    checks: ["Me sé el semáforo verde, ámbar y rojo", "He revisado mis ajustes de actividad", "Sé abrir un chat temporal"],
  },
  {
    n: 19, semana: 4,
    titulo: "Un día completo con Gemini",
    frase: "Ensayo general. Hoy haces un día de trabajo entero con Gemini de copiloto. Si sale bien, mañana te gradúas.",
    historia:
      "Hoy no hay nada nuevo: hoy se usa todo junto. Sigue este guion durante tu jornada (o simúlalo en 15 minutos con ejemplos inventados).",
    pasos: [
      { t: "☕ <b>9:00, correos:</b> los dos correos más pesados del día, con tu Gem «Redactor de Néstor»." },
      { t: "🏗️ <b>10:00, obras:</b> tres fichas de Construdata21, resumen y tabla de prioridades (día 8)." },
      { t: "📰 <b>11:00, noticias:</b> las noticias de Alimarket del día, convertidas en oportunidades (día 9)." },
      { t: "📊 <b>12:00, Excel:</b> una fórmula o una limpieza de datos que tengas pendiente (día 6)." },
      { t: "📝 <b>Por la tarde, cierre:</b> pídele a Gemini el resumen de tu día para tu responsable:",
        prompt: "Con todo lo que hemos hecho hoy en este chat, escribe un resumen breve de mi jornada para mi responsable: qué he avanzado, qué queda pendiente y qué necesito de él. Máximo 8 líneas." },
    ],
    mision: "Apunta cuánto tiempo crees que te ha ahorrado Gemini hoy. Ese número es tu argumento para seguir usándolo.",
    checks: ["He usado mi Gem", "He trabajado obras o noticias", "He usado Gemini con Excel", "He hecho el resumen del día"],
  },
  {
    n: 20, semana: 4,
    titulo: "Examen final y graduación",
    frase: "Último día. Diez preguntas y a por el diploma. Tranquilo: se puede repetir las veces que haga falta, como el café.",
    historia:
      "Has recorrido todo el camino: de no aclararte con el programa a tener asistentes propios, informes con fuentes y un libro de recetas. Hoy, el examen. <b>Con 8 aciertos o más</b> se desbloquea el diploma.",
    pasos: [],
    examen: true,
    mision: "Imprime el diploma y ponlo en la mesa. Que lo vea tu compañero.",
    checks: [],
  },
];

const EXAMEN = [
  { p: "¿Cuáles son los 4 ingredientes de la «receta del cocido»?",
    o: ["Rol, Tarea, Contexto y Formato", "Hola, Por favor, Gracias y Adiós", "Título, Fecha, Firma y Sello"], c: 0 },
  { p: "Gemini te da una respuesta que no te gusta. ¿Qué es lo mejor?",
    o: ["Cerrar y abrir otro chat", "Pedirle cambios en el mismo chat", "Escribir lo mismo en mayúsculas"], c: 1 },
  { p: "¿Para qué sirve el botón «+» junto a la caja de texto?",
    o: ["Para subir archivos e imágenes", "Para hacer la letra más grande", "Para sumar en Excel"], c: 0 },
  { p: "¿Qué es un Gem?",
    o: ["Un tipo de archivo", "Un Gemini con instrucciones fijas que tú creas", "Un premio por usar mucho Gemini"], c: 1 },
  { p: "Quieres un informe sobre un sector con fuentes de internet. ¿Qué herramienta usas?",
    o: ["Canvas", "Deep Research", "Chat temporal"], c: 1 },
  { p: "En un acta, falta la fecha de una tarea. ¿Qué le pides a Gemini?",
    o: ["Que se la invente", "Que la marque como [PENDIENTE]", "Que borre la tarea"], c: 1 },
  { p: "¿Cuándo hay que comprobar especialmente lo que dice Gemini?",
    o: ["Nunca, siempre acierta", "Cuando hay cifras, fechas, nombres o normas", "Solo los lunes"], c: 1 },
  { p: "Según el semáforo, una contraseña o un DNI son…",
    o: ["Verde", "Ámbar", "Rojo: nunca se pegan"], c: 2 },
  { p: "¿Qué haces con una noticia de Alimarket?",
    o: ["La conviertes en oportunidad y siguiente paso", "La imprimes y la archivas", "Se la mandas tal cual a todo el mundo"], c: 0 },
  { p: "Gemini te prepara un correo para un cliente. Antes de enviarlo…",
    o: ["Lo envío sin leer, que para eso está", "Lo repaso yo: yo firmo, yo mando", "Le pido a Gemini que lo envíe por mí"], c: 1 },
];
