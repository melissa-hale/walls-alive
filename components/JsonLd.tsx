export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Walls! Alive",
    "image": "https://wallsalivetx.com/logo-main.jpg",
    "description": "Veteran-owned professional wallpaper installation serving Austin and Central Texas. 30+ years experience in residential and commercial wallcovering.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "telephone": "+15125550123",
    "email": "auto_don@zohomail.com",
    "url": "https://wallsalivetx.com",
    "priceRange": "$$",
    "areaServed": [
      "Austin, TX",
      "Round Rock, TX",
      "Cedar Park, TX",
      "Georgetown, TX",
      "Lakeway, TX",
      "Dripping Springs, TX"
    ],
    "hasCredential": "Wallcovering Installers Association Accredited"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}