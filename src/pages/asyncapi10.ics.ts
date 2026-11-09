import type { APIRoute } from 'astro';
import { buildIcs } from '@/lib/asyncapi10';

// Prerendered to a static /asyncapi10.ics at build time. A real file served as
// text/calendar is what makes iOS offer "Add to Calendar" instead of a download.
export const GET: APIRoute = () =>
  new Response(buildIcs(), {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
