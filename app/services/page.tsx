import Link from "next/link";
import { 
  PaintRoller, Ruler, Scissors, Home, Building2, Sparkles, CheckCircle2, LucideIcon 
} from "lucide-react";
import { getServicesData } from "@/sanity/lib/queries";

const iconMap: Record<string, LucideIcon> = {
  'home': Home,
  'building-2': Building2,
  'sparkles': Sparkles,
  'paint-roller': PaintRoller
};

export default async function ServicesPage() {
  const data = await getServicesData();
  
  const heroTitle = data?.heroTitle || "Services & Expertise";
  const heroDesc = data?.heroDescription || "Expert craftsmanship for every roll.";

  return (
    <div className="bg-cream-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-sage-900 text-cream-50 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-terracotta-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container px-4 mx-auto relative z-10 text-center">
          <span className="text-terracotta-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Expert Craftsmanship
          </span>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            {heroTitle}
          </h1>
          <p className="text-sage-200 max-w-2xl mx-auto text-lg leading-relaxed">
            {heroDesc}
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 lg:py-24 container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {data?.mainServices?.map((service: any, i: number) => {
             const Icon = iconMap[service.icon] || Home;
             return (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-sage-100 group hover:border-sage-200 transition-all">
                <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-cream-50 transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">{service.title}</h3>
                <p className="text-sage-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features?.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-3 text-sage-700 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-terracotta-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
             );
          })}
        </div>
      </section>

      {/* Why Material Matters Section */}
      <section className="bg-sage-100 py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
               <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border-l-8 border-terracotta-500">
                  <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">
                    {data?.materialsTitle}
                  </h3>
                  <p className="text-sage-700 mb-6 whitespace-pre-line">
                    {data?.materialsBody}
                  </p>
               </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-sage-900">Working With Designers</h2>
              <p className="text-sage-700 text-lg">
                I regularly work with interior designers, architects, and home decorators.
              </p>
              <ul className="space-y-4">
                 {/* This mapping assumes a simple string array from CMS for flexibility */}
                 {data?.designersList?.map((text: string, i: number) => (
                   <li key={i} className="flex gap-4">
                      {/* Icons are hardcoded to alternating styles or just checkmarks for simplicity, 
                          or you can create a more complex object schema if needed. 
                          Here we use Ruler as default generic icon. */}
                      <Ruler className="text-terracotta-600 shrink-0" />
                      <span className="text-sage-800">{text}</span>
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container px-4 mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-sage-900 mb-6">Ready to Make Your Walls Alive?</h2>
        <p className="text-lg text-sage-600 mb-10 max-w-2xl mx-auto">
          Whether you have the paper in hand or are just starting to plan, let's discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-sage-600 hover:bg-sage-700 text-cream-50 px-8 py-4 rounded-lg font-bold shadow-lg transition-all">
            Get a Free Quote
          </Link>
          <Link href="/gallery" className="bg-white hover:bg-sage-50 text-sage-800 border border-sage-200 px-8 py-4 rounded-lg font-bold transition-all">
            View Recent Work
          </Link>
        </div>
      </section>

    </div>
  );
}