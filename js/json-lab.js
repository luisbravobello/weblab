/* JSON: interpretación local sin eval, código ejecutable ni peticiones externas. */
const jsonEditor = document.querySelector("#json-editor");
const jsonExample = document.querySelector("#json-example");
const jsonStatus = document.querySelector("#json-status");
const jsonOutput = document.querySelector("#json-output");
const jsonCard = document.querySelector("#json-card");

// Validar la sintaxis y comprobar los campos son tareas distintas.
function readJson(formatEditor = false) {
  jsonCard.hidden = true;
  try {
    const value = JSON.parse(jsonEditor.value);
    const formatted = JSON.stringify(value, null, 2);
    jsonOutput.textContent = formatted;
    if (formatEditor) jsonEditor.value = formatted;
    jsonEditor.setAttribute("aria-invalid", "false");
    jsonStatus.textContent = "JSON válido. Revisa su estructura y sus valores.";
    const isPokemon =
      value !== null &&
      !Array.isArray(value) &&
      typeof value === "object" &&
      typeof value.nombre === "string" &&
      typeof value.numero === "number" &&
      Array.isArray(value.tipos) &&
      value.tipos.every((type) => typeof type === "string") &&
      typeof value.favorito === "boolean";
    if (isPokemon) {
      document.querySelector("#json-name").textContent = value.nombre;
      document.querySelector("#json-number").textContent =
        `Número: ${value.numero}`;
      document.querySelector("#json-types").textContent =
        `Tipos: ${value.tipos.join(" · ") || "Sin tipos en el ejemplo"}`;
      document.querySelector("#json-favorite").textContent = value.favorito
        ? "Marcado como favorito"
        : "Sin marcar como favorito";
      jsonCard.hidden = false;
    }
  } catch (error) {
    jsonEditor.setAttribute("aria-invalid", "true");
    jsonStatus.textContent =
      "JSON no válido. Revisa las comillas dobles, comas y cierres.";
    jsonOutput.textContent = error.message;
  }
}

// Los ejemplos viven en plantillas HTML, separados de la lógica del editor.
function loadJsonExample() {
  jsonEditor.value = document
    .querySelector(`#json-example-${jsonExample.value}`)
    .content.textContent.trim();
  readJson();
}
document.querySelector("#json-form").addEventListener("submit", (event) => {
  event.preventDefault();
  readJson();
});
jsonExample.addEventListener("change", loadJsonExample);
document
  .querySelector("#json-format")
  .addEventListener("click", () => readJson(true));
document
  .querySelector("#json-reset")
  .addEventListener("click", loadJsonExample);
// Una edición invalida la vista anterior hasta la siguiente comprobación.
jsonEditor.addEventListener("input", () => {
  jsonCard.hidden = true;
  jsonEditor.removeAttribute("aria-invalid");
  jsonStatus.textContent =
    "Texto modificado. Pulsa Validar y mostrar para comprobarlo.";
  jsonOutput.textContent = "Pendiente de validar.";
});
readJson();
