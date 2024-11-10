/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";

function Project() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-[100%] flex flex-col justify-center p-10 bg-[#f9f9f9] font-poppins">
      <div className="w-full text-center my-5 flex flex-col gap-2">
        <div>
          <Link href="/">
            <Button className="flex flex-row font-[700]">
              <CircleArrowLeft className="mr-2 h-5 w-5" />К резюме
            </Button>
          </Link>
        </div>
        <div>
          <Button className="flex flex-row font-[700]" onClick={goBack}>
            <CircleArrowLeft className="mr-2 h-5 w-5" />
            Вернуться назад
          </Button>
        </div>
        <div>
          <Link href="/projects">
            <Button className="flex flex-row font-[700]">
              <CiMenuBurger className="mr-2 h-5 w-5" />
              Все проекты
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <img
            src="/oryx.png"
            className="w-full sm:w-[40vw] md:w-[30vw] h-auto max-h-[300px] object-cover"
            alt="oryx"
          />
        </div>
        <div>
          <h1 className="text-4xl font-[600] text-textTitle">Oryx</h1>
          <p>Описание проекта</p>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <h2>Технологии</h2>
          <div>
            {tech.map((item) => (
              <div key={item.items}>{item.items}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

const tech = [
  { items: "Next.js" },
  { items: "Redux" },
  { items: "MUI" },
  { items: "Sass" },
  { items: "Laravel" },
];
