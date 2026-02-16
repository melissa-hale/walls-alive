import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-100 border-t border-sage-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-logo font-bold text-cream-50 mb-4">Walls! Alive</h2>
            <p className="text-sage-300 mb-6 text-sm leading-relaxed">
              Veteran-owned craftsmanship bringing life to Austin walls since 1977. WIA Accredited and fully insured.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 bg-sage-800 rounded-full flex items-center justify-center text-sage-400 hover:bg-terracotta-500 hover:text-white transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 bg-sage-800 rounded-full flex items-center justify-center text-sage-400 hover:bg-terracotta-500 hover:text-white transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-terracotta-400 mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-sage-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Don</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-terracotta-400 mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-sage-200">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-sage-400 mt-0.5" />
                <span>(832) 788-3667</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-sage-400 mt-0.5" />
                <span>dondye57@yahoo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sage-400 mt-0.5" />
                <span>Austin, Round Rock, Cedar Park, & Central Texas</span>
              </li>
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-terracotta-400 mb-4">Credentials</h3>
            <div className="bg-sage-800 p-4 rounded-lg border border-sage-700">
              <ul className="space-y-2 text-xs text-sage-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  Veteran Owned Business
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  WIA Accredited Member
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  Fully Insured
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  30+ Years Experience
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-800 mt-12 pt-8 text-center text-xs text-sage-500">
          <p>&copy; {new Date().getFullYear()} Walls! Alive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}