// import { Container } from "@/components/Container";

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <About />
      <Skills />
      <Contacts />
    </div>
  );
};

export default Home;
