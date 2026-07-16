// src/lib/youtube.ts

import type { YouTubeVideo } from '@/constants';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY!;

// export async function fetchYouTubePlaylist(
//   playlistId: string
// ): Promise<{ videos: YouTubeVideo[] }> {
//   const res = await fetch(
//     `https://www.googleapis.com/youtube/v3/playlistItems?` +
//       new URLSearchParams({
//         part: 'snippet,contentDetails,status',
//         playlistId,
//         maxResults: '50',
//         key: YOUTUBE_API_KEY,
//       }),
//     {
//       next: { revalidate: 3600 }, // cache 1 hour
//     }
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch YouTube playlist');
//   }

//   const data = await res.json();

// const videos: YouTubeVideo[] = data.items
//   // ✅ Filters out private, unlisted, deleted, or hidden videos
//   .filter((item: any) => {
//     const isPublic = item.status?.privacyStatus === 'public';
//     const isTitleValid = 
//       item.snippet?.title !== 'Private video' && 
//       item.snippet?.title !== 'Deleted video';

//     return isPublic && isTitleValid;
//   })
//   .map((item: any, index: number) => ({
//     videoId: item.contentDetails.videoId,
//     title: item.snippet.title,
//     subtitle: item.snippet.channelTitle,
//     enabled: true,    // kept for compatibility
//     order: index + 1,  // YouTube order
//   }));

//   return { videos };
// }
// src/lib/youtube.ts

export async function fetchYouTubePlaylist(playlistId: string) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

    const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
    if (!res.ok) throw new Error(`YouTube API returned status ${res.status}`);

    const data = await res.json();

    const videos = (data.items || [])
      .filter((item: any) => {
        const isPublic = item.status?.privacyStatus === 'public';
        const title = item.snippet?.title || '';

        // Exclude hidden placeholders or explicitly private/deleted items
        const isNotHidden = title !== 'Private video' && title !== 'Deleted video';

        return isPublic && isNotHidden;
      })
      .map((item: any, index: number) => ({
        videoId: item.contentDetails?.videoId || '',
        title: item.snippet?.title || '',
        subtitle: item.snippet?.channelTitle || 'Pollengers',
        enabled: true,
        order: index + 1,
      }));

    return { videos };
  } catch (error) {
    console.error(`Error fetching YouTube playlist ${playlistId}:`, error);
    return { videos: [] };
  }
}