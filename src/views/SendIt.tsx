import { Subscribe } from '@/components/Subscribe';
import { UNREJECTABLE_THEME } from '@/lib/unrejectableTheme';

// Freebie 1, capture side. The essay it delivers lives at
// /unrejectable/free/1/being-found.
// Kept separate from the Unrejectable waitlist form so the two signals stay
// readable: "I want the free essay" vs "I want the course".
// Tags on subscribe: magnet:the-list (21209432).
// No after_subscribe redirect on purpose — the link is delivered in the first
// sequence email, which is what makes the address real.
const KIT_UID = '4b5cfa18f1';
const KIT_FORM_ID = '9688563';

const PAGE_STYLES = `
.si-page { min-height: 100vh; display: flex; align-items: center; }
.si-inner { max-width: 680px; margin: 0 auto; padding: 80px 2rem; width: 100%; }

.si-inside {
  background: var(--u-bg-2);
  border: 1px solid var(--u-rule-2);
  border-radius: 12px;
  padding: 24px 26px;
  margin: 36px 0;
}
.si-inside-t {
  font-family: var(--u-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--u-text-4);
  margin-bottom: 14px;
}
.si-inside ul { list-style: none; }
.si-inside li {
  display: flex;
  gap: 12px;
  font-size: 15px;
  line-height: 1.65;
  color: var(--u-text-2);
  padding: 6px 0;
}
.si-inside li::before { content: "→"; color: var(--u-accent); flex-shrink: 0; }

.si-form-note { font-size: 15px; color: var(--u-text-2); margin-bottom: 18px; }

@media (max-width: 680px) {
  .si-page { display: block; }
  .si-inner { padding: 56px 1.25rem; }
}
`;

export default function SendIt() {
  return (
    <div className="u si-page">
      <style dangerouslySetInnerHTML={{ __html: UNREJECTABLE_THEME + PAGE_STYLES }} />

      <div className="si-inner">
        <div className="u-kicker">Free · No 1</div>
        <h1 style={{ fontSize: 'clamp(34px, 5.5vw, 54px)', lineHeight: '1.02' }}>
          Everything I know about being found
        </h1>

        <div className="u-body">
          <p className="u-lede">I spent a decade building things nobody knew existed.</p>
          <p>
            One was a code editor that ran in a browser tab, years before that was normal. Two guys
            in Amsterdam were building the same idea at the same time. Amazon bought them. I archived
            mine in 2020 and nobody noticed, because there was nobody to notice.
          </p>
          <p>I was a good engineer the whole time. It made no difference at all.</p>
          <p>
            Then I built AsyncAPI and did one thing differently. <mark>I talked about it.</mark>{' '}
            Before it existed, while it was bad, and long after I was sure everyone was sick of
            hearing me. That&apos;s the only variable that changed.
          </p>
        </div>

        <div className="si-inside">
          <div className="si-inside-t">What&apos;s in it</div>
          <ul>
            <li>Around twenty concrete things, grouped by what each one does</li>
            <li>Which ones have to come first, and why the order isn&apos;t optional</li>
            <li>
              The three things it does not require you to do, because you&apos;re not trying to
              become insufferable
            </li>
          </ul>
        </div>

        <p className="si-form-note">Where should I send it?</p>
        <Subscribe uid={KIT_UID} formId={KIT_FORM_ID} buttonText="Send it to me" />

        <div className="u-sig" style={{ marginTop: '48px' }}>
          Fran Méndez — created AsyncAPI, now building{' '}
          <a href="https://usecommune.com">usecommune.com</a>
        </div>
      </div>
    </div>
  );
}
