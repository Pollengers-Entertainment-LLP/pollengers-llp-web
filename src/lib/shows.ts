// src/lib/shows.ts

import type { Show, ShowsData } from '@/constants';

const SHEET_ID = process.env.GOOGLE_SHEETS_ID!;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY!;
const SHEET_NAME = 'Sheet1'; // change if needed

export async function fetchShows(): Promise<ShowsData> {
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}` +
    `?key=${API_KEY}`;

  const res = await fetch(url, {
    next: { revalidate: 60 }, // cache 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch shows from Google Sheets');
  }

  const data = await res.json();

  // ✅ DEFINE rows properly
  const rows: string[][] = data.values ?? [];

  const upcoming: Show[] = [];
  const previous: Show[] = [];

  if (rows.length <= 1) {
    return { upcoming, previous };
  }

  const today = new Date().toISOString().split('T')[0];

  rows.slice(1).forEach((row) => {
    const [
      date,
      rawEventName,
      venue,
      isPrivateRaw,
    ] = row;

    // venue is mandatory
    if (!date || !venue) return;

    const isPrivate = isPrivateRaw !== 'FALSE'; // default TRUE

    const show: Show = {
      date,
      eventName: rawEventName?.trim() || 'Private Party',
      venue,
      isPrivate,
    };

    if (date >= today) {
      upcoming.push(show);
    } else {
      previous.push(show);
    }
  });

  upcoming.length && upcoming.sort((a, b) => a.date.localeCompare(b.date));
  previous.length && previous.sort((a, b) => b.date.localeCompare(a.date));

  return { upcoming, previous };
}
