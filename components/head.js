import Head from "next/head";

export default function Meta({ title }) {
  const description = "This is a Next.js boilerplate.";
  const keywords = "put some fun keywords here";
  const author = "Ella";
  const twitter = "@ella";
  //const image = "/ogimage.png"; // This is your OpenGraph image
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title} | Site Title</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:url" content="yourdomain.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1852" />
      <meta property="og:image:height" content="970" /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
}
