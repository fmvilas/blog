import { useEffect, useState } from 'react';

/**
 * AsyncAPI 10th anniversary AMA, a live stream on YouTube. Every date, time
 * and title on /asyncapi10 and the homepage announcement bar comes from
 * here, so they can't drift apart.
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


export const TITLE = '10 years of AsyncAPI — Ask Me Anything';
export const SUBTITLE = 'From side project to industry standard.';
export const PATH = '/asyncapi10';

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
