/**
 * Unrejectable cohort 02 starts on 30 November, so enrollment shuts at the end
 * of 29 November (Madrid time, CET by then). Every deadline string on the site
 * derives from what's here, so the sticky bar, the hero chips and the closing
 * CTA can't drift apart.
 */
export const COHORT = '02';
export const ENROLLMENT_CLOSES = new Date('2026-11-29T23:59:59+01:00');

export const CLOSES_LONG = 'November 29';
export const CLOSES_SHORT = 'Nov 29';
export const STARTS_LONG = 'November 30';

/**
 * Keep PRICE in step with the Kit product. Update SEATS_LEFT by hand as people
 * join.
 */
export const PRICE = '€799';
export const SEATS_LEFT = 8;
export const SEATS_LEFT_LABEL = `${SEATS_LEFT} ${SEATS_LEFT === 1 ? 'seat' : 'seats'} left`;

/** Whole days remaining: 7 a week out, 0 on the final day, negative once shut. */
export const daysLeft = (now: Date = new Date()): number =>
  Math.floor((ENROLLMENT_CLOSES.getTime() - now.getTime()) / 86_400_000);

export const isClosed = (now: Date = new Date()): boolean =>
  now.getTime() > ENROLLMENT_CLOSES.getTime();

/** "7 days left" · "1 day left" · "Last day". Empty string once closed. */
export const countdown = (now: Date = new Date()): string => {
  if (isClosed(now)) return '';
  const d = daysLeft(now);
  if (d <= 0) return 'Last day';
  if (d === 1) return '1 day left';
  return `${d} days left`;
};
