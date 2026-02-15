import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, PenTool, ShieldCheck, MapPin } from "lucide-react";
import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-terracotta-600 uppercase bg-terracotta-50 rounded-full">
                Veteran Owned & Operated
              </span>
              <h1 className="mb-6 text-4xl lg:text-6xl font-serif font-bold text-sage-900 leading-tight">
                Master Wallpaper Installation Since 1995
              </h1>
              <p className="mb-8 text-lg text-sage-700 leading-relaxed max-w-lg">
                Bringing 30+ years of precision craftsmanship to Austin homes and businesses. 
                Honest work, fair pricing, and meticulous attention to detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-block py-4 px-8 text-sm font-bold text-cream-50 bg-sage-600 hover:bg-sage-700 rounded-lg transition-all shadow-lg hover:shadow-xl">
                  Get a Free Quote
                </Link>
                <Link href="/gallery" className="inline-block py-4 px-8 text-sm font-bold text-sage-800 bg-cream-200 hover:bg-cream-300 rounded-lg transition-all">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative mx-auto lg:ml-auto max-w-lg">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50 aspect-square">
                    {/* Placeholder for the provided main logo/illustration */}
                    <Image 
                      src="/logo-main.jpeg" 
                      alt="Don working on wallpaper" 
                      fill
                      className="object-cover"
                      priority
                    />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-cream-50 p-6 rounded-xl shadow-xl border border-sage-100 max-w-xs hidden md:block">
                  <div className="flex items-center gap-3 mb-2">
                     <ShieldCheck className="text-terracotta-500" size={32} />
                     <p className="font-serif font-bold text-sage-800">WIA Accredited</p>
                  </div>
                  <p className="text-sm text-sage-600">Wallcovering Installers Association Member. Fully Insured.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-sage-800 text-cream-100">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-3xl font-serif font-bold text-terracotta-400 mb-1">30+</h3>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-serif font-bold text-terracotta-400 mb-1">100%</h3>
              <p className="text-sm opacity-90">Veteran Owned</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-serif font-bold text-terracotta-400 mb-1">Insured</h3>
              <p className="text-sm opacity-90">For Your Safety</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-serif font-bold text-terracotta-400 mb-1">Native</h3>
              <p className="text-sm opacity-90">Texan Born & Bred</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-cream-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-sage-900 mb-4">Craftsmanship You Can Trust</h2>
            <p className="text-sage-600 max-w-2xl mx-auto">We don't just hang paper; we transform spaces. From delicate grasscloths to commercial vinyls, we handle every material with respect.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential Installation", desc: "Expert installation for powder rooms, accent walls, and full rooms.", icon: Star },
              { title: "Custom Murals", desc: "Precision alignment for panoramic murals and artistic statement walls.", icon: PenTool },
              { title: "Wall Prep & Removal", desc: "Safe removal of old paper and drywall repair for a perfect finish.", icon: CheckCircle },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-sage-100">
                <s.icon className="w-10 h-10 text-terracotta-500 mb-6" />
                <h3 className="text-xl font-serif font-bold text-sage-800 mb-3">{s.title}</h3>
                <p className="text-sage-600 mb-6">{s.desc}</p>
                <Link href="/services" className="text-sage-800 font-semibold hover:text-terracotta-600 text-sm border-b border-terracotta-300 pb-0.5">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO / Area */}
      <section className="py-20 bg-sage-50">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             {/* REPLACED: Placeholder div with GoogleMapsEmbed */}
             <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <GoogleMapsEmbed
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                  height={400}
                  width="100%"
                  mode="place"
                  q="Greater Austin, TX"
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
              {['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Lakeway', 'Dripping Springs', 'Pflugerville', 'Leander'].map(city => (
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