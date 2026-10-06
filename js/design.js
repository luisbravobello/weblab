/* =========================================================
   DISEÑO VISUAL · CONTROLES DE LAS MUESTRAS
   HTML conserva contenido y estructura. CSS conserva el estilo.
   ========================================================= */
const byId = (id) => document.getElementById(id);
function listen(ids, update) {
  ids.forEach((id) => byId(id)?.addEventListener("input", update));
  update();
}

/* 01. RETÍCULA, DISTRIBUCIÓN Y ESPACIOS */
if (byId("grid12-preview")) {
  listen(["grid12-split", "grid12-gap", "grid12-overlay"], () => {
    const sizes = byId("grid12-split").value.split(",").map(Number);
    const preview = byId("grid12-preview");
    preview.replaceChildren();
    sizes.forEach((size, index) => {
      const block =
        byId("grid12-block").content.firstElementChild.cloneNode(true);
      block.style.gridColumn = `span ${size}`;
      block.querySelector("h3").textContent = `${size} columnas`;
      block.querySelector("p").textContent =
        `Bloque ${index + 1} · ${((size / 12) * 100).toFixed(0)} % de las pistas`;
      preview.append(block);
    });
    document
      .querySelector(".grid12-stage")
      .style.setProperty("--gutter", byId("grid12-gap").value + "px");
    document
      .querySelector(".grid12-stage")
      .classList.toggle("no-guides", !byId("grid12-overlay").checked);
    byId("grid12-gap-value").value = byId("grid12-gap").value + " px";
    byId("grid12-explanation").textContent =
      `Distribución ${sizes.join(" + ")}. Las pistas suman 12; los gutters ocupan espacio adicional entre pistas.`;
  });
  const descriptions = {
    landing:
      "Propuesta visible primero; servicios y evidencia después; navegación y footer cierran el recorrido.",
    editorial:
      "Una columna de lectura amplia y una zona secundaria para contexto. Evita cortar el flujo con promociones.",
    shop: "Filtros a un lado y productos en el área principal; en móvil los filtros necesitan una presentación accesible.",
    dashboard:
      "Navegación lateral, resumen y área de trabajo. Expone controles y resultados sin un hero promocional.",
    portfolio:
      "Presentación breve y proyectos protagonistas. Deja a las piezas y sus descripciones suficiente espacio.",
    docs: "Índice, contenido e información contextual. En móvil apila sin alterar el orden lógico de lectura.",
  };
  listen(["layout-kind"], () => {
    const option = byId("layout-kind").selectedOptions[0];
    byId("layout-preview").className =
      "layout-preview layout-" + (option.dataset.layout || option.value);
    byId("layout-description").textContent =
      option.dataset.description || descriptions[option.value];
    const preview = byId("layout-preview");
    preview.querySelector(".layout-feature").textContent =
      option.dataset.feature || "Contenido destacado";
    preview.querySelector(".layout-content h3").textContent =
      option.dataset.title || "Contenido principal";
    preview.querySelector(".layout-content p").textContent =
      option.dataset.body || "Textos, servicios o resultados.";
    preview.querySelector("aside").textContent =
      option.dataset.aside || "Información complementaria";
  });
  listen(["space-unit", "space-padding", "space-gap"], () => {
    const unit = Number(byId("space-unit").value),
      padding = unit * byId("space-padding").value,
      gap = unit * byId("space-gap").value;
    byId("spacing-card").style.padding = padding + "px";
    byId("spacing-card").style.gap = gap + "px";
    byId("spacing-code").textContent =
      `.tarjeta {\n  padding: ${padding}px;\n  gap: ${gap}px;\n}\n/* Unidad base: ${unit}px */`;
  });
  document
    .querySelectorAll("[data-principle]")
    .forEach((input) =>
      input.addEventListener("change", () =>
        byId("crap-preview").classList.toggle(
          input.dataset.principle,
          input.checked,
        ),
      ),
    );
}

/* 02. FUENTES REALES, CONTEXTOS Y ESCALA */
if (byId("font-sample")) {
  byId("font-sample").addEventListener("input", () =>
    document.querySelectorAll(".font-word").forEach((word) => {
      word.textContent = byId("font-sample").value || "Sabor";
    }),
  );
  document.fonts.ready.then(() => {
    const loaded = [...document.fonts].filter(
      (font) => font.status === "loaded",
    ).length;
    byId("fonts-status").textContent = loaded
      ? "Tipografías cargadas. Compara las muestras con el mismo texto."
      : "Se muestran fuentes alternativas. Revisa tu conexión para cargar las familias web.";
  });
  listen(["font-context", "font-head-size"], () => {
    const [, name, heading, body, description, care] = designContexts.find(
      (context) => context[0] === byId("font-context").value,
    );
    byId("font-context-preview").style.fontFamily = `"${body}",sans-serif`;
    byId("font-context-title").style.fontFamily = `"${heading}",serif`;
    byId("font-context-title").style.fontSize =
      byId("font-head-size").value + "px";
    byId("font-head-value").value = byId("font-head-size").value + " px";
    byId("font-pair-description").textContent = name + ": " + description;
    byId("font-pair-care").textContent = care;
    byId("font-pair-label").textContent =
      `Título: ${heading} · Cuerpo: ${body}`;
    byId("font-pair-code").textContent =
      `h1, h2, h3 { font-family: "${heading}", serif; }\nbody { font-family: "${body}", sans-serif; }`;
  });
  listen(["type-base", "type-ratio", "type-leading"], () => {
    const base = Number(byId("type-base").value),
      ratio = Number(byId("type-ratio").value),
      leading = byId("type-leading").value;
    const title = base * ratio ** 4,
      subtitle = base * ratio ** 2;
    document.querySelector(".scale-title").style.fontSize = title + "px";
    document.querySelector(".scale-subtitle").style.fontSize = subtitle + "px";
    document.querySelector(".scale-body").style.fontSize = base + "px";
    document.querySelector(".scale-body").style.lineHeight = leading;
    document.querySelector(".scale-label").style.fontSize =
      Math.max(12, base / ratio) + "px";
    document.querySelector(".scale-small").style.fontSize =
      Math.max(14, base / ratio) + "px";
    byId("type-base-value").value = base + " px";
    byId("type-leading-value").value = leading;
    byId("type-scale-code").textContent =
      `/* Base ${base}px · relación ${ratio} */\n.cuerpo { font-size: ${(base / 16).toFixed(2)}rem; line-height: ${leading}; }\n.subtitulo { font-size: ${(subtitle / 16).toFixed(2)}rem; }\n.titulo { font-size: ${(title / 16).toFixed(2)}rem; }\n/* Conversión a rem mostrada para una raíz de 16px. */`;
  });
}

/* 03. COLOR Y CONTRASTE */
function luminance(hex) {
  const channels = hex
    .match(/[a-f\d]{2}/gi)
    .map((value) => parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
function contrast(a, b) {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
function readableInk(background) {
  if (contrast(background, "#18213a") >= 4.5) return "#18213a";
  if (contrast(background, "#ffffff") >= 4.5) return "#ffffff";
  return "#000000";
}
if (byId("tone-preview")) {
  function showTone(id) {
    const [, name, hex, voice, meaning, care, brands, url] = designTones.find(
      (tone) => tone[0] === id,
    );
    document
      .querySelectorAll("[data-tone]")
      .forEach((button) =>
        button.setAttribute("aria-pressed", String(button.dataset.tone === id)),
      );
    byId("tone-title").textContent = name;
    byId("tone-voice").textContent = voice;
    byId("tone-meaning").textContent = meaning;
    byId("tone-care").textContent = care;
    byId("tone-brands").textContent = brands;
    byId("tone-source").hidden = !url;
    if (url) byId("tone-source").href = url;
    byId("tone-preview").querySelector("h3").style.color =
      contrast(hex, "#f6f8ff") >= 3 ? hex : "#18213a";
    byId("tone-preview").querySelector("h3").style.borderBottom =
      "4px solid " + hex;
    const button = byId("tone-preview").querySelector("button");
    button.style.backgroundColor = hex;
    button.style.color = readableInk(hex);
    button.style.borderColor = readableInk(hex);
    byId("tone-hex").textContent = `Acento de muestra: ${hex.toUpperCase()}`;
  }
  document
    .querySelectorAll("[data-tone]")
    .forEach((button) =>
      button.addEventListener("click", () => showTone(button.dataset.tone)),
    );
  showTone("rojo");
  listen(
    ["color-hue", "color-saturation", "color-lightness", "color-harmony"],
    () => {
      const hue = Number(byId("color-hue").value),
        sat = Number(byId("color-saturation").value),
        light = Number(byId("color-lightness").value),
        kind = byId("color-harmony").value;
      let hues = [hue, hue, hue],
        lights = [Math.min(95, light + 25), light, Math.max(5, light - 20)];
      if (kind !== "mono") {
        hues =
          kind === "analogous"
            ? [hue - 30, hue, hue + 30]
            : kind === "complementary"
              ? [hue, hue + 180, hue]
              : [hue, hue + 120, hue + 240];
        lights = [
          light,
          light,
          kind === "complementary" ? Math.min(90, light + 25) : light,
        ];
      }
      const colors = hues.map(
        (h, i) => `hsl(${(h + 360) % 360} ${sat}% ${lights[i]}%)`,
      );
      document
        .querySelectorAll("#harmony-swatches figure")
        .forEach((figure, i) => {
          figure.querySelector("span").style.backgroundColor = colors[i];
          figure.querySelector("figcaption").textContent = colors[i];
        });
      byId("hue-value").value = hue + "°";
      byId("saturation-value").value = sat + " %";
      byId("lightness-value").value = light + " %";
      byId("harmony-description").textContent = {
        mono: "Un tono compartido y distintas luminosidades: coherencia con cambios de intensidad.",
        analogous:
          "Tonos vecinos: una transición relacionada, que aún necesita suficiente separación funcional.",
        complementary:
          "Tonos opuestos: contraste cromático fuerte. Controla la saturación y la proporción.",
        triadic:
          "Tres tonos separados 120°: variedad. Elige uno dominante para evitar competencia.",
      }[kind];
      byId("harmony-code").textContent = colors
        .map((color, i) => `--color-${i + 1}: ${color};`)
        .join("\n");
    },
  );
  function updatePalette() {
    const base = byId("palette-base").value,
      secondary = byId("palette-secondary").value,
      accent = byId("palette-accent").value;
    const preview = byId("palette-preview");
    [
      ["base", base],
      ["secondary", secondary],
      ["accent", accent],
    ].forEach(([role, value]) => {
      preview.style.setProperty("--palette-" + role, value);
      preview.style.setProperty("--" + role + "-ink", readableInk(value));
    });
    byId("palette-brand-name").textContent =
      byId("palette-name").value || "Tu próxima experiencia";
    byId("palette-business-label").textContent =
      byId("palette-business").selectedOptions[0].textContent;
    byId("palette-code").textContent =
      `:root {\n  --base: ${base};\n  --secundario: ${secondary};\n  --acento: ${accent};\n}\n/* El texto usa colores elegidos por contraste, no por proporción. */`;
    byId("palette-contrast-note").textContent =
      `Texto adaptado a cada superficie: base ${contrast(base, readableInk(base)).toFixed(2)}:1 · secundario ${contrast(secondary, readableInk(secondary)).toFixed(2)}:1 · botón ${contrast(accent, readableInk(accent)).toFixed(2)}:1.`;
    document.querySelectorAll(".ratio-bar>span").forEach((span, i) => {
      const value = [base, secondary, accent][i];
      span.style.backgroundColor = value;
      span.style.color = readableInk(value);
    });
  }
  byId("palette-business").addEventListener("change", () => {
    const [, name, base, secondary, accent] = designPalettes.find(
      (palette) => palette[0] === byId("palette-business").value,
    );
    byId("palette-base").value = base;
    byId("palette-secondary").value = secondary;
    byId("palette-accent").value = accent;
    updatePalette();
  });
  listen(
    ["palette-base", "palette-secondary", "palette-accent", "palette-name"],
    updatePalette,
  );
  listen(["contrast-text", "contrast-background"], () => {
    const text = byId("contrast-text").value,
      background = byId("contrast-background").value,
      ratio = contrast(text, background);
    byId("contrast-preview").style.color = text;
    byId("contrast-preview").style.backgroundColor = background;
    byId("contrast-ratio").value = ratio.toFixed(2) + ":1";
    byId("contrast-result").textContent =
      ratio >= 4.5
        ? "Cumple el contraste mínimo AA para texto normal y grande."
        : ratio >= 3
          ? "Solo alcanza el mínimo AA de texto grande; no para texto normal."
          : "No alcanza el mínimo AA de texto normal ni grande.";
  });
}
