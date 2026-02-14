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

  try {
    const results = await cloudinary.search
      .expression(`folder:${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || 'djeemv7hn'}`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    return results.resources.map((resource: any) => ({
      id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return [];
  }
}