// import Image from 'next/image';
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { CircleArrowRight, Image } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="w-full flex flex-row p-10 bg-[#f9f9f9]">
      <div className="flex flex-col max-w-[768px]: text-start">
        <h3 className="text-4xl font-[600] text-textTitle">Обо мне</h3>
        <h2 className="text-[1.5rem] font-[500] text-text mt-4">
          Frontend Developer
        </h2>
        <div className="max-w-[768px] flex flex-col gap-2 mt-4 text-[1rem] font-[500] text-[#4f4f4f]">
          <p>
            Здравствуйте, меня зовут Олег. Я фронтенд разработчик, занимаюсь
            любимым делом. Люблю работать с необычными проектами, использую
            творческий подход в решении нестандартных задач.
          </p>
          <p>
            Есть опыт работы в коммерческих и высоконагруженных проектах. Умею
            работать в команде взаимодействуя с разработчиками, тестировщикам и
            дизайнером. В работе интересны долгосрочные проекты, с постоянной
            загрузкой.
          </p>
        </div>
        <div className="mt-5">
          <Link href="#portfolio">
            <Button className="flex flex-row font-[700]">
              <CircleArrowRight className="mr-2 h-5 w-5" />
              Посмотреть мои работы
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Image className="w"/>
      </div>
    </div>
  );
}
