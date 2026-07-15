import { useEffect, useState } from "react";

type Phase = "down-lit" | "down-flickering" | "up-lighting" | "up-lit";

const NEON_GLOW =
  "drop-shadow(0 0 12px rgba(254,237,78,0.9)) drop-shadow(0 0 40px rgba(254,237,78,0.55)) drop-shadow(0 0 90px rgba(254,237,78,0.25))";

const STYLES = `
body {
  background-color: rgb(9, 9, 11);
}

@keyframes neon-flicker-out {
  0%   { opacity: 1;    filter: ${NEON_GLOW}; }
  4%   { opacity: 0;    filter: none; }
  6%   { opacity: 1;    filter: ${NEON_GLOW}; }
  8%   { opacity: 0;    filter: none; }
  10%  { opacity: 0.9;  filter: ${NEON_GLOW}; }
  14%  { opacity: 0;    filter: none; }
  16%  { opacity: 1;    filter: ${NEON_GLOW}; }
  20%  { opacity: 0;    filter: none; }
  22%  { opacity: 0.8;  filter: drop-shadow(0 0 8px rgba(254,237,78,0.7)); }
  24%  { opacity: 0;    filter: none; }
  28%  { opacity: 0.7;  filter: drop-shadow(0 0 6px rgba(254,237,78,0.6)); }
  30%  { opacity: 0;    filter: none; }
  33%  { opacity: 0.5;  filter: drop-shadow(0 0 4px rgba(254,237,78,0.4)); }
  35%  { opacity: 0;    filter: none; }
  40%  { opacity: 0.3;  filter: drop-shadow(0 0 3px rgba(254,237,78,0.25)); }
  43%  { opacity: 0;    filter: none; }
  48%  { opacity: 0.2;  filter: drop-shadow(0 0 2px rgba(254,237,78,0.15)); }
  52%  { opacity: 0;    filter: none; }
  58%  { opacity: 0.1;  filter: none; }
  62%  { opacity: 0;    filter: none; }
  100% { opacity: 0;    filter: none; }
}

@keyframes neon-light-up {
  0%   { opacity: 0;   filter: none; }
  4%   { opacity: 0.8; filter: drop-shadow(0 0 6px rgba(254,237,78,0.6)); }
  6%   { opacity: 0;   filter: none; }
  9%   { opacity: 0.9; filter: drop-shadow(0 0 10px rgba(254,237,78,0.8)); }
  11%  { opacity: 0;   filter: none; }
  15%  { opacity: 1;   filter: ${NEON_GLOW}; }
  18%  { opacity: 0;   filter: none; }
  21%  { opacity: 0.85; filter: drop-shadow(0 0 8px rgba(254,237,78,0.7)); }
  23%  { opacity: 0;   filter: none; }
  27%  { opacity: 1;   filter: ${NEON_GLOW}; }
  30%  { opacity: 0.5; filter: drop-shadow(0 0 5px rgba(254,237,78,0.4)); }
  33%  { opacity: 1;   filter: ${NEON_GLOW}; }
  38%  { opacity: 0.7; filter: drop-shadow(0 0 8px rgba(254,237,78,0.6)); }
  42%  { opacity: 1;   filter: ${NEON_GLOW}; }
  100% { opacity: 1;   filter: ${NEON_GLOW}; }
}

/* Four dials, so a 2x2 rather than auto-fit — which gave 3 across and
   stranded the fourth. The pairing is meaningful too: early + often are
   when, elsewhere + open are where and who. */
.protocol-grid { grid-template-columns: repeat(2, 1fr); }

@media (max-width: 768px) {
  .protocol-grid { grid-template-columns: 1fr; }
}

@media (min-width: 769px) {
  .hero-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .hero-content {
    padding-right: clamp(220px, 32vw, 420px);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
    align-items: flex-start !important;
    min-height: 100svh !important;
  }
  .hero-inner {
    padding-top: 40px;
    padding-bottom: 56px;
  }
  .hero-icon {
    position: relative;
    width: 130px !important;
    height: 130px !important;
    margin: 0 auto 40px !important;
  }
  .section-pad {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .pull-quote-section {
    padding-bottom: 64px !important;
  }
  .quote-text {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .author-layout {
    grid-template-columns: 1fr !important;
    gap: 48px !important;
  }
  .author-no-video {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center;
  }
  .author-no-video a {
    max-width: 100% !important;
  }
}
`;

const KIT_FORM_ID = "9103305";
const KIT_UID = "bd251cf6d5";

const steps = [
  {
    number: "01",
    name: "Early",
    description:
      "Before it's built. Before it works. Before it's good. Kills the excuse that it isn't ready yet, which is an excuse that never expires on its own.",
  },
  {
    number: "02",
    name: "Often",
    description:
      "Forever, not one announcement. Long past the point where you are certain everyone is sick of hearing you. Kills the excuse that you already said that.",
  },
  {
    number: "03",
    name: "Elsewhere",
    description:
      "Where the problem already lives, not only on channels you own. Someone else did the work of gathering the people. You show up.",
  },
  {
    number: "04",
    name: "Open",
    description:
      "A way in, and someone behind it. This is the only line between you and the people you can't stand on this website.",
  },
];

const notFor = [
  {
    label: "You want the reputation more than the work",
    description:
      "All of this amplifies whatever is actually there. If that's nothing, it makes you loud and hollow, and everyone can tell immediately. This is for people who build things and never mention them. The building is the part you bring.",
  },
  {
    label: "You need a job in six weeks",
    description:
      "Then this is the wrong thing and I won't pretend otherwise. Reputation compounds over years, and you don't have years. Do the applications, take the job, and come back when you're employed and still quietly scared. That's when this works.",
  },
  {
    label: "You think the game is rigged",
    description:
      "That individuals don't stand a chance, that it's all luck and money and reach. I can't argue you out of that and I'm not going to try. I believed it for a decade about a project sitting on my own hard drive.",
  },
];

const problems = [
  {
    label: "Before you build, it feels like lying",
    description:
      "Talking about something that doesn't exist yet feels like claiming credit you haven't earned. So you wait until it's real. It never gets real enough.",
  },
  {
    label: "After you ship, it feels like begging",
    description:
      "You posted it once. Three likes, two from friends. Saying it a second time would look like you needed something, so you never did.",
  },
  {
    label: "While employed, it feels ungrateful",
    description:
      "You're fine right now, so bringing up the nine months you spent job hunting sounds paranoid. You only post when you're unemployed. You've noticed.",
  },
];

export default function Unrejectable() {
  const [phase, setPhase] = useState<Phase>("down-lit");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("down-flickering"), 3500);
    const t2 = setTimeout(() => setPhase("up-lighting"), 4300);
    const t3 = setTimeout(() => setPhase("up-lit"), 5100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById("notify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        style={{
          background: "#09090B",
          color: "#FAFAFA",
          minHeight: "100vh",
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          className="hero-section"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            padding: "0 2rem",
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(254, 237, 78, 0.08), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {/* Noise grain */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
              pointerEvents: "none",
              opacity: 0.4,
            }}
          />

          <div
            className="hero-inner"
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="hero-content" style={{ flex: "1", minWidth: 0 }}>
              {/* Neon icon — thumbsdown → thumbsup */}
              <div
                className="hero-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "clamp(200px, 28vw, 360px)",
                  height: "clamp(200px, 28vw, 360px)",
                }}
              >
                {/* Thumbs Down */}
                {(phase === "down-lit" || phase === "down-flickering") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      fill: "#FEED4E",
                      transform: "rotate(12deg)",
                      ...(phase === "down-lit"
                        ? { filter: NEON_GLOW }
                        : {
                            animation: "neon-flicker-out 0.7s linear forwards",
                          }),
                    }}
                  >
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                  </svg>
                )}
                {/* Thumbs Up */}
                {(phase === "up-lighting" || phase === "up-lit") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      fill: "#FEED4E",
                      transform: "scaleY(-1) rotate(10deg)",
                      ...(phase === "up-lighting"
                        ? { animation: "neon-light-up 0.7s linear forwards" }
                        : { filter: NEON_GLOW }),
                    }}
                  >
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                  </svg>
                )}
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: "clamp(64px, 12vw, 140px)",
                  fontWeight: "900",
                  lineHeight: "0.9",
                  letterSpacing: "-0.04em",
                  margin: "0 0 40px 0",
                }}
              >
                Un-
                <br />
                rejectable.
              </h1>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  color: "#FEED4E",
                  fontWeight: "500",
                  marginBottom: "32px",
                  letterSpacing: "-0.01em",
                }}
              >
                Be the one who chooses.
              </p>

              {/* Sub-headline */}
              <p
                style={{
                  fontSize: "18px",
                  color: "#A1A1AA",
                  maxWidth: "500px",
                  lineHeight: "1.75",
                  marginBottom: "56px",
                }}
              >
                You&apos;ve been good at this for years and almost nobody knows.
                Somewhere on your machine is a folder with real work in it that
                no human being has ever seen run. This is a course about the
                only part that&apos;s actually hard: talking about it, when
                every way of doing that feels like begging.
              </p>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                style={{
                  background: "#FEED4E",
                  color: "#09090B",
                  border: "none",
                  borderRadius: "8px",
                  padding: "15px 36px",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "transform 0.15s, opacity 0.15s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.opacity = "0.9";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.opacity = "1";
                }}
              >
                Notify me when it's ready
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>

          {/* Bottom divider fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "120px",
              background: "linear-gradient(to bottom, transparent, #09090B)",
              pointerEvents: "none",
            }}
          />
        </section>

        {/* ── The Enemy ────────────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{
            padding: "120px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#EF4444",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              The Enemy
            </p>
            <h2
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: "900",
                letterSpacing: "-0.04em",
                lineHeight: "0.95",
                marginBottom: "64px",
              }}
            >
              &ldquo;The work speaks for&nbsp;itself.&rdquo;
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {problems.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "#09090B",
                    padding: "40px 36px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#EF4444",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "24px",
                    }}
                  >
                    ✕
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.label}
                  </h3>
                  <p
                    style={{
                      color: "#A1A1AA",
                      lineHeight: "1.7",
                      fontSize: "14px",
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pull Quote ───────────────────────────────────────────── */}
        <section
          className="pull-quote-section"
          style={{ padding: "0 2rem 120px" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ position: "relative", paddingTop: "48px" }}>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-24px",
                  left: "-12px",
                  fontSize: "clamp(120px, 16vw, 200px)",
                  lineHeight: "1",
                  color: "#FEED4E",
                  fontFamily: "Georgia, serif",
                  fontWeight: "900",
                  opacity: 0.18,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </span>
              <p
                className="quote-text"
                style={{
                  fontSize: "clamp(20px, 3vw, 32px)",
                  lineHeight: "1.55",
                  fontWeight: "400",
                  color: "#A1A1AA",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  position: "relative",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                It doesn&apos;t. It never has. Not for anyone, in any field, at
                any point in history. I believed it for ten years and I have a
                graveyard of archived repos to prove it. The people you&apos;re
                comparing yourself to are{" "}
                <em style={{ color: "#FAFAFA", fontStyle: "italic" }}>
                  not better than you
                </em>
                . Most of them have less behind them than you do. They just{" "}
                <em style={{ color: "#FAFAFA", fontStyle: "italic" }}>
                  told someone
                </em>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Protocol ─────────────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{
            padding: "120px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#FEED4E",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              The Protocol
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: "900",
                letterSpacing: "-0.04em",
                lineHeight: "0.95",
                marginBottom: "72px",
              }}
            >
              Say it early,
              <br />
              say it often.
            </h2>

            <div
              className="protocol-grid"
              style={{
                display: "grid",
                gap: "1px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    background: "#09090B",
                    padding: "48px 36px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "28px",
                      fontSize: "72px",
                      fontWeight: "900",
                      color: "rgba(255,255,255,0.03)",
                      letterSpacing: "-0.05em",
                      lineHeight: "1",
                      fontVariantNumeric: "tabular-nums",
                      userSelect: "none",
                    }}
                  >
                    {step.number}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: "#FEED4E",
                      marginBottom: "20px",
                      fontFamily: "monospace",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    style={{
                      fontSize: "40px",
                      fontWeight: "900",
                      letterSpacing: "-0.03em",
                      marginBottom: "16px",
                      lineHeight: "1",
                    }}
                  >
                    {step.name}
                  </h3>
                  <p
                    style={{
                      color: "#A1A1AA",
                      lineHeight: "1.7",
                      fontSize: "15px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ──────────────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{
            padding: "120px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(254,237,78,0.04), transparent)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#A1A1AA",
                marginBottom: "24px",
                fontWeight: "700",
              }}
            >
              The Mission
            </p>
            <h2
              style={{
                fontSize: "clamp(48px, 9vw, 100px)",
                fontWeight: "900",
                letterSpacing: "-0.04em",
                lineHeight: "0.92",
                marginBottom: "40px",
              }}
            >
              Build your
              <br />
              own front door.
            </h2>
            <p
              style={{
                color: "#A1A1AA",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: "1.75",
                fontSize: "17px",
              }}
            >
              Stop walking into interviews to be tested. Walk into conversations
              to see if{" "}
              <em style={{ color: "#A1A1AA" }}>
                their problems are interesting enough
              </em>{" "}
              for you to solve.
            </p>
          </div>
        </section>

        {/* ── Author ───────────────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{
            padding: "120px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#A1A1AA",
                marginBottom: "24px",
                fontWeight: "700",
              }}
            >
              Your guide
            </p>

            {/* TODO: Restore this layout once the video is ready */}
            <div style={{ display: "none" }}>
              <div
                className="author-layout"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "80px",
                  alignItems: "start",
                }}
              >
                {/* Bio column */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      marginBottom: "32px",
                    }}
                  >
                    <img
                      src="/fran.png"
                      alt="Fran Méndez"
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid rgba(254,237,78,0.3)",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontSize: "24px",
                          fontWeight: "800",
                          letterSpacing: "-0.03em",
                          margin: "0 0 4px 0",
                        }}
                      >
                        Fran Méndez
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#A1A1AA",
                          margin: 0,
                          fontWeight: "500",
                        }}
                      >
                        Creator of AsyncAPI | Author of Shift | Building Commune
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "17px",
                      color: "#A1A1AA",
                      lineHeight: "1.75",
                      marginBottom: "24px",
                    }}
                  >
                    Fran created <em style={{ color: "#FAFAFA" }}>AsyncAPI</em>,
                    the open standard for defining asynchronous APIs — now
                    adopted by thousands of companies worldwide including
                    GitHub, Citibank, NASA, Adidas, and Lego, and hosted under
                    the Linux Foundation.
                  </p>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#A1A1AA",
                      lineHeight: "1.75",
                      marginBottom: "32px",
                    }}
                  >
                    He wrote <em style={{ color: "#FAFAFA" }}>Shift</em> on a
                    conviction he earned the hard way: having the best
                    technology doesn't matter if you can't get people on board.
                    Unrejectable applies that same lesson to your career. Raw
                    skill won't open doors. Reputation does.
                  </p>

                  <a
                    href="https://leadtheshift.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 20px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "10px",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(254,237,78,0.25)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.07)")
                    }
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "44px",
                        background: "#FEED4E",
                        borderRadius: "4px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="#09090B"
                      >
                        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V9h10v2zm0-4H7V5h10v2z" />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#FAFAFA",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Shift
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          color: "#A1A1AA",
                          marginTop: "2px",
                        }}
                      >
                        How to drive architectural change when great tech isn't
                        enough
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="#3F3F46"
                      strokeWidth="2"
                      style={{ marginLeft: "auto", flexShrink: 0 }}
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>

                {/* Video column */}
                <div>
                  {/* TODO: Replace the div below with an <iframe> once you have the video URL */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%" /* 16:9 */,
                      borderRadius: "12px",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          background: "#FEED4E",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 0 32px rgba(254,237,78,0.3)",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="#09090B"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p
                        style={{
                          color: "#3F3F46",
                          fontSize: "13px",
                          margin: 0,
                        }}
                      >
                        Video coming soon
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#3F3F46",
                      marginTop: "16px",
                      lineHeight: "1.6",
                      textAlign: "center" as const,
                    }}
                  >
                    Fran introduces what Unrejectable is, why he built it, and
                    what you'll get out of it.
                  </p>
                </div>
              </div>
            </div>
            {/* end hidden video layout */}

            {/* No-video author layout (active) */}
            <div
              className="author-no-video"
              style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}
            >
              {/* Photo + identity */}
              <div
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  width: "120px",
                }}
              >
                <img
                  src="/fran.png"
                  alt="Fran Méndez"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(254,237,78,0.3)",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#FAFAFA",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Fran Méndez
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "11px",
                      color: "#A1A1AA",
                      lineHeight: "1.5",
                    }}
                  >
                    Creator of AsyncAPI
                  </p>
                </div>
              </div>

              {/* Bio + book card */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#A1A1AA",
                    lineHeight: "1.75",
                    marginBottom: "20px",
                    marginTop: 0,
                  }}
                >
                  Fran created <em style={{ color: "#FAFAFA" }}>AsyncAPI</em>,
                  the open standard for defining asynchronous APIs — now adopted
                  by thousands of companies worldwide including GitHub, NASA,
                  Adidas, Lego, and Citibank, and hosted under the Linux
                  Foundation.
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#A1A1AA",
                    lineHeight: "1.75",
                    marginBottom: "32px",
                  }}
                >
                  He wrote <em style={{ color: "#FAFAFA" }}>Shift</em> on a
                  conviction he earned the hard way: having the best technology
                  doesn't matter if you can't get people on board. Unrejectable
                  applies that same lesson to your career. Raw skill won't open
                  doors. Reputation does.
                </p>

                <a
                  href="https://leadtheshift.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                    maxWidth: "400px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(254,237,78,0.25)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)")
                  }
                >
                  <div
                    style={{
                      width: "36px",
                      height: "44px",
                      background: "#FEED4E",
                      borderRadius: "4px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="#09090B"
                    >
                      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V9h10v2zm0-4H7V5h10v2z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#FAFAFA",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Shift
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        color: "#A1A1AA",
                        marginTop: "2px",
                      }}
                    >
                      How to drive architectural change when great tech isn't
                      enough
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="#3F3F46"
                    strokeWidth="2"
                    style={{ marginLeft: "auto", flexShrink: 0 }}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── The honest bit ───────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{
            padding: "120px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#A1A1AA",
                marginBottom: "24px",
                fontWeight: "700",
              }}
            >
              The honest bit
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 68px)",
                fontWeight: "900",
                letterSpacing: "-0.04em",
                lineHeight: "0.95",
                marginBottom: "40px",
              }}
            >
              There is no course yet.
            </h2>
            <div
              style={{ color: "#A1A1AA", fontSize: "17px", lineHeight: "1.8" }}
            >
              <p style={{ marginBottom: "24px" }}>
                I&apos;m not going to pretend otherwise. You&apos;re reading a
                page for something that doesn&apos;t exist.
              </p>
              <p style={{ marginBottom: "24px" }}>
                It exists as a page because I wrote a list of things I&apos;d
                tell any engineer who wants to stop being invisible, and item 7
                on that list says{" "}
                <em style={{ color: "#A1A1AA" }}>
                  build a landing page for the idea before the product exists
                </em>
                . It gauges interest, and it forces you to name the thing.
                I&apos;d be a hypocrite to write that down and then not do it.
              </p>
              <p style={{ marginBottom: "24px" }}>
                So this page is the protocol, run on myself, in public, where
                you can watch it. Saying it early is the whole point. If nobody
                wants this, I&apos;d rather find out now than after six months
                of building it.
              </p>
              <p style={{ margin: 0 }}>
                In the meantime, everything I know about this is written down
                and it&apos;s free:{" "}
                <a
                  href="/unrejectable/free/1/send-it"
                  style={{
                    color: "#FEED4E",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(254,237,78,0.3)",
                  }}
                >
                  Everything I know about being found
                </a>
                . Around twenty concrete things, and the three you don&apos;t
                have to do.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who it's not for ─────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{
            padding: "120px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#A1A1AA",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              Don&apos;t buy this
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 68px)",
                fontWeight: "900",
                letterSpacing: "-0.04em",
                lineHeight: "0.95",
                marginBottom: "64px",
              }}
            >
              If any of this is you.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {notFor.map((n, i) => (
                <div
                  key={i}
                  style={{ background: "#09090B", padding: "40px 36px" }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                      color: "#A1A1AA",
                    }}
                  >
                    {n.label}
                  </h3>
                  <p
                    style={{
                      color: "#A1A1AA",
                      lineHeight: "1.7",
                      fontSize: "14px",
                    }}
                  >
                    {n.description}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                color: "#A1A1AA",
                fontSize: "19px",
                lineHeight: "1.7",
                margin: "56px auto 0",
                maxWidth: "560px",
                textAlign: "center",
              }}
            >
              I&apos;d rather lose the sale than take money from someone this
              can&apos;t help.{" "}
              <span style={{ color: "#FAFAFA" }}>
                If you&apos;re still here after reading that, you&apos;re
                exactly who I&apos;m building it for.
              </span>
            </p>
          </div>
        </section>

        {/* ── Subscribe ────────────────────────────────────────────── */}
        <section
          id="notify"
          className="section-pad"
          style={{
            padding: "120px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#A1A1AA",
                marginBottom: "20px",
                fontWeight: "700",
              }}
            >
              Join the waitlist
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: "900",
                letterSpacing: "-0.03em",
                lineHeight: "1.05",
                marginBottom: "16px",
              }}
            >
              Get notified when it opens.
            </h2>
            <p
              style={{
                color: "#A1A1AA",
                marginBottom: "48px",
                lineHeight: "1.6",
                fontSize: "15px",
              }}
            >
              Tell me you want this and I&apos;ll build it. Enough of you and it
              happens.
            </p>

            <form
              action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
              className="seva-form formkit-form"
              method="post"
              data-sv-form={KIT_FORM_ID}
              data-uid={KIT_UID}
              data-format="inline"
              data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Awesome! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
              style={{ width: "100%", textAlign: "left" }}
            >
              <ul
                className="formkit-alert formkit-alert-error"
                data-element="errors"
                data-group="alert"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 16px 0",
                  color: "#EF4444",
                  fontSize: "14px",
                }}
              />
              <div
                data-element="fields"
                className="seva-fields formkit-fields"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <input
                  name="fields[first_name]"
                  aria-label="First Name"
                  placeholder="First name"
                  type="text"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    padding: "15px 18px",
                    fontSize: "15px",
                    color: "#FAFAFA",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box" as const,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(254,237,78,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)")
                  }
                />
                <input
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email address"
                  type="email"
                  required
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    padding: "15px 18px",
                    fontSize: "15px",
                    color: "#FAFAFA",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box" as const,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(254,237,78,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)")
                  }
                />
                <button
                  data-element="submit"
                  type="submit"
                  style={{
                    background: "#FEED4E",
                    color: "#09090B",
                    border: "none",
                    borderRadius: "8px",
                    padding: "16px",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                    width: "100%",
                    letterSpacing: "-0.01em",
                    transition: "opacity 0.15s, transform 0.15s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="formkit-spinner">
                    <div />
                    <div />
                    <div />
                  </div>
                  <span>Count me in</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer
          style={{
            padding: "40px 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#A1A1AA", fontSize: "13px" }}>
            © {new Date().getFullYear()} · Unrejectable · Fran M&eacute;ndez
          </p>
        </footer>
      </div>
    </>
  );
}
