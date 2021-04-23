import HeadObject from "../components/head";
import Nav from "../components/nav";

export default function Home() {

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <div className="text-xl text-center">
        <h1 className="leading-loose">
          You are viewing a Next.js + Tailwind CSS starter.
        </h1>
        <button className="rounded-md bg-blue-300 dark:bg-blue-500 p-2 px-4 shadow-md mx-auto hover:shadow-lg">
          <a href="https://github.com/eilla1/next-starter">Github</a>
        </button>
      </div>
    </div>
  );
}
