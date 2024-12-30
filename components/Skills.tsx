import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNpm,
  FaGulp,
  FaSass,
  FaLess,
  FaWordpress,
  FaElementor,
  FaRobot,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { GiBearFace } from "react-icons/gi";

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full flex flex-col py-10 px-[8px] lg:p-10 bg-[#ffffff]"
    >
      <div className="border-l-[6px] border-l-secondaryBg ">
        <h3 className="text-[18px] sm:text-2xl md:text-3xl font-[600] text-textTitle pl-4 ">
          Мои навыки
        </h3>
      </div>
      <div className="mt-4 max-w-[900px]">
        <p>
          Имею опыт создания динамических и производительных веб-приложений,
          разработки комплексных SPA, оптимизации компонентов и управления
          состоянием. Разрабатываю привлекательные и функциональные
          пользовательские интерфейсы, уделяя внимание удобству и эстетике.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-6  font-poppins max-w-[1280px]">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col items-start gap-1  max-w-[300px] h-auto border-[1px] p-2 rounded-md md:rounded-none  md:border-none"
          >
            <div className="flex flex-wrap">{skill.icon}</div>
            <div className="font-[800] flex flex-wrap">{skill.label}</div>
            <div className="text-sm text-[#4f4f4f] font-[600]">
              {skill.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const skills = [
  {
    label: "VanillaJavaScript",
    icon: <FaJs size={40} color="#5D6BA7" />,
    text: "Позволяющие создавать динамичные и интерактивные веб-приложения без использования фреймворков.",
  },
  {
    label: "React, NextJS, Redux, Zustand",
    icon: (
      <div className="flex flex-wrap gap-5">
        <FaReact size={40} color="#00aeff" />
        <RiNextjsFill size={40} />
        <SiRedux size={35} color="#00aeff" />
        <GiBearFace size={35} color="" />
      </div>
    ),
    text: "Опыт работы с современными фреймворками для разработки комплексных SPA, улучшение производительности и управление состоянием.",
  },
  {
    label: "HTML & CSS",
    icon: (
      <div className="flex flex-wrap gap-5">
        <FaHtml5 size={40} color="#DE6E3C" />
        <FaCss3Alt size={40} color="#53A7DC" />
      </div>
    ),
    text: "Верстка адаптивных и кроссбраузерных интерфейсов, внимание к семантике и доступности веб-страниц.",
  },
  {
    label: "npm & Gulp",
    icon: (
      <div className="flex flex-wrap gap-1">
        <FaNpm size={40} color="#BB443E" />
        <FaGulp size={40} color="#BB443E" />
      </div>
    ),
    text: "Автоматизация сборки проектов, управление зависимостями и повышение эффективности разработки.",
  },
  {
    label: "Sass, Less",
    icon: (
      <div className="flex flex-wrap gap-2">
        <FaSass size={40} color="#BF6B97" />
        <FaLess size={45} color="#25408F" />
      </div>
    ),
    text: "Использование препроцессоров для упрощения и улучшения стилей, создание модульных и поддерживаемых CSS-кодов.",
  },
  {
    label: "Wordpress + Elementor",
    icon: (
      <div className="flex flex-wrap gap-2">
        <FaWordpress size={40} color="#53A7DC" />
        <FaElementor size={40} />
      </div>
    ),
    text: "Разработка сайтов с нуля по макетам, сопровождение, контент менеджмент.",
  },
  {
    label: "RPA - Zennoposter",
    icon: <FaRobot size={40} color="#2c8dc9" />,
    text: "Разработка ботов для автоматизации бизнесс-процессов, анализ и управление процессами. Интеграция с веб-сервисами, парсинг более 500.000 товаров.",
  },
];
