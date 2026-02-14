import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getGalleryImages() {
  if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY) {
    console.warn("Cloudinary credentials missing. Returning empty gallery.");
    return [];
  }

  // The folder you want to filter by
  const targetFolder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || 'walls-alive-gallery';

  try {
    const allImages = [];
    let nextCursor = null;

    // Loop until we have fetched ALL uploads
    do {
      const response: any = await cloudinary.api.resources({
        type: 'upload',
        resource_type: 'image',
        max_results: 100, // Fetch more per batch to reduce calls
        next_cursor: nextCursor, 
        // REMOVED: prefix (because your public_ids don't have the folder name)
      });

      // Add this batch to our master list
      allImages.push(...response.resources);
      
      // Update the cursor
      nextCursor = response.next_cursor;
      
    } while (nextCursor);

    // Filter by asset_folder explicitly in JavaScript
    const filteredImages = allImages.filter((resource: any) => 
      resource.asset_folder === targetFolder
    );

    // Return the clean data
    return filteredImages.map((resource: any) => ({
      id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      alt: resource.context?.custom?.alt || "Wallpaper Installation Project" // Optional: Use metadata if you add it later
    }));

  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return [];
  }
}