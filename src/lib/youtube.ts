// src/lib/youtube.ts

import type { YouTubeVideo } from '@/constants';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY!;

export async function fetchYouTubePlaylist(
  playlistId: string
): Promise<{ videos: YouTubeVideo[] }> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
      new URLSearchParams({
        part: 'snippet,contentDetails,status',
        playlistId,
        maxResults: '50',
        key: YOUTUBE_API_KEY,
      }),
    {
      next: { revalidate: 3600 }, // cache 1 hour
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch YouTube playlist');
  }

  const data = await res.json();

  const videos: YouTubeVideo[] = data.items
    // ✅ ONLY PUBLIC VIDEOS
    .filter((item: any) => item.status?.privacyStatus === 'public')
    .map((item: any, index: number) => ({
      videoId: item.contentDetails.videoId,
      title: item.snippet.title,
      subtitle: item.snippet.channelTitle,
      enabled: true,     // kept for compatibility
      order: index + 1,  // YouTube order
    }));

  return { videos };
}
