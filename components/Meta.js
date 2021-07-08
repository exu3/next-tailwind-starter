import Head from "next/head";

export default function Meta({ title }) {
  const description = "This is a Next.js boilerplate.";
  const keywords = "put some fun keywords here";
  const author = "Ella";
  const twitter = "@ella";
  const image =
    "https://og-image.vercel.app/**Next.js**%20Starter%20%3Cbr%2F%3E%20%40eilla1.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title} | Next.js Template</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:url" content="yourdomain.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
}
