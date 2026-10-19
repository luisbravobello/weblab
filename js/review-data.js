export const review = {
  "blocks": {
    "B1": "Fundamentos de la web",
    "B2": "HTML semántico y SEO",
    "B3": "CSS",
    "B4": "JavaScript",
    "B5": "fetch y APIs",
    "B6": "Diseño y UI"
  },
  "questions": [
    {
      "b": "B1",
      "q": "¿Cuál es la función principal del sistema DNS?",
      "o": [
        "Cifrar los datos que viajan entre el cliente y el servidor.",
        "Guardar las páginas ya visitadas para cargarlas más rápido.",
        "Traducir un nombre de dominio a su dirección IP.",
        "Repartir la carga de visitas entre varios servidores."
      ],
      "c": 2,
      "e": "DNS es la \"agenda\" de internet: convierte mi-sitio.com en la IP del servidor. Cifrar es tarea de HTTPS; guardar copias es la caché; repartir carga es balanceo. Son funciones reales, pero de otros componentes."
    },
    {
      "b": "B1",
      "q": "El navegador recibe un código 404. ¿Qué ocurrió?",
      "o": [
        "La petición llegó, pero ese recurso no existe.",
        "El servidor falló internamente al procesar la solicitud.",
        "La página cambió de dirección de forma permanente.",
        "El cliente perdió la conexión con la red de datos."
      ],
      "c": 0,
      "e": "404 = Not Found: la petición sí llegó, pero no hay nada en esa ruta. Un fallo interno del servidor sería 500; un cambio permanente, 301; y sin conexión no habría respuesta alguna del servidor."
    },
    {
      "b": "B1",
      "q": "¿Qué describe correctamente la relación cliente-servidor?",
      "o": [
        "Dos servidores que se sincronizan entre sí de forma continua.",
        "El servidor pide los datos y el cliente se los entrega.",
        "El navegador almacena y edita los archivos del sitio web.",
        "El cliente pide un recurso y el servidor responde."
      ],
      "c": 3,
      "e": "El cliente (el navegador) inicia pidiendo; el servidor responde. La opción invertida cambia los papeles; las otras describen sincronización o edición local, que no es la relación petición-respuesta."
    },
    {
      "b": "B2",
      "q": "¿Por qué conviene usar etiquetas semánticas y no solo <div>?",
      "o": [
        "Porque hacen que la página cargue siempre mucho más rápido.",
        "Porque aplican por defecto estilos visuales más atractivos.",
        "Porque dan significado para buscadores y lectores.",
        "Porque reducen el número de líneas de código escrito."
      ],
      "c": 2,
      "e": "La semántica comunica el ROL de cada zona a Google y a los lectores de pantalla. No cambian la velocidad, no traen estilos \"bonitos\" ni reducen código: su valor es el significado que aportan."
    },
    {
      "b": "B2",
      "q": "Una página tiene un título principal y dos apartados. ¿Qué jerarquía comunica mejor su estructura?",
      "o": [
        "h1 para el tema principal y h2 para cada apartado.",
        "Tres h1 porque el color diferencia las secciones.",
        "Usar solo div: los encabezados no tienen significado.",
        "No usar títulos para evitar que Google los lea."
      ],
      "c": 0,
      "e": "Para este ejercicio usamos un h1 principal y h2 para sus apartados. El nivel comunica la estructura; CSS decide el tamaño. Varios h1 no impiden que el navegador los muestre ni equivalen por sí solos a una penalización automática de SEO."
    },
    {
      "b": "B2",
      "q": "¿Qué función cumple el atributo alt de una imagen?",
      "o": [
        "Define el tamaño con que se mostrará la imagen.",
        "Describe la imagen para accesibilidad y buscadores.",
        "Establece la ruta del archivo que debe cargarse.",
        "Indica el formato de compresión del archivo gráfico."
      ],
      "c": 1,
      "e": "alt es el texto alternativo: lo lee quien no puede ver la imagen y lo usa Google para entenderla. El tamaño se controla con CSS; la ruta, con src; y el formato es parte del propio archivo."
    },
    {
      "b": "B3",
      "q": "¿Para qué sirve box-sizing: border-box?",
      "o": [
        "Para que padding y borde no agranden la caja.",
        "Para centrar la caja de manera automática dentro de su contenedor.",
        "Para dibujar un borde visible alrededor de cada elemento.",
        "Para separar el contenido del borde mediante un margen."
      ],
      "c": 0,
      "e": "Con border-box, el padding y el borde quedan DENTRO del ancho declarado, así la caja no \"crece\". Centrar es con margin auto; el borde se dibuja con border; y el margen separa por fuera, no por dentro."
    },
    {
      "b": "B3",
      "q": "Una clase .caja-azul ahora debe ser verde. ¿Qué enseña esto?",
      "o": [
        "Que conviene crear otra clase .caja-verde y duplicar estilos.",
        "Que el color solo se cambia editando el HTML directamente.",
        "Que las variables de CSS no permiten cambiar colores definidos.",
        "Que conviene nombrar las clases por su función."
      ],
      "c": 3,
      "e": "El nombre debió describir la función (.tarjeta), no el color; así no \"miente\" al cambiar. Duplicar clases, editar el HTML a mano o culpar a las variables no resuelven el problema de raíz."
    },
    {
      "b": "B3",
      "q": "¿Qué ventaja ofrece definir una variable en :root?",
      "o": [
        "Acelera la descarga de toda la hoja de estilos.",
        "Permite cambiar un valor en un solo lugar.",
        "Obliga al navegador a recalcular todo el diseño.",
        "Oculta los colores de marca a otros desarrolladores."
      ],
      "c": 1,
      "e": "Una propiedad personalizada centraliza un valor y puede heredarse. Al cambiarla se actualizan los estilos que la usan según la cascada. No oculta la marca ni garantiza descargas más rápidas."
    },
    {
      "b": "B4",
      "q": "¿Qué imprime console.log(typeof \"5\")?",
      "o": [
        "number, porque JavaScript convierte el texto en número.",
        "string, porque está escrito entre comillas.",
        "undefined, porque la variable no fue declarada antes.",
        "NaN, porque \"5\" no es un número válido."
      ],
      "c": 1,
      "e": "Lo que va entre comillas es texto (string), aunque parezca número. No hay conversión automática aquí; sí tiene valor, de modo que no es undefined; y NaN aparece en operaciones numéricas fallidas."
    },
    {
      "b": "B4",
      "q": "¿Cuál es la diferencia entre let y const?",
      "o": [
        "let es global y const vive solo dentro de funciones.",
        "const se ejecuta más rápido que let en el navegador.",
        "let permite reasignar el valor y const no.",
        "No hay diferencia: son dos formas de escribir lo mismo."
      ],
      "c": 2,
      "e": "let permite reasignar el enlace y const no. const no congela un objeto: se pueden modificar sus propiedades si el objeto lo permite. Ambas declaraciones tienen alcance de bloque."
    },
    {
      "b": "B4",
      "q": "Para mostrar una lista de productos en la página, ¿qué patrón se usa?",
      "o": [
        "Recorrer el arreglo y pintar cada elemento.",
        "Escribir cada producto a mano dentro del HTML.",
        "Guardar todos los productos en una sola variable de texto.",
        "Crear una función independiente para cada producto del catálogo."
      ],
      "c": 0,
      "e": "El patrón es datos → recorrer (forEach/map) → pintar en el DOM. Escribirlos a mano no escala; una sola variable de texto no es manejable; y una función por producto es innecesaria."
    },
    {
      "b": "B4",
      "q": "¿Qué hace el método addEventListener?",
      "o": [
        "Crea un elemento nuevo dentro del documento HTML.",
        "Cambia el estilo CSS de un elemento seleccionado.",
        "Recorre una lista de elementos del árbol DOM.",
        "Ejecuta una función cuando ocurre un evento."
      ],
      "c": 3,
      "e": "addEventListener \"escucha\" un evento (un clic, etc.) y ejecuta la función asociada. Crear elementos es createElement; el estilo se toca con .style; y recorrer es forEach."
    },
    {
      "b": "B5",
      "q": "¿Qué hace await dentro de una función async?",
      "o": [
        "Repite la petición hasta que el servidor responda bien.",
        "Cancela la petición si tarda demasiado en responder.",
        "Convierte automáticamente la respuesta en formato JSON.",
        "Suspende la continuación de la función hasta que se resuelva la promesa o se lance su rechazo."
      ],
      "c": 3,
      "e": "await espera el resultado de una promesa y suspende esa función async, sin bloquear toda la interfaz. Si la promesa se rechaza, lanza un error que puede capturarse. No reintenta, no cancela ni transforma por sí mismo la respuesta a JSON."
    },
    {
      "b": "B5",
      "q": "Tras un fetch correcto, los productos aparecen como undefined. Causa probable:",
      "o": [
        "La dirección de la API quedó mal escrita en el código.",
        "Los datos están anidados y se lee el nivel equivocado.",
        "El navegador utilizado no reconoce la función fetch.",
        "Falta instalar una librería externa para leer el JSON."
      ],
      "c": 1,
      "e": "Si el fetch fue \"correcto\", la URL funcionó; lo común es que los datos vengan anidados (p. ej. en datos.products) y se acceda al nivel equivocado. fetch es nativo y no requiere librerías."
    },
    {
      "b": "B5",
      "q": "¿Qué es JSON en el contexto de una API?",
      "o": [
        "Un lenguaje de programación para construir servidores.",
        "Una base de datos donde se guarda la información.",
        "Un formato de datos con objetos y listas.",
        "Un protocolo que reemplaza por completo a HTTP."
      ],
      "c": 2,
      "e": "JSON es un formato de intercambio de datos (objetos y listas, como en JavaScript). No es un lenguaje de programación, ni una base de datos, ni un protocolo de transporte como HTTP."
    },
    {
      "b": "B6",
      "q": "¿Qué propone la regla 60-30-10 en diseño?",
      "o": [
        "Dividir la pantalla en tres columnas de igual ancho.",
        "Usar tres tipografías distintas en proporciones fijas.",
        "Repartir el color en neutro, secundario y acento.",
        "Mantener un contraste mínimo entre el texto y el fondo."
      ],
      "c": 2,
      "e": "Es una regla de proporción de COLOR: 60% neutro, 30% secundario, 10% acento. No habla de columnas, ni de tipografías, ni del contraste texto-fondo (eso es accesibilidad)."
    },
    {
      "b": "B6",
      "q": "Un sitio \"se ve apretado y agobiante\". ¿Qué revisa primero?",
      "o": [
        "El espacio en blanco y la escala de espaciado.",
        "La cantidad de imágenes incluidas en la página.",
        "El peso de los archivos que descarga el sitio.",
        "El número de fuentes tipográficas usadas en total."
      ],
      "c": 0,
      "e": "Lo \"apretado\" casi siempre es falta de aire: una escala de espaciado (8 pt) da ritmo. Las imágenes, el peso de los archivos y las fuentes afectan otras cosas, no la sensación de saturación visual."
    },
    {
      "b": "B6",
      "q": "¿Por qué se usa una retícula de 12 columnas?",
      "o": [
        "Porque es el número máximo que admite el navegador.",
        "Porque se divide exacto en 2, 3, 4 y 6.",
        "Porque cada columna mide exactamente cien píxeles.",
        "Porque coincide con el número de secciones del sitio."
      ],
      "c": 1,
      "e": "12 es divisible entre 2, 3, 4 y 6, así que permite mitades, tercios, cuartos y sextos sin decimales. No es un máximo del navegador, ni un ancho fijo, ni se relaciona con las secciones."
    },
    {
      "b": "B6",
      "q": "¿Qué significan las siglas C.R.A.P. en diseño?",
      "o": [
        "Color, Retícula, Armonía y Proporción visual del conjunto.",
        "Contenido, Ritmo, Anchura y Posición fija.",
        "Claridad, Rapidez, Accesibilidad y Precisión del diseño.",
        "Contraste, Repetición, Alineación y Proximidad."
      ],
      "c": 3,
      "e": "C.R.A.P. agrupa Contraste, Repetición, Alineación y Proximidad. Son criterios para organizar y revisar un diseño, no una garantía automática de legibilidad o accesibilidad."
    }
  ],
  "exercises": [
    {
      "b": "B2",
      "t": "Estructura semántica con head para SEO",
      "enun": "Cree la estructura base de la página de un restaurante: un <head> optimizado para SEO y un cuerpo semántico.",
      "req": [
        "lang declarado y charset",
        "title y meta description con sentido",
        "un solo <h1> con el nombre",
        "header, nav, main y footer",
        "una imagen con alt descriptivo"
      ],
      "lng": "HTML",
      "sol": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Sabor Caribeño · Restaurante en Punta Cana</title>\n  <meta name=\"description\"\n        content=\"Cocina dominicana frente al mar en Bávaro.\">\n</head>\n<body>\n  <header>\n    <h1>Sabor Caribeño</h1>\n    <nav> <a href=\"#menu\">Menú</a> </nav>\n  </header>\n  <main>\n    <img src=\"plato.jpg\" alt=\"Camarones al ajillo\">\n  </main>\n  <footer>Bávaro, Punta Cana</footer>\n</body>\n</html>",
      "why": "El head declara metadatos y el body organiza el contenido visible. Un título principal y apartados coherentes ayudan a comprender la estructura. title y description pueden influir en la presentación del resultado de búsqueda, pero Google puede generar otros textos y no garantizan posiciones."
    },
    {
      "b": "B3",
      "t": "Centrar una tarjeta con flexbox",
      "enun": "Centre una tarjeta horizontal y verticalmente en toda la pantalla usando flexbox.",
      "req": [
        "el contenedor ocupa el alto de la ventana",
        "display flex",
        "centrado en los dos ejes"
      ],
      "lng": "CSS",
      "sol": ".pantalla {\n  display: flex;\n  justify-content: center;  /* eje horizontal */\n  align-items: center;      /* eje vertical */\n  min-height: 100vh;        /* alto de la ventana */\n}\n.tarjeta {\n  background: #fff;\n  padding: 32px;\n  border-radius: 12px;\n}",
      "why": "En flex-direction: row, justify-content actúa horizontalmente y align-items verticalmente. Con column cambian los ejes. La altura del contenedor aporta el espacio libre para centrar; en móvil se puede preferir min-height: 100dvh con fallback."
    },
    {
      "b": "B3",
      "t": "Rejilla de tarjetas responsiva",
      "enun": "Monte una rejilla de tarjetas que se reacomode sola según el ancho disponible, sin media queries.",
      "req": [
        "display grid",
        "columnas automáticas con auto-fit",
        "ancho mínimo por tarjeta con minmax",
        "separación con gap"
      ],
      "lng": "CSS",
      "sol": ".galeria {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 220px), 1fr));\n  gap: 16px;\n}",
      "why": "auto-fit crea las columnas que caben. El mínimo min(100%, 220px) permite que una tarjeta también quepa en un contenedor de menos de 220 px. gap separa las pistas; la adaptación depende del ancho disponible, no de detectar un teléfono."
    },
    {
      "b": "B4",
      "t": "Filtrar y transformar una lista",
      "enun": "Dada una lista de productos {nombre, precio}, escriba una función que devuelva los nombres de los que cuesten menos de 500.",
      "req": [
        "recibir el arreglo como parámetro",
        "filter para quedarse con los baratos",
        "map para extraer el nombre",
        "return del resultado"
      ],
      "lng": "JavaScript",
      "sol": "function baratos(productos) {\n  return productos\n    .filter(p => p.precio < 500)   // se queda con los baratos\n    .map(p => p.nombre);           // extrae solo el nombre\n}\n\n// baratos([{nombre:\"A\",precio:400},{nombre:\"B\",precio:600}]) → [\"A\"]",
      "why": "filter decide QUÉ elementos pasan (los de precio < 500) y devuelve un arreglo nuevo; map TRANSFORMA cada uno (de objeto a su nombre). Encadenarlos es el patrón idiomático: primero se filtra, luego se transforma."
    },
    {
      "b": "B4",
      "t": "Mostrar y ocultar con un evento",
      "enun": "Un botón que muestra u oculta un bloque de horario al hacer clic.",
      "req": [
        "agarrar botón y bloque con querySelector",
        "escuchar el clic con addEventListener",
        "alternar una clase con classList.toggle"
      ],
      "lng": "JavaScript",
      "sol": "// en CSS: .oculto { display: none; }\nconst boton = document.querySelector(\"#ver\");\nconst horario = document.querySelector(\"#horario\");\n\nboton.addEventListener(\"click\", function() {\n  horario.classList.toggle(\"oculto\");\n});",
      "why": "Primero se \"agarran\" los elementos; luego addEventListener asocia una función al clic. toggle pone la clase si no está y la quita si está, de modo que un mismo botón sirve para mostrar y ocultar sin un if adicional."
    },
    {
      "b": "B5",
      "t": "Traer un catálogo desde una API",
      "enun": "Traiga productos de https://dummyjson.com/products?limit=6 y píntelos como tarjetas con título y precio.",
      "req": [
        "función async",
        "await en fetch y en .json()",
        "acceder al arreglo dentro de .products",
        "recorrer con forEach y pintar en el DOM"
      ],
      "lng": "JavaScript",
      "sol": "// Se presupone un contenedor con id=\"grid\".\nasync function cargar() {\n  const grid = document.querySelector(\"#grid\");\n  if (!grid) return;\n  grid.textContent = \"Cargando…\";\n  try {\n    const res = await fetch(\"https://dummyjson.com/products?limit=6\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const datos = await res.json();\n    if (!Array.isArray(datos.products)) {\n      throw new Error(\"La respuesta no contiene products\");\n    }\n    grid.replaceChildren();\n    if (!datos.products.length) grid.textContent = \"No hay productos.\";\n    for (const p of datos.products) {\n      const card = document.createElement(\"article\");\n      const titulo = document.createElement(\"h3\");\n      const precio = document.createElement(\"p\");\n      titulo.textContent = p.title;\n      precio.textContent = `$${p.price}`;\n      card.append(titulo, precio);\n      grid.append(card);\n    }\n  } catch (error) {\n    grid.textContent = \"No se pudo cargar el catálogo.\";\n    console.error(error);\n  }\n}\ncargar();",
      "why": "Se esperan la respuesta y la lectura del cuerpo. res.ok distingue un estado HTTP fallido; Array.isArray comprueba la lista; textContent inserta títulos como texto y evita interpretarlos como HTML. El fragmento muestra carga, vacío y error. Se presenta como código de referencia: esta página no ejecuta la petición."
    },
    {
      "b": "B6",
      "t": "Paleta por roles y regla 60-30-10",
      "enun": "Defina en CSS una paleta por roles (neutro, secundario, acento) como variables y aplíquela a una sección respetando el 60-30-10.",
      "req": [
        "variables en :root para los tres roles",
        "fondo neutro (60%)",
        "tarjetas secundarias (30%)",
        "acento solo en el botón (10%)"
      ],
      "lng": "CSS",
      "sol": ":root {\n  --neutro: #f4f0e8;     /* 60% — fondo */\n  --secundario: #dce8e3; /* 30% — tarjetas */\n  --acento: #0f7c74;     /* 10% — solo lo importante */\n}\nsection  { background: var(--neutro); }\n.card    { background: var(--secundario); }\n.btn     { background: var(--acento); color: #fff; }",
      "why": "Las variables nombran funciones visuales para facilitar cambios de identidad. 60–30–10 es una orientación de proporción, no un porcentaje que este CSS mida ni una prueba de contraste. Deben comprobarse legibilidad y estados de los controles."
    }
  ],
  "originalCases": [
    {
      "b": "B2 · B6",
      "t": "Primera web de una cafetería",
      "prob": "Un cliente dueño de una cafetería le pide su primera web de una sola página. Tiene: logo, un texto de bienvenida, fotos de cuatro productos con su precio, el horario y un botón de contacto. Plantee cómo estructuraría y posicionaría ese contenido.",
      "pista": "Piense en qué debe ver el ojo primero, cómo se agrupa lo relacionado y sobre qué \"esqueleto\" se alinea todo.",
      "sol": "Estructura semántica: <header> con logo + nav; <main> con una sección \"hero\" (bienvenida + botón de contacto como acción principal), una sección de productos en rejilla de tarjetas (las cuatro, con foto, nombre y precio), y una sección de horario; <footer> con contacto. Posicionamiento: el hero arriba (lo primero del patrón F/Z) con el título grande y el botón como único acento de color; los productos en una rejilla responsiva (auto-fit/minmax); espaciado generoso con escala de 8 pt para que respire.",
      "why": "El orden sigue la jerarquía: primero quién es y qué acción tomar, luego la oferta, luego el dato práctico. La rejilla da orden y se adapta al móvil; reservar el color de acento para el botón dirige la vista a la conversión (contactar)."
    },
    {
      "b": "B6",
      "t": "Identidad visual: cálida pero profesional",
      "prob": "El mismo cliente quiere que la web \"transmita calidez artesanal\" pero que a la vez \"se vea profesional\". Debe elegir paleta y tipografías y justificar las decisiones.",
      "pista": "Relacione la sensación buscada con la psicología del color y con la fuente según el contexto; recuerde la proporción del color.",
      "sol": "Paleta: una base neutra cálida (cremas/arena) para el 60%, un secundario terroso suave para el 30%, y un acento cálido (terracota o un verde oliva) al 10% para botones y detalles — los tonos cálidos y tierra comunican lo artesanal sin perder sobriedad. Tipografías: un serif de carácter para los títulos (aporta tradición y calidez) + una sans neutra y legible para el cuerpo (Inter, por ejemplo), máximo dos familias. Contraste suficiente entre texto y fondo para legibilidad.",
      "why": "\"Calidez\" y \"profesional\" no se contradicen: la calidez la dan los tonos tierra y el serif; lo profesional, la disciplina del sistema (dos fuentes, 60-30-10, buen contraste, mucho espacio). La clave es que la decisión se justifique por la sensación buscada, no por gusto personal."
    },
    {
      "b": "B4 · B5",
      "t": "El fetch que no muestra nada",
      "prob": "Un estudiante hizo un fetch a una API. La consola no muestra errores, pero la página queda vacía. Diagnostique las causas posibles y cómo las verificaría.",
      "pista": "Si no hay error, el problema no es que \"falle\", sino dónde o cuándo se usan los datos. Revise tres sospechosos.",
      "sol": "Sospechosos: (1) los datos vienen anidados y se está leyendo el nivel equivocado (p. ej. usar la respuesta directa en vez de datos.products) → verificar abriendo la URL de la API en el navegador y mirando la forma del JSON, o con console.log(datos). (2) La función async nunca se llama → confirmar que hay una llamada a la función. (3) Se intenta pintar antes de que los datos lleguen (no se usó await) → revisar que fetch y .json() estén con await. También: el selector del contenedor no coincide con ningún elemento.",
      "why": "\"Sin errores pero vacío\" casi nunca es un fallo de red: es acceder mal a los datos, no ejecutar la función, o no esperar la respuesta. El método profesional es inspeccionar la forma real del JSON antes de asumir, en lugar de adivinar los nombres de los campos."
    },
    {
      "b": "B4 · B5",
      "t": "¿API o datos locales?",
      "prob": "Para el catálogo de la cafetería —cuatro productos que casi nunca cambian— ¿conviene traerlos de una API con fetch o escribirlos como datos en el propio JavaScript? Argumente su decisión.",
      "pista": "No es \"lo más avanzado gana\". Pregúntese con qué frecuencia cambian los datos y qué complejidad agrega cada opción.",
      "sol": "Para cuatro productos estáticos, lo razonable es un arreglo local en el JS (o directamente en el HTML): cero dependencias, carga instantánea, nada que pueda fallar por red. fetch a una API se justifica cuando los datos cambian con frecuencia, son muchos, los administra otra persona, o provienen de un sistema externo (un inventario, un PMS). Una vía intermedia: tener los datos en un archivo JSON propio y leerlo con fetch, para separar datos de código sin montar un backend.",
      "why": "La decisión es de ingeniería, no de moda: se elige la solución más simple que resuelve el problema. Introducir una API para datos que no cambian agrega puntos de fallo y complejidad sin beneficio. Saber cuándo NO usar algo también es dominio del tema."
    },
    {
      "b": "B3 · B6",
      "t": "Rescatar una página \"amateur\"",
      "prob": "Recibe una página que \"funciona, pero se ve amateur\": todo pegado a los bordes, los títulos tienen el mismo tamaño que el texto, y hay cinco colores vivos compitiendo. Elabore un plan de mejora priorizado.",
      "pista": "Hay un marco de cuatro letras que ordena esta clase de revisión; aplíquelo y priorice por impacto.",
      "sol": "Plan por prioridad: (1) Espacio — aplicar una escala de 8 pt: padding generoso, aire entre secciones, un ancho máximo de contenido centrado. (2) Jerarquía (Contraste) — una escala tipográfica: <h1> grande, subtítulos medianos, cuerpo de 16px. (3) Color (60-30-10) — reducir a una base neutra + un secundario + un acento, y reservar el acento para los botones. (4) Repetición y alineación — mismos estilos de botón y tarjeta en todo, y alinear a una retícula. En paralelo, limitar a dos tipografías.",
      "why": "El marco C.R.A.P. (Contraste, Repetición, Alineación, Proximidad) más el espacio en blanco explican casi todo lo \"amateur\". Se prioriza por impacto: el espacio y la jerarquía se notan de inmediato; el color ordenado y la consistencia consolidan la sensación profesional."
    }
  ]
};
