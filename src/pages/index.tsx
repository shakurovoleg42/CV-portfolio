// import { Container } from "@/components/Container";

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
// import Works from "@/components/Works";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="w-full flex flex-row">
      <Header />
      <div className="w-full flex flex-col flex-1 pl-[60px] sm:pl-[200px] md:pl-[250px] lg:pl-[300px]">
        <About />
        <Skills />
        <Portfolio />
        {/* <Works /> */}
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
