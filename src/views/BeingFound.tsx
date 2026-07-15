import { UNREJECTABLE_THEME } from '@/lib/unrejectableTheme';

const PAGE_STYLES = `
.bf-banner {
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(254,237,78,0.18);
  border-radius: 18px;
  background:
    radial-gradient(ellipse 70% 120% at 100% 0%, rgba(254,237,78,0.07), transparent),
    rgba(254,237,78,0.025);
  padding: 48px 44px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.bf-banner:hover { border-color: rgba(254,237,78,0.45); transform: translateY(-2px); }
.bf-banner:focus-visible { outline: 2px solid var(--u-accent); outline-offset: 3px; }

.bf-banner-k {
  font-family: var(--u-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--u-accent);
  font-weight: 700;
  margin-bottom: 18px;
}
.u .bf-banner-h {
  font-size: clamp(26px, 3.6vw, 40px);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.08;
  color: var(--u-text);
  margin-bottom: 18px;
  max-width: 20ch;
}
.u .bf-banner-p { color: var(--u-text-2); font-size: 16px; max-width: 54ch; margin-bottom: 28px; }
.bf-banner-cta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--u-accent);
  font-weight: 700;
  font-size: 15px;
}
.bf-banner:hover .bf-banner-arrow { transform: translateX(4px); }
.bf-banner-arrow { transition: transform 0.2s ease; display: inline-block; }

@media (max-width: 680px) {
  .bf-banner { padding: 36px 28px; }
}

.bf-x {
  width: 26px; height: 26px; border-radius: 7px;
  background: rgba(239,68,68,0.1);
  border: 1px solid rgba(239,68,68,0.25);
  color: #F87171;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700;
  margin-bottom: 16px;
}

.u .bf-punch { font-size: 24px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.3; color: var(--u-text); }
`;

type Item = { title: string; body?: string };

const SURFACE: Item[] = [
  { title: 'Name the thing', body: 'A handle other people can repeat. Upstream of everything else here: unnamed work is unspreadable, because nobody has a noun to put in a sentence. Someone can write "AsyncAPI" in a blog post. Nobody can write "that thing Fran is building."' },
  { title: 'One canonical URL where it lives', body: 'So links accumulate in one place instead of scattering across five.' },
  { title: 'Talk about your projects on socials. Regularly.', body: "Not when there's news. Regularly." },
  { title: 'Start a blog or a newsletter', body: 'Somewhere you own.' },
  { title: 'A cadence, not just events', body: 'Weeknotes, a public changelog, "what I did this week." This exists to remove the is this worth posting? decision, which is precisely where most people\'s visibility dies. Nothing is ever worth posting when you ask that question, so stop asking it.' },
  { title: 'Write about the problem, not only your project', body: 'Nobody follows a person who only ever talks about their own thing. You earn the right to talk about your work by being useful about the domain around it.' },
  { title: 'A landing page for the idea before the product exists', body: 'It gauges interest, and it forces you to name it.' },
  { title: "If it's open source: a repo with issues and discussions enabled", body: 'Put your ideas in issues, not in your head, so anyone can pick one up and help.' },
];

const BORROWED: Item[] = [
  { title: 'Speak at conferences about the idea', body: 'Before it exists. Yes, really.' },
  { title: 'Speak at conferences about the project', body: "Once it's in motion." },
  { title: 'Podcasts', body: 'Harder at the start, since hosts want existing signal. Strong once you have a little.' },
  { title: 'Local meetups', body: 'Entirely dependent on where you live. Can be everything or nothing.' },
  { title: 'Guest posts', body: "In someone else's publication or newsletter." },
  { title: 'Answer questions where the problem already lives', body: "Other projects' issues, forums, Stack Overflow. Go to the pain instead of waiting for it to come to you." },
];

const HALLWAYS: Item[] = [
  { title: 'Conferences, for the corridor', body: "The talk is not the deliverable. It's the price of admission to the hallway. Most engineers prepare for months, give the talk, and go home, which is paying the price and then leaving before you collect." },
  { title: 'A public space for people who care', body: 'Slack, Discord, wherever.' },
  { title: 'Show up in it regularly', body: 'With progress.' },
  { title: "Video calls with the people who'd actually use the thing", body: 'If that applies.' },
];

const ANTI: Item[] = [
  { title: "Don't manufacture problems to answer", body: "You've seen the posts. Someone invents a struggle they didn't have so they can share the lesson they didn't learn. Go where the pain already is. There's plenty of it and it's real." },
  { title: "Don't cultivate people because they have platforms", body: "Treating humans as distribution is the posture of someone who needs something, and it doesn't work anyway. It's also visible from space. Go to conferences to meet people, not to collect them. The rest happens on its own or it doesn't." },
  { title: "Don't announce once and go silent", body: "The most common failure by a distance, and probably why you're reading this. One post, no response, quiet conclusion that the work should have spoken for itself. It doesn't. It never has. Not for anyone, in any field, at any point in history." },
];

function ItemList({ items }: { items: Item[] }) {
  return (
    <ol className="u-list">
      {items.map((it) => (
        <li key={it.title}>
          <div className="u-item">
            <h3>{it.title}</h3>
            {it.body && <p>{it.body}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function BeingFound() {
  return (
    <div className="u">
      <style dangerouslySetInnerHTML={{ __html: UNREJECTABLE_THEME + PAGE_STYLES }} />

      <div className="u-wrap">
        <header className="u-sec-first">
          <div className="u-kicker">Free · No 1</div>
          <h1>Everything I know about being found</h1>
          <p className="u-sub">
            I spent a decade building things nobody knew existed. This is what talking about your
            work actually means, in practice.
          </p>
        </header>

        <section className="u-sec">
          <div className="u-body">
            <p className="u-lede">
              One of them was a code editor that ran in a browser tab, back when that sounded
              ridiculous.
            </p>
            <p>
              Two guys in Amsterdam were building the same idea at the same time. Amazon bought
              them. I archived mine in 2020, and nobody noticed, because there was nobody to notice.
            </p>
            <p>I was a good engineer the whole time. It made no difference at all.</p>
            <p>
              Then I built AsyncAPI and did exactly one thing differently. <mark>I talked about it.</mark>{' '}
              Before it existed, while it was bad, and long after I was certain everyone was sick of
              hearing me. That&apos;s the only variable that changed between the projects that died
              and the one that became a standard.
            </p>
            <p>
              What follows is grouped by what each thing does, not by when you do it. Nothing in here
              requires you to become someone you&apos;d dislike. The last section is specifically
              about that.
            </p>
          </div>
        </section>

        <section className="u-sec">
          <div className="u-kicker u-kicker-muted">The shape of it</div>
          <div className="u-grid-cards">
            <div className="u-card">
              <div className="u-card-n">01</div>
              <h4>Surface area</h4>
              <p>What makes you findable. Slow, compounding, and it has to exist before anything else can happen to you.</p>
            </div>
            <div className="u-card">
              <div className="u-card-n">02</div>
              <h4>Borrowed audiences</h4>
              <p>Someone else already gathered the people. You show up.</p>
            </div>
            <div className="u-card">
              <div className="u-card-n">03</div>
              <h4>Hallways</h4>
              <p>Where a human actually meets you. Not a task list.</p>
            </div>
          </div>
          <div className="u-body">
            <p>
              They&apos;re in order. The first one has to exist before the second one will have you,
              and none of it matters if you&apos;re never in a room with anyone.
            </p>
          </div>
        </section>

        <section className="u-sec">
          <div className="u-head"><h2>Surface area</h2><span className="u-head-count">8 things</span></div>
          <p className="u-lead">What makes you findable. This has to exist before anything else can happen to you.</p>
          <ItemList items={SURFACE} />
        </section>

        <section className="u-sec">
          <div className="u-head"><h2>Borrowed audiences</h2><span className="u-head-count">6 things</span></div>
          <p className="u-lead">Someone else already did the work of gathering people. You show up.</p>
          <div className="u-note">
            This tier is gated. Podcasts and conferences want to see some signal before they&apos;ll
            have you, so the surface area above comes first. That&apos;s not gatekeeping, it&apos;s
            just how it works. And it&apos;s the same law as everything else here: even they find{' '}
            <mark>you</mark>, once there&apos;s something to find.
          </div>
          <ItemList items={BORROWED} />
        </section>

        <section className="u-sec">
          <div className="u-head"><h2>Hallways</h2><span className="u-head-count">4 things</span></div>
          <p className="u-lead">Where a human actually meets you. Not a task list, and deliberately not a set of targets.</p>
          <ItemList items={HALLWAYS} />
        </section>

        <section className="u-sec">
          <div className="u-kicker u-kicker-muted">The law</div>
          <p className="u-statement">You get found.<br />You don&apos;t hunt.</p>
          <div className="u-body">
            <p>The person who changed the course of my career found me because I&apos;d been talking in public for years. I didn&apos;t find him. I couldn&apos;t have. I didn&apos;t know he existed, and if I&apos;d gone looking for someone like him on purpose, it would have been obvious and it would have failed.</p>
            <p>Surface area is what makes you findable. Hallways are where it gets touched by an actual person. Neither works without the other, and neither can be skipped.</p>
            <p>This is the same mechanism as the job itself, which is the part that took me longest to see. You don&apos;t apply. You get found.</p>
          </div>
        </section>

        <section className="u-sec">
          <div className="u-head"><h2>What this does not require you to do</h2></div>
          <p className="u-lead">This section matters more than it looks. If you&apos;re the kind of engineer who&apos;s been quietly good for a decade, your real fear isn&apos;t hard work. It&apos;s turning into someone insufferable. So, explicitly:</p>
          <div className="u-grid-cards">
            {ANTI.map((a) => (
              <div className="u-card" key={a.title}>
                <div className="bf-x" aria-hidden>✕</div>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="u-sec">
          <div className="u-body">
            <p className="bf-punch">None of this is information you were missing. You know blogs exist.</p>
            <p>The hard part is that doing it feels like begging, and you&apos;d rather be invisible than undignified. I understand that completely. I chose invisible for ten years, and I have a graveyard of archived repos to show for it.</p>
            <p>The thing I&apos;d tell my younger self is that the people you&apos;re comparing yourself to are not better than you. Most of them have less behind them than you do. They just told someone.</p>
            <p>You&apos;ve already done the hard part. You built the thing. All that&apos;s left is the part you find embarrassing.</p>
            <p className="bf-punch">Say it early. Say it often.</p>
          </div>
        </section>

        <section className="u-sec">
          <a className="bf-banner" href="/unrejectable">
            <div className="bf-banner-k">Unrejectable</div>
            <p className="bf-banner-h">The embarrassing part is the entire course.</p>
            <p className="bf-banner-p">
              Everything above is the what, and you already knew most of it. I&apos;m building the
              other thing: doing it anyway, for years, when every single step feels like begging. It
              doesn&apos;t exist yet, and the page explains why that&apos;s deliberate.
            </p>
            <span className="bf-banner-cta">
              See what it is <span className="bf-banner-arrow" aria-hidden>→</span>
            </span>
          </a>
        </section>

        <div className="u-sig">
          Fran Méndez — created AsyncAPI, now building <a href="https://usecommune.com">usecommune.com</a>
        </div>
      </div>
    </div>
  );
}
