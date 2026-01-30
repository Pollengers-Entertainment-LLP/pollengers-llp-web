// src/lib/gallery.ts
import type { GalleryImage } from '@/constants';

const SHEET_ID = process.env.GOOGLE_SHEETS_ID!;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY!;
const GALLERY_SHEET_NAME = process.env.GOOGLE_SHEETS_GALLERY_NAME!; 
const IMAGE_GDRIVE_FOLDER_ID = process.env.IMAGE_GDRIVE_FOLDER_ID!;

export async function fetchGallery(): Promise<GalleryImage[]> {
  const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${GALLERY_SHEET_NAME}?key=${API_KEY}`;
  
  // Fetch file list from Drive (searching by folder ID)
  const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${IMAGE_GDRIVE_FOLDER_ID}'+in+parents+and+trashed=false&fields=files(id,name)&key=${API_KEY}`;

  try {
    const [sheetRes, driveRes] = await Promise.all([
      fetch(sheetUrl, { next: { revalidate: 3600 } }), // Cache for 1 hour
      fetch(driveUrl, { next: { revalidate: 3600 } })
    ]);

    if (!sheetRes.ok || !driveRes.ok) throw new Error('Failed to fetch data from Google APIs');

    const sheetData = await sheetRes.json();
    const driveData = await driveRes.json();

    const rows: string[][] = sheetData.values ?? [];
    const driveFiles: { id: string; name: string }[] = driveData.files ?? [];

    // Create a normalized Map (lowercase name -> driveId) for fast lookup
    const fileMap = new Map(
      driveFiles.map(f => [f.name.toLowerCase().trim(), f.id])
    );

    // Filter out the header row and map the data
    return rows.slice(1).map((row, index) => {
      const [image_filename, event_location, date_year] = row;
      const normalizedName = image_filename?.toLowerCase().trim() || "";
      const driveId = fileMap.get(normalizedName);

      return {
        id: driveId || `missing-${index}`,
        // FIXED: Added '$' for variable and used reliable Google Drive Image host
        url: driveId 
          ? `https://lh3.googleusercontent.com/d/${driveId}` 
          : '/images/placeholder.png', 
        location: event_location || 'Pollengers Live',
        dateOrYear: date_year || '',
        hasImage: !!driveId
      };
    });
  } catch (error) {
    console.error("Gallery Sync Error:", error);
    return [];
  }
}