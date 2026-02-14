import Image from "next/image";
import { getGalleryImages } from "@/lib/cloudinary";

export const revalidate = 86400; // Revalidate every 24 hours

export const metadata = {
  title: "Project Gallery",
  description: "View our portfolio of completed wallpaper installations across Austin and Central Texas.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="container px-4 mx-auto py-16">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-6">Our Work</h1>
        <p className="text-lg text-sage-600">
          A collection of residential and commercial projects. We let the details speak for themselves.
        </p>
      </div>

      {images.length === 0 ? (
        <div className="text-center py-20 bg-sage-50 rounded-2xl">
          <p className="text-xl font-serif text-sage-700 italic">Project gallery coming soon...</p>
          <p className="text-sage-500 mt-2">Don is busy on a ladder! Check back shortly for photos.</p>
        </div>
      ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img: any) => (
            <div key={img.id} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
              <Image
                src={img.url}
                alt="Wallpaper Installation Project"
                width={img.width}
                height={img.height}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}