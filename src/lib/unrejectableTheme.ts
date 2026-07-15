/**
 * Shared design tokens + primitives for everything under the Unrejectable brand.
 *
 * Reference implementation is src/views/Unrejectable.tsx — zinc-950 ground,
 * neon yellow accent, hairline card grids, heavy display type. This module
 * exists so /free/1/* doesn't drift away from it.
 *
 * Injected via <style dangerouslySetInnerHTML> to match the pattern already
 * used across the views in this project. Everything is scoped under `.u`.
 */

export const UNREJECTABLE_THEME = `
body {
  background-color: #09090B;
}

.u {
  --u-bg: #09090B;
  --u-bg-2: #0E0E11;

  /* Contrast ratios against --u-bg. WCAG AA needs 4.5:1 for body, 3:1 for large.
     zinc-600 (#52525B) measures 2.6:1 and must never carry running text. */
  --u-text: #FAFAFA;    /* 18.9:1 — headings */
  --u-text-2: #D4D4D8;  /* 13.5:1 — body copy */
  --u-text-3: #A1A1AA;  /*  7.8:1 — secondary body, card copy */
  --u-text-4: #71717A;  /*  4.1:1 — labels and kickers only, never paragraphs */

  --u-accent: #FEED4E;  /* 16.5:1 */
  --u-rule: rgba(255,255,255,0.06);
  --u-rule-2: rgba(255,255,255,0.10);
  --u-grid: rgba(255,255,255,0.05);
  --u-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  background: var(--u-bg);
  color: var(--u-text);
  font-family: Inter, system-ui, -apple-system, sans-serif;
  font-size: 17px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.u * { box-sizing: border-box; }

/* Reset. Specificity 0-1-1, which beats any bare single-class utility (0-1-0).
   So every utility below that lands on a p/h/ol/ul/li MUST be written as
   ".u .u-thing" (0-2-0) or its margins get silently swallowed here. */
.u p, .u h1, .u h2, .u h3, .u h4, .u ol, .u ul, .u li { margin: 0; padding: 0; }

.u-wrap { max-width: 860px; margin: 0 auto; padding: 0 2rem; }

.u-kicker {
  font-family: var(--u-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--u-accent);
  font-weight: 700;
  margin-bottom: 20px;
}
.u-kicker-muted { color: var(--u-text-4); }

.u h1 {
  font-size: clamp(40px, 7vw, 76px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 28px;
}
.u h2 {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 0.98;
}
.u h3 { font-size: 17px; font-weight: 700; letter-spacing: -0.01em; }

/* Section header pattern. Every section is:
   [.u-kicker] → .u-head (h2 + optional count) → [.u-lead] → content
   Spacing lives here, never on the elements. */
.u-head { display: flex; align-items: baseline; gap: 14px; margin-bottom: 24px; flex-wrap: wrap; }
.u-head-count { font-family: var(--u-mono); font-size: 12px; color: var(--u-text-4); }
.u .u-lead { color: var(--u-text-2); max-width: 60ch; margin-bottom: 40px; }

/* Big left-aligned statement. Not centred — this page is a document, not a deck. */
.u .u-statement {
  font-size: clamp(30px, 4.5vw, 46px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 36px;
}

.u .u-sub { font-size: 20px; color: var(--u-text-2); max-width: 54ch; line-height: 1.65; }

/* .u-body is a CONTAINER, never a paragraph. Always wrap: <div class="u-body"><p>…</p></div>
   even for a single paragraph — otherwise the .u-body p rules match nothing and the
   rhythm silently disappears. */
.u-body { color: var(--u-text-2); max-width: 62ch; }
.u-body p { margin-bottom: 22px; }
.u-body p:last-child { margin-bottom: 0; }
.u .u-lede { font-size: 21px; font-weight: 600; letter-spacing: -0.015em; color: var(--u-text); }
.u .u-dim { color: var(--u-text-3); }

.u mark {
  background: rgba(254,237,78,0.14);
  color: var(--u-accent);
  padding: 1px 6px;
  border-radius: 3px;
}
.u em { color: var(--u-text); font-style: italic; }

.u-sec { padding: 104px 0; border-top: 1px solid var(--u-rule); }
.u-sec-first { padding: 96px 0 72px; }

/* Hairline grid — 1px gaps over a lit background, same trick as /unrejectable */
.u-grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1px;
  background: var(--u-grid);
  border-radius: 16px;
  overflow: hidden;
}
.u-card { background: var(--u-bg); padding: 32px 30px; }
.u-card-n {
  font-family: var(--u-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--u-accent);
  margin-bottom: 14px;
}
.u-card h4 { font-size: 16px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 8px; }
.u-card p { font-size: 14.5px; line-height: 1.7; color: var(--u-text-3); }

.u-note {
  border-left: 2px solid var(--u-accent);
  background: rgba(254,237,78,0.03);
  padding: 16px 20px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--u-text-2);
  max-width: 62ch;
  margin-bottom: 32px;
}
.u-grid-cards + .u-body { margin-top: 28px; }

/* Numbered item lists */
.u-list { list-style: none; counter-reset: ui; }
.u-list li {
  counter-increment: ui;
  display: flex;
  gap: 20px;
  padding: 22px 0;
  border-top: 1px solid var(--u-rule);
}
.u-list li::before {
  content: counter(ui, decimal-leading-zero);
  font-family: var(--u-mono);
  font-size: 12px;
  color: var(--u-accent);
  padding-top: 5px;
  flex-shrink: 0;
  opacity: 0.7;
}
.u-item h3 { margin-bottom: 5px; }
.u-item p { font-size: 15.5px; line-height: 1.75; color: var(--u-text-3); max-width: 58ch; }

.u-sig {
  font-family: var(--u-mono);
  font-size: 12px;
  color: var(--u-text-3);
  border-top: 1px solid var(--u-rule);
  padding: 28px 0 80px;
}
.u-sig a { color: var(--u-accent); text-decoration: none; }
.u-sig a:hover { text-decoration: underline; }

/* Kit form — overrides the light Tailwind classes baked into Subscribe.tsx */
.u .formkit-input {
  background: rgba(255,255,255,0.03) !important;
  border: 1px solid var(--u-rule-2) !important;
  color: var(--u-text) !important;
  border-radius: 8px !important;
  padding: 14px 16px !important;
  font-size: 15px !important;
}
.u .formkit-input::placeholder { color: var(--u-text-4) !important; }
.u .formkit-field { min-width: 0; }
.u .formkit-input:focus {
  outline: none !important;
  border-color: rgba(254,237,78,0.5) !important;
  box-shadow: 0 0 0 3px rgba(254,237,78,0.08) !important;
}
.u .formkit-submit {
  background: var(--u-accent) !important;
  color: #09090B !important;
  border-radius: 8px !important;
  padding: 14px 28px !important;
  font-weight: 700 !important;
  font-size: 15px !important;
  transition: opacity 0.15s, transform 0.15s !important;
}
.u .formkit-submit:hover { opacity: 0.9 !important; transform: translateY(-1px); }
.u .formkit-alert { color: #EF4444; font-size: 14px; }
.u .formkit-submit:disabled { opacity: 0.55; cursor: default; transform: none; }

/* States rendered by Subscribe when useKitScript={false} */
.u .subscribe-success {
  border: 1px solid rgba(254,237,78,0.3);
  background: rgba(254,237,78,0.05);
  border-radius: 10px;
  padding: 18px 22px;
  color: var(--u-text);
  font-size: 16px;
  font-weight: 500;
}
.u .subscribe-error {
  color: #F87171;
  font-size: 14.5px;
  line-height: 1.6;
  margin-bottom: 14px;
}
.u .subscribe-error a { color: #F87171; text-decoration: underline; }

@media (max-width: 680px) {
  .u { font-size: 16px; }
  .u-wrap { padding: 0 1.25rem; }
  .u-sec { padding: 64px 0; }
  .u-sec-first { padding: 56px 0 48px; }
}
`;
