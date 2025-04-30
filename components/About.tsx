/* eslint-disable react/jsx-no-undef */
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { CircleArrowDown, CircleArrowRight } from "lucide-react";
import Image from "next/image";
export default function About() {
  return (
    <div
      id="about"
      className="w-full flex flex-col md:flex-row py-10 px-[8px] lg:p-10 bg-[#ffffff] border-b-[1px] border-b-[#eaeaea] gap-10"
    >
      <div className=" flex  md:hidden mt-9 items-center justify-center">
        <Image
          src="/avatar.jpg"
          alt="logo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col w-full text-start">
        <h3 className="text-[22px] mt-5 text-center  sm:text-[29px] md:text-start md:text-3xl font-[600] text-textTitle">
          Обо мне
        </h3>
        <h2 className="text-[18px] sm:text-2xl md:text-3xl font-[500] text-text mt-4">
          Frontend Developer
        </h2>
        <div className=" flex flex-wrap  gap-20 mt-4 text-[1rem] font-[500] text-[#4f4f4f]">
          <div className="max-w-[768px]">
            <p>
              Привет, Джеймс. Меня зовут Олег, и я Frontend разработчик. Я
              занимаюсь разработкой веб-приложений и сайтов. Мой опыт включает в
              себя разработку пользовательских интерфейсов, работу с API и
              интеграцию различных технологий. Я стремлюсь создавать
              качественные и производительные приложения, которые удовлетворяют
              потребности пользователей. Я постоянно обучаюсь и развиваюсь,
              чтобы быть в курсе последних тенденций и технологий в
              веб-разработке.
            </p>
            <div className="mt-5">
              <Link href="/files/resume.pdf" download>
                <Button className="flex flex-row font-[700] bg-[#118a92]">
                  <CircleArrowDown className="mr-2 h-5 w-5" />
                  Скачать резюме
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-bold">Мой основной стек:</p>
            <ul className="list-disc pl-4">
              <li>- JavaScript</li>
              <li>- React</li>
              <li>- Next.js</li>
              <li>- TypeScript</li>
              <li>- Redux</li>
              <li>- Tailwind CSS</li>
              <li>- SASS</li>
              <li>- Material UI</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 w-full sm:w-auto">
          <Link href="/projects">
            <Button className="flex flex-col sm:flex-row items-center font-[700] p-2 sm:p-4">
              <CircleArrowRight className="mb-2 sm:mb-0 sm:mr-2 h-5 w-5" />
              <span className="text-center sm:text-left">
                Посмотреть мои работы
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
