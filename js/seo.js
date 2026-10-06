/* SEO · Vista didáctica local, sin consultas a Google ni publicación de datos. */
const form = document.querySelector("#seo-form");
const title = document.querySelector("#seo-title");
const description = document.querySelector("#seo-description");
const urlInput = document.querySelector("#seo-url");
const checks = [...document.querySelectorAll("[data-seo-check]")];

// El código se muestra como texto. Escapamos los valores para que el ejemplo
// se pueda copiar sin romper las etiquetas si contiene comillas o símbolos.
function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function updateSeoPreview() {
  const pageTitle = title.value.trim();
  const summary = description.value.trim();
  let canonical = "";
  try {
    const url = new URL(urlInput.value.trim());
    if (
      !["https:", "http:"].includes(url.protocol) ||
      url.username ||
      url.password
    )
      throw new Error();
    url.hash = ""; // El fragmento no identifica otra página para este ejemplo.
    canonical = url.href;
  } catch {
    /* Una URL incompleta no se añade al código generado. */
  }
  urlInput.setAttribute("aria-invalid", String(!canonical));
  document.querySelector("#seo-preview-url").textContent =
    canonical || "Introduce una URL HTTP o HTTPS completa";
  document.querySelector("#seo-preview-heading").textContent =
    pageTitle || "Aquí aparecerá tu título";
  document.querySelector("#seo-preview-description").textContent =
    summary || "Escribe un resumen del contenido de la página.";
  const code = [
    `<title>${escapeHtml(pageTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(summary)}" />`,
  ];
  if (canonical)
    code.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  document.querySelector("#seo-head-code").textContent = code.join("\n");
  const missing = [];
  if (!pageTitle) missing.push("el título");
  if (!summary) missing.push("la descripción");
  if (!canonical) missing.push("una URL HTTP o HTTPS válida");
  document.querySelector("#seo-feedback").textContent = missing.length
    ? `Completa ${missing.join(", ")}. Esto solo comprueba campos, no el posicionamiento.`
    : `Título: ${pageTitle.length} caracteres · Descripción: ${summary.length}. Revisa que describan bien tu contenido; el recuento no es una puntuación SEO.`;
}

form.addEventListener("input", updateSeoPreview);
form.addEventListener("submit", (event) => event.preventDefault());
document.querySelector("#seo-reset").addEventListener("click", () => {
  form.reset();
  updateSeoPreview();
});
checks.forEach((check) =>
  check.addEventListener("change", () => {
    const completed = checks.filter((input) => input.checked).length;
    document.querySelector("#seo-check-status").textContent =
      `${completed} de ${checks.length} puntos revisados durante esta visita.`;
  }),
);
updateSeoPreview();
