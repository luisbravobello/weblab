/* TUTORIALES · EL CONTENIDO DE CADA PASO ESTÁ EN HTML */
const walkRoot = document.querySelector("[data-walkthrough]");
const walkNode = (id) => document.getElementById(id);
const walkLanguage = walkRoot.dataset.walkthrough;
const walkTemplates = [
  ...document.querySelectorAll('template[id^="walk-data-"]'),
];
let walkStep = 0;
let walkRun = 0;
const walkFrame = walkNode("walk-frame");
function walkCode(template, kind) {
  return template.content.querySelector(`[data-walk-code="${kind}"]`)
    .textContent;
}
function selectWalkStep(index, scroll = true) {
  walkStep = index;
  const step = walkTemplates[index];
  walkNode("walk-title").textContent = step.dataset.title;
  walkNode("walk-counter").textContent =
    `PASO ${index + 1} DE ${walkTemplates.length}`;
  ["goal", "change", "order", "expect"].forEach((key) => {
    walkNode("walk-" + key).textContent = step.dataset[key];
  });
  walkNode("walk-html").value = walkCode(step, "html");
  if (walkNode("walk-css")) walkNode("walk-css").value = walkCode(step, "css");
  if (walkNode("walk-js")) {
    const writing = walkNode("walk-writing")?.checked;
    walkNode("walk-js").value = writing
      ? index
        ? walkCode(walkTemplates[index - 1], "js")
        : ""
      : walkCode(step, "js");
    if (walkNode("writing-hint")) {
      walkNode("writing-hint").textContent =
        walkCode(step, "delta") ||
        "En este primer paso crea el archivo y conecta script con defer. Aún no necesitas instrucciones.";
      walkNode("writing-instruction").textContent = writing
        ? "Tu tarea: " + step.dataset.goal
        : "Modo de lectura: el editor muestra el programa completo de este paso.";
      walkNode("writing-hint").closest("details").open = false;
    }
  }
  const references = step.content.querySelector("nav").cloneNode(true);
  walkNode("walk-references").replaceChildren(...references.children);
  walkNode("walk-remove").checked = false;
  walkNode("walk-move").checked = false;
  const canExperiment =
    walkLanguage === "html"
      ? Boolean(step.dataset.target)
      : Boolean(walkCode(step, "delta"));
  walkNode("walk-remove").disabled = !canExperiment;
  walkNode("walk-move").disabled = !canExperiment;
  walkNode("walk-prev").disabled = index === 0;
  walkNode("walk-next").disabled = index === walkTemplates.length - 1;
  document.querySelectorAll("[data-walk-step]").forEach((button) => {
    if (Number(button.dataset.walkStep) === index)
      button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  renderWalk();
  if (scroll)
    walkRoot.querySelector(".walk-main").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
        ? "auto"
        : "smooth",
    });
}
function renderWalk() {
  const run = ++walkRun,
    step = walkTemplates[walkStep],
    remove = walkNode("walk-remove").checked,
    move = walkNode("walk-move").checked;
  let html = walkNode("walk-html").value,
    css = walkNode("walk-css")?.value || "",
    js = walkNode("walk-js")?.value || "";
  const delta = walkCode(step, "delta");
  const documentExample = new DOMParser().parseFromString(html, "text/html");
  const notes = [];
  if (walkLanguage === "html" && (remove || move)) {
    const target = documentExample.querySelector(step.dataset.target);
    if (target) {
      if (remove) {
        target.remove();
        notes.push(step.dataset.remove);
      } else {
        target.parentElement.append(target);
        notes.push(step.dataset.move);
      }
    } else
      notes.push(
        "La pieza no se encontró en tu HTML editado. Revisa el selector o restablece el paso.",
      );
  }
  if (walkLanguage !== "html" && (remove || move)) {
    let value = walkLanguage === "css" ? css : js;
    if (value.includes(delta)) {
      value = value.replace(delta, "");
      if (!remove) value = delta + "\n\n" + value;
      notes.push(remove ? step.dataset.remove : step.dataset.move);
    } else
      notes.push(
        "El bloque original ya no está completo en tu editor; no se pudo aplicar esta variante automáticamente.",
      );
    if (walkLanguage === "css") css = value;
    else js = value;
  }
  walkNode("walk-experiment-note").textContent =
    notes.join(" ") ||
    "Vista normal del paso. Los controles experimentan con el nodo completo de HTML o con el bloque de código añadido. Para cambiar solo una etiqueta o una instrucción, usa el editor.";
  // Las referencias del documento determinan si se conectan los archivos del editor.
  const hasCssLink = Boolean(
    documentExample.querySelector('link[rel="stylesheet"]'),
  );
  const scriptLink = documentExample.querySelector("script[src]");
  const hasScriptLink = Boolean(scriptLink);
  const scriptInHead =
    scriptLink?.parentElement === documentExample.head &&
    !scriptLink.hasAttribute("defer") &&
    scriptLink.getAttribute("type") !== "module";
  const doctype = documentExample.doctype
    ? new XMLSerializer().serializeToString(documentExample.doctype)
    : "";
  const normalized = doctype + "\n" + documentExample.documentElement.outerHTML;
  walkNode("walk-variant-html").textContent = normalized;
  // La vista incrusta los archivos locales: no descarga scripts externos.
  documentExample
    .querySelectorAll('script, link[rel="stylesheet"]')
    .forEach((node) => node.remove());
  if (walkNode("walk-variant-css"))
    walkNode("walk-variant-css").textContent = css;
  if (walkNode("walk-variant-js")) walkNode("walk-variant-js").textContent = js;
  walkNode("walk-console").textContent =
    "Vista ejecutada. Prueba los controles que aparecen en ella.";
  walkNode("walk-result-note").textContent = html.trim()
    ? "Resultado del documento de este paso. Puedes editarlo y volver a aplicar los cambios."
    : "El archivo está vacío: es normal no ver contenido todavía.";
  if (!doctype && html.trim())
    walkNode("walk-result-note").textContent +=
      " Falta DOCTYPE: un archivo real puede entrar en modo de compatibilidad. Este marco srcdoc mantiene el modo estándar; compruébalo también en tu archivo local.";
  if (walkLanguage !== "html" && !hasCssLink)
    walkNode("walk-result-note").textContent +=
      " No se aplica el CSS del editor porque falta link rel=stylesheet.";
  if (walkLanguage === "javascript" && !hasScriptLink)
    walkNode("walk-result-note").textContent +=
      " No se ejecuta app.js porque falta su script src.";
  if (scriptLink?.hasAttribute("async"))
    walkNode("walk-result-note").textContent +=
      " La vista no simula tiempos de descarga de async; usa defer para este recorrido.";
  const bridge = `const send=(kind,text)=>parent.postMessage({source:'weblab-walk',run:${run},kind,text},'*');console.log=(...args)=>send('log',args.map(value=>typeof value==='object'?JSON.stringify(value):String(value)).join(' '));window.addEventListener('error',event=>send('error',event.message));window.addEventListener('unhandledrejection',event=>send('error',String(event.reason)));document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(link){event.preventDefault();const id=link.getAttribute('href').slice(1);document.getElementById(id)?.scrollIntoView();}});${walkLanguage !== "javascript" ? "document.addEventListener('submit',event=>{event.preventDefault();send('log','Formulario válido. El laboratorio evita un envío real.');});" : ""}window.addEventListener('securitypolicyviolation',event=>{if(event.violatedDirective==='form-action')send('error','La vista previa bloquea el envío real del formulario.');});`;
  const safeCss = (hasCssLink ? css : "").replace(/<\/style/gi, "<\\/style"),
    safeJs = (hasScriptLink ? js : "").replace(/<\/script/gi, "<\\/script");
  const csp = `default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src ${location.origin} data:; form-action 'none'`;
  const head = documentExample.head.innerHTML;
  const focusPractice =
    walkLanguage === "javascript"
      ? "window.addEventListener('load',()=>document.getElementById('practica')?.scrollIntoView());"
      : "";
  const htmlTag =
    documentExample.documentElement.outerHTML.match(/^<html[^>]*>/)[0];
  const modeReport =
    "window.addEventListener('load',()=>send('mode',document.compatMode));";
  const bodyWithScripts = documentExample.body.outerHTML.replace(
    /<\/body>$/,
    `${scriptInHead ? "" : `<script>${safeJs}<\/script>`}</body>`,
  );
  // Los ejemplos enseñan un index.html en la raíz; sus recursos parten de allí.
  const exampleBase = new URL("../", location.href).href;
  const previewHtml = `${doctype}${htmlTag}<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="${csp}"><base href="${exampleBase}">${head}<style>${safeCss}</style><script>${bridge}${focusPractice}${modeReport}<\/script>${scriptInHead ? `<script>${safeJs}<\/script>` : ""}</head>${bodyWithScripts}</html>`;
  walkFrame.removeAttribute("src");
  walkFrame.srcdoc = previewHtml;
  walkFrame.style.width =
    walkNode("walk-width").value === "fluid"
      ? "100%"
      : walkNode("walk-width").value + "px";
}
document
  .querySelectorAll("[data-walk-step]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      selectWalkStep(Number(button.dataset.walkStep)),
    ),
  );
walkNode("walk-prev").addEventListener("click", () =>
  selectWalkStep(walkStep - 1),
);
walkNode("walk-next").addEventListener("click", () =>
  selectWalkStep(walkStep + 1),
);
walkNode("walk-reset").addEventListener("click", () =>
  selectWalkStep(walkStep, false),
);
walkNode("walk-run").addEventListener("click", renderWalk);
["walk-remove", "walk-move"].forEach((id) =>
  walkNode(id).addEventListener("change", renderWalk),
);
walkNode("walk-width").addEventListener("change", () => {
  walkFrame.style.width =
    walkNode("walk-width").value === "fluid"
      ? "100%"
      : walkNode("walk-width").value + "px";
});
window.addEventListener("message", (event) => {
  if (
    event.source !== walkFrame.contentWindow ||
    event.data?.source !== "weblab-walk" ||
    event.data.run !== walkRun
  )
    return;
  const log = walkNode("walk-console");
  if (event.data.kind === "mode") {
    walkNode("walk-result-note").textContent +=
      event.data.text === "CSS1Compat"
        ? " Modo estándar del navegador."
        : " Modo de compatibilidad: revisa el DOCTYPE del documento.";
    return;
  }
  if (log.textContent.startsWith("Vista ejecutada")) log.textContent = "";
  log.textContent = (
    log.textContent +
    (event.data.kind === "error" ? "Error: " : "") +
    String(event.data.text) +
    "\n"
  ).slice(-7000);
});
// Una referencia enlazada desde un paso se abre al llegar a su fragmento.
function openWalkReference() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = document.getElementById(id);
  if (target?.matches("[data-reference]"))
    target.querySelector("details").open = true;
}
window.addEventListener("hashchange", openWalkReference);
selectWalkStep(0, false);
openWalkReference();
walkNode("walk-writing")?.addEventListener("change", () =>
  selectWalkStep(walkStep, false),
);
walkNode("writing-solution")?.addEventListener("click", () => {
  walkNode("walk-js").value = walkCode(walkTemplates[walkStep], "js");
  walkNode("writing-instruction").textContent =
    "Solución de referencia cargada. Compara tus decisiones y prueba su comportamiento.";
  renderWalk();
});
