import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-900 min-h-screen">
      <Meta title="Home" />
      <Nav />
      <main className="m-6">
        <div className="container mx-auto">
          <h1 className="title mb-3">This is a website.</h1>
          <p>Wahoo, it&apos;s made with Tailwind CSS and Next.js.</p>
          <button className="btn my-3">
            <a href="https://github.com/eilla1/next-tailwind-starter">
              Check it out
            </a>
          </button>
        </div>
      </main>
    </div>
  );
}
