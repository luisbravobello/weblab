/* =========================================================
   WEBLAB · NAVEGACIÓN
   El contenido educativo y las plantillas viven en HTML.
   ========================================================= */
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#main-nav");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
  navigation.classList.remove("is-open");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  navigation.classList.toggle("is-open", open);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
new ResizeObserver(() => {
  document.documentElement.style.setProperty(
    "--header-height",
    document.querySelector(".site-header").offsetHeight + "px",
  );
}).observe(document.querySelector(".site-header"));
matchMedia("(max-width:940px)").addEventListener("change", closeMenu);

/* 02. EJEMPLO DE LA PORTADA */
document.querySelector("#home-demo")?.addEventListener("click", () => {
  const message = document.querySelector("#home-message");
  message.textContent = message.textContent.startsWith("Tu idea")
    ? "JavaScript acaba de cambiar este mensaje."
    : "Tu idea empieza con una estructura.";
});

/* 03. BÚSQUEDA EN LA REFERENCIA */
const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const referenceSearch = document.querySelector("#reference-search");
if (referenceSearch) {
  const category = document.querySelector("#reference-category");
  const cards = [...document.querySelectorAll("[data-reference]")];
  function filterReference() {
    const query = normalize(referenceSearch.value.trim());
    let visible = 0;
    cards.forEach((card) => {
      card.hidden =
        !normalize(card.dataset.keywords).includes(query) ||
        (category.value && card.dataset.category !== category.value);
      if (!card.hidden) visible++;
    });
    document.querySelector(".reference-status").textContent = visible
      ? `${visible} de ${cards.length} fichas disponibles. Abre una para estudiar.`
      : "No hay coincidencias. Prueba otro término o limpia los filtros.";
  }
  referenceSearch.addEventListener("input", filterReference);
  category.addEventListener("change", filterReference);
  document
    .querySelector("[data-clear-reference]")
    .addEventListener("click", () => {
      referenceSearch.value = "";
      category.value = "";
      filterReference();
      referenceSearch.focus();
    });
  filterReference();
}

/* 04. LABORATORIO: VISTA AISLADA Y CONSOLA */
const lab = document.querySelector("[data-lab]");
if (lab) {
  const frame = lab.querySelector("iframe");
  const editors = [...lab.querySelectorAll("[data-code]")];
  const initial = editors.map((editor) => editor.value);
  const log = lab.querySelector(".lab-console");
  let execution = 0;
  function runExample() {
    const id = ++execution;
    const value = (kind) =>
      editors.find((editor) => editor.dataset.code === kind)?.value || "";
    log.textContent = "Ejemplo ejecutado. Interactúa con el resultado.";
    // El token distingue mensajes de una ejecución anterior y source verifica el iframe.
    const bridge = `
      const send = (kind, text) => parent.postMessage({source:'weblab', id:${id}, kind, text}, '*');
      console.log = (...args) => send('log', args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '));
      window.addEventListener('error', event => send('error', event.message));
      window.addEventListener('unhandledrejection', event => send('error', String(event.reason)));
    `;
    const safeScript = value("js").replace(/<\/script/gi, "<\\/script");
    const safeCss = value("css").replace(/<\/style/gi, "<\\/style");
    // CSP evita que los ejemplos carguen recursos de red; sandbox aísla el documento.
    const network =
      lab.dataset.network === "jsonplaceholder"
        ? "connect-src https://jsonplaceholder.typicode.com;"
        : "";
    frame.srcdoc = `<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; ${network} script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; form-action 'none'"><style>${safeCss}</style><script>${bridge}<\/script></head><body>${value("html")}<script>${safeScript}<\/script></body></html>`;
  }
  window.addEventListener("message", (event) => {
    if (
      event.source !== frame.contentWindow ||
      event.data?.source !== "weblab" ||
      event.data.id !== execution
    )
      return;
    if (log.textContent.startsWith("Ejemplo ejecutado")) log.textContent = "";
    log.textContent = (
      log.textContent +
      (event.data.kind === "error" ? "Error: " : "") +
      String(event.data.text) +
      "\n"
    ).slice(-6000);
  });
  lab.querySelector("[data-run]").addEventListener("click", runExample);
  lab.querySelector("[data-reset]").addEventListener("click", () => {
    lab.dataset.network = "";
    editors.forEach((editor, index) => {
      editor.value = initial[index];
    });
    runExample();
  });
  runExample();
}

/* 05. CONTROLES VISUALES DE CSS */
const cssControls = document.querySelector("#css-controls");
if (cssControls) {
  function updateCssDemo() {
    const padding = document.querySelector("#box-padding").value;
    const radius = document.querySelector("#box-radius").value;
    const color = document.querySelector("#box-color").value;
    const columns = document.querySelector("#grid-columns").value;
    const box = document.querySelector("#box-demo");
    box.style.padding = padding + "px";
    box.style.borderRadius = radius + "px";
    box.style.backgroundColor = color;
    document.querySelector("#grid-demo").style.gridTemplateColumns =
      `repeat(${columns}, minmax(0, 1fr))`;
    document.querySelector("#padding-value").value = padding + " px";
    document.querySelector("#radius-value").value = radius + " px";
    document.querySelector("#css-generated").textContent =
      `.caja {\n  padding: ${padding}px;\n  border-radius: ${radius}px;\n  background: ${color};\n}\n.grid {\n  grid-template-columns: repeat(${columns}, 1fr);\n}`;
  }
  cssControls.addEventListener("input", updateCssDemo);
  cssControls.addEventListener("reset", () =>
    requestAnimationFrame(updateCssDemo),
  );
  updateCssDemo();
}

/* 06. CONTADOR: ESTADO Y EVENTOS */
const counter = document.querySelector("#counter-value");
if (counter) {
  let count = 0;
  document.querySelectorAll("[data-count]").forEach((button) =>
    button.addEventListener("click", () => {
      count += Number(button.dataset.count);
      counter.value = count;
    }),
  );
  document.querySelector("#counter-reset").addEventListener("click", () => {
    count = 0;
    counter.value = 0;
  });
}

/* 07. PREGUNTAS DE REPASO */
document.querySelectorAll(".quiz").forEach((quiz) =>
  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = new FormData(quiz).get("answer");
    const result = quiz.querySelector(".quiz-result");
    const correct = answer === quiz.dataset.answer;
    result.classList.toggle("correct", correct);
    result.textContent =
      (correct ? "Correcto. " : "Revisa tu elección. ") + result.dataset.reason;
  }),
);
