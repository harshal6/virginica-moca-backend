import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

const Layout = ({ seo, children }) => {
  const {
    pageTitle,
    description,
    canonical,
    robots,
    twitterCard,
    // twitterSite,
    twitterTitle,
    twitterDescription,
    twitterCreator,
    twitterImage,
    ogTitle,
    ogUrl,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogDescription,
    ogSiteName,
  } = seo

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: ogUrl,
      name: ogSiteName,
      alternateName: ogSiteName,
    },
  ]

  schemaOrgJSONLD.push({
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: ogUrl,
    name: pageTitle || "Virginia MOCA",
  })


  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./src/images/apple-touch-icon.png"
        />
        <link rel="manifest" href="./src/images/site.webmanifest" />
        {canonical && <link rel="canonical" href={canonical} />}
        {robots && <link rel="robots" content={robots} />}
        <title>{pageTitle || "Virginia MOCA"}</title>
        {description && <meta name="description" content={description} />}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        <meta property="og:type" content="website" />
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImageWidth && <meta property="og:image:width" content={ogImageWidth} />}
        {ogImageHeight && <meta property="og:image:height" content={ogImageHeight} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {twitterCard && <meta name="twitter:card" content={twitterCard} />}
        {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
        {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
        {twitterImage && <meta name="twitter:image" content={twitterImage} />}
        {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
        <script dangerouslySetInnerHTML={{ __html: `window.markerConfig={destination:'60b820d90666f961699fac36'}` }} />
        <script dangerouslySetInnerHTML={{ __html: `!function(e,r,t){if(!e.__Marker){e.__Marker={};var a=[],s={__cs:a};for(const e of["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","on","off"])s[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),a.push(r)};e.Marker=s;var n=r.createElement("script");n.async=1,n.src="https://edge.marker.io/latest/shim.js";var o=r.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}(window,document);` }} />

      </Helmet>
      <main id="main">
        <div className="bg-container"></div>
        {children}
      </main>
    </Fragment>
  )
}

export default Layout
