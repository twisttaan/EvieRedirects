import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center h-screen">
        <Link href="https://discord.gg/MKXkTHGq5J">
          <a className="text-white hover:text-blue-400 text-5xl">soon ;)</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
