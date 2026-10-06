/* DNS Y HTTP · SIMULACIÓN LOCAL
 * HTML contiene los ejemplos; aquí solo se controla su visibilidad.
 * No se consultan dominios ni se envían solicitudes a servidores.
 */
const panels = [...document.querySelectorAll("[data-network-panel]")];
const stepButtons = [...document.querySelectorAll("[data-network-step]")];
const protocol = document.querySelector("#network-protocol");
const responseStatus = document.querySelector("#network-status");
const previous = document.querySelector("#network-prev");
const next = document.querySelector("#network-next");
let currentStep = 0;

// El paso actual y las opciones elegidas determinan el contenido visible.
function updateJourney() {
  panels.forEach((panel, index) => {
    panel.hidden = index !== currentStep;
  });
  stepButtons.forEach((button, index) => {
    if (index === currentStep) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  document.querySelectorAll("[data-network-https]").forEach((element) => {
    element.hidden = protocol.value !== "https";
  });
  document.querySelectorAll("[data-network-http]").forEach((element) => {
    element.hidden = protocol.value !== "http";
  });
  document.querySelectorAll("[data-network-response]").forEach((element) => {
    element.hidden = element.dataset.networkResponse !== responseStatus.value;
  });
  previous.disabled = currentStep === 0;
  next.disabled = currentStep === panels.length - 1;
  document.querySelector("#network-step-status").textContent =
    `Paso ${currentStep + 1} de ${panels.length}: ${stepButtons[currentStep].textContent}`;
}

stepButtons.forEach((button, index) =>
  button.addEventListener("click", () => {
    currentStep = index;
    updateJourney();
  }),
);
previous.addEventListener("click", () => {
  currentStep--;
  updateJourney();
});
next.addEventListener("click", () => {
  currentStep++;
  updateJourney();
});
protocol.addEventListener("change", updateJourney);
responseStatus.addEventListener("change", updateJourney);
document.querySelector("#network-reset").addEventListener("click", () => {
  currentStep = 0;
  protocol.value = "https";
  responseStatus.value = "200";
  updateJourney();
});

// Se comprueba la actividad sin navegar ni enviar el formulario.
document.querySelector("#network-quiz").addEventListener("submit", (event) => {
  event.preventDefault();
  const answers = new FormData(event.currentTarget);
  const score =
    Number(answers.get("dns-answer") === "address") +
    Number(answers.get("http-answer") === "resource");
  document.querySelector("#network-quiz-score").textContent =
    `${score} de 2 respuestas correctas. ${score === 2 ? "Has distinguido DNS y HTTP." : "Revisa la explicación y vuelve a intentarlo."}`;
  document.querySelector("#network-quiz-explanation").hidden = false;
});
updateJourney();
