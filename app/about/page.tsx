import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Shield, Clock } from "lucide-react";

export const metadata = {
  title: "About Don | 45+ Years Experience",
  description: "Meet Don, the craftsman behind Walls! Alive. Serving Austin since 1977 with meticulous wallpaper installation and old-school values.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      
      {/* Hero / Intro */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-32 container px-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="inline-block py-1 px-3 text-xs font-semibold tracking-widest text-terracotta-600 uppercase bg-terracotta-50 rounded-full">
              Est. 1977
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-sage-900 leading-tight">
              More Than Just <br/> Hanging Paper.
            </h1>
            <div className="space-y-6 text-lg text-sage-700 leading-relaxed">
              <p>
                In business since 1977, I've learned that I need to be not only a high-quality craftsman but a partner who understands your home. 
              </p>
              <p>
                Preparing the walls is the single most important aspect of any wallpaper job. I use only the highest quality primers and adhesives because you deserve to enjoy your wallpaper for years without issues.
              </p>
              <p className="font-serif italic text-sage-800 text-xl">
                "My reputation demands perfection, and I base my business on repeat customers."
              </p>
            </div>

            {/* Signature / Call to Action */}
            <div className="pt-4 flex items-center gap-6">
              <Link href="/contact" className="bg-sage-600 hover:bg-sage-700 text-cream-50 px-8 py-4 rounded-lg font-bold shadow-lg transition-all">
                Work With Don
              </Link>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Decorative circle behind */}
              <div className="absolute inset-4 bg-terracotta-100 rounded-full transform translate-x-4 translate-y-4"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
                <Image
                  src="/avatar-handyman.png"
                  alt="Don - The Friendly Wallpaper Expert"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-0 right-0 bg-sage-800 text-cream-100 p-4 rounded-full shadow-lg border-4 border-cream-50">
                <Shield size={32} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-white py-20 border-y border-sage-100">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            <div className="p-6">
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-2">Since 1977</h3>
              <p className="text-sage-600">
                Decades of experience mean I’ve seen it all. From vintage homes to modern builds, I know how to handle your walls.
              </p>
            </div>

            <div className="p-6">
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-2">Client Focused</h3>
              <p className="text-sage-600">
                I work directly with homeowners, designers, and contractors. No middlemen, just honest communication.
              </p>
            </div>

            <div className="p-6">
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-2">Quality Materials</h3>
              <p className="text-sage-600">
                I provide all professional adhesives and primers. I don't cut corners on the stuff that holds the paper to the wall.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Process Simplified */}
      <section className="py-20 container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-serif font-bold text-sage-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          {[
            { step: "01", title: "The Conversation", desc: "A simple phone call to discuss your wallpaper plans, timeline, and goals." },
            { step: "02", title: "The Visit", desc: "I schedule a site visit to measure precisely and evaluate your wall conditions." },
            { step: "03", title: "The Prep", desc: "I recommend retailers for paper, while I handle all the professional primers and glue." },
            { step: "04", title: "The Transformation", desc: "I arrive on time, work cleanly, and leave you with a space transformed." }
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start p-6 rounded-2xl bg-sage-50 border border-sage-100 hover:border-sage-200 transition-colors">
              <span className="text-4xl font-serif font-bold text-terracotta-200">{item.step}</span>
              <div>
                <h3 className="text-xl font-bold text-sage-900 mb-2">{item.title}</h3>
                <p className="text-sage-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}