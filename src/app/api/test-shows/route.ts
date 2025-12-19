import { NextResponse } from 'next/server';
import { fetchShows } from '@/lib/shows';

export async function GET() {
  try {
    const data = await fetchShows();

    return NextResponse.json({
      success: true,
      counts: {
        upcoming: data.upcoming.length,
        previous: data.previous.length,
      },
      sampleUpcoming: data.upcoming[0] ?? null,
      samplePrevious: data.previous[0] ?? null,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message ?? 'Unknown error',
      },
      { status: 500 }
    );
  }
}
