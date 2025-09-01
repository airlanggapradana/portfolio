import {Helmet} from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
};

const useSEO = ({title, description, keywords, image, url}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description}/>
      {keywords && <meta name="keywords" content={keywords}/>}

      {/* Open Graph */}
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      {image && <meta property="og:image" content={image}/>}
      {url && <meta property="og:url" content={url}/>}
      <meta property="og:type" content="website"/>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      {image && <meta name="twitter:image" content={image}/>}

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: title,
          url: url,
          description: description,
        })}
      </script>
    </Helmet>
  );
};

export default useSEO;
