/**
 * The first Unrejectable cohort has two dates that matter: enrollment shuts at
 * the end of 15 September (Madrid time), and the group starts on 19 October.
 * Every deadline string on the site derives from what's here, so the sticky
 * bar, the hero chips and the closing CTA can't drift apart.
 */
export const ENROLLMENT_CLOSES = new Date('2026-09-15T23:59:59+02:00');

export const CLOSES_LONG = 'September 15';
export const CLOSES_SHORT = 'Sept 15';
export const STARTS_LONG = 'October 19';

/**
 * After the founding window (€500) closed on 15 September, the remaining seats
 * sell at PRICE. Keep this in step with the Kit product. Update SEATS_LEFT by
 * hand as people join.
 */
export const PRICE = '€750';
export const SEATS_LEFT = 2;
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
