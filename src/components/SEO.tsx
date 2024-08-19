import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({ title, description, keywords = "", image = "" }: SEOProps) => (
  <HelmetProvider>
    <Helmet>
      <title>Vesko{` - ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  </HelmetProvider>
);

export default SEO;
