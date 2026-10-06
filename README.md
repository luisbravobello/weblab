# WebLab

Web de estudio en español sobre **HTML, CSS, JavaScript, diseño visual y práctica**, creada sin frameworks. Incluye una portada y 14 páginas de estudio, ejercicios y documentación.

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Portada, recorrido de aprendizaje y ejemplo interactivo |
| `html.html` | Anatomía del documento, semántica, atributos, referencia de elementos y laboratorio |
| `css.html` | Cascada, modelo de caja, selectores, propiedades y controles visuales |
| `javascript.html` | Datos, funciones, DOM, eventos, asincronía, contador y consola |
| `composicion.html` | Jerarquía, retícula de 12 columnas, distribuciones, sistema de 8 puntos y C.R.A.P. |
| `tipografia.html` | Seis familias, 12 fuentes reales, 15 contextos y escalas tipográficas |
| `color.html` | Diez tonos, armonías HSL, 15 paletas, regla 60–30–10 y contraste |
| `accesibilidad.html` | Teclado, foco, formularios, imágenes y revisión |
| `adaptable.html` | Simulador de anchos y detección de desbordamiento |
| `practicas.html` | Seis retos, seis ejercicios de errores y progreso local |
| `componentes.html` | Pestañas, acordeones, modal, tablas y listas |
| `proyecto.html` | Proyecto completo y editable en cuatro etapas |
| `glosario.html` | Treinta términos con búsqueda y documentación |
| `fuentes.html` | Fuentes, estándares, guías y criterio editorial |
| `paletas.html` | Creador de paletas aplicado a 31 tipos de página con 12 plantillas completas |

## Cómo estudiar

### Tutoriales paso a paso

Las páginas HTML, CSS y JavaScript empiezan con un recorrido acumulativo:

- **HTML: 12 pasos**, desde crear `index.html` hasta añadir texto, regiones, navegación, listas, imágenes, tablas, formularios y un desplegable nativo.
- **CSS: 10 pasos**, desde conectar `assets/style.css` hasta construir tipografía, espacios, colores, distribución, foco, adaptación y un experimento de cascada.
- **JavaScript: 10 pasos**, desde conectar `js/app.js` hasta seleccionar elementos, cambiar texto, manejar eventos, estado y colecciones, y estudiar un patrón de guardado con errores.

Cada paso incluye objetivo, pieza añadida, posición, resultado esperado y enlaces a referencias concretas. El editor muestra los archivos acumulados. Puedes aplicar cambios, quitar la pieza del paso, modificar su posición, restablecerla y comparar anchos.

Los controles de HTML actúan sobre el nodo completo; quitar un contenedor elimina también sus hijos. Para quitar solo una etiqueta o una instrucción, utiliza el editor. Las variantes CSS y JavaScript retiran o mueven el bloque añadido, no cualquier instrucción del archivo.

El navegador normaliza HTML al analizarlo. La vista previa incrusta CSS y JavaScript para ejecutarlos en un marco aislado, mientras el editor mantiene los enlaces que usarías en archivos reales. El tutorial HTML no añade JavaScript de aplicación; los controles del laboratorio utilizan scripts auxiliares para aislar la vista y evitar envíos reales.

El marco puede impedir localStorage: el último paso explica esa limitación y no promete persistencia automática de todos los cambios. El progreso de WebLab se guarda en la página principal, fuera del marco, si el navegador lo permite.

1. Lee los fundamentos y la historia de cada tecnología.
2. Busca una ficha por nombre o filtra por categoría.
3. Abre la ficha para revisar qué hace, cuándo usarla y cuándo evitarla.
4. Cambia un valor en el laboratorio y pulsa **Ejecutar**.
5. Compara el resultado con tu expectativa y responde la pregunta de repaso.

Los laboratorios HTML y CSS permiten editar estructura y estilos. El laboratorio JavaScript añade un editor de código y una consola con mensajes y errores. Los cambios no persisten al cerrar o recargar la página.

El progreso marcado sí se conserva mediante localStorage para el mismo origen y navegador. No se sincroniza entre dispositivos. Si el almacenamiento no está disponible, se indica la limitación. Puedes reiniciar únicamente el registro de WebLab desde la página de prácticas.

## Estructura

```text
weblab/
├── index.html
├── html.html
├── css.html
├── javascript.html
├── composicion.html
├── tipografia.html
├── color.html
├── accesibilidad.html
├── adaptable.html
├── practicas.html
├── componentes.html
├── proyecto.html
├── glosario.html
├── fuentes.html
├── paletas.html
├── README.md
├── FUENTES.md
├── assets/
│   ├── style.css
│   ├── design.css
│   ├── study.css
│   ├── palette.css
│   ├── palette-preview.css
│   ├── tutorial.css
│   └── tutorial-grid.svg
└── js/
    ├── app.js
    ├── design-data.js
    ├── design.js
    ├── study.js
    ├── palette.js
    └── tutorial.js
```

El contenido y la estructura están en HTML. CSS controla el diseño adaptable, las tipografías y los estados visuales. JavaScript maneja navegación móvil, búsqueda local, laboratorios, contador y comprobación de respuestas.

## Laboratorios de diseño visual

- Compara el mismo contenido con y sin jerarquía visual.
- Cambia las proporciones y gutters de una retícula de 12 columnas. En móvil, la muestra conserva sus columnas y permite desplazamiento horizontal dentro del laboratorio.
- Examina 31 tipos de página, incluidos producto, carrito, checkout, reservas, precios, restaurante, evento, curso, centro de ayuda, comunidad, chat y páginas de estado. Se agrupan en seis patrones de retícula reutilizables, con contenido y recomendaciones específicos.
- Ajusta padding y gap con una unidad base de 8 o 4 px.
- Activa o desactiva contraste, repetición, alineación y proximidad.
- Escribe una palabra y compárala en 12 familias tipográficas cargadas desde Google Fonts.
- Prueba combinaciones de título y cuerpo para 15 contextos; ajusta tamaños, escala e interlínea.
- Explora tonos, armonías HSL y paletas aplicadas; personaliza nombre y colores del negocio.
- Observa la proporción orientativa 60–30–10 y comprueba contraste entre texto y fondo.

Las asociaciones de color y tipografía son orientaciones, no reglas universales. Los colores de muestra no son especificaciones oficiales de las marcas citadas. La clasificación tipográfica se solapa: slab es una clase de serif y display describe un uso. El contraste se calcula con luminancia relativa; el cumplimiento no se decide usando el valor redondeado que se muestra.

## Abrir localmente

Abre la carpeta en tu editor y sirve `index.html` con **Live Server** o cualquier servidor HTTP estático. No necesitas instalar dependencias ni ejecutar una compilación.

El contenido de estudio es local. La lección de fetch consulta datos ficticios de JSONPlaceholder. Google Fonts necesita internet; si no está disponible, se usan fuentes alternativas locales. Las vistas se ejecutan en iframes con `sandbox` y políticas CSP: los laboratorios generales bloquean recursos de red; los tutoriales permiten la imagen local de ejemplo, y el creador de paletas carga su CSS local.

## Alcance de la referencia

- **HTML:** 114 fichas, incluidos los seis niveles de encabezado y las raíces de SVG y MathML. Los elementos históricos obsoletos se identifican por separado. Las propuestas experimentales de los estándares pueden cambiar y no se presentan como herramientas estables.
- **CSS:** selectores, propiedades, funciones y reglas principales. No pretende reemplazar la referencia completa de todas las propiedades y módulos CSS.
- **JavaScript:** conceptos esenciales, métodos habituales y algunas APIs del navegador, con una distinción entre ECMAScript y las APIs web.

Las fichas son explicaciones educativas breves. Consulta los enlaces de documentación para casos avanzados, sintaxis completa y compatibilidad. Los fragmentos de la referencia pueden necesitar el contexto mostrado o variables adicionales; los laboratorios iniciales sí son ejemplos completos.

## Creador de paletas en páginas completas

El laboratorio de `paletas.html` permite combinar tipo de página y contexto de negocio. Sus 31 opciones comparten 12 plantillas visuales completas: landing, portafolio, editorial, catálogo, panel, documentación, producto, proceso con formulario, precios, chat, perfil y estado.

Puedes ajustar fondo, superficie, acento y texto en tiempo real, probar tres anchos de viewport, generar superficies desde un acento mediante relaciones HSL, comprobar contraste y copiar el CSS. Los botones de las maquetas están desactivados: no son tiendas ni servicios reales. El cambio de paleta conserva la vista; cambiar de plantilla reinicia el documento del ejemplo.

La página enlaza Coolors, Adobe Color, Realtime Colors, Happy Hues y Color Hunt, con una explicación de su uso y recomendaciones por tarea. Las herramientas externas pueden cambiar sus funciones o planes. Los ejemplos propios no reproducen sus interfaces.

## Fuentes de consulta

Consulta [FUENTES.md](FUENTES.md) para conocer el criterio editorial y [fuentes.html](fuentes.html) para acceder a las referencias desde la web. Cada capítulo enlaza las fuentes relacionadas; el footer incluye accesos rápidos a estudio y documentación.

- [HTML Living Standard](https://html.spec.whatwg.org/)
- [Referencia HTML en MDN](https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements)
- [Referencia CSS en MDN](https://developer.mozilla.org/es/docs/Web/CSS/Reference)
- [W3C: CSS](https://www.w3.org/Style/CSS/)
- [Guía JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [ECMAScript](https://tc39.es/ecma262/)

## Accesibilidad y diseño

- Un `main` y un encabezado principal por página.
- Navegación móvil con estados accesibles y cierre por Escape.
- Formularios con etiquetas y controles nativos.
- Foco visible y enlace para saltar al contenido.
- Secciones, artículos, listas descriptivas y desplegables semánticos.
- Diseño con CSS Grid y Flexbox, adaptable a móviles.
- Preferencia de movimiento reducido respetada.
- Iconos SVG y tipografías Manrope, Space Grotesk y JetBrains Mono.



## Ruta de JavaScript: 11 temas para escribir

La página JavaScript añade una ruta previa al proyecto: consola y console.log; variables y tipos; operadores; if/else; funciones; arrays; for y forEach; objetos y JSON de APIs; DOM; eventos; fetch con async/await.

Cada lección tiene un objetivo, un código inicial para completar, una pista, una solución y un resultado explicado. Sus botones cargan el ejercicio en el laboratorio general de la página. La práctica de fetch permite únicamente el origen de JSONPlaceholder mediante CSP y consulta datos ficticios al pulsar el botón del ejemplo; las otras lecciones vuelven a bloquear conexiones externas.

## Comportamiento del simulador paso a paso

Quitar el enlace CSS o la referencia de app.js desconecta el contenido de esos editores. En JavaScript, quitar defer de un script en head permite observar consultas realizadas antes de que exista el cuerpo. El laboratorio no simula tiempos de descarga de async.

Un iframe srcdoc utiliza modo estándar incluso sin DOCTYPE: el tutorial identifica esa limitación y recomienda comprobar ese caso en un archivo real.

