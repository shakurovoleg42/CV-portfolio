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

  return (
    <div className="w-full h-[100%] flex flex-col justify-center p-3 bg-[#f9f9f9] font-poppins pb-10">
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
        <div className="w-full sm:w-[40vw] md:w-[50vw] h-auto  object-cover">
          <ImageGallery
            items={project.flatMap((proj) =>
              proj.image.map((img) => ({ original: img, thumbnail: img }))
            )}
            showPlayButton={false}
            // showNav={false}
            showIndex={true}
            disableKeyDown={false}
            infinite
            showThumbnails={true}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-[600] text-textTitle">Oryx</h1>
          <p className="max-w-[600px] font-[600]">
            Работал над проектом для ORYX — мейлфорвардера с собственным
            автоматизированным складом в безналоговом штате США. Компания
            занимается покупкой и доставкой товаров из США, предлагая
            экономичные решения для клиентов за счет консолидации посылок,
            качественной переупаковки и партнерства с лучшими перевозчиками.
            Основной акцент сделан на автоматизации процессов и оптимизации
            пользовательского опыта, что позволяет ORYX предоставлять
            высококачественные услуги по доступной стоимости.
          </p>
          <div className="flex flex-wrap gap-2">
            {project[0].tech.map((item) => (
              <b
                key={item}
                className="mt-4 decoration-border bg-blue-400 text-white rounded-md p-2 hover:translate-y-2"
              >
                {item}
              </b>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center">
        <div></div>
      </div>
    </div>
  );
}

export default Project;

const project = [
  {
    slug: "oryx_kz",
    image: ["/oryx.png", "/oryx.png", "/oryx.png"],
    name: "Oryx",
    description: "Описание проекта",
    tech: ["Next.js", "Redux", "NextAuth", "MUI", "SASS", "Laravel"],
  },
];
