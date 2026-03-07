import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Free Quote",
  description: "Get a free quote for wallpaper installation in Austin and Central Texas. Residential, commercial, and custom mural services. Veteran-owned.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-sage-900 text-cream-50 py-20 lg:py-32">
        <div className="container px-4 mx-auto text-center">
          <span className="text-terracotta-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Start Your Project
          </span>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Get a Free Quote
          </h1>
          <p className="text-sage-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to transform your space? Fill out the form below or give us a call. 
            Don reviews every request personally and will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Contact Info */}
            <div className="w-full lg:w-1/3 space-y-10">
              
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-sage-100 p-3 rounded-full text-sage-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-sage-500 font-bold uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:8327883667" className="text-lg font-medium text-sage-800 hover:text-terracotta-600 transition-colors">
                        (832) 788-3667
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-sage-100 p-3 rounded-full text-sage-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-sage-500 font-bold uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:dondye57@yahoo.com" className="text-lg font-medium text-sage-800 hover:text-terracotta-600 transition-colors">
                        dondye57@yahoo.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-sage-100 p-3 rounded-full text-sage-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-sage-500 font-bold uppercase tracking-wider mb-1">Service Area</p>
                      <p className="text-lg font-medium text-sage-800 leading-snug">
                        Austin, Round Rock, Cedar Park, Georgetown, Lakeway, Dripping Springs, Kyle
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-full h-px bg-sage-200"></div>

              {/* Hours */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-6">
                  Business Hours
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <Clock size={20} className="text-terracotta-500" />
                    <span className="text-sage-700 font-medium w-24">Mon - Fri</span>
                    <span className="text-sage-900 font-bold">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Clock size={20} className="text-terracotta-500" />
                    <span className="text-sage-700 font-medium w-24">Saturday</span>
                    <span className="text-sage-900 font-bold">9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Calendar size={20} className="text-sage-400" />
                    <span className="text-sage-700 font-medium w-24">Sunday</span>
                    <span className="text-sage-500 italic">Closed</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: The Form Component */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-2 rounded-3xl shadow-sm border border-sage-100">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}