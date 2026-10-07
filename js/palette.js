/* PALETAS · LOS EJEMPLOS SE DEFINEN EN PLANTILLAS HTML */
const paletteNode = (id) => document.getElementById(id);
const themeFrame = paletteNode("theme-frame");
let themeRun = 0;
const templateByPage = {
  product: "product",
  realestate: "product",
  cart: "checkout",
  checkout: "checkout",
  booking: "checkout",
  contact: "checkout",
  login: "checkout",
  pricing: "pricing",
  chat: "chat",
  profile: "profile",
  error: "status",
  status: "status",
  confirmation: "status",
  comingsoon: "status",
};
const templateByPattern = {
  landing: "landing",
  editorial: "editorial",
  shop: "shop",
  dashboard: "dashboard",
  portfolio: "portfolio",
  docs: "docs",
};
const basicPatterns = {
  landing: "landing",
  editorial: "editorial",
  shop: "shop",
  dashboard: "dashboard",
  portfolio: "portfolio",
  docs: "docs",
};
const patternDescriptions = {
  landing: "Propuesta, contenido y acción principal.",
  editorial: "Lectura central y contexto complementario.",
  shop: "Filtros, catálogo y decisiones comparables.",
  dashboard: "Navegación, resumen y área de trabajo.",
  portfolio: "Presentación y selección de proyectos.",
  docs: "Índice, explicación y recursos.",
};
function paletteValues() {
  const background = paletteNode("theme-background").value,
    surface = paletteNode("theme-surface").value,
    accent = paletteNode("theme-accent").value;
  const auto = paletteNode("theme-auto-text").checked;
  if (auto) paletteNode("theme-text").value = readableInk(background);
  paletteNode("theme-text").disabled = auto;
  const text = paletteNode("theme-text").value;
  return {
    background,
    surface,
    accent,
    text,
    "surface-text": auto ? readableInk(surface) : text,
    "button-text": readableInk(accent),
  };
}
function sendTheme() {
  const colors = paletteValues();
  themeFrame.contentWindow?.postMessage(
    {
      type: "weblab-theme",
      run: themeRun,
      colors,
      brand: paletteNode("theme-brand").value || "Tu marca",
    },
    "*",
  );
  ["background", "surface", "accent", "text"].forEach((role) => {
    paletteNode("theme-" + role + "-value").value = colors[role].toUpperCase();
  });
  const ratios = [
    contrast(colors.background, colors.text),
    contrast(colors.surface, colors["surface-text"]),
    contrast(colors.accent, colors["button-text"]),
  ];
  const pass = ratios.every((value) => value >= 4.5);
  paletteNode("theme-contrast").textContent =
    `Texto/fondo ${ratios[0].toFixed(2)}:1 · texto/superficie ${ratios[1].toFixed(2)}:1 · texto/botón ${ratios[2].toFixed(2)}:1. ${pass ? "Estas combinaciones alcanzan el mínimo AA para texto normal." : "Alguna combinación no alcanza 4.5:1; ajusta los colores o activa el texto automático."}`;
  paletteNode("theme-contrast").classList.toggle("failed", !pass);
  paletteNode("theme-css").textContent =
    ":root {\n" +
    Object.entries(colors)
      .map(([role, value]) => `  --${role}: ${value};`)
      .join("\n") +
    "\n}\n\nbody { background: var(--background); color: var(--text); }\n.tarjeta { background: var(--surface); color: var(--surface-text); }\n.boton { background: var(--accent); color: var(--button-text); }";
  paletteNode("theme-copy-status").textContent = "";
}
function renderThemePage() {
  const option = paletteNode("theme-layout").selectedOptions[0];
  const pattern =
    option.dataset.layout || basicPatterns[option.value] || "landing";
  const template =
    templateByPage[option.value] || templateByPattern[pattern] || "landing";
  const fragment = paletteNode("theme-template-" + template).content.cloneNode(
    true,
  );
  [
    ["feature", "feature"],
    ["title", "title"],
    ["body", "body"],
    ["aside", "aside"],
  ].forEach(([attribute, key]) => {
    if (option.dataset[key])
      fragment.querySelector("[data-" + attribute + "]").textContent =
        option.dataset[key];
  });
  fragment.querySelector("[data-brand]").textContent =
    paletteNode("theme-brand").value || "Tu marca";
  const holder = document.createElement("div");
  holder.append(fragment);
  const run = ++themeRun;
  const stylesheet = new URL("../assets/palette-preview.css", location.href).href;
  const bridge = `window.addEventListener('message',event=>{if(event.source!==parent||event.data?.type!=='weblab-theme'||event.data.run!==${run})return;const allowed=['background','surface','accent','text','surface-text','button-text'];allowed.forEach(role=>{const value=event.data.colors?.[role];if(/^#[0-9a-f]{6}$/i.test(value||''))document.documentElement.style.setProperty('--'+role,value);});document.querySelectorAll('[data-brand]').forEach(brand=>brand.textContent=String(event.data.brand).slice(0,45));});window.addEventListener('load',()=>parent.postMessage({type:'weblab-theme-ready',run:${run}},'*'));`;
  themeFrame.srcdoc = `<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${location.origin}; script-src 'unsafe-inline'; form-action 'none'"><link rel="stylesheet" href="${stylesheet}"></head><body>${holder.innerHTML}<script>${bridge}<\/script></body></html>`;
  themeFrame.style.width = paletteNode("theme-width").value + "px";
  paletteNode("theme-layout-description").textContent =
    option.dataset.description || patternDescriptions[pattern];
  const advice = {
    landing:
      "Para una landing: empieza en Coolors o Adobe Color y comprueba el resultado en Realtime Colors o Happy Hues.",
    editorial:
      "Para una página editorial: usa Happy Hues o Realtime Colors para comprobar superficies de lectura; Color Hunt puede aportar alternativas iniciales.",
    shop: "Para comercio y formularios: compara acentos y superficies con Realtime Colors; utiliza Adobe Color para explorar armonías sin perder la legibilidad.",
    dashboard:
      "Para un área de trabajo: prueba primero contraste, selección y superficies con Realtime Colors. Usa Coolors para alternativas de identidad.",
    portfolio:
      "Para portafolio o una marca creativa: explora Color Hunt y Adobe Color; después aplica las funciones en Happy Hues o en esta vista previa.",
    docs: "Para documentación o cursos: comprueba texto, navegación y bloques de ejemplo con Realtime Colors o Happy Hues.",
  };
  paletteNode("theme-tool-advice").textContent =
    advice[pattern] +
    " La recomendación depende de la tarea, no de una regla de sector.";
  sendTheme();
}
window.addEventListener("message", (event) => {
  if (
    event.source === themeFrame.contentWindow &&
    event.data?.type === "weblab-theme-ready" &&
    event.data.run === themeRun
  )
    sendTheme();
});
function restoreBusinessPalette() {
  const [, name, background, surface, accent] = designPalettes.find(
    (palette) => palette[0] === paletteNode("theme-business").value,
  );
  paletteNode("theme-background").value = background;
  paletteNode("theme-surface").value = surface;
  paletteNode("theme-accent").value = accent;
  paletteNode("theme-auto-text").checked = true;
  paletteNode("theme-feedback").textContent =
    "Paleta inicial restaurada para " + name + ". Puedes personalizarla.";
  sendTheme();
}
paletteNode("theme-layout").addEventListener("change", renderThemePage);
paletteNode("theme-business").addEventListener(
  "change",
  restoreBusinessPalette,
);
paletteNode("theme-reset").addEventListener("click", restoreBusinessPalette);
paletteNode("theme-width").addEventListener("change", () => {
  themeFrame.style.width = paletteNode("theme-width").value + "px";
});
[
  "theme-background",
  "theme-surface",
  "theme-accent",
  "theme-text",
  "theme-auto-text",
  "theme-brand",
].forEach((id) => paletteNode(id).addEventListener("input", sendTheme));

/* Generación HSL: crea un punto de partida, no una garantía estética. */
function hexToHsl(hex) {
  const [r, g, b] = hex.match(/[a-f\d]{2}/gi).map((v) => parseInt(v, 16) / 255),
    max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min,
    l = (max + min) / 2;
  let h = 0;
  if (d)
    h =
      max === r
        ? ((g - b) / d) % 6
        : max === g
          ? (b - r) / d + 2
          : (r - g) / d + 4;
  return [(h * 60 + 360) % 360, d ? d / (1 - Math.abs(2 * l - 1)) : 0, l];
}
function hslToHex(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const value = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * value)
      .toString(16)
      .padStart(2, "0");
  };
  return "#" + f(0) + f(8) + f(4);
}
paletteNode("theme-generate").addEventListener("click", () => {
  const [h, s] = hexToHsl(paletteNode("theme-accent").value),
    kind = paletteNode("theme-harmony").value;
  const offset = { mono: 0, analogous: 30, complementary: 180, triadic: 120 }[
    kind
  ];
  const backgroundHue =
    kind === "triadic"
      ? (h + 240) % 360
      : kind === "analogous"
        ? (h + 330) % 360
        : h;
  paletteNode("theme-background").value = hslToHex(
    backgroundHue,
    Math.min(s, 0.15),
    0.97,
  );
  paletteNode("theme-surface").value = hslToHex(
    (h + offset) % 360,
    s < 0.03 ? 0 : Math.min(Math.max(s, 0.25), 0.45),
    0.88,
  );
  paletteNode("theme-auto-text").checked = true;
  sendTheme();
  paletteNode("theme-feedback").textContent =
    s < 0.03
      ? "El acento es neutro: no tiene un tono definido para explorar armonías. Se generaron superficies neutras; elige un acento cromático para comparar relaciones."
      : "Paleta generada desde el acento. Las superficies exploran la relación elegida; las luminosidades son orientativas. Comprueba el resultado antes de usarlo.";
});
paletteNode("theme-copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(paletteNode("theme-css").textContent);
    paletteNode("theme-copy-status").textContent = "CSS copiado.";
  } catch {
    paletteNode("theme-copy-status").textContent =
      "No se pudo copiar automáticamente. Selecciona y copia el bloque CSS.";
  }
});
renderThemePage();
