import { useEffect } from "react";
import HeadObject from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  useEffect(() => {
    console.log(
      "Made by Sarthak Mohanty. All Rights Reserved. Want to hire me? https://srtk.me"
    );
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div className="text-xl text-center">
        <h1 className="leading-loose">
          You are viewing the Next-Tailwind theme starter.
        </h1>
        <button className="rounded-md bg-blue-300 dark:bg-blue-500 p-2 px-4 shadow-md mx-auto hover:shadow-lg">
          <a href="https://github.com/eilla1/next-tailwind-starter">Github</a>
        </button>
      </div>
    </div>
  );
}
