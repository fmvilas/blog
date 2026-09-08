import { useEffect, useState } from 'react';
import { CLOSES_LONG, countdown, isClosed } from '@/lib/deadline';

const ACCENT = '#FEED4E';
const BG = '#09090B';

const BAR_STYLES = `
@media (max-width: 640px) {
  .deadline-bar { padding-left: 1rem !important; padding-right: 1rem !important; font-size: 12px !important; }
  .deadline-bar-cta { display: none !important; }
}
`;

/**
 * The day count is deliberately absent from the first render. This is a static
 * build, so a count baked in at build time would be days stale by the time
 * anyone read it, and filling it in during render would mismatch hydration.
 * The date is there immediately; the count arrives on mount.
 */
const useCountdown = () => {
  const [left, setLeft] = useState('');
  const [shut, setShut] = useState(false);

  useEffect(() => {
    const tick = () => {
      setLeft(countdown());
      setShut(isClosed());
    };
    tick();
    // Cheap safety net for a tab left open across midnight.
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return { left, shut };
};

/** Live "N days left" pill, for placing next to a CTA. Renders nothing until mounted. */
export const CountdownPill = () => {
  const { left, shut } = useCountdown();
  if (shut || !left) return null;

  return (
    <span
      style={{
        display: 'inline-block',
        border: `1px solid rgba(254,237,78,0.4)`,
        color: ACCENT,
        borderRadius: '100px',
        padding: '5px 14px',
        fontSize: '13px',
        fontWeight: '700',
        letterSpacing: '0.01em',
      }}
    >
      {left}
    </span>
  );
};

/**
 * Sticky enrollment countdown for /unrejectable. Removes itself once the
 * deadline has passed, so a stale banner can't outlive the cohort.
 */
export const DeadlineBar = ({ href }: { href: string }) => {
  const { left, shut } = useCountdown();
  if (shut) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BAR_STYLES }} />
      <div style={{ background: ACCENT, color: BG }}>
        <div
          className="deadline-bar"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '9px 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '-0.01em',
            textAlign: 'center',
          }}
        >
          <span>Enrollment closes {CLOSES_LONG}</span>
          {left && (
            <>
              <span aria-hidden style={{ opacity: 0.4 }}>·</span>
              <span>{left}</span>
            </>
          )}
          <a
            href={href}
            className="deadline-bar-cta"
            style={{
              background: BG,
              color: ACCENT,
              borderRadius: '100px',
              padding: '4px 14px',
              fontSize: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Claim your spot →
          </a>
        </div>
      </div>
    </>
  );
};

export default DeadlineBar;
