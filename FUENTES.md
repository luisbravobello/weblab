# Fuentes y criterio editorial de WebLab

Revisión de documentación: **6 de octubre de 2026**.

La página [Documentación y fuentes](fuentes.html) relaciona cada referencia con el tema que apoya. Los capítulos también incluyen una sección de fuentes, y el footer ofrece accesos rápidos a la documentación.

## Qué se considera una fuente

- **Estándar:** define requisitos o comportamiento normativo. Una propuesta o borrador puede cambiar.
- **Documentación técnica:** explica uso, ejemplos y compatibilidad; complementa el estándar.
- **Fuente histórica institucional:** documenta el origen o evolución de una tecnología.
- **Material de diseño:** propone criterios y métodos; no equivale a un estándar técnico obligatorio.
- **Fuente de marca:** documenta una identidad concreta; no demuestra efectos psicológicos universales del color.

## Estándares

| Fuente | Información que apoya |
| --- | --- |
| [WHATWG: HTML Living Standard](https://html.spec.whatwg.org/) | Elementos, atributos, semántica y comportamiento HTML |
| [W3C: CSS](https://www.w3.org/Style/CSS/Overview.en.html) | Módulos CSS, estado de especificaciones y referencias |
| [Ecma International: ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) | Estándar ECMAScript y archivo de ediciones |
| [TC39: ECMAScript](https://tc39.es/ecma262/) | Sintaxis y comportamiento del lenguaje; consultar estado del texto |
| [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Criterios de accesibilidad |

## Guías y referencias de implementación

| Fuente | Información que apoya |
| --- | --- |
| [MDN: elementos HTML](https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements) | Referencia de elementos y uso |
| [MDN: CSS](https://developer.mozilla.org/es/docs/Web/CSS/Reference) | Propiedades, selectores, funciones y compatibilidad |
| [MDN: JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide) | Variables, funciones, objetos, colecciones y asincronía |
| [W3C WAI: tutoriales](https://www.w3.org/WAI/tutorials/) | Estructura, navegación, imágenes, formularios y tablas |
| [W3C WAI: formularios](https://www.w3.org/WAI/tutorials/forms/) | Etiquetas, instrucciones, validación y resultados |
| [W3C WAI: decisión de alt](https://www.w3.org/WAI/tutorials/images/decision-tree/) | Texto alternativo según la función de la imagen |
| [W3C APG: patrones](https://www.w3.org/WAI/ARIA/apg/patterns/) | Roles, estados y teclado de componentes |
| [MDN: diseño adaptable](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) | Flujo, distribución y adaptación al espacio |
| [W3C: contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Luminancia relativa y umbrales de texto |
| [W3C: reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | Adaptación y presentación al ampliar contenido |
| [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Persistencia local por origen y limitaciones |

Los patrones APG son guías de implementación. Copiar uno no demuestra por sí solo que una interfaz completa sea accesible: hay que verificar nombre, foco, teclado, contenido y compatibilidad.

## Diseño visual e historia

- [Google Fonts Knowledge](https://fonts.google.com/knowledge): anatomía, clasificación y elección tipográfica. Las familias de las muestras enlazan sus páginas y licencias.
- [Robin Williams: The Non-Designer’s Design Book, editorial Peachpit](https://www.peachpit.com/store/non-designers-design-book-design-and-typographic-principles-9780133966152): contraste, repetición, alineación y proximidad.
- [CERN: The birth of the Web](https://home.cern/science/computing/the-birth-of-the-web/): origen de la web y trabajo de Tim Berners-Lee.
- [W3C: CSS](https://www.w3.org/Style/CSS/Overview.en.html): contexto y referencias de historia de CSS.
- [Ecma: archivo de ediciones](https://ecma-international.org/publications-and-standards/standards/ecma-262/): fechas de ediciones del estándar JavaScript.

### Ejemplos de marca

- [Coca-Cola: color corporativo rojo](https://www.coca-cola.com/es/es/about-us/faq/por-que-el-color-corporativo-de-coca-cola-es-rojo)
- [Spotify: design guidelines](https://developer.spotify.com/documentation/design)
- [IKEA: historia y diseño del logo](https://www.ikea.com/ph/en/this-is-ikea/about-us/the-ikea-logo-history-and-design-pub55d85f50/)

Estos enlaces respaldan ejemplos concretos de identidad. Los colores de los controles de WebLab son muestras educativas, no especificaciones oficiales de esas marcas.

## API de práctica

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) aporta los datos ficticios para la lección de fetch. Se comprobó una consulta GET desde el laboratorio al recurso `/todos/1`. Es un servicio externo: requiere internet y el ejemplo gestiona errores de carga. No se utilizan datos de personas reales ni se envían formularios a esa API.

## Herramientas para crear paletas

Recomendaciones revisadas en sus páginas de origen el 6 de octubre de 2026:

- [Coolors](https://coolors.co/): generación y exploración de combinaciones.
- [Adobe Color](https://color.adobe.com/): armonías, extracción y exploración cromática.
- [Realtime Colors](https://www.realtimecolors.com/): visualización de colores y fuentes en una página de ejemplo.
- [Happy Hues](https://www.happyhues.co/): paletas aplicadas a elementos de interfaz.
- [Color Hunt](https://colorhunt.co/): colecciones de paletas como inspiración.

Estas herramientas no establecen un color obligatorio para cada sector. Las recomendaciones de WebLab relacionan capacidades de las herramientas con tareas de diseño, y se presentan como orientación. El laboratorio local, sus algoritmos y sus plantillas son propios.

## Ejemplos y alcance

Las explicaciones están redactadas para estudiar; las muestras, retos, diagramas y proyectos son propios. No se atribuyen a las fuentes como reproducciones literales.

La retícula de 12 columnas, el sistema de 8 puntos, la pauta 60–30–10 y las combinaciones por negocio son herramientas prácticas. No se presentan como requisitos universales ni como garantías de resultados.

Las páginas no constituyen una auditoría completa, una certificación, ni una referencia exhaustiva de todas las APIs. Las pruebas locales cubren comportamientos concretos de los ejemplos; un producto real requiere pruebas adicionales de contenido, estados y compatibilidad.


