import Head from 'next/head'

export default function SEO({ 
  title, 
  description, 
  keywords,
  ogImage = '/og-image.jpg',
  ogUrl = 'https://flydevsglobal.com',
  author = 'FLYDEVS GLOBAL',
  publishDate = new Date().toISOString(),
  modifiedDate = new Date().toISOString()
}) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <link rel="canonical" href={ogUrl} />
      <meta name="author" content={author} />
      <meta name="copyright" content={`${author} ${new Date().getFullYear()}`} />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="theme-color" content="#f7f5f2" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FLYDEVS GLOBAL" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@flydevs" />
      <meta name="twitter:creator" content="@flydevs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Article Meta Tags */}
      <meta property="article:publisher" content="https://www.linkedin.com/company/flydevs" />
      <meta property="article:published_time" content={publishDate} />
      <meta property="article:modified_time" content={modifiedDate} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content="About" />
      <meta property="article:tag" content="Creative Agency" />
      <meta property="article:tag" content="Digital Solutions" />
      <meta property="article:tag" content="Web Development" />
      
      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="FLYDEVS GLOBAL" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="msapplication-TileColor" content="#f7f5f2" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />
      
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FLYDEVS GLOBAL",
            "description": description,
            "url": ogUrl,
            "logo": "https://flydevsglobal.com/logo.png",
            "image": ogImage,
            "email": "info@flydevs.com",
            "telephone": "+971-XX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "sameAs": [
              "https://www.linkedin.com/company/flydevs",
              "https://twitter.com/flydevs",
              "https://www.instagram.com/flydevs",
              "https://www.facebook.com/flydevs"
            ],
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "FLYDEVS GLOBAL Team"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "info@flydevs.com"
            }
          })
        }}
      />
      
      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://flydevsglobal.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://flydevsglobal.com/about"
              }
            ]
          })
        }}
      />
      
      {/* Structured Data - About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": title,
            "description": description,
            "url": ogUrl,
            "mainEntity": {
              "@type": "Organization",
              "name": "FLYDEVS GLOBAL",
              "description": "Creative agency providing digital solutions"
            }
          })
        }}
      />
      
      {/* Favicon Links */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}