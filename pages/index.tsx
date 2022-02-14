import type { NextPage } from "next";
import Link from "next/link";
import OnTheListSubscribe from "../components/OnTheListSubscribe";

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-3xl">EvieClient a 1.8 PvP Optimized Client</span>
        <span className="text-3xl">
          coming out{" "}
          <Link href="https://discord.gg/7UwN2PZgva">
            <a className="hover:text-blue-400">soon!</a>
          </Link>
        </span>
        <OnTheListSubscribe />
      </div>
    </div>
  );
};

export default Home;
