/**
 * AsyncAPI 10th anniversary AMA. Every date, time and title on /asyncapi10, the
 * homepage announcement bar and the .ics download comes from here, so they
 * can't drift apart.
 *
 * The display strings are written out by hand instead of formatted with Intl
 * at render time: the page is static, and a browser whose locale data formats
 * a date slightly differently from Node's would cause a hydration mismatch.
 * If the stream moves, change START and every string below together.
 *
 * Always "Badajoz", never "Spain": Spain has two time zones.
 */
export const START = new Date('2026-11-18T17:30:00Z');

// Fran to confirm. Only the calendar entry uses it.
export const DURATION_MINUTES = 60;

export const TITLE = '10 years of AsyncAPI — Ask Me Anything';
export const SUBTITLE = 'From side project to industry standard.';
export const PATH = '/asyncapi10';
export const ICS_PATH = '/asyncapi10.ics';

export const DAY_LONG = 'Wednesday 18 Nov';
export const DAY_SHORT = 'Wed 18 Nov';
export const HOST_TIME = '18:30 Badajoz';

export const OTHER_CITIES = [
  { city: 'San Francisco', time: '09:30' },
  { city: 'New York', time: '12:30' },
  { city: 'London', time: '17:30' },
  { city: 'Mumbai', time: '23:00' },
] as const;

/**
 * Kit, through the "Personal Website" form the homepage newsletter uses.
 *
 * TAG_ID is the `asyncapi10` tag, created for this page. It goes along as a
 * hidden `tags[]` field, which is what Kit's own tag checkboxes submit, so
 * Kit applies it on subscribe. QUESTION_FIELD is the "AsyncAPI 10 question"
 * custom field. Both live in Kit: don't delete or rename them there while
 * this page is up.
 */
export const KIT_FORM_ID = '8024741';
export const KIT_UID = '8e4cf78d34';
export const KIT_TAG_ID = '25626750';
export const KIT_QUESTION_FIELD = 'fields[asyncapi_10_question]';

const two = (n: number) => String(n).padStart(2, '0');

/**
 * "That's 23:00 your time" in the visitor's zone, adding the day when it
 * isn't the same Wednesday it is in Badajoz ("That's 02:30 your time (Thu 19
 * Nov)"). Browser-only: call it after mount, never during render.
 * timeZone is there for testing; leave it out to use the visitor's own.
 */
export const yourTimeLabel = (timeZone?: string): string => {
  const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone,
  }).format(START);
  const day = (tz?: string) =>
    new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      timeZone: tz,
    }).format(START);

  const theirs = day(timeZone);
  return theirs === day('Europe/Madrid')
    ? `That's ${time} your time`
    : `That's ${time} your time (${theirs})`;
};

const icsStamp = (d: Date) =>
  `${d.getUTCFullYear()}${two(d.getUTCMonth() + 1)}${two(d.getUTCDate())}` +
  `T${two(d.getUTCHours())}${two(d.getUTCMinutes())}${two(d.getUTCSeconds())}Z`;

const icsText = (s: string) =>
  s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');

/** RFC 5545 wants lines of at most 75 octets, continued with a leading space. */
const icsFold = (line: string) => {
  const out: string[] = [];
  let current = '';
  let bytes = 0;
  for (const ch of line) {
    const size = new TextEncoder().encode(ch).length;
    if (bytes + size > 75) {
      out.push(current);
      current = ' ';
      bytes = 1;
    }
    current += ch;
    bytes += size;
  }
  out.push(current);
  return out.join('\r\n');
};

/** The calendar file behind "Add to calendar". No YouTube link, on purpose. */
export const buildIcs = (now: Date = new Date()): string => {
  const end = new Date(START.getTime() + DURATION_MINUTES * 60_000);
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fran Mendez//AsyncAPI 10 AMA//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:asyncapi10-ama-20261118@fmvilas.me',
    `DTSTAMP:${icsStamp(now)}`,
    `DTSTART:${icsStamp(START)}`,
    `DTEND:${icsStamp(end)}`,
    `SUMMARY:${icsText(TITLE)}`,
    `DESCRIPTION:${icsText('The YouTube link arrives by email.')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .map(icsFold)
    .join('\r\n') + '\r\n';
};
