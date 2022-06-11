import { IMeta } from "@typings";

const BaseHeader = ({ pageTitle, pageDescription, pagePermalink }: IMeta) => {
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={pagePermalink} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://astro.build/social.png?v=1" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pagePermalink} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta
        property="twitter:image"
        content="https://astro.build/social.png?v=1"
      />

      {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap"
      /> */}
    </>
  );
};

export default BaseHeader;
