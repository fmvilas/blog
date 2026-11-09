import { useEffect, useRef, useState } from 'react';
import { Subscribe } from '@/components/Subscribe';
import {
  DAY_LONG,
  HOST_TIME,
  ICS_PATH,
  KIT_FORM_ID,
  KIT_QUESTION_FIELD,
  KIT_TAG_ID,
  KIT_UID,
  OTHER_CITIES,
  START,
  SUBTITLE,
  yourTimeLabel,
} from '@/lib/asyncapi10';

// The YouTube link only goes to subscribers by email. It must never appear on
// this page or anywhere in its source.

const BG = '#09090B';
const TEXT = '#FAFAFA';
const MUTED = '#A1A1AA';
const BORDER = '#27272A';
const SAGE = '#8CC47E';

const STYLES = `
body { background-color: ${BG}; }

.a10 {
  background: ${BG};
  color: ${TEXT};
  min-height: 100vh;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
}
.a10-wrap { max-width: 1100px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 1; }

.a10-hero { position: relative; overflow: hidden; padding-bottom: clamp(56px, 8vw, 104px); }
.a10-dots {
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(rgba(255,255,255,0.022) 1px, transparent 1px);
  background-size: 28px 28px;
}
.a10-glow {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 65% 45% at 30% -5%, rgba(140,196,126,0.13), transparent 70%);
}

.a10-top { padding-top: 28px; }
.a10-logo { display: block; height: 32px; width: auto; }

.a10-intro { padding-top: clamp(44px, 7vw, 88px); }

.a10-eyebrow {
  display: flex; align-items: center; gap: 10px;
  font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
  color: ${MUTED}; font-weight: 700; margin: 0 0 22px;
}
.a10-dot {
  flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%;
  background: ${SAGE};
  box-shadow: 0 0 0 4px rgba(140,196,126,0.16);
  animation: a10-pulse 2.4s ease-in-out infinite;
}
@keyframes a10-pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(140,196,126,0.16); }
  50%      { box-shadow: 0 0 0 7px rgba(140,196,126,0.04); }
}

.a10-h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(40px, 7.4vw, 84px);
  font-weight: 900; letter-spacing: -0.04em; line-height: 0.95;
  margin: 0;
}
.a10-h1 span { display: block; text-wrap: balance; }
.a10-h1 .a10-accent { color: ${SAGE}; }

.a10-sub {
  font-size: clamp(18px, 2.2vw, 22px); color: ${MUTED};
  line-height: 1.5; margin: 24px 0 0; max-width: 620px;
}

.a10-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 420px);
  grid-template-areas: "when form" "about form";
  grid-template-rows: auto 1fr;
  gap: 40px 56px;
  margin-top: clamp(36px, 5vw, 56px);
  align-items: start;
}
.a10-when  { grid-area: when; }
.a10-form  { grid-area: form; }
.a10-about { grid-area: about; }

.a10-card {
  background: rgba(255,255,255,0.025);
  border: 1px solid ${BORDER};
  border-radius: 16px;
}

/* Date card */
.a10-when { padding: 26px 28px; }
.a10-day {
  font-family: 'Montserrat', sans-serif; font-weight: 800;
  font-size: 20px; letter-spacing: -0.02em; margin: 0; line-height: 1.2;
}
.a10-time {
  display: block;
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: clamp(32px, 4vw, 42px); letter-spacing: -0.035em;
  color: ${SAGE}; line-height: 1.05; margin-top: 4px;
}
.a10-cities {
  list-style: none; margin: 22px 0 0; padding: 18px 0 0;
  border-top: 1px solid ${BORDER};
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 28px;
}
.a10-cities li { display: flex; justify-content: space-between; gap: 10px; font-size: 14px; color: ${MUTED}; }
.a10-cities time { color: ${TEXT}; font-weight: 600; font-variant-numeric: tabular-nums; }
.a10-yours { margin: 16px 0 0; font-size: 14px; font-weight: 600; color: ${TEXT}; min-height: 1.5em; }

/* Signup card, restyling the light Tailwind classes Subscribe ships with */
.a10-form { padding: 26px; }
.a10 .formkit-input {
  background: rgba(255,255,255,0.04) !important;
  border: 1px solid ${BORDER} !important;
  color: ${TEXT} !important;
  border-radius: 8px !important;
  padding: 13px 16px !important;
  font-size: 16px !important;
  font-family: inherit;
}
.a10 .formkit-input::placeholder { color: #71717A !important; }
.a10 .formkit-input:focus {
  outline: none !important;
  border-color: rgba(140,196,126,0.55) !important;
  box-shadow: 0 0 0 3px rgba(140,196,126,0.12) !important;
}
.a10 textarea.formkit-input { display: block; resize: vertical; min-height: 92px; line-height: 1.5; }
.a10 .formkit-fields { gap: 12px !important; }
.a10 .formkit-submit {
  background: ${SAGE} !important;
  color: ${BG} !important;
  border-radius: 8px !important;
  padding: 14px 24px !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em;
  transition: opacity 0.15s, transform 0.15s !important;
}
.a10 .formkit-submit:hover { opacity: 0.88; transform: translateY(-1px); }
.a10 .formkit-submit:focus-visible { box-shadow: 0 0 0 2px ${BG}, 0 0 0 4px ${SAGE} !important; }
.a10 .formkit-submit:disabled { opacity: 0.6; cursor: default; transform: none; }
.a10 .formkit-alert:empty { display: none; }
.a10 .subscribe-note { margin: 14px 0 0; font-size: 13px; line-height: 1.55; color: ${MUTED}; }
.a10 .subscribe-error { color: #F87171; font-size: 14px; line-height: 1.6; margin: 0 0 14px; }
.a10 .subscribe-error a { color: #F87171; text-decoration: underline; }

.a10-success-title {
  font-family: 'Montserrat', sans-serif; font-weight: 900;
  font-size: 34px; letter-spacing: -0.035em; line-height: 1;
  color: ${SAGE}; margin: 4px 0 0; outline: none;
}
.a10-success-body { font-size: 17px; line-height: 1.6; margin: 14px 0 24px; }
.a10-cal {
  display: inline-flex; align-items: center; gap: 10px;
  border: 1px solid rgba(140,196,126,0.45); border-radius: 8px;
  color: ${SAGE}; padding: 12px 18px;
  font-size: 15px; font-weight: 700; text-decoration: none; letter-spacing: -0.01em;
  transition: background 0.15s;
}
.a10-cal:hover { background: rgba(140,196,126,0.08); }

/* Context + host */
.a10-about p { margin: 0; }
.a10-about-copy { font-size: 17px; line-height: 1.75; color: ${MUTED}; }
.a10-about-copy + .a10-about-copy { margin-top: 16px; }
.a10-about-copy strong { color: ${TEXT}; font-weight: 600; }
.a10-host {
  display: flex; align-items: center; gap: 14px;
  margin-top: 28px; padding-top: 24px; border-top: 1px solid ${BORDER};
  font-size: 15px; color: ${MUTED};
}
.a10-host img {
  width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
  object-fit: cover; object-position: top;
  border: 1px solid rgba(140,196,126,0.3);
}
.a10-host strong { color: ${TEXT}; font-weight: 600; }

.a10-foot {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 36px 0; text-align: center; font-size: 13px;
}
.a10-foot a { color: #52525B; text-decoration: none; transition: color 0.2s; }
.a10-foot a:hover { color: ${SAGE}; }

@media (max-width: 860px) {
  .a10-grid {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "when" "form" "about";
    grid-template-rows: none;
    gap: 16px;
  }
  .a10-about { margin-top: 40px; }
}

/* Phones: keep the form on the first screen. */
@media (max-width: 560px) {
  .a10-wrap { padding: 0 1.25rem; }
  .a10-top { padding-top: 18px; }
  .a10-logo { height: 24px; }
  .a10-intro { padding-top: 28px; }
  .a10-eyebrow { font-size: 11px; letter-spacing: 0.12em; margin-bottom: 14px; }
  .a10-h1 { font-size: 38px; }
  .a10-sub { font-size: 17px; margin-top: 14px; }
  .a10-grid { margin-top: 24px; gap: 12px; }
  .a10-when { padding: 18px 20px; }
  .a10-form { padding: 20px; }
  .a10-day { font-size: 17px; }
  .a10-time { font-size: 30px; margin-top: 2px; }
  .a10-cities { gap: 6px 18px; margin-top: 14px; padding-top: 14px; }
  .a10-cities li { font-size: 13px; }
  .a10-yours { margin-top: 12px; font-size: 13px; }
  .a10 textarea.formkit-input { min-height: 76px; }
  .a10-about-copy { font-size: 16px; }
}

@media (max-width: 340px) {
  .a10-cities { grid-template-columns: minmax(0, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  .a10-dot { animation: none; }
}
`;

/**
 * Filled in after mount. The page is built ahead of time, so the server can't
 * know the visitor's zone; the line keeps its height meanwhile so nothing jumps.
 */
const YourTime = () => {
  const [label, setLabel] = useState('');

  useEffect(() => {
    try {
      setLabel(yourTimeLabel());
    } catch {
      // A browser without Intl time zones just doesn't get the line.
    }
  }, []);

  return <p className="a10-yours">{label || ' '}</p>;
};

const Success = () => {
  const title = useRef<HTMLParagraphElement>(null);

  // The form, and the button that had focus, are gone. Hand focus to the
  // message so keyboard and screen reader users land on it.
  useEffect(() => {
    title.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div>
      <p ref={title} tabIndex={-1} className="a10-success-title">You&apos;re in.</p>
      <p className="a10-success-body">The YouTube link will reach your inbox before the stream.</p>
      <a href={ICS_PATH} className="a10-cal">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4.5" width="18" height="16" rx="2" />
          <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        </svg>
        Add to calendar
      </a>
    </div>
  );
};

const QuestionField = () => (
  <div className="formkit-field">
    <textarea
      className="formkit-input w-full"
      name={KIT_QUESTION_FIELD}
      aria-label="Your question for the AMA (optional)"
      placeholder="Your question for the AMA (optional)"
      rows={2}
      // Kit doesn't document a length limit for custom fields. 255 is the
      // conservative guess: a question that fits, and no failed signups.
      maxLength={255}
    />
  </div>
);

export default function AsyncAPI10() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="a10">
        <main>
          <section className="a10-hero">
            <div className="a10-dots" aria-hidden="true" />
            <div className="a10-glow" aria-hidden="true" />

            <div className="a10-wrap">
              <header className="a10-top">
                <img
                  src="/static/images/asyncapi-horizontal-white-logo.svg"
                  alt="AsyncAPI"
                  width={165}
                  height={36}
                  className="a10-logo"
                />
              </header>

              <div className="a10-intro">
                <p className="a10-eyebrow">
                  <span className="a10-dot" aria-hidden="true" />
                  Live · with guests from all 10 years
                </p>
                <h1 className="a10-h1">
                  <span>10 years of AsyncAPI.</span>
                  <span className="a10-accent">Ask me anything.</span>
                </h1>
                <p className="a10-sub">{SUBTITLE}</p>
              </div>

              <div className="a10-grid">
                <div className="a10-card a10-when">
                  <p className="a10-day">
                    <time dateTime={START.toISOString()}>
                      {DAY_LONG}{' '}
                      <span className="a10-time">{HOST_TIME}</span>
                    </time>
                  </p>
                  <ul className="a10-cities" aria-label="The same moment elsewhere">
                    {OTHER_CITIES.map(({ city, time }) => (
                      <li key={city}>
                        <span>{city}</span>
                        <time>{time}</time>
                      </li>
                    ))}
                  </ul>
                  <YourTime />
                </div>

                <div className="a10-card a10-form" id="rsvp">
                  <Subscribe
                    uid={KIT_UID}
                    formId={KIT_FORM_ID}
                    buttonText="Save my seat"
                    useKitScript={false}
                    stacked
                    hiddenFields={{ 'tags[]': KIT_TAG_ID }}
                    extraFields={<QuestionField />}
                    note="You'll get the YouTube link by email and join my newsletter. Unsubscribe anytime."
                    renderSuccess={() => <Success />}
                  />
                </div>

                <div className="a10-about">
                  <p className="a10-about-copy">
                    Ten years ago, AsyncAPI was a side project. Today it&apos;s an industry
                    standard under the Linux Foundation, adopted by companies like GitHub and
                    NASA. Bring your questions about how that happened: the early days, getting
                    adopted, giving it to a foundation, and what I&apos;d do differently.
                  </p>
                  <p className="a10-about-copy">
                    <strong>Can&apos;t make it live?</strong> Sign up anyway and you&apos;ll get
                    the recording.
                  </p>
                  <div className="a10-host">
                    <img src="/static/images/portrait.png" alt="" />
                    <p>
                      Hosted by <strong>Fran Méndez</strong>, creator of AsyncAPI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="a10-foot">
          <a href="/">© {START.getUTCFullYear()} · Fran Méndez</a>
        </footer>
      </div>
    </>
  );
}
