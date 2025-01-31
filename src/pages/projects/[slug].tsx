/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useRouter } from "next/router";
import axios from "axios";

function Project() {
  const router = useRouter();
  const { title } = router.query;

  const [project, setProject] = useState<
    {
      id: string;
      slug: string;
      title: string;
      description: string;
      technologies: string[];
      list: string[];
      images: string[];
    }[]
  >([]);

  useEffect(() => {
    if (!title) return; // Ждём загрузки title перед выполнением запроса

    const fetchPortfolio = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API}portfolio/${title}`
        );
        setProject([data]); // Оборачиваем объект в массив для удобства работы
      } catch (error) {
        console.error("Ошибка загрузки проекта:", error);
      }
    };

    fetchPortfolio();
  }, [title]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-[#f9f9f9] font-poppins pb-10">
      <div className="w-full text-center p-0 lg:p-5 flex flex-col gap-2">
        <div>
          <Link href="/">
            <Button className="flex flex-row font-[700]">
              <CircleArrowLeft className="mr-2 h-5 w-5" />К резюме
            </Button>
          </Link>
        </div>
        <div>
          <Button
            className="flex flex-row font-[700]"
            onClick={() => router.back()}
          >
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

      {project.length > 0 ? (
        <>
          {project.map((proj) => (
            <div
              key={proj.slug}
              className="flex flex-col items-center justify-center md:flex-row gap-2 lg:gap-8 mt-8"
            >
              <div className="xl:w-[40vw] min-h-[150px] items-center flex object-cover">
                {proj.images.length > 0 && (
                  <ImageGallery
                    items={proj.images.map((img) => ({
                      original: img,
                      thumbnail: img,
                    }))}
                    showPlayButton={false}
                    showIndex={true}
                    infinite
                    showThumbnails={true}
                  />
                )}
              </div>
              <div className="flex flex-col gap-4 lg:gap-10">
                <h1 className="text-[18px] sm:text-2xl md:text-3xl font-[600] text-textTitle">
                  {proj.title}
                </h1>
                <p className="max-w-[600px] font-[400] sm:font-[600] text-[12px] sm:text-[16px]">
                  {proj.description}
                </p>
                <div className="hidden lg:block font-[400] sm:font-[600] text-[12px] sm:text-[16px]">
                  <ul className="flex flex-col gap-1">
                    {proj.list.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:flex flex-wrap items-end gap-2">
                  {proj.technologies.map((tech) => (
                    <b
                      key={tech}
                      className="mt-4 decoration-border bg-blue-400 text-white rounded-md p-2 hover:translate-y-2 transition-all duration-300 select-none"
                    >
                      {tech}
                    </b>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="mt-10 text-gray-500 text-center">Загрузка проекта...</p>
      )}

      <div className="mt-10 flex lg:hidden items-center">
        {project.map((proj) => (
          <div key={proj.slug} className="flex flex-col gap-5">
            <div className="font-[400] sm:font-[600] text-[12px] sm:text-[16px]">
              <ul className="flex flex-col gap-1">
                {proj.list.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-end gap-2">
              {proj.technologies.map((tech) => (
                <b
                  key={tech}
                  className="mt-4 decoration-border bg-blue-400 text-white rounded-md p-2 hover:translate-y-2 transition-all duration-300 select-none"
                >
                  {tech}
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
