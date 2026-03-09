import { useEffect } from 'react';

const KIT_FORM_ID = '8024741';
const KIT_UID = '8e4cf78d34';

const BG = '#09090B';
const SAGE = '#8CC47E';

const companies = ['GitHub', 'NASA', 'Adidas', 'Lego', 'Citibank', 'Salesforce'];

const STYLES = `
body {
  background-color: ${BG};
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fu   { animation: fadeInUp 0.6s ease both; }
.fu-1 { animation: fadeInUp 0.6s ease 0.12s both; }
.fu-2 { animation: fadeInUp 0.6s ease 0.24s both; }
.fu-3 { animation: fadeInUp 0.6s ease 0.38s both; }

.fk-input {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 13px 16px;
  font-size: 15px;
  color: #FAFAFA;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
  font-family: inherit;
}
.fk-input::placeholder { color: #52525B; }
.fk-input:focus { border-color: rgba(140,196,126,0.5); }

.fk-btn {
  background: ${SAGE};
  color: ${BG};
  border: none;
  border-radius: 8px;
  padding: 13px 24px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: -0.01em;
  transition: opacity 0.15s, transform 0.15s;
  font-family: inherit;
  width: 100%;
}
.fk-btn:hover { opacity: 0.87; transform: translateY(-1px); }

.social-icon { color: #3F3F46; transition: color 0.2s; }
.social-icon:hover { color: ${SAGE}; }

@media (max-width: 640px) {
  .nav-link { display: none !important; }
}

@media (max-width: 768px) {
  .book-grid { grid-template-columns: 1fr !important; }
  .book-img-col { display: flex; justify-content: center; margin-bottom: 48px; }

}
`;

const KIT_OPTIONS = '{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}';

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/fmvilas',
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    href: 'https://bsky.app/profile/fmvilas.me',
    label: 'Bluesky',
    path: 'M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.144-.019.289-.027.433-.027-.144 0-.289.008-.433.027-2.67-.296-5.568.628-6.383 3.364C.378 17.803 0 22.763 0 23.452c0 .69.139 1.861.902 2.204.659.299 1.664.621 4.3-1.24 2.752-1.942 5.711-5.881 6.798-7.995 1.087 2.114 4.046 6.053 6.798 7.995 2.636 1.861 3.641 1.539 4.3 1.24.763-.343.902-1.515.902-2.204 0-.69-.378-5.65-.624-6.479-.815-2.736-3.713-3.66-6.383-3.364a6.22 6.22 0 0 0-.433.027c.144-.019.289-.027.433-.027 2.67.296 5.568-.628 6.383-3.364C23.622 9.418 24 4.458 24 3.768c0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z',
  },
  {
    href: 'https://github.com/fmvilas',
    label: 'GitHub',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    href: 'https://www.youtube.com/@fmvilas',
    label: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    href: 'mailto:fran@fmvilas.me',
    label: 'Email',
    path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    external: false,
  },
];

const NewsletterForm = () => (
  <form
    action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
    className="seva-form formkit-form"
    method="post"
    data-sv-form={KIT_FORM_ID}
    data-uid={KIT_UID}
    data-format="inline"
    data-version="5"
    data-options={KIT_OPTIONS}
  >
    <ul
      className="formkit-alert formkit-alert-error"
      data-element="errors"
      data-group="alert"
      style={{ listStyle: 'none', padding: 0, margin: '0 0 12px 0', color: '#EF4444', fontSize: '14px' }}
    />
    <div
      data-element="fields"
      className="seva-fields formkit-fields"
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <input
        className="fk-input formkit-input"
        name="fields[first_name]"
        aria-label="First Name"
        placeholder="First name"
        type="text"
      />
      <input
        className="fk-input formkit-input"
        name="email_address"
        aria-label="Email Address"
        placeholder="Email address"
        type="email"
        required
      />
      <button data-element="submit" type="submit" className="fk-btn formkit-submit">
        <div className="formkit-spinner"><div /><div /><div /></div>
        <span>Subscribe</span>
      </button>
    </div>
  </form>
);

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const scrollToNewsletter = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div style={{
        background: BG,
        color: '#FAFAFA',
        minHeight: '100vh',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflowX: 'hidden',
      }}>

        {/* ── Nav ─────────────────────────────────────────────── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(9,9,11,0.88)',
        }}>
          <div style={{
            maxWidth: '1100px', margin: '0 auto', padding: '0 2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px',
          }}>
            {/* Identity */}
            <a
              href="/"
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            >
              <img
                src="/static/images/portrait.png"
                alt="Fran Méndez"
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  objectFit: 'cover', objectPosition: 'top',
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
                href="https://usecommune.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{
                  fontSize: '13px', fontWeight: '500', color: '#71717A',
                  textDecoration: 'none', padding: '6px 12px', borderRadius: '6px',
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#FAFAFA')}
                onMouseOut={e => (e.currentTarget.style.color = '#71717A')}
              >
                Commune
              </a>
              <button
                onClick={scrollToNewsletter}
                className="nav-link"
                style={{
                  fontSize: '13px', fontWeight: '500', color: '#71717A',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '6px 12px', borderRadius: '6px',
                  transition: 'color 0.2s', fontFamily: 'inherit',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#FAFAFA')}
                onMouseOut={e => (e.currentTarget.style.color = '#71717A')}
              >
                Newsletter
              </button>
              <a
                href="https://leadtheshift.co"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: SAGE, color: BG,
                  padding: '8px 16px', borderRadius: '8px',
                  fontSize: '13px', fontWeight: '700', textDecoration: 'none',
                  letterSpacing: '-0.01em', marginLeft: '4px',
                }}
              >
                Get Shift →
              </a>
            </div>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(45px, 8vw, 112px) 2rem', position: 'relative', overflow: 'hidden' }}>
          {/* dot grid */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
          {/* radial glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 65% 55% at 50% -5%, rgba(140,196,126,0.13), transparent 70%)',
          }} />
          {/* portrait */}
          <img
            src="/static/images/portrait.png"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute', bottom: 0, right: '3%',
              height: '92%', width: 'auto',
              filter: 'grayscale(1)',
              opacity: 0.08,
              transform: 'scaleX(-1)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />

          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* eyebrow */}
            <p className="fu" style={{
              fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' as const,
              color: '#52525B', marginBottom: '20px', fontWeight: '700',
            }}>
              Creator of AsyncAPI · Author of Shift · Building Commune
            </p>

            <h1 className="fu-1" style={{
              fontSize: 'clamp(52px, 9vw, 96px)',
              fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '0.92',
              marginBottom: '28px',
            }}>
              Building things<br />
              <span style={{ color: SAGE }}>that matter.</span>
            </h1>

            <p className="fu-2" style={{
              fontSize: 'clamp(17px, 2vw, 20px)', color: '#A1A1AA',
              lineHeight: '1.72', marginBottom: '52px', maxWidth: '600px',
            }}>
              I created{' '}
              <a
                href="https://asyncapi.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#FAFAFA', fontWeight: '600', textDecoration: 'none', borderBottom: '1px solid rgba(140,196,126,0.4)' }}
              >
                AsyncAPI
              </a>
              . Wrote Shift. Now I'm building Commune and doing it completely in the open.
              Every product decision, every setback, every lesson. Subscribe and follow along.
            </p>

            <div className="fu-3" style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={scrollToNewsletter}
                style={{
                  background: SAGE, color: BG,
                  border: 'none', borderRadius: '8px',
                  padding: '14px 28px', fontSize: '15px', fontWeight: '700',
                  cursor: 'pointer', letterSpacing: '-0.01em',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  transition: 'transform 0.15s, opacity 0.15s',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.88'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}
              >
                Subscribe to the newsletter <span aria-hidden>→</span>
              </button>
              <a
                href="https://leadtheshift.co"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#A1A1AA', fontSize: '15px', textDecoration: 'none',
                  fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px',
                  borderBottom: '1px solid rgba(161,161,170,0.3)', paddingBottom: '1px',
                }}
              >
                Or get my book
              </a>
            </div>
          </div>
        </section>

        {/* ── Book ────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(80px, 10vw, 112px) 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div
              className="book-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '80px', alignItems: 'center' }}
            >
              <div className="book-img-col">
                <img
                  src="/static/images/book-mockup.png"
                  alt="Shift — The Playbook for Event-Driven Architecture Advocacy"
                  style={{
                    maxWidth: '300px', width: '100%',
                    filter: 'drop-shadow(0 24px 56px rgba(0,0,0,0.8)) drop-shadow(0 0 80px rgba(140,196,126,0.06))',
                  }}
                />
              </div>

              <div>
                <p style={{
                  fontSize: '11px', letterSpacing: '0.15em',
                  textTransform: 'uppercase' as const, color: SAGE,
                  marginBottom: '20px', fontWeight: '700',
                }}>
                  Now Available
                </p>
                <h2 style={{
                  fontSize: 'clamp(52px, 7vw, 80px)', fontWeight: '900',
                  letterSpacing: '-0.04em', lineHeight: '0.9', marginBottom: '12px',
                }}>
                  Shift.
                </h2>
                <p style={{
                  fontSize: '18px', color: SAGE, fontStyle: 'italic',
                  marginBottom: '28px', lineHeight: '1.4', fontWeight: '500',
                }}>
                  The Playbook for Event-Driven Architecture Advocacy
                </p>
                <p style={{ fontSize: '17px', color: '#A1A1AA', lineHeight: '1.78', marginBottom: '40px' }}>
                  Great technology fails without the people to champion it. Shift is a practical
                  guide for engineers and architects who need to do more than build, they need to{' '}
                  <em style={{ color: '#FAFAFA', fontStyle: 'normal', fontWeight: '600' }}>
                    convince, lead, and drive change
                  </em>{' '}
                  inside their organizations. Written from the trenches of creating AsyncAPI.
                </p>
                <a
                  href="https://leadtheshift.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: SAGE, color: BG,
                    padding: '15px 30px', borderRadius: '8px',
                    fontSize: '16px', fontWeight: '700', textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    transition: 'opacity 0.15s, transform 0.15s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseOut={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Get the book →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Commune ─────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(80px, 10vw, 112px) 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{
              fontSize: '11px', letterSpacing: '0.15em',
              textTransform: 'uppercase' as const, color: '#52525B',
              marginBottom: '32px', fontWeight: '700',
            }}>
              Currently building
            </p>

            <div style={{
              display: 'flex', alignItems: 'flex-start',
              gap: '48px', flexWrap: 'wrap',
            }}>
              <div style={{ flex: '0 0 auto' }}>
                <img
                  src="/static/images/commune.png"
                  alt="Commune"
                  style={{ height: '52px', display: 'block' }}
                />
              </div>
              <div style={{ flex: '1 1 320px', paddingTop: '8px' }}>
                <p style={{ fontSize: '17px', color: '#A1A1AA', lineHeight: '1.75', marginBottom: '24px', marginTop: 0 }}>
                  An open alternative to Substack, helping newsletter creators turn subscribers
                  into real communities, with full ownership of their data.
                </p>
                <a
                  href="https://usecommune.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: SAGE, fontSize: '15px', fontWeight: '600',
                    textDecoration: 'none', letterSpacing: '-0.01em',
                    borderBottom: '1px solid rgba(140,196,126,0.3)', paddingBottom: '2px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(140,196,126,0.7)')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(140,196,126,0.3)')}
                >
                  usecommune.com <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── AsyncAPI / Credentials ──────────────────────────── */}
        <section style={{ padding: 'clamp(80px, 10vw, 112px) 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ maxWidth: '660px', marginBottom: '64px' }}>
              <p style={{
                fontSize: '11px', letterSpacing: '0.15em',
                textTransform: 'uppercase' as const, color: '#52525B',
                marginBottom: '20px', fontWeight: '700',
              }}>
                Previous work
              </p>
              <h2 style={{
                fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '900',
                letterSpacing: '-0.04em', lineHeight: '0.95', marginBottom: '24px',
              }}>
                I didn't just study EDA.<br />
                <span style={{ color: SAGE }}>I set the standard.</span>
              </h2>
              <p style={{ fontSize: '17px', color: '#A1A1AA', lineHeight: '1.75' }}>
                AsyncAPI is the open specification for event-driven APIs. I created it, grew it
                into an industry standard, and helped bring it under the Linux Foundation, where
                it continues to be maintained and adopted worldwide.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1px', background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px', overflow: 'hidden', marginBottom: '48px',
            }}>
              {[
                { value: '10k+', label: 'Companies using AsyncAPI' },
                { value: '3.8k+', label: 'GitHub stars' },
                { value: 'Linux Foundation', label: 'Hosted by' },
              ].map((stat, i) => (
                <div key={i} style={{ background: BG, padding: '36px 28px' }}>
                  <p style={{
                    fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: '900',
                    letterSpacing: '-0.03em', color: '#FAFAFA',
                    margin: '0 0 8px 0', lineHeight: '1',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ color: '#52525B', fontSize: '13px', margin: 0, lineHeight: '1.4' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '11px', color: '#3F3F46', letterSpacing: '0.1em',
              textTransform: 'uppercase' as const, marginBottom: '16px', fontWeight: '600',
            }}>
              Trusted by teams at
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {companies.map(c => (
                <span key={c} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '8px', padding: '8px 16px', fontSize: '14px',
                  color: '#71717A', fontWeight: '500',
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial ─────────────────────────────────────── */}
        <section style={{ padding: 'clamp(80px, 10vw, 112px) 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingTop: '40px' }}>
              <span
                aria-hidden
                style={{
                  position: 'absolute', top: '-50px', left: '-10px',
                  fontSize: '160px', lineHeight: '1',
                  color: SAGE, fontFamily: 'Georgia, serif',
                  opacity: 0.1, userSelect: 'none', pointerEvents: 'none',
                }}
              >
                &ldquo;
              </span>
              <blockquote style={{ margin: 0, position: 'relative' }}>
                <p style={{
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  lineHeight: '1.65', color: '#A1A1AA',
                  letterSpacing: '-0.015em', marginBottom: '40px',
                }}>
                  When I first learned how AsyncAPI came to be, I knew Fran was someone I wanted
                  to connect with and collaborate with. His deep expertise in event-driven
                  architecture has not only shaped an{' '}
                  <em style={{ color: '#FAFAFA', fontStyle: 'normal', fontWeight: '600' }}>
                    industry-standard specification
                  </em>
                  , but also cultivated a thriving community around it. Whenever I need to have a
                  deep, insightful conversation about event-driven systems, Fran is the person I
                  turn to.
                </p>
                <footer style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img
                    src="/static/images/testimonials/david-boyne.png"
                    alt="David Boyne"
                    style={{
                      width: '52px', height: '52px', borderRadius: '50%',
                      objectFit: 'cover', border: '2px solid rgba(140,196,126,0.25)', flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#FAFAFA' }}>David Boyne</p>
                    <p style={{ margin: '3px 0 0', fontSize: '13px', color: '#52525B' }}>Creator of EventCatalog</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Newsletter ───────────────────────────────────────── */}
        <section
          id="newsletter"
          style={{
            padding: 'clamp(80px, 10vw, 112px) 2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(140,196,126,0.07), transparent 80%)',
          }}
        >
          <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{
              fontSize: '11px', letterSpacing: '0.15em',
              textTransform: 'uppercase' as const, color: '#52525B',
              marginBottom: '20px', fontWeight: '700',
            }}>
              Newsletter
            </p>
            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '900',
              letterSpacing: '-0.04em', lineHeight: '0.95', marginBottom: '24px',
            }}>
              Straight talk.<br />No noise.
            </h2>
            <p style={{ fontSize: '17px', color: '#A1A1AA', lineHeight: '1.75', marginBottom: '28px' }}>
              I transparently share the journey of building Commune: the wins, the setbacks,
              the product decisions, and the human side of it all. Sometimes EDA, sometimes
              mental health, always honest.
            </p>
            <a
              href="https://usecommune.com/n/franmendez"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '14px', color: '#71717A', textDecoration: 'none',
                marginBottom: '40px',
                transition: 'color 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.color = SAGE)}
              onMouseOut={e => (e.currentTarget.style.color = '#71717A')}
            >
              See what to expect before subscribing <span aria-hidden>↗</span>
            </a>
            <div style={{ textAlign: 'left' }}>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────── */}
        <footer style={{ padding: '48px 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px',
          }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              {SOCIAL_LINKS.map(({ href, label, path, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-icon"
                  target={external === false ? undefined : '_blank'}
                  rel={external === false ? undefined : 'noopener noreferrer'}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
            <p style={{ color: '#27272A', fontSize: '13px', margin: 0 }}>
              © {new Date().getFullYear()} · Fran Méndez
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Home;
