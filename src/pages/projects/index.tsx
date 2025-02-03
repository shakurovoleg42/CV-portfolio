/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
// import usePortfolioState from "@/src/store/usePortfolioStore";
import axios from "axios";
import Image from "next/image";
// import { useRouter } from "next/router";

function Index() {
  const [projects, setProjects] = React.useState<
    {
      id: string;
      slug: string;
      title: string;
      description: string;
      images: string;
    }[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await axios.get(`${process.env.NEXT_PUBLIC_API}portfolio`);
        setProjects(data.data);
      } catch (error) {
        console.log("Ошибка загрузки проектов:", error);
        setError("Не удалось загрузить проекты. Пожалуйста, попробуйте позже.");
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <div className="w-full flex flex-col py-10 px-2 lg:p-10 bg-[#f9f9f9] gap-5">
      <div className="w-full text-center my-5 flex flex-col gap-4">
        <div>
          <Link href="/">
            <Button className="flex flex-row font-[700]">
              <CircleArrowLeft className="mr-2 h-5 w-5" />К резюме
            </Button>
          </Link>
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
      <div className="felx flex-col ">
        <div className="w-full text-center">
          {error ? null : (
            <h1 className="text-[18px] sm:text-2xl md:text-3xl font-[600] text-textTitle">
              Несколько проектов
            </h1>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[90vw] mx-auto justify-items-center items-center mt-4 gap-6">
          {error ? (
            <>
              <Image
                src="/404.svg"
                alt="error"
                className="mt-10"
                width={500}
                height={333}
              />
              <p className="mt-10 text-red-500 font-bold text-center text-[32px]">
                {error}
              </p>
            </>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-center items-center gap-2 w-full h-auto border-[1px] border-gray-200 shadow-lg p-5 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
              >
                <img
                  src={`http://localhost:8080/${project.images[0]}`}
                  alt={project.title}
                  className="rounded-lg border-[1px] "
                />
                <div className="flex flex-col xl:flex-row  gap-2 mt-2">
                  <p className="font-semibold text-[18px] sm:text-2xl">
                    {project.title}
                  </p>
                  <p className="text-[12px] sm:text-[16px]">
                    -
                    {project.description.length > 150
                      ? `${project.description.substring(0, 150)}...`
                      : project.description}
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={{
                      pathname: `/projects/${project.slug}`,
                      query: { title: project.slug },
                    }}
                  >
                    <Button className="flex flex-row font-[700] text-[10px] sm:text-[16px]">
                      <CircleArrowRight className="mr-2 h-5 w-5" />
                      Посмотреть
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
