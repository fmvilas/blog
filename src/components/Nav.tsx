const SAGE = '#8CC47E';
const BG = '#09090B';

const NAV_STYLES = `
@media (max-width: 640px) {
  .nav-link { display: none !important; }
}
`;

const linkStyle = {
  fontSize: '13px',
  fontWeight: '500',
  color: '#71717A',
  textDecoration: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  transition: 'color 0.2s',
} as const;

/**
 * Shared top nav. Lives here rather than inline in a view so /unrejectable and
 * the homepage can't drift apart.
 *
 * onNewsletterClick: pass the homepage's smooth-scroll handler. Omit it on any
 * other page and the item becomes a link to /#newsletter, since there's no
 * newsletter section to scroll to.
 *
 * accent: the CTA button's fill. Defaults to the site's sage; pass the page's
 * own accent so the nav doesn't arrive wearing another product's colour.
 */
export const Nav = ({
  onNewsletterClick,
  accent = SAGE,
}: {
  onNewsletterClick?: () => void;
  accent?: string;
}) => (
  <>
    <style dangerouslySetInnerHTML={{ __html: NAV_STYLES }} />
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(9,9,11,0.88)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Identity */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img
            src="/static/images/portrait.png"
            alt="Fran Méndez"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'top',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          />
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#FAFAFA', letterSpacing: '-0.01em' }}>
            Fran Méndez
          </span>
        </a>

        {/* Nav links + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href="/unrejectable"
            className="nav-link"
            style={linkStyle}
            onMouseOver={e => (e.currentTarget.style.color = '#FAFAFA')}
            onMouseOut={e => (e.currentTarget.style.color = '#71717A')}
          >
            Unrejectable
          </a>
          <a
            href="https://usecommune.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={linkStyle}
            onMouseOver={e => (e.currentTarget.style.color = '#FAFAFA')}
            onMouseOut={e => (e.currentTarget.style.color = '#71717A')}
          >
            Commune
          </a>
          {onNewsletterClick ? (
            <button
              onClick={onNewsletterClick}
              className="nav-link"
              style={{
                ...linkStyle,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#FAFAFA')}
              onMouseOut={e => (e.currentTarget.style.color = '#71717A')}
            >
              Newsletter
            </button>
          ) : (
            <a
              href="/#newsletter"
              className="nav-link"
              style={linkStyle}
              onMouseOver={e => (e.currentTarget.style.color = '#FAFAFA')}
              onMouseOut={e => (e.currentTarget.style.color = '#71717A')}
            >
              Newsletter
            </a>
          )}
          <a
            href="https://leadtheshift.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: accent,
              color: BG,
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '700',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              marginLeft: '4px',
            }}
          >
            Get Shift →
          </a>
        </div>
      </div>
    </nav>
  </>
);

export default Nav;
