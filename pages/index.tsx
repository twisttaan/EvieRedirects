import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center h-screen">
        <Link href="https://discord.gg/7UwN2PZgva">
          <span className="text-white hover:text-blue-400 text-3xl">EvieClient a 1.8 PvP Optimized Client</span>
          <span className="text-white text-3xl">coming out <a className="hover:text-blue-400">soon!</a></span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
