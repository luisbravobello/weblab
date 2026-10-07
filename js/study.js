/* =========================================================
   ESTUDIO · PROGRESO LOCAL Y EJEMPLOS INTERACTIVOS
   ========================================================= */
/* Ratón en escritorio; clic y teclado conservan el comportamiento nativo. */
const desktopDropdowns = matchMedia("(min-width:941px) and (hover:hover)");
const headerDropdowns = [...document.querySelectorAll("#main-nav > details")];
headerDropdowns.forEach((dropdown) => {
  dropdown.addEventListener("pointerenter", (event) => {
    if (!desktopDropdowns.matches || event.pointerType !== "mouse") return;
    headerDropdowns.forEach((other) => {
      other.open = other === dropdown;
    });
  });
  dropdown.addEventListener("pointerleave", (event) => {
    if (
      desktopDropdowns.matches &&
      event.pointerType === "mouse" &&
      !dropdown.contains(document.activeElement)
    )
      dropdown.open = false;
  });
  // No cerramos por focusout: Safari puede desenfocar antes de emitir el clic
  // del enlace. Los enlaces mantienen su navegación HTML nativa mediante href.
  dropdown.addEventListener("toggle", () => {
    if (!dropdown.open) return;
    headerDropdowns.forEach((other) => {
      if (other !== dropdown) other.open = false;
    });
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const activeDropdown = document.activeElement.closest("#main-nav > details");
  headerDropdowns.forEach((dropdown) => {
    dropdown.open = false;
  });
  activeDropdown?.querySelector("summary").focus();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("#main-nav"))
    headerDropdowns.forEach((dropdown) => {
      dropdown.open = false;
    });
});
const studyId = (id) => document.getElementById(id);
const studyStorageKey = "weblab-study-progress-v1";
let studyProgress = {};
let studyStorageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(studyStorageKey) || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved))
    studyProgress = saved;
} catch {
  studyStorageAvailable = false;
}
const studyTopics = [
  "seo",
  "json",
  "redes",
  "html",
  "css",
  "javascript",
  "composicion",
  "tipografia",
  "color",
  "accesibilidad",
  "adaptable",
  "componentes",
  "proyecto",
  "practicas",
  "glosario",
  "paletas",
  "reto-card",
  "reto-form",
  "reto-grid",
  "reto-menu",
  "reto-counter",
  "reto-filter",
];
function updateStudyProgress() {
  document.querySelectorAll("[data-progress]").forEach((input) => {
    input.checked = studyProgress[input.dataset.progress] === true;
  });
  const completed = studyTopics.filter(
    (topic) => studyProgress[topic] === true,
  ).length;
  if (studyId("study-progress-bar")) {
    studyId("study-progress-bar").max = studyTopics.length;
    studyId("study-progress-bar").value = completed;
    studyId("study-progress-count").textContent =
      `${completed} de ${studyTopics.length} temas y retos marcados.`;
    studyId("study-storage-note").textContent = studyStorageAvailable
      ? "Guardado localmente para este origen. Borrar los datos del navegador elimina el registro; otra dirección o dispositivo no lo comparte."
      : "El almacenamiento no está disponible. Puedes marcar el avance durante esta visita, pero puede perderse al recargar.";
  }
}
document.querySelectorAll("[data-progress]").forEach((input) =>
  input.addEventListener("change", () => {
    studyProgress[input.dataset.progress] = input.checked;
    try {
      localStorage.setItem(studyStorageKey, JSON.stringify(studyProgress));
    } catch {
      studyStorageAvailable = false;
    }
    updateStudyProgress();
    const feedback = document.querySelector(".progress-feedback");
    if (feedback)
      feedback.textContent = studyStorageAvailable
        ? "Progreso actualizado en este navegador."
        : "Actualizado para esta visita; no se pudo guardar.";
  }),
);
studyId("reset-study-progress")?.addEventListener("click", () => {
  studyProgress = {};
  try {
    localStorage.removeItem(studyStorageKey);
  } catch {
    studyStorageAvailable = false;
  }
  updateStudyProgress();
});
updateStudyProgress();

/* 02. ACCESIBILIDAD: TECLADO Y FORMULARIO LOCAL */
studyId("keyboard-action")?.addEventListener("click", () => {
  studyId("keyboard-result").textContent =
    "Activación recibida. El botón funciona con ratón, Enter o Espacio.";
});
for (const [button, dialog] of [
  ["a11y-dialog-open", "a11y-dialog"],
  ["component-dialog-open", "component-dialog"],
]) {
  studyId(button)?.addEventListener("click", () => studyId(dialog).showModal());
}
studyId("accessible-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = studyId("a11y-email");
  const error = studyId("a11y-email-error");
  const invalid = !email.validity.valid;
  email.setAttribute("aria-invalid", String(invalid));
  error.hidden = !invalid;
  if (invalid) {
    error.textContent = email.validity.valueMissing
      ? "Escribe un correo para comprobar el ejemplo."
      : "Introduce un correo con un formato válido, como nombre@dominio.com.";
    studyId("a11y-form-result").textContent = "Revisa el campo de correo.";
    email.focus();
  } else
    studyId("a11y-form-result").textContent =
      "Formato válido. No se han enviado ni guardado datos.";
});

/* 03. VISTA ADAPTABLE: SOLO CAMBIA EL ANCHO DEL MARCO */
if (studyId("responsive-frame")) {
  const frame = studyId("responsive-frame");
  let run = 0;
  function updateResponsiveExample() {
    const token = ++run;
    const width = studyId("responsive-width").value;
    frame.style.width = width + "px";
    const html = studyId("responsive-html").content.textContent;
    const css =
      studyId("responsive-css").content.textContent +
      (studyId("responsive-broken").checked ? "\nmain { width: 900px; }" : "");
    studyId("responsive-result").textContent = "Comprobando la muestra…";
    frame.srcdoc = `<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'"><style>${css}</style></head><body>${html}<script>function report(){parent.postMessage({source:'weblab-responsive',token:${token},width:innerWidth,overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth},'*');} window.addEventListener('load',()=>setTimeout(report,0)); window.addEventListener('resize',report);<\/script></body></html>`;
  }
  studyId("responsive-width").addEventListener(
    "change",
    updateResponsiveExample,
  );
  studyId("responsive-broken").addEventListener(
    "change",
    updateResponsiveExample,
  );
  window.addEventListener("message", (event) => {
    if (
      event.source !== frame.contentWindow ||
      event.data?.source !== "weblab-responsive" ||
      event.data.token !== run
    )
      return;
    studyId("responsive-result").textContent =
      `${event.data.width}px de viewport: ${event.data.overflow ? "hay desbordamiento horizontal dentro del ejemplo." : "el contenido cabe sin desbordamiento horizontal."}`;
  });
  updateResponsiveExample();
}

/* 04. RETOS Y ETAPAS DEL PROYECTO */
document.querySelectorAll("[data-load-exercise]").forEach((button) =>
  button.addEventListener("click", () => {
    const template = studyId("exercise-" + button.dataset.loadExercise);
    document.querySelector("[data-lab]").dataset.network =
      template.dataset.network || "";
    template.content.querySelectorAll("[data-exercise]").forEach((code) => {
      document.querySelector(`[data-code="${code.dataset.exercise}"]`).value =
        code.textContent;
    });
    document.querySelector("[data-run]").click();
    studyId("laboratorio").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
        ? "auto"
        : "smooth",
    });
  }),
);

/* 05. PESTAÑAS: ROLES, SELECCIÓN Y TECLADO */
const componentTabs = [...document.querySelectorAll('[role="tab"]')];
function selectComponentTab(tab, focus = false) {
  componentTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    studyId(item.getAttribute("aria-controls")).hidden = !selected;
  });
  if (focus) tab.focus();
}
componentTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectComponentTab(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % componentTabs.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + componentTabs.length) % componentTabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = componentTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectComponentTab(componentTabs[next], true);
    }
  });
});
