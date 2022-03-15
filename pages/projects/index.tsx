import type { NextPage } from "next";
import { useState } from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/nav";
import Projects from "../../components/Projects";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
