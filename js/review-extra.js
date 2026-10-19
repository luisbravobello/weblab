const Q=(b,q,o,c,e)=>({b,q,o,c,e});
export const extraQuestions=[
Q('B1','¿Qué parte de https://tienda.example/menu?tipo=cafe#precios identifica el esquema?',['https','tienda.example','tipo=cafe','precios'],0,'https es el esquema. El host es tienda.example, la consulta es tipo=cafe y el fragmento es precios.'),
Q('B1','¿Qué indica una respuesta HTTP 301?',['Un recurso no encontrado.','Una redirección permanente.','Un JSON con sintaxis incorrecta.','Un fallo de resolución DNS.'],1,'301 comunica una redirección permanente. El destino se indica normalmente en Location; el cliente decide cómo seguirla.'),
Q('B1','Desde /pages/contacto.html, ¿a qué ruta apunta ../index.html?',['/pages/index.html','/contacto/index.html','/index.html','A un archivo de otro dominio.'],2,'.. sube un nivel desde /pages/. La resolución también depende de la URL base del documento si se declaró una.'),
Q('B1','La API responde 405. ¿Qué revisarías primero?',['El color del botón.','El tamaño de las imágenes.','El DNS, porque no llegó al servidor.','El método HTTP que acepta esa ruta.'],3,'405 significa que el método usado no está permitido para ese recurso. La petición obtuvo una respuesta HTTP; revisar el contrato de la ruta.'),
Q('B1','¿Qué aporta HTTPS a la comunicación?',['Cifrado, integridad y autenticación del servidor mediante TLS.','Garantiza que toda tienda sea honesta.','Evita cualquier error de JavaScript.','Hace innecesaria la validación del servidor.'],0,'TLS protege el transporte y permite autenticar al servidor según el certificado. No certifica la honestidad del negocio ni elimina errores de aplicación.'),
Q('B2','¿Qué elemento corresponde a navegar a otra página?',['Un div con color azul.','Un enlace a con href.','Un span con cursor pointer.','Un botón sin acción definida.'],1,'El enlace expresa navegación y aporta comportamientos nativos como abrir en otra pestaña. El botón corresponde a una acción.'),
Q('B2','Una imagen es puramente decorativa. ¿Qué alternativa suele corresponder?',['Omitir siempre el atributo alt.','Poner alt="imagen decorativa bonita".','Usar alt="" cuando el contexto confirma que no aporta información.','Escribir palabras clave de SEO en alt.'],2,'El alt vacío comunica que la imagen no necesita una alternativa informativa. La decisión depende de la función real en el contexto.'),
Q('B2','¿Cómo se asocia explícitamente un label a un input?',['Con el mismo color.','Con el mismo placeholder.','Poniéndolos cerca visualmente.','Con for del label igual al id del input.'],3,'La coincidencia for/id crea la asociación explícita. La cercanía visual y el placeholder no la sustituyen.'),
Q('B2','Dentro de un formulario, ¿qué type evita que un botón auxiliar lo envíe?',['button','submit','send','input'],0,'type="button" representa una acción de botón sin envío por defecto. El manejador puede realizar la acción auxiliar.'),
Q('B2','¿Cuál describe mejor meta description?',['Obliga a Google a mostrar exactamente ese texto.','Describe el contenido y puede usarse como fragmento; no garantiza cómo aparecerá.','Es el título visible principal del body.','Hace que el sitio se posicione primero.'],1,'La descripción es un metadato. Google puede usarla o generar otro fragmento según la consulta y el contenido.'),
Q('B3','Con flex-direction:column, ¿qué eje controla justify-content?',['El horizontal siempre.','Los dos ejes simultáneamente.','El eje principal, que en este caso es vertical.','Solo el ancho de las imágenes.'],2,'Las propiedades de alineación siguen los ejes de flex. Con column el principal es vertical y el cruzado horizontal.'),
Q('B3','¿Qué permite minmax(min(100%,220px),1fr) en una rejilla?',['Que haya siempre doce columnas.','Que todas las tarjetas midan 220 px incluso en 180 px.','Que no exista espacio entre tarjetas.','Que el mínimo pueda caber en contenedores de menos de 220 px.'],3,'min(100%,220px) limita el mínimo al ancho disponible. El contenido interno también debe poder reducirse o ajustarse.'),
Q('B3','Con width:300px, padding:20px y border:2px, ¿qué ancho exterior tiene una caja content-box sin margen?',['344 px','300 px','322 px','304 px'],0,'300 de contenido + 40 de padding horizontal + 4 de borde = 344 px. El margen no está incluido.'),
Q('B3','Dos reglas normales del mismo origen y capa compiten. Una usa un id y otra una clase. ¿Qué decide antes que el orden?',['El nombre más corto.','La especificidad del selector.','El navegador elige al azar.','Siempre gana la última, sin más condiciones.'],1,'Bajo esas condiciones el selector de id tiene mayor especificidad. El orden no resuelve por sí solo todos los conflictos de cascada.'),
Q('B3','¿Para qué sirve gap en un grid?',['Para añadir padding al contenido de cada tarjeta.','Para dar significado semántico a una lista.','Para separar pistas o elementos según el modo de distribución.','Para declarar el texto alternativo.'],2,'gap crea separación en la distribución. No sustituye padding interior ni margin exterior entre regiones.'),
Q('B4','const usuario={nombre:"Ana"}; usuario.nombre="Luis"; ¿qué ocurre?',['Siempre da error por const.','Convierte el objeto a string.','Crea una variable global nueva.','Modifica la propiedad si el objeto lo permite; no reasigna usuario.'],3,'const protege el enlace de la variable frente a reasignación. No congela automáticamente el objeto.'),
Q('B4','¿Qué método construye un arreglo nuevo transformando cada elemento?',['map','forEach','addEventListener','querySelector'],0,'map devuelve un arreglo de resultados. forEach se usa para recorrer y su resultado es undefined.'),
Q('B4','¿Qué registra correctamente una función para un clic?',['addEventListener("click", mostrar())','addEventListener("click", mostrar)','addEventListener(mostrar, "click")','querySelector("click", mostrar)'],1,'Se pasa la función, no el resultado de llamarla inmediatamente. Una función envolvente sirve cuando se necesitan argumentos.'),
Q('B4','¿Qué valor tiene Number("")?',['undefined','NaN','0','"0"'],2,'La cadena vacía se convierte en cero. Si un campo es obligatorio, hay que validar presencia además de convertir y revisar el rango.'),
Q('B4','Un título externo debe mostrarse literalmente como texto. ¿Qué elegirías?',['eval(titulo)','innerHTML sin validar','document.write(titulo)','textContent'],3,'textContent no interpreta el dato como marcado HTML. Para estructuras, crear nodos y asignar sus textos.'),
Q('B5','¿Un estado HTTP 404 hace que fetch rechace automáticamente su promesa?',['No: hay que comprobar la respuesta, por ejemplo res.ok.','Sí, siempre entra en catch por ser 404.','Solo si se usa const.','Solo si el servidor envía un arreglo.'],0,'Un fallo HTTP no equivale a un error de red de fetch. Puedes lanzar un error según el estado para gestionarlo en catch.'),
Q('B5','¿Qué devuelve res.json() antes de esperarlo?',['Una nueva petición HTTP.','Una promesa con el resultado de leer y analizar el cuerpo.','Una lista garantizada de productos.','Una cadena con los encabezados.'],1,'Leer y analizar el cuerpo es asíncrono. El valor final puede ser un objeto, arreglo u otro valor JSON; la estructura depende del contenido.'),
Q('B5','La respuesta es {products:[...],total:10}. ¿Qué se recorre como lista?',['datos.total','datos directamente sin inspección','datos.products, después de comprobar que sea un arreglo','res.status'],2,'El objeto principal envuelve la colección. Se accede a la lista según el esquema real, no según una suposición.'),
Q('B5','Se recibe 200 con products:[]. ¿Qué estado corresponde?',['Error DNS.','Petición aún pendiente para siempre.','Éxito con diez productos ocultos.','Éxito sin resultados; finalizar la carga y explicarlo.'],3,'Una lista vacía puede ser una respuesta válida. Debe diferenciarse de una petición fallida o de un formato incorrecto.'),
Q('B5','¿Qué bloque permite restablecer un botón tanto tras éxito como tras error?',['finally','Solo el primer await','El atributo alt','El encabezado title'],0,'finally se ejecuta al salir del try/catch también cuando hubo un error. Es adecuado para limpieza o restaurar controles, no para afirmar éxito.'),
Q('B5','Dos búsquedas llegan en orden invertido. ¿Qué evita mostrar una respuesta vieja?',['Cambiar el color del input.','Comprobar la versión vigente de la búsqueda o cancelar y gestionar la anterior.','Quitar await para que todo vaya más rápido.','Usar siempre el primer resultado recibido.'],1,'La vista debe corresponder a la solicitud vigente. También hay que impedir que errores antiguos sobrescriban el estado reciente.'),
Q('B6','Una retícula de 12 columnas, ¿obliga a mostrar 12 tarjetas por fila?',['Sí, en todos los dispositivos.','Solo si tiene imágenes.','No: las regiones pueden ocupar varias columnas y cambiar por ancho.','Sí, porque el navegador no admite otros tamaños.'],2,'La retícula organiza proporciones. Cuatro tarjetas pueden ocupar tres columnas cada una y reorganizarse cuando falta espacio.'),
Q('B6','¿Qué mejora un formulario que solo marca errores en rojo?',['Usar un rojo más saturado sin texto.','Quitar todos los bordes.','Ocultar el mensaje a usuarios de teclado.','Añadir una explicación textual asociada al campo y conservar foco visible.'],3,'El color puede reforzar la señal, pero no debe ser el único medio de identificar el error. El foco permite localizar el control activo.'),
Q('B6','¿Qué propone proximidad en diseño?',['Agrupar visualmente lo relacionado y separar grupos distintos.','Poner todo lo más cerca posible.','Eliminar el espacio entre párrafos.','Usar siempre position:absolute.'],0,'La distancia comunica relaciones. Proximidad no significa comprimir toda la interfaz.'),
Q('B6','¿Qué criterio usarías para elegir tipografía de cuerpo?',['Que sea la más ornamental.','Legibilidad en contenido real, tamaño, interlínea y contexto de uso.','Que todo el texto use exactamente 12 px.','Que el nombre de la fuente sea largo.'],1,'La lectura depende de varios factores. Conviene probar párrafos reales, anchos y preferencias de texto, no solo una palabra de muestra.')
];

const E=(b,t,enun,req,lng,sol,why)=>({b,t,enun,req,lng,sol,why});
export const extraExercises=[
// B1 · Cinco aplicaciones de fundamentos.
E('B1','Descomponer una URL','Descompón https://tienda.example:8443/productos?tipo=cafe#ofertas y explica qué parte no se envía en la petición HTTP.',['Identificar esquema, host, puerto y ruta','Identificar consulta y fragmento','Escribir el destino de la petición'],'URL / HTTP',`Esquema: https
Host: tienda.example
Puerto: 8443
Ruta: /productos
Consulta: tipo=cafe
Fragmento: ofertas
Petición: GET /productos?tipo=cafe
El fragmento no se envía como parte del destino HTTP.`,'El fragmento identifica una parte del recurso en el cliente. La consulta sí participa en el destino solicitado. No confundir el puerto explícito con un segmento de ruta.'),
E('B1','Escribir una petición de formulario','Representa una petición POST para enviar nombre=Ana a /reservas en formato application/x-www-form-urlencoded.',['Método y ruta','Tipo del cuerpo','Separación entre encabezados y cuerpo'],'HTTP',`POST /reservas HTTP/1.1
Host: cafeteria.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 10

nombre=Ana`,'El ejemplo textual separa encabezados y cuerpo con una línea vacía. El navegador calcula normalmente Content-Length: aquí nombre=Ana ocupa 10 bytes ASCII. El servidor debe aceptar ese método y formato.'),
E('B1','Resolver rutas relativas','Desde /pages/catalogo.html, escribe enlaces hacia /index.html, /pages/contacto.html y /assets/logo.svg.',['Subir un nivel cuando corresponde','Conservar la carpeta actual para contacto','Usar la ruta de la imagen en src'],'HTML',`<a href="../index.html">Inicio</a>
<a href="contacto.html">Contacto</a>
<img src="../assets/logo.svg" alt="Café Colonial">`,'Las rutas se resuelven respecto de la URL base. Se presupone que no hay un elemento base que la cambie. Comprueba cada destino desde la página del catálogo.'),
E('B1','Preparar una matriz de diagnóstico HTTP','Asigna la primera comprobación a cuatro situaciones: 404 en una imagen, 500 en la API, 405 al enviar y un error DNS sin respuesta HTTP.',['Separar nombre, ruta, método y servidor','No confundir lista vacía y error','Proponer evidencia verificable'],'Diagnóstico',`404 imagen → comparar URL, ruta, nombre y archivo publicado.
500 API → registrar petición y revisar registros del servidor.
405 envío → comprobar método admitido y contrato de la ruta.
DNS sin HTTP → revisar nombre y resolución antes del contenido.
En cada caso: reproducir, inspeccionar y repetir la prueba tras corregir.`,'El estado ayuda a elegir una hipótesis inicial, no identifica por sí solo toda la causa. Debe contrastarse con la petición y la evidencia del entorno.'),
E('B1','Redirección y recurso movido','Escribe una respuesta HTTP esquemática que indique que /carta pasó permanentemente a /menu.',['Código 301','Encabezado Location','Explicar dónde se configura realmente'],'HTTP',`HTTP/1.1 301 Moved Permanently
Location: https://cafeteria.example/menu
Content-Length: 0`,'La redirección se configura en el servidor o alojamiento. No basta con escribir estas líneas en un archivo HTML para que se conviertan en encabezados HTTP. Verifica la respuesta de /carta en Red.'),
// B2 · Siete ejercicios nuevos de HTML.
E('B2','Formulario de contacto con etiquetas','Construye un formulario con nombre, correo, mensaje y envío a /contacto.',['label asociado para cada campo','name y tipos adecuados','Método POST y botón submit'],'HTML',`<form action="/contacto" method="post">
  <label for="nombre">Nombre</label>
  <input id="nombre" name="nombre" autocomplete="name" required>
  <label for="correo">Correo</label>
  <input id="correo" name="correo" type="email" autocomplete="email" required>
  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" name="mensaje" required></textarea>
  <button type="submit">Enviar mensaje</button>
</form>`,'El backend debe implementar /contacto y validar los datos. El HTML aporta nombres de campos, asociación y validación básica, no envía correos por sí mismo.'),
E('B2','Navegación dentro de una página','Crea una navegación a Menú y Horario y las dos secciones de destino.',['href con fragmento','Ids únicos y coincidentes','Título principal y apartados'],'HTML',`<header><h1>Café Colonial</h1></header>
<nav aria-label="Principal">
  <a href="#menu">Menú</a><a href="#horario">Horario</a>
</nav>
<main>
  <section id="menu"><h2>Menú</h2><p>Café y repostería.</p></section>
  <section id="horario"><h2>Horario</h2><p>Lunes a sábado, 8–18 h.</p></section>
</main>`,'Los fragmentos apuntan a ids, no a nombres de clase. Comprueba enlaces y encabezados sin depender del estilo visual.'),
E('B2','Foto informativa y adorno','Representa la foto de un capuchino que aporta información y una onda que solo decora.',['Alternativa relevante para la foto','alt vacío para el adorno','Dimensiones de ejemplo coherentes'],'HTML',`<img src="capuchino.jpg" width="800" height="600"
     alt="Capuchino con espuma y canela">
<img src="onda.svg" alt="">`,'Las dimensiones deben corresponder a los archivos reales. El alt depende del contexto; no todo recurso necesita una descripción larga ni todos deben omitirse.'),
E('B2','Lista de productos con significado','Crea una lista de tres productos, cada uno con nombre y precio.',['ul y li','Agrupar nombre y precio','No usar saltos de línea como única estructura'],'HTML',`<section aria-labelledby="productos-title">
  <h2 id="productos-title">Productos</h2>
  <ul>
    <li><strong>Café</strong> · RD$100</li>
    <li><strong>Té</strong> · RD$80</li>
    <li><strong>Jugo</strong> · RD$120</li>
  </ul>
</section>`,'La lista comunica que son elementos de una colección. CSS puede organizarla en tarjetas sin perder esa estructura.'),
E('B2','Tabla de horario','Presenta una tabla con día, apertura y cierre para dos días.',['caption que identifique la tabla','Encabezados de columna con scope','Datos en filas'],'HTML',`<table>
  <caption>Horario de atención</caption>
  <thead><tr><th scope="col">Día</th><th scope="col">Apertura</th><th scope="col">Cierre</th></tr></thead>
  <tbody>
    <tr><th scope="row">Lunes</th><td>08:00</td><td>18:00</td></tr>
    <tr><th scope="row">Martes</th><td>08:00</td><td>18:00</td></tr>
  </tbody>
</table>`,'La relación entre encabezados y datos importa más que dibujar líneas. No usar tablas para distribuir regiones generales de la página.'),
E('B2','Distinguir navegación y acción','Crea un enlace a Contacto y un botón auxiliar para abrir un panel de horario.',['a con href para navegar','button type button para actuar','Estado expandido y destino identificados'],'HTML',`<a href="contacto.html">Contactar</a>
<button type="button" id="ver-horario"
        aria-expanded="false" aria-controls="panel-horario">Ver horario</button>
<section id="panel-horario" hidden><h2>Horario</h2><p>8–18 h.</p></section>`,'El HTML distingue ambas funciones. El botón necesita un manejador que cambie hidden y aria-expanded de forma coordinada; declarar atributos no añade esa interacción por sí solo.'),
E('B2','Documento preparado para móvil','Escribe un head de documento en español que conecte style.css y app.js sin ejecutar este último antes del DOM.',['charset, viewport y title','Descripción relevante','CSS enlazado y script externo defer'],'HTML',`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Menú · Café Colonial</title>
  <meta name="description" content="Consulta productos y precios de Café Colonial.">
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body><h1>Menú</h1></body>
</html>`,'defer permite analizar el documento antes de ejecutar el script externo. El viewport no elimina anchos fijos del CSS: todavía hay que construir un diseño adaptable.'),
// B3 · Ocho ejercicios nuevos de CSS.
E('B3','Tarjeta que incluya borde y relleno','Haz una tarjeta de hasta 320 px, con 24 px de padding y borde de 2 px, que quepa en su contenedor.',['border-box','Ancho flexible con máximo','Distinguir margen exterior'],'CSS',`*, *::before, *::after { box-sizing: border-box; }
.tarjeta { width: min(100%, 320px); padding: 24px;
  border: 2px solid #ccd5e8; border-radius: 12px; }`,'Los 320 px incluyen padding y borde. Prueba un contenedor más estrecho y comprueba que el contenido también pueda ajustarse.'),
E('B3','Cambiar una marca desde sus variables','Define cuatro roles de color y aplícalos a body, tarjeta y botón.',['Variables por función','Uso mediante var','Texto legible sobre botón'],'CSS',`:root { --fondo:#f5f7fc; --superficie:#fff; --texto:#18213a; --accion:#233de0; }
body { background:var(--fondo); color:var(--texto); }
.tarjeta { background:var(--superficie); }
.boton { background:var(--accion); color:white; }`,'Los roles permiten cambiar el tema sin renombrar todos los componentes. Las combinaciones deben comprobarse para contraste y estados.'),
E('B3','Dos columnas que pasen a una','Crea contenido y barra lateral con proporción 2:1, pasando a una columna cuando el contenido ya no quepa.',['Grid con minmax(0,...)','gap','Media query de ejemplo'],'CSS',`.layout { display:grid; grid-template-columns:minmax(0,2fr) minmax(0,1fr); gap:24px; }
.layout > * { min-width:0; }
@media(max-width:760px){ .layout { grid-template-columns:1fr; } }`,'El punto 760 px es una decisión del ejemplo: debe contrastarse con el contenido. No representa una frontera universal entre teléfonos y computadoras.'),
E('B3','Escala de espacios consistente','Define variables de 8, 16, 24 y 48 px; úsalas para relleno, separación de tarjetas y regiones.',['Escala centralizada','Padding interior','Gap y separación entre regiones'],'CSS',`:root { --s1:8px; --s2:16px; --s3:24px; --s6:48px; }
.card { padding:var(--s3); }
.lista { display:grid; gap:var(--s2); }
.seccion { margin-block:var(--s6); }`,'La escala ayuda a repetir decisiones, pero no obliga a que toda medida sea múltiplo de ocho. Valora agrupación y espacio real.'),
E('B3','Imagen adaptable sin deformación','Haz que una imagen conserve su proporción y nunca desborde el contenedor.',['max-width','height auto','Eliminar hueco de elemento en línea'],'CSS',`img { display:block; max-width:100%; height:auto; }`,'height:auto mantiene la proporción cuando el ancho cambia. Si el diseño exige recorte, debe definirse una caja y evaluar object-fit en lugar de deformar la foto.'),
E('B3','Resolver un conflicto de especificidad','Reescribe dos reglas para que el estilo base de botón y su variante principal no dependan de un id.',['Clases para componente y variante','Evitar !important innecesario','Explicar el orden'],'CSS',`.boton { background:#edf0f8; color:#18213a; }
.boton--principal { background:#233de0; color:#fff; }
/* HTML: class="boton boton--principal" */`,'Ambas reglas de clase tienen la misma especificidad bajo las mismas condiciones de cascada; la variante posterior cambia las propiedades indicadas. No se presupone que el orden venza cualquier selector.'),
E('B3','Enlaces y botones con foco visible','Diseña un foco que se vea sin cambiar el tamaño de la caja.',['focus-visible','Outline y offset','No eliminar el foco sin alternativa'],'CSS',`a:focus-visible, button:focus-visible {
  outline:3px solid #233de0;
  outline-offset:4px;
}`,'outline no participa como borde en el modelo de caja. Verifica el contraste del foco respecto de los fondos y que no quede oculto por contenedores.'),
E('B3','Una URL larga dentro de una tarjeta','Adapta una tarjeta del grid para que una cadena larga no obligue a desbordar toda la página.',['Reducir mínimo del hijo','Ajuste de palabra','Mantener el contenido visible'],'CSS',`.grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; }
.card { min-width:0; overflow-wrap:anywhere; }
@media(max-width:600px){ .grid { grid-template-columns:1fr; } }`,'No ocultamos la cadena con overflow:hidden. La prueba útil usa el contenido más problemático y texto ampliado.'),
// B4 · Diez ejercicios nuevos de JavaScript.
E('B4','Sumar precios con validación','Escribe una función que sume dos entradas de texto solo si ambas están presentes y son números finitos.',['No aceptar vacío como cero implícito','Conversión explícita','Resultado numérico o error'],'JavaScript',`function sumarPrecios(a, b) {
  if (!a.trim() || !b.trim()) throw new Error("Faltan precios");
  const x=Number(a), y=Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) throw new Error("Precio inválido");
  return x+y;
}
console.log(sumarPrecios("10", "5")); // 15`,'La función supone parámetros string. El rango permitido, monedas y precisión de importes requieren decisiones adicionales según la aplicación.'),
E('B4','Calcular un total de productos','Dado un arreglo de objetos con precio numérico, devuelve la suma sin alterar los productos.',['Recorrido del arreglo','Acumulador','Vacío devuelve cero'],'JavaScript',`function total(productos) {
  let suma=0;
  for (const p of productos) suma+=p.precio;
  return suma;
}
console.log(total([{precio:100},{precio:80}])); // 180
console.log(total([])); // 0`,'Se presupone que precio cumple el contrato numérico. La función no modifica los objetos; si se reciben datos externos, validar antes de sumar.'),
E('B4','Extraer nombres con map','Convierte [{nombre:"Café"},{nombre:"Té"}] en un arreglo de nombres.',['Función que reciba una lista','map','Conservar objetos originales'],'JavaScript',`function nombres(productos) {
  return productos.map(p=>p.nombre);
}
console.log(nombres([{nombre:"Café"},{nombre:"Té"}]));
// ["Café", "Té"]`,'map crea la colección de resultados. forEach no devuelve ese arreglo. El original conserva su estructura.'),
E('B4','Buscar un producto por id','Devuelve el producto cuyo id coincida y contempla el caso en que no exista.',['Comparación de ids coherentes','find','Tratar undefined'],'JavaScript',`const productos=[{id:1,nombre:"Café"},{id:2,nombre:"Té"}];
const producto=productos.find(p=>p.id===2);
console.log(producto ? producto.nombre : "No encontrado");`,'find devuelve el primer elemento que cumple la condición o undefined. Si el id llega de un input, revisar su tipo antes de compararlo con uno numérico.'),
E('B4','Contador con eventos','Con #mas y #total ya presentes, aumenta un contador por cada clic y representa el estado.',['Estado separado del DOM','Callback sin invocación inmediata','textContent'],'JavaScript',`let contador=0;
const boton=document.querySelector("#mas");
const salida=document.querySelector("#total");
boton.addEventListener("click",()=>{
  contador++;
  salida.textContent=String(contador);
});`,'Se presupone que ambos nodos existen al inicializar. Tres clics deben mostrar 3, sin registrar nuevos manejadores en cada clic.'),
E('B4','Panel desplegable accesible','Con #ver-horario y #panel-horario presentes, alterna el panel y actualiza aria-expanded.',['hidden como estado','type button en el HTML','Estado accesible sincronizado'],'JavaScript',`const boton=document.querySelector("#ver-horario");
const panel=document.querySelector("#panel-horario");
boton.addEventListener("click",()=>{
  panel.hidden=!panel.hidden;
  boton.setAttribute("aria-expanded",String(!panel.hidden));
});`,'El estado anunciado debe coincidir con la visibilidad. La asociación aria-controls se declara en el HTML, como en el ejercicio del botón auxiliar.'),
E('B4','Renderizar una lista sin interpretar nombres','Muestra nombres de productos como li dentro de #productos. No uses innerHTML con sus valores.',['Crear nodos','textContent','Limpiar la vista anterior'],'JavaScript',`function mostrar(productos) {
  const lista=document.querySelector("#productos");
  lista.replaceChildren();
  for (const p of productos) {
    const li=document.createElement("li");
    li.textContent=p.nombre;
    lista.append(li);
  }
}`,'El código presupone una lista existente. Un nombre como <b>Oferta</b> debe aparecer literalmente, sin convertirse en una etiqueta.'),
E('B4','Validar un formulario sin recargar la práctica','En un formulario local #contacto, muestra si el correo tiene la validez del control y evita el envío de demostración.',['Escuchar submit','preventDefault para esta demo','Usar el control type email y required'],'JavaScript',`const form=document.querySelector("#contacto");
const correo=form.querySelector('[name="correo"]');
const estado=document.querySelector("#estado");
form.addEventListener("submit",event=>{
  event.preventDefault();
  estado.textContent=correo.validity.valid ? "Datos válidos para la demo" : "Revisa el correo";
});`,'La validación nativa puede impedir que submit ocurra si el formulario es inválido; puede usarse reportValidity al comprobarlo explícitamente. No confundir esta demo local con enviar y validar datos en un servidor.'),
E('B4','Copiar y actualizar un objeto','Crea una versión de un producto con precio 120 sin cambiar el objeto recibido.',['Nuevo objeto','Spread y sobrescritura','Explicar copia superficial'],'JavaScript',`const original={nombre:"Café",precio:100};
const actualizado={...original,precio:120};
console.log(original.precio); // 100
console.log(actualizado.precio); // 120`,'La copia es superficial: objetos anidados seguirían compartidos salvo que se copien también. const no es la razón de que aquí se conserve el original; lo conserva la creación de otro objeto.'),
E('B4','Convertir datos a JSON y recuperarlos','Serializa dos productos y vuelve a leerlos sin evaluar código.',['JSON.stringify','JSON.parse','Distinguir texto y arreglo'],'JavaScript',`const productos=[{nombre:"Café",precio:100},{nombre:"Té",precio:80}];
const texto=JSON.stringify(productos);
const copia=JSON.parse(texto);
console.log(typeof texto); // string
console.log(Array.isArray(copia)); // true`,'JSON no conserva cualquier valor de JavaScript ni sus métodos. Para estos datos simples es adecuado; parse debe capturar errores cuando el texto es externo.'),
// B5 · Nueve ejercicios nuevos de APIs.
E('B5','Cargar JSON comprobando HTTP','Escribe una función que reciba una URL y devuelva JSON solo si la respuesta HTTP es correcta.',['async','res.ok','Esperar el cuerpo'],'JavaScript',`async function leerJSON(url) {
  const res=await fetch(url);
  if (!res.ok) throw new Error("HTTP "+res.status);
  return await res.json();
}`,'El rechazo de red, un estado fallido que conviertes en error y un cuerpo no JSON pueden llegar al llamador como excepciones. Este debe decidir cómo representarlas.'),
E('B5','Comprobar el esquema products','Valida que datos.products sea un arreglo y que cada producto tenga title string y price finito.',['Array.isArray','Comprobar cada elemento','Error explícito'],'JavaScript',`function validar(datos) {
  if (!Array.isArray(datos?.products) ||
      !datos.products.every(p=>p && typeof p.title==="string" &&
        typeof p.price==="number" && Number.isFinite(p.price))) {
    throw new Error("Catálogo inválido");
  }
  return datos.products;
}`,'La sintaxis JSON válida no garantiza la estructura de la aplicación. Un arreglo vacío sí cumple este contrato mínimo.'),
E('B5','Diferenciar vacío y error','Completa una carga con #estado y una función mostrar(lista), separando carga, éxito vacío y fallo.',['Mensaje inicial','Comprobar lista vacía','catch con mensaje de error'],'JavaScript',`async function cargar() {
  estado.textContent="Cargando…";
  try {
    const lista=await obtenerProductos();
    mostrar(lista);
    estado.textContent=lista.length ? "Productos cargados" : "No hay productos";
  } catch {
    estado.textContent="No se pudo cargar";
  }
}`,'obtenerProductos debe resolver una lista validada o rechazar. mostrar debe reemplazar la vista anterior y gestionar una lista vacía de manera coherente.'),
E('B5','Recuperar el botón al terminar','Consulta datos con un botón desactivado durante la espera y restablécelo al éxito o al fallo.',['Bloque try/catch/finally','Evitar afirmar éxito en finally','Comunicar fallo'],'JavaScript',`async function actualizar() {
  boton.disabled=true;
  try { mostrar(await obtenerProductos()); }
  catch { estado.textContent="Falló la actualización"; }
  finally { boton.disabled=false; }
}`,'finally restaura el control independientemente del resultado. En esta referencia boton, estado, mostrar y obtenerProductos son dependencias ya definidas.'),
E('B5','Construir una consulta de búsqueda','Genera la URL /api/productos?q=... con el texto del usuario sin concatenar la consulta de forma insegura.',['URLSearchParams','Conservar espacios y caracteres especiales','Usar la URL generada'],'JavaScript',`const parametros=new URLSearchParams({q:"café & té"});
const url="/api/productos?"+parametros.toString();
console.log(url);
// /api/productos?q=caf%C3%A9+%26+t%C3%A9`,'El formato codifica caracteres que tienen un papel especial en la consulta. El servidor también debe interpretar y validar el parámetro.'),
E('B5','Mostrar solo la búsqueda vigente','Evita que una consulta vieja sobrescriba la respuesta de una más reciente.',['Contador de versión','Comprobar versión en éxito','Comprobarla también en error'],'JavaScript',`let version=0;
async function buscar(texto) {
  const actual=++version;
  try {
    const lista=await consultar(texto);
    if (actual===version) mostrar(lista);
  } catch {
    if (actual===version) estado.textContent="No se pudo buscar";
  }
}`,'El patrón protege la vista frente al orden de llegada, aunque no ahorra por sí solo las solicitudes anteriores. La cancelación es otra decisión posible.'),
E('B5','Enviar una propuesta como JSON','Escribe la parte de una petición POST para enviar nombre y correo a /api/contacto.',['Método POST','Content-Type','JSON.stringify y estado HTTP'],'JavaScript',`async function enviar(nombre,correo) {
  const res=await fetch("/api/contacto",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({nombre,correo})
  });
  if (!res.ok) throw new Error("Envío rechazado: "+res.status);
  return res;
}`,'El endpoint debe existir y aceptar este contrato. No se fuerza res.json si la respuesta puede carecer de cuerpo, por ejemplo un 204. La página de repaso no ejecuta el envío.'),
E('B5','Usar un JSON local con manejo de fallo','Carga ./datos/productos.json desde una página servida por HTTP y comprueba que contiene un arreglo.',['Ruta relativa a la página','Comprobar estado y estructura','No usar file como supuesto universal'],'JavaScript',`async function cargarLocal() {
  const res=await fetch("./datos/productos.json");
  if (!res.ok) throw new Error("No se encontró el archivo");
  const productos=await res.json();
  if (!Array.isArray(productos)) throw new Error("Se esperaba una lista");
  return productos;
}`,'Un archivo del mismo proyecto no elimina la necesidad de manejar errores. La ruta debe comprobarse desde la ubicación de la página que realiza la petición.'),
E('B5','Permitir un reintento manual','Con un botón #reintentar, conecta una función cargar y evita que se ejecute al registrar el evento.',['Callback de evento','Estado de carga protegido','Restablecer el control'],'JavaScript',`const boton=document.querySelector("#reintentar");
boton.addEventListener("click",async()=>{
  if (boton.disabled) return;
  boton.disabled=true;
  try { await cargar(); }
  catch { estado.textContent="Sigue sin poder cargarse"; }
  finally { boton.disabled=false; }
});`,'El reintento manual no es un bucle infinito ni una garantía de éxito. cargar debe cumplir su contrato de errores y el control debe seguir disponible tras fallar.'),
// B6 · Cuatro ejercicios nuevos de diseño aplicado.
E('B6','Convertir 12 columnas en tarjetas legibles','Crea una retícula de 12 columnas con cuatro tarjetas por fila amplia, dos a ancho medio y una en pequeño.',['span 3, 6 y 12','Separación consistente','Puntos de cambio de ejemplo'],'CSS',`.grid { display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:24px; }
.tarjeta { grid-column:span 3; }
@media(max-width:850px){ .tarjeta { grid-column:span 6; } }
@media(max-width:550px){ .tarjeta { grid-column:span 12; } }`,'La retícula define proporciones, no el número obligatorio de componentes. Comprueba el título más largo de las tarjetas y adapta los puntos de cambio al contenido.'),
E('B6','Jerarquía tipográfica de una ficha','Diseña título, subtítulo y cuerpo con interlínea y ancho de lectura.',['Tamaños diferenciados','Cuerpo legible','Evitar que la escala rompa el móvil'],'CSS',`.texto { max-width:65ch; }
h1 { font-size:clamp(2rem,5vw,3.5rem); line-height:1.15; }
h2 { font-size:1.6rem; line-height:1.3; }
p { font-size:1rem; line-height:1.7; }
small { font-size:.875rem; }`,'La jerarquía visual complementa la estructura semántica, no la reemplaza. Los valores son un punto de partida y requieren probar texto largo y ampliación.'),
E('B6','Aplicar proximidad y repetición','Organiza una ficha con nombre, precio, descripción y acción; diferencia su separación interna de la separación entre fichas.',['Agrupar nombre y precio','Repetir el componente','Separación entre grupos'],'HTML + CSS',`<article class="producto">
  <div class="producto-cabecera"><h3>Café</h3><p>RD$100</p></div>
  <p>Preparado al momento.</p>
  <a href="contacto.html">Consultar</a>
</article>
<style>
.producto { padding:24px; border:1px solid #ccd5e8; border-radius:12px; }
.producto-cabecera { display:flex; justify-content:space-between; gap:16px; }
.producto + .producto { margin-top:24px; }
</style>`,'La agrupación muestra relaciones y la repetición facilita comparar. Si el título crece, revisar envoltura y distribución, sin sacrificar información para mantener una fila rígida.'),
E('B6','Señalar un error sin depender del rojo','Asocia un mensaje de error a un input y añade un foco de teclado visible.',['aria-describedby','aria-invalid cuando el dato es inválido','Texto de corrección y estilo de foco'],'HTML + CSS',`<label for="correo">Correo</label>
<input id="correo" type="email" aria-invalid="true" aria-describedby="error-correo">
<p id="error-correo">Escribe un correo con el formato nombre@dominio.</p>
<style>
input:focus-visible { outline:3px solid #233de0; outline-offset:3px; }
</style>`,'El mensaje debe reflejar el error real y los estados aria actualizarse al corregir. El color puede acompañar, pero no ser la única señal.')
];
