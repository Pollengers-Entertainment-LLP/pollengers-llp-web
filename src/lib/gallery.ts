// src/lib/gallery.ts

import type { GalleryImage } from '@/constants';


// Sheets Config

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;

const SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

const GALLERY_SHEET_NAME = process.env.GOOGLE_SHEETS_GALLERY_NAME || 'Gallery'; 


// Drive Config

const IMAGE_GDRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_IMAGE_FOLDER_ID;

const DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY; // ✅ New Variable


export async function fetchGallery(): Promise<GalleryImage[]> {

  // Debug Log

  if (!SHEETS_API_KEY || !DRIVE_API_KEY) {

    console.error("❌ ERROR: Missing API Keys. Check .env.local");

    return [];

  }


  const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${GALLERY_SHEET_NAME}?key=${SHEETS_API_KEY}`;

  

  // ✅ Updated to use DRIVE_API_KEY

  const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${IMAGE_GDRIVE_FOLDER_ID}'+in+parents+and+trashed=false&fields=files(id,name)&key=${DRIVE_API_KEY}`;


  try {

    const [sheetRes, driveRes] = await Promise.all([

      fetch(sheetUrl, { next: { revalidate: 300 } }),

      fetch(driveUrl, { next: { revalidate: 300 } })

    ]);


    if (!sheetRes.ok) {

        console.error("❌ Sheet Fetch Failed:", await sheetRes.text());

        return [];

    }

    if (!driveRes.ok) {

        console.error("❌ Drive Fetch Failed:", await driveRes.text());

        return [];

    }


    const sheetData = await sheetRes.json();

    const driveData = await driveRes.json();


    const rows: string[][] = sheetData.values ?? [];

    const driveFiles: { id: string; name: string }[] = driveData.files ?? [];


    // Map: filename (lowercase) -> drive ID

    const fileMap = new Map(

      driveFiles.map(f => [f.name.toLowerCase().trim(), f.id])

    );


    // Skip Header Row & Map

    const images =  rows.slice(1).map((row, index) => {

      const [image_filename, event_location, date_year] = row;

      const normalizedName = image_filename?.toLowerCase().trim() || "";

      const driveId = fileMap.get(normalizedName);


      return {

        id: driveId || `missing-${index}`,

        // ✅ Corrected URL with '$'

        url: driveId 

          ? `https://lh3.googleusercontent.com/d/${driveId}` 

          : '/images/placeholder.png', 

        location: event_location || 'Pollengers Live',

        dateOrYear: date_year || '',

        hasImage: !!driveId

      };

    });


    return images.sort((a, b) => {
        // "2024" or "2024-05-15" both parse correctly
        const dateA = new Date(a.dateOrYear).getTime() || 0;
        const dateB = new Date(b.dateOrYear).getTime() || 0;
        
        // Sort B minus A = Descending
        return dateB - dateA;
    });


  } catch (error) {

    console.error("💥 Gallery Sync Error:", error);

    return [];

  }

} 