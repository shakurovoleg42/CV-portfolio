/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

function index() {
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
          <h1 className="text-[18px] sm:text-2xl md:text-3xl font-[600] text-textTitle">
            Далее проекты разработанные в команде и в одиночку
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[90vw] mx-auto justify-items-center items-center mt-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-center items-center gap-2 w-full h-auto border-[1px] border-gray-200 shadow-lg p-5 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg"
              />
              <div className="flex flex-col xl:flex-row  gap-2 mt-2">
                <p className="font-semibold text-[18px] sm:text-2xl">
                  {project.name}
                </p>
                <p className="text-[12px] sm:text-[16px]">
                  - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore porro eligendi voluptate provident perferendis libero
                  illum doloremque ipsum repellat, reiciendis delectus ut sit,
                  voluptatum asperiores, architecto nobis odio. Porro, iure?
                </p>
              </div>

              <div className="mt-5">
                <Link href={`/projects/${project.slug}`}>
                  <Button className="flex flex-row font-[700] text-[10px] sm:text-[16px]">
                    <CircleArrowRight className="mr-2 h-5 w-5" />
                    Посмотреть
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
const projects = [
  {
    id: 1,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 2,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 3,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 4,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 5,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 6,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 7,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 8,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 9,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 10,
    slug: "oryx_kz",
    name: "Oryx",
    image: "/oryx.png",
  },
];
