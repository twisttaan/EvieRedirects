import type { NextPage } from "next";
import EvieHero from "../components/EvieHero";
import Footer from "../components/Footer";
import Nav from "../components/nav";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <EvieHero />
      <Footer />
    </>
  );
};

export default Home;
