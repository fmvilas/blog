import { useEffect, useState } from 'react';

type Phase = 'down-lit' | 'down-flickering' | 'up-lighting' | 'up-lit';

const NEON_GLOW = 'drop-shadow(0 0 12px rgba(254,237,78,0.9)) drop-shadow(0 0 40px rgba(254,237,78,0.55)) drop-shadow(0 0 90px rgba(254,237,78,0.25))';

const KEYFRAMES = `
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
`;

// TODO: Replace with your actual Kit form ID and UID
const KIT_FORM_ID = 'FORM_ID';
const KIT_UID = 'UID';

const steps = [
  {
    number: '01',
    name: 'Signal',
    description:
      'Identify and publicly name the problem. Surface the gap that no one else is talking about.',
  },
  {
    number: '02',
    name: 'Solve',
    description:
      'Work through the solution in writing or design. Show your thinking, not just your answer.',
  },
  {
    number: '03',
    name: 'Ship',
    description:
      'Publish the proof. Let your work arrive before you do.',
  },
];

const problems = [
  {
    label: 'Algorithmic rejection',
    description: 'Your resume never reaches a human. An ATS makes the call before any eyes see your name.',
  },
  {
    label: 'Irrelevant whiteboard tests',
    description: 'Puzzles designed to filter, not evaluate. Nothing to do with the actual job.',
  },
  {
    label: 'Ghosted by recruiters',
    description: 'Weeks of optimism, then silence. No feedback. No reason. Nothing.',
  },
];

export default function Unrejectable() {
  const [phase, setPhase] = useState<Phase>('down-lit');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('down-flickering'), 3500);
    const t2 = setTimeout(() => setPhase('up-lighting'), 4300);
    const t3 = setTimeout(() => setPhase('up-lit'), 5100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const scrollToForm = () => {
    document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
    <div
      style={{
        background: '#09090B',
        color: '#FAFAFA',
        minHeight: '100vh',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflowX: 'hidden',
      }}
    >
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '0 2rem',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(254, 237, 78, 0.08), transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        {/* Noise grain */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            pointerEvents: 'none',
            opacity: 0.4,
          }}
        />

        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '64px' }}>
          <div style={{ flex: '1', minWidth: 0 }}>
          {/* Pill badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '100px',
              padding: '6px 16px',
              marginBottom: '56px',
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: '#71717A',
              fontWeight: '500',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                background: '#22C55E',
                borderRadius: '50%',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(34,197,94,0.8)',
              }}
            />
            Course &amp; Private Community · Coming Soon
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(64px, 12vw, 140px)',
              fontWeight: '900',
              lineHeight: '0.9',
              letterSpacing: '-0.04em',
              margin: '0 0 40px 0',
            }}
          >
            Un-
            <br />
            rejectable.
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 'clamp(20px, 3vw, 30px)',
              color: '#FEED4E',
              fontStyle: 'italic',
              fontWeight: '500',
              marginBottom: '32px',
              letterSpacing: '-0.01em',
            }}
          >
            Be the one who chooses.
          </p>

          {/* Sub-headline */}
          <p
            style={{
              fontSize: '18px',
              color: '#52525B',
              maxWidth: '500px',
              lineHeight: '1.75',
              marginBottom: '56px',
            }}
          >
            Stop being a ticket in a queue. Build your own front door and create
            the leverage to bypass gatekeepers entirely.
          </p>

          {/* CTA */}
          <button
            onClick={scrollToForm}
            style={{
              background: '#FEED4E',
              color: '#09090B',
              border: 'none',
              borderRadius: '8px',
              padding: '15px 36px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.15s, opacity 0.15s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            Notify me when it's ready
            <span aria-hidden>→</span>
          </button>
          </div>

          {/* Neon icon — thumbsdown → thumbsup */}
          <div
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: 'clamp(200px, 28vw, 360px)',
              height: 'clamp(200px, 28vw, 360px)',
            }}
          >
            {/* Thumbs Down */}
            {(phase === 'down-lit' || phase === 'down-flickering') && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  fill: '#FEED4E',
                  transform: 'rotate(12deg)',
                  ...(phase === 'down-lit'
                    ? { filter: NEON_GLOW }
                    : {
                        animation: 'neon-flicker-out 0.7s linear forwards',
                      }),
                }}
              >
                <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
              </svg>
            )}

            {/* Thumbs Up */}
            {(phase === 'up-lighting' || phase === 'up-lit') && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  fill: '#FEED4E',
                  transform: 'scaleY(-1) rotate(10deg)',
                  ...(phase === 'up-lighting'
                    ? { animation: 'neon-light-up 0.7s linear forwards' }
                    : { filter: NEON_GLOW }),
                }}
              >
                <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
              </svg>
            )}
          </div>
        </div>

        {/* Bottom divider fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'linear-gradient(to bottom, transparent, #09090B)',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* ── The Enemy ────────────────────────────────────────────── */}
      <section style={{ padding: '120px 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: '#EF4444',
              marginBottom: '20px',
              fontWeight: '700',
            }}
          >
            The Enemy
          </p>
          <h2
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              lineHeight: '0.95',
              marginBottom: '64px',
            }}
          >
            The&nbsp;"Black&nbsp;Box."
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {problems.map((p, i) => (
              <div
                key={i}
                style={{
                  background: '#09090B',
                  padding: '40px 36px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EF4444',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginBottom: '24px',
                  }}
                >
                  ✕
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.label}
                </h3>
                <p style={{ color: '#52525B', lineHeight: '1.7', fontSize: '14px' }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote ───────────────────────────────────────────── */}
      <section style={{ padding: '0 2rem 120px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingTop: '48px' }}>
            <span
              aria-hidden
              style={{
                position: 'absolute',
                top: '-24px',
                left: '-12px',
                fontSize: 'clamp(120px, 16vw, 200px)',
                lineHeight: '1',
                color: '#FEED4E',
                fontFamily: 'Georgia, serif',
                fontWeight: '900',
                opacity: 0.18,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontSize: 'clamp(20px, 3vw, 32px)',
                lineHeight: '1.55',
                fontWeight: '400',
                color: '#A1A1AA',
                letterSpacing: '-0.02em',
                margin: 0,
                position: 'relative',
                paddingLeft: '60px',
                paddingRight: '60px',
              }}
            >
              You don't ask for a job; you demonstrate value so clearly that{' '}
              <em style={{ color: '#FAFAFA', fontStyle: 'italic' }}>the job asks for you</em>. By
              sharing your learning and writing about your solutions before you ship code, you build
              a reputation that{' '}
              <em style={{ color: '#FAFAFA', fontStyle: 'italic' }}>
                enters the room before you do
              </em>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Protocol ─────────────────────────────────────────────── */}
      <section style={{ padding: '120px 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: '#FEED4E',
              marginBottom: '20px',
              fontWeight: '700',
            }}
          >
            The Protocol
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              lineHeight: '0.95',
              marginBottom: '72px',
            }}
          >
            Signal → Solve → Ship.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: '#09090B',
                  padding: '48px 36px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '28px',
                    fontSize: '72px',
                    fontWeight: '900',
                    color: 'rgba(255,255,255,0.03)',
                    letterSpacing: '-0.05em',
                    lineHeight: '1',
                    fontVariantNumeric: 'tabular-nums',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    color: '#FEED4E',
                    marginBottom: '20px',
                    fontFamily: 'monospace',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: '40px',
                    fontWeight: '900',
                    letterSpacing: '-0.03em',
                    marginBottom: '16px',
                    lineHeight: '1',
                  }}
                >
                  {step.name}
                </h3>
                <p style={{ color: '#52525B', lineHeight: '1.7', fontSize: '15px' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: '120px 2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(254,237,78,0.04), transparent)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: '#52525B',
              marginBottom: '24px',
              fontWeight: '700',
            }}
          >
            The Mission
          </p>
          <h2
            style={{
              fontSize: 'clamp(48px, 9vw, 100px)',
              fontWeight: '900',
              letterSpacing: '-0.04em',
              lineHeight: '0.92',
              marginBottom: '40px',
            }}
          >
            Build your
            <br />
            own front door.
          </h2>
          <p
            style={{
              color: '#52525B',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: '1.75',
              fontSize: '17px',
            }}
          >
            Stop walking into interviews to be tested. Walk into conversations to see if{' '}
            <em style={{ color: '#A1A1AA' }}>their problems are interesting enough</em> for you to
            solve.
          </p>
        </div>
      </section>

      {/* ── Subscribe ────────────────────────────────────────────── */}
      <section
        id="notify"
        style={{ padding: '120px 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: '#52525B',
              marginBottom: '20px',
              fontWeight: '700',
            }}
          >
            Join the waitlist
          </p>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              lineHeight: '1.05',
              marginBottom: '16px',
            }}
          >
            Get notified when it opens.
          </h2>
          <p
            style={{
              color: '#52525B',
              marginBottom: '48px',
              lineHeight: '1.6',
              fontSize: '15px',
            }}
          >
            No spam. One email when the course and community are ready.
          </p>

          <form
            action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
            className="seva-form formkit-form"
            method="post"
            data-sv-form={KIT_FORM_ID}
            data-uid={KIT_UID}
            data-format="inline"
            data-version="5"
            style={{ width: '100%', textAlign: 'left' }}
          >
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
              style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', color: '#EF4444', fontSize: '14px' }}
            />
            <div
              data-element="fields"
              className="seva-fields formkit-fields"
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <input
                name="fields[first_name]"
                aria-label="First Name"
                placeholder="First name"
                type="text"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '15px 18px',
                  fontSize: '15px',
                  color: '#FAFAFA',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box' as const,
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(254,237,78,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <input
                name="email_address"
                aria-label="Email Address"
                placeholder="Email address"
                type="email"
                required
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '15px 18px',
                  fontSize: '15px',
                  color: '#FAFAFA',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box' as const,
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(254,237,78,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <button
                data-element="submit"
                type="submit"
                style={{
                  background: '#FEED4E',
                  color: '#09090B',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '16px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  width: '100%',
                  letterSpacing: '-0.01em',
                  transition: 'opacity 0.15s, transform 0.15s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.opacity = '0.88';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="formkit-spinner">
                  <div /><div /><div />
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
          padding: '40px 2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#27272A', fontSize: '13px' }}>
          © {new Date().getFullYear()} · Unrejectable
        </p>
      </footer>
    </div>
    </>
  );
}
