/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

function index() {
  return (
    <div className="w-full flex flex-col p-10 bg-[#f9f9f9] gap-5">
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
          <h1 className="text-4xl font-[600] text-textTitle">Все проекты</h1>
        </div>
        <div className="flex flex-wrap max-w-[90vw] justify-center items-center mt-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center gap-2 max-w-[300px] h-auto border-[1px] border-gray-200 shadow-lg p-4 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg"
              />
              <p className="font-semibold text-lg mt-2">{project.name}</p>
              <div className="mt-5">
                <Link href={`/projects/${project.slug}`}>
                  <Button className="flex flex-row font-[700]">
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
