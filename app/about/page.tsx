import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Shield, Clock, LucideIcon } from "lucide-react";
import { getAboutData } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

const iconMap: Record<string, LucideIcon> = {
  'clock': Clock,
  'heart': Heart,
  'award': Award,
};

export default async function AboutPage() {
  const data = await getAboutData();
  const title = data?.title || "More Than Just Hanging Paper.";

  return (
    <div className="bg-cream-50 min-h-screen">
      
      {/* Hero / Intro */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-32 container px-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* <div className="w-full lg:w-1/2 space-y-8"> */}
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="inline-block py-1 px-3 text-xs font-semibold tracking-widest text-terracotta-600 uppercase bg-terracotta-50 rounded-full">
              Est. 1977
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-sage-900 leading-tight">
              {title}
            </h1>
            <div className="space-y-6 text-lg text-sage-700 leading-relaxed prose prose-sage">
              {data?.bio ? <PortableText value={data.bio} /> : <p>Loading bio...</p>}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link href="/contact" className="bg-sage-600 hover:bg-sage-700 text-cream-50 px-8 py-4 rounded-lg font-bold shadow-lg transition-all">
                Work With Don
              </Link>
            </div>
          </div>

          {/* <div className="w-full flex justify-center lg:justify-end"> */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-4 bg-terracotta-100 rounded-full transform translate-x-4 translate-y-4"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
                {data?.portraitUrl ? (
                   <Image
                     src={data.portraitUrl}
                     alt="Don - The Friendly Wallpaper Expert"
                     fill
                     className="object-cover"
                     priority
                   />
                ) : (
                   <div className="bg-sage-200 w-full h-full" />
                )}
              </div>
              
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
            {data?.values?.map((val: any, i: number) => {
              const Icon = iconMap[val.icon] || Clock;
              return (
                <div key={i} className="p-6">
                  <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-sage-900 mb-2">{val.title}</h3>
                  <p className="text-sage-600">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Process Simplified */}
      <section className="py-20 container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-serif font-bold text-sage-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          {data?.processSteps?.map((item: any, i: number) => (
            <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-sage-50 border border-sage-100 hover:border-sage-200 transition-colors">
              <span className="text-4xl font-serif font-bold text-terracotta-200">{item.stepNumber}</span>
              <div>
                <h3 className="text-xl font-bold text-sage-900 mb-2">{item.title}</h3>
                <p className="text-sage-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}