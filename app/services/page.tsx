import Image from "next/image";
import Link from "next/link";
import { 
  PaintRoller, 
  Ruler, 
  Scissors, 
  Home, 
  Building2, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Services | Wallpaper Installation & Removal",
  description: "Professional wallpaper installation, custom murals, removal, and wall preparation in Austin and Central Texas. Residential and commercial services.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-sage-900 text-cream-50 py-20 lg:py-32 relative overflow-hidden">
        {/* Abstract Pattern Background (CSS) */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-terracotta-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container px-4 mx-auto relative z-10 text-center">
          <span className="text-terracotta-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Expert Craftsmanship
          </span>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Services & Expertise
          </h1>
          <p className="text-sage-200 max-w-2xl mx-auto text-lg leading-relaxed">
            From delicate grasscloths in a powder room to large-scale commercial vinyls, 
            we bring 30+ years of technical precision to every roll we hang.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 lg:py-24 container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Service 1: Residential */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-sage-100 group hover:border-sage-200 transition-all">
            <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-cream-50 transition-colors">
              <Home size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">Residential Installation</h3>
            <p className="text-sage-600 mb-6 leading-relaxed">
              We specialize in transforming homes with precision and care. We treat your space with respect, ensuring a clean workspace and perfect finishes.
            </p>
            <ul className="space-y-3">
              {[
                "Powder Rooms & Accent Walls",
                "Bedrooms, Dining & Living Areas",
                "Ceiling Wallpaper Installation",
                "All Materials: Grasscloth, Silk, Vinyl, Non-Woven"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sage-700 text-sm font-medium">
                  <CheckCircle2 size={18} className="text-terracotta-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 2: Commercial */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-sage-100 group hover:border-sage-200 transition-all">
            <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-cream-50 transition-colors">
              <Building2 size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">Commercial Projects</h3>
            <p className="text-sage-600 mb-6 leading-relaxed">
              Durable, high-traffic solutions for businesses. We work efficiently to minimize downtime and coordinate with general contractors.
            </p>
            <ul className="space-y-3">
              {[
                "Type II Commercial Vinyls",
                "Offices, Lobbies & Retail Spaces",
                "Boutique Hotels & Restaurants",
                "Timeline & Budget Management"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sage-700 text-sm font-medium">
                  <CheckCircle2 size={18} className="text-terracotta-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 3: Murals */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-sage-100 group hover:border-sage-200 transition-all">
            <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-cream-50 transition-colors">
              <Sparkles size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">Custom Murals</h3>
            <p className="text-sage-600 mb-6 leading-relaxed">
              Installing panoramic murals requires mathematical precision. We ensure scenes align perfectly across multiple panels and corners.
            </p>
            <ul className="space-y-3">
              {[
                "Digital Print Murals",
                "Hand-Painted Scenic Panels",
                "Complex Pattern Matching",
                "Statement Walls"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sage-700 text-sm font-medium">
                  <CheckCircle2 size={18} className="text-terracotta-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 4: Prep & Removal */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-sage-100 group hover:border-sage-200 transition-all">
            <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-cream-50 transition-colors">
              <PaintRoller size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">Removal & Prep</h3>
            <p className="text-sage-600 mb-6 leading-relaxed">
              The secret to a great install is the surface underneath. We meticulously strip old paper and repair walls to create a flawless canvas.
            </p>
            <ul className="space-y-3">
              {[
                "Safe Wallpaper Removal",
                "Drywall Repair & Skim Coating",
                "Professional Priming (R-35, Roman Pro)",
                "Surface Smoothing"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sage-700 text-sm font-medium">
                  <CheckCircle2 size={18} className="text-terracotta-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Why Material Matters Section */}
      <section className="bg-sage-100 py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
               {/* Decorative Text Block */}
               <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border-l-8 border-terracotta-500">
                  <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">I Don't Sell Paper, <br/>I Make It Look Perfect.</h3>
                  <p className="text-sage-700 mb-6">
                    While I don't sell wallpaper directly, I work with all major brands and can order on your behalf if needed. My focus is entirely on the craft of installation.
                  </p>
                  <p className="text-sage-700">
                    I am happy to recommend reputable online retailers and local showrooms in Austin where you can find high-quality papers that will stand the test of time.
                  </p>
               </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-sage-900">Working With Designers</h2>
              <p className="text-sage-700 text-lg">
                I regularly collaborate with interior designers, architects, and home decorators across Central Texas.
              </p>
              <ul className="space-y-4">
                 <li className="flex gap-4">
                    <Ruler className="text-terracotta-600 shrink-0" />
                    <span className="text-sage-800">Precise quantity estimation to minimize waste.</span>
                 </li>
                 <li className="flex gap-4">
                    <Scissors className="text-terracotta-600 shrink-0" />
                    <span className="text-sage-800">Expert advice on material suitability for specific rooms (e.g., humidity in bathrooms).</span>
                 </li>
                 <li className="flex gap-4">
                    <CheckCircle2 className="text-terracotta-600 shrink-0" />
                    <span className="text-sage-800">Reliable scheduling to keep your project timeline on track.</span>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container px-4 mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-sage-900 mb-6">Ready to Transform Your Walls?</h2>
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