// import { Container } from "@/components/Container";

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <About />
      <Skills />
      <Portfolio />
      <Works />
      <Contacts />
    </div>
  );
};

export default Home;
