import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import OnTheListSubscribe from "../components/OnTheListSubscribe";

const Home: NextPage = () => {
  const router = useRouter();
  const ref = router.query.ref as string;

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <OnTheListSubscribe refCode={ref} />
      </div>
    </div>
  );
};

export default Home;
