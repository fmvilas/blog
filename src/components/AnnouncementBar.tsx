import { Fragment } from 'react';
import { DAY_SHORT, HOST_TIME, PATH } from '@/lib/asyncapi10';

/**
 * Slim bar above the homepage nav. Right now it sends people to the AsyncAPI
 * 10 AMA RSVP page.
 *
 * After the stream:
 *  - to swap it for the recording, change HREF, ITEMS and CTA below;
 *  - to remove it, delete <AnnouncementBar /> from src/views/Index.tsx.
 */
const HREF = PATH;
const ITEMS = ['Live AMA', '10 years of AsyncAPI', `${DAY_SHORT}, ${HOST_TIME}`];
const CTA = 'Save your seat';

const SAGE = '#8CC47E';
const BG = '#09090B';

const STYLES = `
.ann-bar {
  display: block;
  background: ${SAGE};
  color: ${BG};
  text-decoration: none;
}
.ann-inner {
  display: block;
  max-width: 1100px;
  margin: 0 auto;
  padding: 9px 2rem;
  text-align: center;
  text-wrap: balance;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.01em;
}
.ann-item { white-space: nowrap; }
.ann-sep { opacity: 0.45; }
.ann-dot {
  display: inline-block; width: 7px; height: 7px; border-radius: 50%;
  background: ${BG}; margin-right: 8px; vertical-align: 1px;
}
.ann-cta { white-space: nowrap; }
.ann-cta-text { text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
.ann-bar:hover .ann-cta-text { text-decoration-thickness: 2px; }
.ann-bar:focus-visible { outline: 2px solid ${BG}; outline-offset: -4px; }

@media (max-width: 640px) {
  .ann-inner { padding: 8px 1rem; font-size: 12px; }
}
`;

export const AnnouncementBar = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: STYLES }} />
    <a href={HREF} className="ann-bar">
      <span className="ann-inner">
        <span className="ann-dot" aria-hidden="true" />
        {ITEMS.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && (
              <>
                {' '}
                <span className="ann-sep" aria-hidden="true">·</span>{' '}
              </>
            )}
            <span className="ann-item">{item}</span>
          </Fragment>
        ))}{' '}
        <span className="ann-cta">
          <span aria-hidden="true">→ </span>
          <span className="ann-cta-text">{CTA}</span>
        </span>
      </span>
    </a>
  </>
);

export default AnnouncementBar;
