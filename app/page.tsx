import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, PenTool, ShieldCheck, MapPin, LucideIcon } from "lucide-react";
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { getHomeData } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const iconMap: Record<string, LucideIcon> = {
  'star': Star,
  'pen-tool': PenTool,
  'check-circle': CheckCircle,
};

export default async function Home() {
  const data = await getHomeData();
  
  // Default fallbacks to prevent crashes on fresh CMS install
  const heroTitle = data?.heroTitle || "Professional Wallpaper Installation";
  const heroDesc = data?.heroDescription || "Bringing precision craftsmanship to Texas homes.";
  const cities = data?.serviceArea || ['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Dripping Springs', 'Lakeway'];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cream-100">
           {data?.heroImageUrl ? (
             <Image 
                // Use Sanity's builder to cap the width so someone with a 4K monitor 
                // doesn't accidentally download an uncompressed 10MB file.
                src={urlFor(data.heroImageUrl).width(1920).quality(80).url()} 
                alt="Master wallpaper installation in Austin" 
                fill
                // This line is the most important for performance:
                sizes="100vw" 
                className="object-cover object-top opacity-20"
                priority
                // Next.js 15+ tip: adding fetchPriority="high" can further boost LCP
                {...({ fetchPriority: "high" } as any)} 
              />
           ) : (
             <div className="absolute inset-0 bg-sage-200/20" />
           )}
           <div className="absolute inset-0 bg-linear-to-b from-cream-100/30 via-cream-100/10 to-cream-100/90" />
        </div>

        <div className="relative z-10 container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 mb-8 text-xs font-bold tracking-widest text-terracotta-700 uppercase bg-terracotta-50/90 backdrop-blur-sm rounded-full border border-terracotta-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse"></span>
            Veteran Owned & Operated
          </div>
          
          <h1 className="mb-6 text-5xl lg:text-7xl font-serif font-bold text-sage-900 leading-[1.3] leading-[1.1] drop-shadow-sm">
            {heroTitle}
          </h1>
          
          <p className="mb-10 text-xl text-sage-900 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
            {heroDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="inline-flex items-center justify-center py-4 px-8 text-lg font-bold text-cream-50 bg-sage-600 hover:bg-sage-700 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="inline-flex items-center justify-center py-4 px-8 text-lg font-bold text-sage-800 bg-white/80 hover:bg-white rounded-lg transition-all border border-sage-200 backdrop-blur-sm hover:shadow-md">
              View Our Work
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
              <ShieldCheck className="text-terracotta-500" size={24} />
              <div className="text-left">
                <p className="font-serif font-bold text-sage-900 leading-none text-sm">WIA Accredited</p>
                <p className="text-xs text-sage-800 mt-0.5 font-medium">Wallcovering Installers Association Member</p>
              </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-sage-800 text-cream-100">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {data?.stats?.map((stat: any, i: number) => {
              // Check if it's the 3rd item (index 2)
              const isLastItem = i === 2; 

              return (
                <div 
                  key={i} 
                  className={`p-4 ${isLastItem ? "col-span-2 md:col-span-1" : "col-span-1"}`}
                >
                  <h3 className="text-3xl font-serif font-bold text-terracotta-400 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-cream-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-sage-900 mb-4">Craftsmanship You Can Trust</h2>
            <p className="text-sage-600 max-w-2xl mx-auto">We don't just hang paper, we transform spaces. From delicate grasscloths to custom murals, we've worked with them all.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {data?.services?.map((s: any, i: number) => {
              const Icon = iconMap[s.icon] || Star;
              return (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-sage-100">
                  <Icon className="w-10 h-10 text-terracotta-500 mb-6" />
                  <h3 className="text-xl font-serif font-bold text-sage-800 mb-3">{s.title}</h3>
                  <p className="text-sage-600 mb-6">{s.description}</p>
                  <Link 
                    href="/services" 
                    className="text-sage-800 font-semibold hover:text-terracotta-600 text-sm border-b border-terracotta-300 pb-0.5"
                  >
                    {/* Visually, we keep it short and professional */}
                    More Info
                    {/* For SEO and Screen Readers, we add the specific context */}
                    <span className="sr-only"> on {s.title}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local SEO / Area */}
      <section className="py-20 bg-sage-50">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <GoogleMapsEmbed
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                  height={400}
                  width="100%"
                  mode="place"
                  q="Central Texas, TX"
                  loading="lazy"
                  style="border:0; height: 100%; width: 100%;"
                />
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-4 text-terracotta-600">
              <MapPin size={20} />
              <span className="font-bold uppercase tracking-wider text-xs">Service Area</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-sage-900 mb-6">Proudly Serving Central Texas</h2>
            <p className="text-sage-700 mb-6">Based in Austin, we travel to surrounding communities to bring quality craftsmanship to your doorstep.</p>
            <ul className="grid grid-cols-2 gap-3 text-sage-800 font-medium">
              {cities.map((city: string) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-terracotta-500 rounded-full"></span>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}