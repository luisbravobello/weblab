// Fifty distinct analysis cases. Code is displayed as text, never executed.
const C=(block,title,scenario,task,code,steps,fixed,check)=>({block,title,scenario,task,code,steps,fixed,check});
export const caseBank=[
// B1 · Fundamentos (7)
C('B1','El dominio no resuelve','El navegador muestra un error de resolución de nombre y no aparece ninguna respuesta HTTP. Un compañero propone cambiar el h1.','¿En qué etapa investigarías y qué evidencia pedirías?',`https://cafeteria.example/menu
// Error: nombre de dominio no resuelto`,['Comprobar que el dominio está bien escrito y si otros dominios resuelven desde ese dispositivo.','Revisar la configuración DNS y los registros del dominio con una consulta de diagnóstico. Todavía no hay un código HTTP que explique el fallo.','Corregir el nombre o la configuración correspondiente; editar el contenido HTML no repara DNS.'],'','Confirmar que el nombre resuelve y luego comprobar la respuesta HTTP. Resolver DNS no demuestra por sí solo que la web funcione.'),
C('B1','La página abre, la imagen devuelve 404','La portada devuelve 200, pero la foto del café no aparece. La pestaña Red muestra 404 solo en la petición de la imagen.','¿Qué comprobarías antes de reiniciar todo el servidor?',`<img src="img/Cafe.jpg" alt="Café recién servido">
// Archivo publicado: img/cafe.jpg`,['Comparar la URL solicitada con la ubicación y el nombre real del archivo, incluidas mayúsculas.','Corregir la ruta o el nombre. Algunos servidores distinguen Cafe.jpg de cafe.jpg aunque el entorno local no lo hiciera.','Volver a publicar el archivo si falta; no confundir la respuesta de la portada con la del recurso.'],`<img src="img/cafe.jpg" alt="Café recién servido">`,'Abrir la URL exacta de la imagen y verificar su estado y representación.'),
C('B1','Un 500 no es una lista vacía','El catálogo queda vacío después de una petición que devuelve 500. El diseño muestra «No hay productos».','¿Qué diferencia debe comunicar la interfaz y a quién corresponde investigar?',`GET /api/productos
HTTP 500`,['500 indica un fallo del servidor al atender esa petición, no un resultado válido con cero productos.','Mostrar un estado de error recuperable y conservar datos anteriores si conviene. Recoger hora, ruta y datos de reproducción sin publicar información sensible.','Revisar los registros del backend con su responsable; cambiar el grid no corrige la causa del 500.'],'','Probar por separado una respuesta 200 con [] y una respuesta 500: los mensajes deben ser diferentes.'),
C('B1','HTTPS con una petición HTTP','La web se sirve por HTTPS, pero el código intenta traer datos de una URL HTTP. El navegador bloquea la petición por contenido mixto.','¿Cómo lo corregirías sin desactivar las protecciones del navegador?',`fetch("http://api.example/productos");`,['Leer el mensaje del navegador para identificar que se bloquea contenido activo HTTP desde una página HTTPS.','Utilizar el endpoint HTTPS del servicio, si existe; si no, cambiar la integración o servirla desde un backend adecuado.','Comprobar también certificado, origen y permisos CORS: HTTPS no resuelve todos los problemas de acceso.'],`fetch("https://api.example/productos");
// Requiere que este endpoint exista y permita el acceso.`,'La petición debe salir por HTTPS y devolver una respuesta utilizable sin advertencias de contenido mixto.'),
C('B1','El enlace cambia al entrar en una subcarpeta','Desde /pages/contacto.html, el enlace a menu.html busca /pages/menu.html; el archivo deseado está en la raíz.','Explica cómo resuelve el navegador la ruta y propón una solución.',`<!-- Documento actual: /pages/contacto.html -->
<a href="menu.html">Menú</a>`,['Una ruta relativa se resuelve desde la URL base del documento, no desde la carpeta que imagina quien escribe el enlace.','Usar ../menu.html para subir un nivel en esta estructura. Una ruta /menu.html parte de la raíz del origen y debe valorarse si se publica bajo un subdirectorio.','Revisar los enlaces desde la página real, no solo desde la portada.'],`<a href="../menu.html">Menú</a>`,'Comprobar la URL final al abrir el enlace y probar la estructura publicada.'),
C('B1','El servidor responde 405','Un formulario usa GET sobre una ruta que el backend documenta como POST. La respuesta es 405.','¿Es un fallo DNS? ¿Qué revisarías en el contrato HTTP?',`<form action="/reservas" method="get">
  <button>Reservar</button>
</form>`,['La respuesta HTTP demuestra que se llegó a un servidor; 405 señala un método no permitido para ese recurso.','Consultar el contrato del endpoint y ajustar método, campos, formato y autenticación que realmente exige.','Cambiar a POST solo si es lo que espera la ruta. El método no sustituye la validación en servidor.'],`<form action="/reservas" method="post">
  <!-- Incluir los campos que exija el servidor. -->
  <button type="submit">Reservar</button>
</form>`,'Verificar el método enviado y que el servidor acepte los campos y devuelva la respuesta esperada.'),
C('B1','En mi computadora sí abre','El alumno comparte file:///C:/proyecto/index.html. Sus compañeros no pueden acceder y un JSON local falla al cargar.','¿Qué diferencia hay entre abrir un archivo y publicar o servir una web?',`file:///C:/proyecto/index.html`,['file apunta a un archivo del dispositivo de quien abre el enlace; no publica contenido para otras personas.','Para desarrollar, servir la carpeta con un servidor HTTP local. Para compartir fuera del equipo, desplegarla en un alojamiento accesible.','localhost también identifica el equipo de cada visitante. Comprobar rutas y políticas del navegador al pasar a HTTP.'],'','Abrir la URL del alojamiento desde otro dispositivo. No asumir que una dirección local será accesible para cualquiera.'),
// B2 · HTML y SEO (8)
C('B2','Títulos usados solo por su tamaño','La página tiene el nombre del negocio y dos apartados, todos escritos como h1 porque se ven grandes.','Reorganiza la jerarquía sin prometer una penalización automática de Google.',`<h1>Cafetería</h1>
<h1>Menú</h1>
<h1>Horario</h1>`,['Identificar el tema principal y la relación entre sus apartados.','Usar un h1 principal y h2 para Menú y Horario en esta página; controlar el aspecto con CSS.','La recomendación organiza el contenido. No afirmar que el navegador oculta los otros h1 ni que su cantidad prueba una penalización SEO.'],`<h1>Cafetería</h1>
<section><h2>Menú</h2></section>
<section><h2>Horario</h2></section>`,'Revisar la lista de encabezados: debe explicar el contenido incluso sin estilos.'),
C('B2','La descripción aparece en el lugar equivocado','El estudiante escribió el nombre del negocio en el title y quiere que aparezca como título visible del contenido. Además cree que description obliga a Google a usar ese texto.','Distingue title, h1 y meta description.',`<head><title>Sabor Caribeño</title></head>
<body><p>Bienvenidos</p></body>`,['title aporta el título del documento, visible en la pestaña y utilizable para resultados de búsqueda.','h1 pertenece al contenido visible. La meta description sugiere un resumen; Google puede generar otro fragmento.','Escribir cada pieza según su propósito, sin garantizar una presentación ni posición de búsqueda.'],`<head>
  <title>Sabor Caribeño · Restaurante en Bávaro</title>
  <meta name="description" content="Consulta nuestro menú y horario en Bávaro.">
</head>
<body><h1>Sabor Caribeño</h1></body>`,'Comparar pestaña, contenido visible y código del head. No usar el cambio inmediato en Google como única prueba.'),
C('B2','El mismo alt para todas las imágenes','Cuatro fotos de productos llevan alt="imagen" y un adorno decorativo tiene una descripción larga.','¿Qué texto alternativo pondrías y de qué depende?',`<img src="capuchino.jpg" alt="imagen">
<img src="onda.svg" alt="Línea ondulada ornamental">`,['Determinar la función de cada imagen en su contexto: informar, actuar o decorar.','Describir la información relevante de un producto si la foto la aporta. Una imagen puramente decorativa puede llevar alt vacío.','Evitar repetir texto vecino innecesario. Si una imagen es el único contenido de un enlace, comunicar el propósito del enlace.'],`<img src="capuchino.jpg" alt="Capuchino con espuma y canela">
<img src="onda.svg" alt="">`,'Leer la página sin ver las imágenes y comprobar que se entiende lo importante sin ruido decorativo.'),
C('B2','El formulario depende del placeholder','Al escribir en el campo desaparece «Correo». El nombre del campo no está asociado mediante una etiqueta.','Corrige la relación entre etiqueta y control.',`<input id="correo" placeholder="Correo">`,['El placeholder no reemplaza una etiqueta persistente asociada.','Añadir label con for igual al id y usar el tipo adecuado; el placeholder puede servir como ejemplo opcional.','Mantener instrucciones y errores comprensibles también tras introducir un valor.'],`<label for="correo">Correo electrónico</label>
<input id="correo" name="correo" type="email"
       autocomplete="email" required>`,'Al pulsar la etiqueta debe enfocarse el control. Probar también navegación por teclado y validación.'),
C('B2','El botón que borra también envía','Dentro de un formulario hay un botón para limpiar una vista. Al pulsarlo se envía el formulario sin querer.','Explica el valor por defecto y cómo evitar el envío accidental.',`<form>
  <button id="limpiar">Limpiar vista</button>
  <button>Enviar</button>
</form>`,['En este contexto un button sin type actúa como submit.','Declarar type="button" para acciones que no deben enviar y type="submit" para la acción de envío.','No depender únicamente de cancelar el evento en un manejador que podría no ejecutarse.'],`<button id="limpiar" type="button">Limpiar vista</button>
<button type="submit">Enviar</button>`,'Probar ambas acciones: limpiar no debe disparar submit; enviar sí.'),
C('B2','Un div que parece enlace','Una tarjeta usa un div con onclick para ir a Contacto. No se puede activar naturalmente con teclado ni abrir en otra pestaña como enlace.','Elige el elemento según su función.',`<div onclick="location.href='contacto.html'">Contacto</div>`,['La acción navega a otra URL: corresponde un enlace con href.','Usar un a y conservar sus comportamientos nativos; CSS puede darle aspecto de tarjeta.','Si la acción fuera abrir un diálogo sin navegar, elegir un button. El aspecto no determina la semántica.'],`<a class="tarjeta-enlace" href="contacto.html">Contacto</a>`,'Probar Tab, Enter, menú contextual y apertura en otra pestaña.'),
C('B2','Todo el contenido vive en div','La web se ve correcta, pero no distingue navegación, contenido principal ni lista de productos.','Propón regiones y una estructura con significado.',`<div>Enlaces del menú</div>
<div>Productos: café, té, jugo</div>`,['Separar navegación y contenido principal con nav y main.','Representar una colección como lista cuando corresponda; usar article para piezas con sentido independiente.','No añadir etiquetas por decorar: cada región debe tener una función y, si hace falta, un encabezado.'],`<nav aria-label="Principal"><a href="#productos">Productos</a></nav>
<main><section id="productos">
  <h1>Nuestros productos</h1>
  <ul><li>Café</li><li>Té</li><li>Jugo</li></ul>
</section></main>`,'Revisar las regiones y la colección con estilos desactivados o con herramientas de accesibilidad.'),
C('B2','La media query no parece actuar en el teléfono','La página tiene reglas para pantallas pequeñas, pero el teléfono muestra una versión encogida de escritorio. Falta una etiqueta en el head.','¿Qué revisarías antes de reescribir todo el CSS?',`<head>
  <meta charset="utf-8">
  <title>Mi catálogo</title>
</head>`,['Comprobar la configuración del viewport y el ancho que usa el navegador móvil.','Añadir la declaración estándar width=device-width e initial-scale=1.','Después revisar anchos fijos y desbordamiento. La etiqueta no convierte por sí sola un diseño rígido en adaptable.'],`<meta name="viewport" content="width=device-width, initial-scale=1">`,'Probar en viewport estrecho y confirmar que el contenido cabe y el texto conserva tamaño legible.'),
// B3 · CSS (9)
C('B3','Una tarjeta de 300 px ocupa 364','Se declaró width:300px, padding:30px y border:2px. El ancho exterior no coincide con lo esperado.','Calcula el ancho con content-box y corrige el modelo.',`.tarjeta { width: 300px; padding: 30px; border: 2px solid; }`,['Con content-box, el ancho declarado es del contenido: 300 + 60 + 4 = 364 px, sin contar márgenes.','Aplicar border-box para incluir padding y borde en los 300 px declarados.','El margen sigue quedando fuera; revisar además que el ancho quepa en el contenedor.'],`*, *::before, *::after { box-sizing: border-box; }
.tarjeta { width: min(100%, 300px); padding: 30px; border: 2px solid; }`,'Inspeccionar el modelo de caja y comprobar los anchos en un contenedor de menos de 300 px.'),
C('B3','Flex cambió de dirección y dejó de centrar','Con flex-direction:column, justify-content no produce el centrado horizontal que el estudiante esperaba.','Explica los ejes y corrige la alineación.',`.pantalla { display: flex; flex-direction: column;
  justify-content: center; min-height: 100vh; }`,['Con column, el eje principal es vertical y el cruzado horizontal.','justify-content reparte en el principal; align-items actúa en el cruzado.','Definir ambos para centrar en los dos ejes y asegurar espacio libre disponible.'],`.pantalla { display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  min-height: 100vh; min-height: 100dvh; }`,'Cambiar entre row y column y explicar qué eje corresponde a cada propiedad.'),
C('B3','El grid desborda un contenedor pequeño','La rejilla funciona a 1200 px, pero dentro de una columna de 190 px una tarjeta exige al menos 220 px.','Adapta el mínimo sin ocultar el problema con overflow:hidden.',`.grid { display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }`,['El mínimo fijo de 220 px puede superar el espacio disponible.','Limitar el mínimo al ancho del contenedor con min(100%,220px).','Revisar imágenes y textos largos dentro de las tarjetas; el grid no soluciona cualquier contenido intrínseco.'],`.grid { display: grid; gap: 16px;
  grid-template-columns: repeat(auto-fit,
    minmax(min(100%, 220px), 1fr)); }`,'Probar 190 px, 390 px y un ancho grande sin desplazamiento horizontal del documento.'),
C('B3','La tarjeta azul ahora debe ser verde','La clase .caja-azul se usa en muchas páginas y la nueva marca requiere otro color.','Propón un nombre y una organización que faciliten el cambio.',`.caja-azul { background: #dce8ff; }`,['Nombrar el componente por su función: tarjeta-producto, no por un color que puede cambiar.','Separar el rol visual de su valor mediante una propiedad personalizada.','Actualizar usos de la clase con cuidado y evitar duplicar una clase por cada color si comparten función.'],`:root { --superficie-producto: #dce8e3; }
.tarjeta-producto { background: var(--superficie-producto); }`,'Cambiar una sola variable y comprobar todos los productos, manteniendo estados y contraste.'),
C('B3','La regla nueva no gana la cascada','Se añade .boton después de #contacto y el fondo sigue rojo. Ambas reglas son normales, del mismo origen y capa.','¿Por qué el orden no basta en este caso?',`#contacto { background: red; }
.boton { background: green; }`,['Bajo esas condiciones, el selector de id tiene mayor especificidad que la clase.','Eliminar la dependencia del id para estilos del componente y usar clases coherentes.','El orden decide entre reglas empatadas después de los criterios anteriores; no recurrir automáticamente a !important.'],`.boton { background: green; }
/* Reservar el id para identificar el elemento, si hace falta. */`,'Inspeccionar la regla ganadora y revisar los estados hover y focus, no solo el fondo inicial.'),
C('B3','Todo está pegado a los bordes','El contenido toca el borde de una tarjeta y las tarjetas se tocan entre sí. El alumno añade espacios al texto.','Distingue padding, margin y gap.',`.tarjeta { border: 1px solid; }
.lista { display: grid; }`,['padding separa contenido y borde dentro de una tarjeta.','gap separa las pistas del grid; margin puede separar la lista de otras regiones.','Usar una escala consistente en lugar de insertar espacios en el contenido.'],`.tarjeta { padding: 24px; border: 1px solid; }
.lista { display: grid; gap: 16px; margin-block: 32px; }`,'Comprobar separación interna, entre tarjetas y entre secciones a dos anchos distintos.'),
C('B3','La foto de 1200 px rompe el móvil','Una imagen conserva su ancho de 1200 px dentro de una tarjeta estrecha.','Corrige el tamaño sin deformar la relación de aspecto.',`img { width: 1200px; height: 600px; }`,['El ancho fijo supera al contenedor.','Permitir que la imagen reduzca su ancho y que su alto siga la proporción.','Si se exige un recorte uniforme, definir una caja y object-fit de manera consciente; no estirar los píxeles sin criterio.'],`img { display: block; max-width: 100%; height: auto; }`,'Probar una foto horizontal y otra vertical, sin deformación ni desbordamiento.'),
C('B3','La variable del botón no existe fuera del hero','--acento se declaró solo en .hero, pero el botón del footer intenta usarla sin fallback.','Explica el alcance por cascada y herencia.',`.hero { --acento: #0f7c74; }
footer button { background: var(--acento); }`,['Las propiedades personalizadas se heredan dentro de su subárbol; el footer no es descendiente de .hero.','Definir el valor compartido en :root y reservar sobrescrituras locales para regiones concretas.','Añadir fallback si se quiere un valor cuando la variable no esté definida.'],`:root { --acento: #0f7c74; }
footer button { background: var(--acento, #145f59); }`,'Inspeccionar la variable calculada tanto en el hero como en el footer.'),
C('B3','El texto largo obliga a crecer a la columna','Dos columnas de 1fr contienen una URL muy larga sin cortes. La página se desborda aunque el grid parece flexible.','Corrige el tamaño mínimo y el ajuste del contenido.',`.fila { display: grid; grid-template-columns: 1fr 1fr; }`,['Los mínimos intrínsecos del contenido pueden impedir que una pista se reduzca como esperabas.','Usar minmax(0,1fr), permitir min-width:0 en el hijo y ajustar palabras largas cuando proceda.','En móvil, pasar a una columna si dos columnas ya no son legibles.'],`.fila { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); }
.fila > * { min-width: 0; overflow-wrap: anywhere; }
@media(max-width:600px){ .fila { grid-template-columns:1fr; } }`,'Introducir una URL larga y ampliar el texto para comprobar que sigue accesible.'),
// B4 · JavaScript (10)
C('B4','El total muestra 105 en vez de 15','El precio viene de un input. Al sumarlo a 10 se obtiene el texto 105.','Identifica el tipo de dato y valida la conversión.',`const precio = "5";
const total = 10 + precio;`,['Un input normalmente entrega texto y + puede concatenar si uno de los operandos es string.','Convertir explícitamente y comprobar el resultado antes de usarlo.','Rechazar vacío o valores inválidos según el formulario; Number("") es 0 y puede no ser lo deseado.'],`const texto = "5";
const precio = Number(texto);
if (texto.trim() !== "" && Number.isFinite(precio)) {
  console.log(10 + precio); // 15
}`,'Probar "5", "", "abc" y un decimal; definir si se aceptan negativos.'),
C('B4','Un objeto const sí cambia','El estudiante dice que modificar usuario.nombre debería dar error porque usuario es const.','Distingue el enlace de la variable del contenido del objeto.',`const usuario = { nombre: "Ana" };
usuario.nombre = "Luis";`,['const impide reasignar usuario a otro valor, no convierte automáticamente el objeto en inmutable.','La propiedad puede cambiar si el objeto lo permite. Reasignar usuario = {} sí falla.','Elegir el comportamiento requerido; si se desea congelar, estudiar Object.freeze y sus límites de profundidad.'],`const usuario = { nombre: "Ana" };
usuario.nombre = "Luis"; // permitido
// usuario = {}; // reasignación no permitida`,'Comparar modificar una propiedad con reasignar el objeto completo y explicar ambos resultados.'),
C('B4','La función está definida, pero no pasa nada','Hay una función que dibuja productos y ninguna línea la invoca. No aparece error de consola.','¿Qué comprobarías antes de cambiar la API?',`function mostrar() { console.log("Dibujando"); }
// Fin del archivo`,['Declarar una función no ejecuta su cuerpo.','Comprobar cuándo debe ejecutarse y añadir la llamada o el evento correspondiente.','Si sigue sin ocurrir, verificar que el archivo JS cargue y no haya un error previo.'],`function mostrar() { console.log("Dibujando"); }
mostrar();`,'La llamada debe producir el mensaje una vez en el momento previsto.'),
C('B4','querySelector devuelve null al cargar','El script del head consulta un botón que todavía no se ha analizado. Al intentar registrar el evento falla.','Corrige el momento de ejecución y verifica también el selector.',`<head><script src="app.js"></script></head>
<!-- En app.js: document.querySelector("#ver").addEventListener(...) -->`,['El script clásico del head sin defer puede ejecutarse antes de que exista el botón del body.','Usar defer para ese script externo o una estrategia equivalente de inicialización tras el DOM.','Comprobar que el id escrito coincida; esperar al DOM no arregla un selector equivocado.'],`<script src="app.js" defer></script>`,'Recargar sin caché y confirmar que el botón existe al inicializar el manejador.'),
C('B4','El evento se dispara antes del clic','El mensaje aparece al cargar y el botón no ejecuta lo esperado después.','Explica la diferencia entre pasar una función y llamarla.',`boton.addEventListener("click", mostrar());`,['Los paréntesis ejecutan mostrar en ese instante y pasan su resultado al registro.','Entregar una función como callback, o envolver una llamada con argumentos en otra función.','Registrar el manejador una vez y comprobar que no se multiplique al volver a renderizar.'],`boton.addEventListener("click", mostrar);
// Con argumentos:
// boton.addEventListener("click", () => mostrar("Horario"));`,'No debe ejecutarse antes de pulsar. Un clic debe producir una sola acción.'),
C('B4','forEach no devuelve la lista de nombres','La variable nombres termina siendo undefined, aunque la consola muestra productos válidos.','Elige el método según el resultado que se necesita.',`const nombres = productos.forEach(p => p.nombre);`,['forEach recorre para producir efectos y su retorno es undefined.','map construye un arreglo con el resultado de cada callback.','Comprobar si además hay que filtrar; transformar y seleccionar son operaciones diferentes.'],`const nombres = productos.map(p => p.nombre);`,'Con [{nombre:"Café"},{nombre:"Té"}], el resultado debe ser ["Café","Té"], sin alterar el original.'),
C('B4','Filtrar productos, pero devolver objetos','El requisito pide nombres de productos menores de 500. El código devuelve objetos completos e incluye el precio 500.','Corrige selección, transformación y límite.',`const nombres = productos.filter(p => p.precio <= 500);`,['Menor de 500 significa < 500, no <= 500.','filter conserva los objetos que pasan; map extrae sus nombres.','Asegurar que precio sea numérico según el contrato de datos.'],`const nombres = productos
  .filter(p => p.precio < 500)
  .map(p => p.nombre);`,'Probar precios 499, 500 y 501. Solo el primero debe aportar su nombre.'),
C('B4','El selector no encuentra el id','El HTML declara id="horario", pero el JS consulta .horario.','Distingue los selectores y maneja la ausencia del elemento.',`const horario = document.querySelector(".horario");
horario.hidden = false;`,['El punto busca una clase; # busca un id.','Usar el selector que corresponde al documento y decidir qué hacer si no existe.','Un guard evita el error, pero no debe ocultar permanentemente un fallo de integración que se necesita corregir.'],`const horario = document.querySelector("#horario");
if (horario) horario.hidden = false;`,'Verificar el elemento encontrado y que la acción visible se produzca, no solo que desaparezca el error.'),
C('B4','El nombre del producto se interpreta como HTML','Un dato externo contiene etiquetas. El render lo inserta con innerHTML aunque debería mostrarse como texto.','Propón una forma segura para representar el título.',`titulo.innerHTML = producto.nombre;`,['innerHTML interpreta marcado. No tratar datos externos como HTML confiable.','Usar textContent si se necesita texto. Para una estructura, crear elementos y asignar sus textos.','Si el requisito exige HTML enriquecido, hace falta una política y sanitización adecuada; no basta con reemplazar un carácter.'],`const titulo = document.createElement("h3");
titulo.textContent = producto.nombre;`,'Usar como nombre "<b>Oferta</b>": debe mostrarse literalmente si el campo es texto.'),
C('B4','Un precio vacío se convierte en cero','El formulario acepta una cadena vacía porque Number("") produce 0 y solo se comprueba que no sea NaN.','Valida presencia, tipo y rango según el requisito.',`const precio = Number(input.value);
if (!Number.isNaN(precio)) guardar(precio);`,['Comprobar presencia antes de convertir: un campo obligatorio vacío no es un precio válido.','Tras convertir, exigir finitud y el rango permitido. No confiar solo en la apariencia del control.','Repetir la validación necesaria en servidor cuando se envían datos reales.'],`const texto = input.value.trim();
const precio = Number(texto);
if (texto && Number.isFinite(precio) && precio > 0) {
  guardar(precio);
}`,'Probar vacío, espacios, 0, −1 y 12.50. Aquí el contrato exige un precio positivo.'),
// B5 · fetch y APIs (10)
C('B5','El fetch no muestra nada','La página queda vacía. El alumno afirma que no hay errores, pero no ha revisado estado HTTP, forma de datos ni ejecución de la función.','Diseña un diagnóstico ordenado sin asumir una causa única.',`async function cargar() {
  const res = await fetch("/api/productos");
  const datos = await res.json();
  // ¿La función se llama? ¿Qué forma tiene datos?
}`,['Confirmar que cargar se invoca y que la petición aparece en Red; revisar el estado HTTP.','Inspeccionar datos y el selector del contenedor, sin adivinar nombres de campos.','Verificar que se espera el cuerpo y se recorre el arreglo correcto. Mostrar un error o estado vacío en lugar de silencio.'],'','Usar una respuesta conocida con un producto y comprobar petición, datos y DOM por separado.'),
C('B5','Cuatro productos: ¿API o datos locales?','Una cafetería tiene cuatro productos que casi nunca cambian y una sola persona publica el sitio. Piden usar una API «porque es más profesional».','Justifica la opción más adecuada y cuándo cambiarías la decisión.','',['Datos en HTML o un arreglo local pueden resolver el catálogo pequeño sin depender de otro servicio.','Una API tiene sentido si el inventario cambia, lo administra otro sistema o necesita consulta compartida.','Un JSON propio separa datos y código, pero cargarlo con fetch sigue necesitando servirlo y atender fallos. Considerar mantenimiento y actualización.'],'','Documentar quién actualizará el catálogo y probar el funcionamiento sin la dependencia externa elegida.'),
C('B5','El 404 no entra en catch','La ruta no existe, pero la promesa de fetch se cumple y el programa intenta leer la página de error como si fuera el catálogo.','¿Qué comprobación falta?',`try {
  const res = await fetch("/api/no-existe");
  const datos = await res.json();
} catch (error) { console.error(error); }`,['fetch no rechaza su promesa solo por recibir un estado HTTP 404 o 500.','Comprobar res.ok y generar un error o tratar ese estado según el contrato.','catch también puede recibir errores de red o de lectura JSON; distinguirlos cuando sea útil para el usuario y el diagnóstico.'],`const res = await fetch("/api/productos");
if (!res.ok) throw new Error("HTTP " + res.status);
const datos = await res.json();`,'Simular un 404: debe mostrarse el error previsto sin intentar renderizar una lista válida.'),
C('B5','Falta esperar la conversión del cuerpo','La variable datos es una promesa y products no contiene lo esperado.','Explica las dos esperas sin confundirlas con dos peticiones.',`const res = await fetch("/api/productos");
const datos = res.json();
console.log(datos.products);`,['await fetch espera el objeto Response; aún hay que leer y analizar el cuerpo.','res.json devuelve otra promesa. Esperarla obtiene el valor de datos.','Esto no implica una segunda petición al servidor; corresponde al procesamiento del cuerpo de la respuesta.'],`const res = await fetch("/api/productos");
if (!res.ok) throw new Error("Respuesta no válida");
const datos = await res.json();`,'Inspeccionar que datos sea el objeto esperado, no una promesa pendiente.'),
C('B5','El arreglo está dentro de products','La API devuelve un objeto envoltorio con products, total y limit. forEach no existe en el objeto principal.','Corrige el nivel de acceso y valida el esquema mínimo.',`// Respuesta: { products: [{ title: "Café" }], total: 1 }
datos.forEach(p => mostrar(p));`,['Inspeccionar la forma real: el valor principal es un objeto, no el arreglo.','Acceder a products y comprobar que sea un arreglo antes de recorrerlo.','No cambiar a otro campo solo porque su nombre parece correcto: contrastarlo con una respuesta o contrato.'],`if (!Array.isArray(datos.products)) {
  throw new Error("Falta la lista products");
}
datos.products.forEach(p => mostrar(p));`,'Probar una respuesta válida y otra con products ausente para comprobar el mensaje de error.'),
C('B5','Cero resultados no es un error de red','La búsqueda responde 200 y products:[], pero la página sigue mostrando «Cargando…».','Diseña los estados de carga, éxito vacío y error.',`const datos = { products: [] };
datos.products.forEach(p => mostrar(p));`,['Un arreglo vacío se recorre sin ejecutar el callback: eso es correcto.','Finalizar siempre el estado de carga y mostrar una explicación específica de cero resultados.','Mantener el error separado para no decir «sin resultados» cuando falló el servicio.'],`lista.replaceChildren();
if (!datos.products.length) {
  estado.textContent = "No hay productos para esta búsqueda.";
} else {
  datos.products.forEach(p => mostrar(p));
  estado.textContent = "Resultados cargados.";
}`,'Probar cero, uno y varios productos; en todos debe desaparecer el estado de carga.'),
C('B5','El botón se queda desactivado si falla','El botón se desactiva antes de consultar y solo se reactiva dentro del camino de éxito.','¿Dónde pondrías la recuperación del control?',`boton.disabled = true;
const datos = await consultar();
mostrar(datos);
boton.disabled = false;`,['Una excepción interrumpe el flujo antes de la última línea.','Usar try/catch para comunicar el error y finally para restablecer el control en ambos caminos.','No convertir el finally en un mensaje de éxito: se ejecuta aunque haya fallado.'],`boton.disabled = true;
try { mostrar(await consultar()); }
catch { estado.textContent = "No se pudo cargar. Intenta de nuevo."; }
finally { boton.disabled = false; }`,'Forzar rechazo y éxito: el botón debe volver a estar disponible en ambos casos.'),
C('B5','JSON válido con la forma equivocada','JSON.parse acepta la respuesta, pero products es un string. El alumno asume que una sintaxis válida garantiza el esquema.','Separa análisis sintáctico y validación de estructura.',`const datos = JSON.parse('{"products":"sin datos"}');
datos.products.map(p => p.title);`,['JSON.parse valida la sintaxis JSON y devuelve el valor representado. No comprueba tu contrato de catálogo.','Verificar que products sea un arreglo y que los campos utilizados tengan los tipos esperados.','Tratar una estructura inválida como error de datos, no como una lista vacía silenciosa.'],`if (!Array.isArray(datos.products) ||
    !datos.products.every(p => p && typeof p.title === "string")) {
  throw new Error("Formato de catálogo inesperado");
}`,'Probar JSON mal escrito, JSON válido con esquema incorrecto y una respuesta válida.'),
C('B5','La búsqueda vieja sobrescribe la nueva','Se busca «ca» y enseguida «café». La primera petición tarda más y reemplaza al final los resultados recientes.','¿Cómo evitarías representar una respuesta desactualizada?',`async function buscar(texto) {
  const datos = await consultar(texto);
  mostrar(datos);
}`,['Las respuestas pueden llegar en un orden distinto al de envío.','Asignar una versión a cada búsqueda y solo mostrar la respuesta cuya versión siga vigente. Otra opción es cancelar solicitudes anteriores y manejar la cancelación.','También evitar que un error de una solicitud vieja sustituya el estado actual.'],`let version = 0;
async function buscar(texto) {
  const actual = ++version;
  try {
    const datos = await consultar(texto);
    if (actual === version) mostrar(datos);
  } catch {
    if (actual === version) estado.textContent = "Error al buscar.";
  }
}`,'Introducir retrasos invertidos: solo la búsqueda más reciente debe controlar la vista.'),
C('B5','Dos clics crean dos reservas','La interfaz manda dos solicitudes por clics rápidos. El equipo propone solo desactivar el botón para garantizar que jamás se duplique una reserva.','Distingue la mejora de interfaz de la garantía del servidor.','',['Bloquear la acción mientras está pendiente reduce envíos accidentales en esa pantalla.','Una garantía frente a reintentos, varias pestañas o fallos necesita un mecanismo de idempotencia o deduplicación en el servidor acorde al contrato.','Restablecer la interfaz al finalizar y comunicar qué reserva se confirmó. No prometer que un botón desactivado protege toda la operación.'],`if (enviando) return;
enviando = true;
try { await enviarReserva(); }
finally { enviando = false; }
// La deduplicación real también requiere al servidor.`,'Probar doble clic y un reintento de red, verificando la cantidad de reservas en el servidor.'),
// B6 · Diseño y UI (6)
C('B6','Primera web de una cafetería','Hay logo, bienvenida, cuatro productos con precio, horario y contacto. El cliente no sabe cómo organizar una sola página.','Propón estructura, orden visual y adaptación al móvil.','',['Plantear header y navegación, un main con presentación y acción de contacto, productos agrupados y horario, y footer con información final.','Dar prioridad al propósito y a la tarea principal. Usar tarjetas coherentes en una rejilla adaptable.','Aplicar espaciado y encabezados claros. Los patrones F/Z son orientaciones de lectura, no reglas universales que sustituyan probar el contenido.'],`<main>
  <section><h1>Café Colonial</h1><a href="#contacto">Contactar</a></section>
  <section><h2>Productos</h2><!-- Lista de cuatro productos --></section>
  <section><h2>Horario</h2></section>
</main>`,'Comprobar en móvil si se identifica el negocio, la oferta y la acción principal sin buscar entre elementos competidores.'),
C('B6','Calidez artesanal con claridad profesional','Una cafetería quiere calidez y aspecto profesional. La propuesta actual mezcla cinco fuentes y colores saturados por todas partes.','Justifica una paleta y una pareja tipográfica sin presentar asociaciones como leyes.','',['Elegir una base neutra cálida, una superficie secundaria y un acento reservado a acciones importantes como punto de partida.','Combinar, por ejemplo, títulos con carácter y cuerpo de lectura clara; limitar familias y pesos para dar coherencia.','Validar contraste, legibilidad y percepción con el contenido y las personas. 60–30–10 es una orientación, no un requisito de accesibilidad.'],`:root { --fondo: #f4f0e8; --superficie: #e4e8df; --acento: #246054; }
body { background: var(--fondo); color: #202922; }
h1, h2 { font-family: Georgia, serif; }
p { font-family: system-ui, sans-serif; }`,'Revisar textos largos, botones y tamaños pequeños. No evaluar la propuesta solo con una muestra de colores.'),
C('B6','Rescatar una página que se ve amateur','No hay aire entre regiones, títulos y cuerpo tienen el mismo tamaño y cinco acentos compiten. La página funciona, pero cuesta leerla.','Presenta un plan de mejora priorizado usando C.R.A.P.','',['Primero resolver espacio, ancho legible y proximidad entre contenido relacionado.','Aplicar contraste de jerarquía, no solo color: título, subtítulos, cuerpo y acción principal.','Repetir componentes, alinear con una retícula y reducir acentos; verificar después el resultado con teclado y pantalla estrecha.'],`.contenido { max-width: 70rem; margin: auto; padding: 24px; }
.seccion { margin-block: 48px; }
.tarjetas { display: grid; gap: 24px; }`,'Comparar antes y después con las mismas tareas: localizar horario, identificar un producto y contactar.'),
C('B6','Doce columnas no son doce tarjetas','Se exige una retícula de 12 columnas y un alumno coloca 12 productos diminutos en una fila móvil.','Explica qué representa la retícula y cómo distribuirías cuatro tarjetas.','',['Doce es una base divisible para distribuir regiones; no obliga a mostrar doce componentes a la vez.','En un ancho amplio, cada una de cuatro tarjetas puede ocupar tres columnas; en anchos menores se cambian las proporciones.','Elegir puntos de cambio según el contenido y su legibilidad, no por una lista fija de dispositivos.'],`.grid { display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:16px; }
.card { grid-column:span 3; }
@media(max-width:800px){ .card { grid-column:span 6; } }
@media(max-width:500px){ .card { grid-column:span 12; } }`,'Probar los textos más largos y confirmar que las tarjetas se leen a uno, dos y cuatro elementos por fila.'),
C('B6','Un texto bonito, pero difícil de leer','El cuerpo usa una fuente ornamental de 12 px, interlineado muy cerrado y líneas de todo el ancho de pantalla.','¿Qué decisiones cambiarías y cómo comprobarías la mejora?',`body { font: 12px/1.1 fantasy; }
article { width: 100%; }`,['Elegir una fuente de cuerpo adecuada y un tamaño e interlineado que permitan leer el contenido real.','Limitar el ancho de lectura y dejar espacio entre párrafos; reservar la tipografía ornamental para usos cortos si funciona.','Comprobar zoom y preferencias de texto; ningún tamaño por sí solo garantiza accesibilidad universal.'],`body { font: 1rem/1.7 system-ui, sans-serif; }
article { max-width: 65ch; margin-inline: auto; padding: 24px; }`,'Leer un párrafo largo, ampliar el texto y comprobar que no se corta ni se superpone.'),
C('B6','El error se reconoce solo por rojo','El formulario marca un campo con borde rojo, sin mensaje. Además se eliminó el contorno de foco de todos los botones.','Añade señales comprensibles que no dependan solo del color.',`input.error { border-color: red; }
button:focus { outline: none; }`,['Describir el error en texto y relacionarlo con el campo; el color puede reforzar, no ser la única señal.','Conservar un foco visible para reconocer el control activo con teclado.','Revisar contraste de texto y controles, estados, navegación y anuncios de errores según el formulario.'],`<label for="email">Correo</label>
<input id="email" aria-invalid="true" aria-describedby="email-error">
<p id="email-error">Escribe un correo válido.</p>
<style>button:focus-visible { outline: 3px solid #233de0; outline-offset: 3px; }</style>`,'Probar sin distinguir colores y solo con teclado: el error y el foco deben seguir siendo identificables.')
].map((item,index)=>({...item,id:`caso-${String(index+1).padStart(2,'0')}`}));
