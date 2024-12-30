/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function Project() {
  const goBack = () => {
    window.history.back();
  };

  const project = [
    {
      slug: "oryx_kz",
      image: ["/oryx.png", "/promstal.png"],
      name: "Oryx",
      description:
        "Работал над проектом для ORYX — мейлфорвардера с собственным автоматизированным складом в безналоговом штате США. Компания занимается покупкой и доставкой товаров из США в Казахстан, предлагая экономичные решения для клиентов за счет консолидации посылок, качественной переупаковки и партнерства с лучшими перевозчиками. Основной акцент компании - высококачественные услуги по доступной стоимости.",
      developed: [
        "Разработка сайта по макету",
        "Разработка платежной системы",
        "Разработка личного кабинета",
        "Разработка административной панели",
      ],
      tech: ["Next.js", "Redux", "NextAuth", "MUI", "SASS", "Laravel"],
      link: "https://oryx.kz",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-[#f9f9f9] font-poppins pb-10">
      <div className="w-full text-center p-0 lg:p-5 x flex flex-col gap-2">
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
      <>
        {project.map((proj) => (
          <div
            key={proj.slug}
            className="flex flex-col items-center justify-center md:flex-row gap-2 lg:gap-8 mt-8"
          >
            <div className="xl:w-[40vw] min-h-[150px] items-center flex object-cover">
              <ImageGallery
                items={proj.image.map((img) => ({
                  original: img,
                  thumbnail: img,
                }))}
                showPlayButton={false}
                showIndex={true}
                disableKeyDown={false}
                infinite
                showThumbnails={true}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-10">
              <h1 className="text-[18px] sm:text-2xl md:text-3xl font-[600] text-textTitle">
                {proj.name}
              </h1>
              <p className="max-w-[600px] font-[400] sm:font-[600] text-[12px] sm:text-[16px]">
                {proj.description}
              </p>
              <div className="hidden lg:block font-[400] sm:font-[600] text-[12px] sm:text-[16px]">
                <ul className="flex flex-col gap-1">
                  {proj.developed.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:flex flex-wrap items-end gap-2">
                {proj.tech.map((item) => (
                  <b
                    key={item}
                    className="mt-4 decoration-border bg-blue-400 text-white rounded-md p-2 hover:translate-y-2 transition-all duration-300 select-none"
                  >
                    {item}
                  </b>
                ))}
              </div>
            </div>
          </div>
        ))}
      </>
      <div className="mt-10 flex lg:hidden items-center">
        {project.map((proj) => (
          <div key={proj.slug} className="flex flex-col gap-5">
            <div className="font-[400] sm:font-[600] text-[12px] sm:text-[16px]">
              <ul className="flex flex-col gap-1">
                {proj.developed.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-end gap-2">
              {proj.tech.map((item) => (
                <b
                  key={item}
                  className="mt-4 decoration-border bg-blue-400 text-white rounded-md p-2 hover:translate-y-2 transition-all duration-300 select-none"
                >
                  {item}
                </b>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
