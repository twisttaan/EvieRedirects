import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Nav from "../../components/nav";
import { useRouter } from "next/router";

const EvieImages: NextPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-gh-token"]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    const base = "https://github.com/login/oauth/authorize";
    const clientID = "aa0ecf30b8d303f30daf";
    const backend = "https://api.evie.pw";
    const scopes = "read:org";

    if (code) {
      axios.get(`${backend}/v1/auth/github?code=${code}`).then((res) => {
        setCookie("user-gh-token", res.data.token, { path: "/" });
        setLoading(false);
      });
    } else if (!cookies["user-gh-token"]) {
      window.location.href = `${base}?client_id=${clientID}&scope=${scopes}`;
    } else {
      setLoading(false);
    }
    console.log(cookies);
  }, [code, cookies, setCookie]);

  while (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blurple drop-shadow-2xl" />
      </div>
    );
  }

  return (
    <>
      <Nav />
    </>
  );
};

export default EvieImages;
