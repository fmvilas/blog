import { useEffect, useState } from 'react';

/**
 * AsyncAPI 10th anniversary AMA, a live stream on YouTube. Every date, time
 * and title on /asyncapi10, the homepage announcement bar and the .ics
 * download comes from here, so they can't drift apart.
 *
 * The big time on the page and the time in the homepage bar are the
 * visitor's own, worked out in the browser (useYourTime). No place name sits
 * next to a time: it read like an in-person event. Badajoz is just one of the
 * cities in the list, and always "Badajoz", never "Spain" (Spain has two time
 * zones).
 *
 * The strings below are what renders before the browser takes over, and for
 * the city list. If the stream moves, change START and all of them together.
 */
export const START = new Date('2026-11-18T17:30:00Z');

// Fran to confirm. Only the calendar entries use it.
export const DURATION_MINUTES = 60;
export const END = new Date(START.getTime() + DURATION_MINUTES * 60_000);

export const TITLE = '10 years of AsyncAPI — Ask Me Anything';
export const SUBTITLE = 'From side project to industry standard.';
export const PATH = '/asyncapi10';
export const ICS_PATH = '/asyncapi10.ics';

// The day almost everywhere (UTC-12 to UTC+6). Further east it's Thursday,
// which the browser corrects on mount.
export const DAY_LONG = 'Wednesday 18 Nov';
export const DAY_SHORT = 'Wed 18 Nov';

// West to east, so it reads in time order.
export const CITIES = [
  { city: 'San Francisco', time: '09:30' },
  { city: 'New York', time: '12:30' },
  { city: 'London', time: '17:30' },
  { city: 'Badajoz', time: '18:30' },
  { city: 'Mumbai', time: '23:00' },
] as const;

/**
 * Kit, through the "Personal Website" form the homepage newsletter uses.
 *
 * KIT_TAG_ID is the `asyncapi10` tag, created for this page. It goes along as
 * a hidden `tags[]` field, which is what Kit's own tag checkboxes submit, so
 * Kit applies it on subscribe. Don't delete or rename it in Kit while this
 * page is up.
 */
export const KIT_FORM_ID = '8024741';
export const KIT_UID = '8e4cf78d34';
export const KIT_TAG_ID = '25626750';

const two = (n: number) => String(n).padStart(2, '0');

export type YourTime = {
  /** "Wednesday 18 Nov", or "Thursday 19 Nov" east of UTC+6. */
  day: string;
  /** "Wed 18 Nov" */
  dayShort: string;
  /** "12:30", 24-hour like the city list. */
  time: string;
  /** "your time", or "UTC" when the browser can't tell us its zone. */
  zone: string;
};

/** The stream's start in the visitor's zone. timeZone is for testing. */
export const yourTime = (timeZone?: string): YourTime => {
  const fmt = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-GB', { ...options, timeZone }).format(START);
  return {
    day: fmt({ weekday: 'long', day: 'numeric', month: 'short' }),
    dayShort: fmt({ weekday: 'short', day: 'numeric', month: 'short' }),
    time: fmt({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }),
    zone: 'your time',
  };
};

const UTC_FALLBACK: YourTime = { day: DAY_LONG, dayShort: DAY_SHORT, time: '17:30', zone: 'UTC' };

/**
 * null on the server and on the first client render (the page is built ahead
 * of time and can't know the zone), then the visitor's time once mounted.
 */
export const useYourTime = (): YourTime | null => {
  const [value, setValue] = useState<YourTime | null>(null);

  useEffect(() => {
    try {
      setValue(yourTime());
    } catch {
      setValue(UTC_FALLBACK);
    }
  }, []);

  return value;
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

// What every calendar entry says. No YouTube link, on purpose.
const CALENDAR_DETAILS = 'The YouTube link arrives by email.';

/**
 * "Add to calendar" links, in the order the success state shows them: the
 * web calendars most people use first, the .ics download last (Apple Calendar,
 * desktop Outlook and everything else).
 *
 * Plain encodeURIComponent rather than URLSearchParams, so spaces go out as
 * %20: URLSearchParams uses "+", which not every calendar decodes as a space.
 */
const query = (params: Record<string, string>) =>
  Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

// "2026-11-18T17:30:00Z", the form Outlook's compose links take.
const isoUtc = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, 'Z');

const outlookCompose = (host: string) =>
  `${host}/calendar/0/action/compose?` +
  query({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: TITLE,
    startdt: isoUtc(START),
    enddt: isoUtc(END),
    allday: 'false',
    body: CALENDAR_DETAILS,
  });

export const CALENDAR_LINKS = [
  {
    label: 'Google Calendar',
    href:
      'https://calendar.google.com/calendar/render?' +
      query({
        action: 'TEMPLATE',
        text: TITLE,
        dates: `${icsStamp(START)}/${icsStamp(END)}`,
        details: CALENDAR_DETAILS,
      }),
    kind: 'web',
  },
  { label: 'Outlook.com', href: outlookCompose('https://outlook.live.com'), kind: 'web' },
  { label: 'Outlook for work or school', href: outlookCompose('https://outlook.office.com'), kind: 'web' },
  { label: 'Apple Calendar & others (.ics)', href: ICS_PATH, kind: 'download' },
] as const;

/** The calendar file behind the last option. No YouTube link, on purpose. */
export const buildIcs = (now: Date = new Date()): string => {
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
    `DTEND:${icsStamp(END)}`,
    `SUMMARY:${icsText(TITLE)}`,
    `DESCRIPTION:${icsText(CALENDAR_DETAILS)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .map(icsFold)
    .join('\r\n') + '\r\n';
};
