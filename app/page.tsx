import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, PenTool, ShieldCheck, MapPin } from "lucide-react";
import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      {/* CHANGED: min-h-[85vh] -> min-h-screen to match 16:9 aspect ratio better */}
      <section className="relative flex items-center justify-center min-h-screen pt-20 pb-20 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 bg-cream-100">
           <Image 
             src="/hero.jpg" 
             alt="Wallpaper installation background" 
             fill
             /* CHANGED: object-center -> object-top. 
                This anchors the image to the top edge so heads/ceilings don't get cut off 
                when the screen gets wider. */
             className="object-cover object-top opacity-20"
             quality={90}
             priority
           />
           {/* Gradient Overlay for better text readability */}
           <div className="absolute inset-0 bg-linear-to-b from-cream-100/30 via-cream-100/10 to-cream-100/90" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 mb-8 text-xs font-bold tracking-widest text-terracotta-700 uppercase bg-terracotta-50/90 backdrop-blur-sm rounded-full border border-terracotta-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse"></span>
            Veteran Owned & Operated
          </div>
          
          <h1 className="mb-6 text-5xl font-serif font-bold text-sage-900 leading-[1.1] drop-shadow-sm">
            Professional Wallpaper<br className="hidden md:block" /> Installation
          </h1>
          
          <p className="mb-10 text-xl text-sage-900 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
            Bringing over 40 years of precision craftsmanship to Texas homes and businesses. 
            Honest work, fair pricing, and meticulous attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="inline-flex items-center justify-center py-4 px-8 text-lg font-bold text-cream-50 bg-sage-600 hover:bg-sage-700 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="inline-flex items-center justify-center py-4 px-8 text-lg font-bold text-sage-800 bg-white/80 hover:bg-white rounded-lg transition-all border border-sage-200 backdrop-blur-sm hover:shadow-md">
              View Our Work
            </Link>
          </div>

          {/* Trust Badge Integrated */}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-3xl font-serif font-bold text-terracotta-400 mb-1">40+</h3>
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