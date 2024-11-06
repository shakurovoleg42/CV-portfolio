/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

function index() {
  return (
    <div className="w-full flex flex-col md:flex-row p-10 bg-[#f9f9f9]">
      <div className="felx flex-col">
        <div>
          <h1>Все проекты</h1>
        </div>
        <div className="flex flex-wrap max-w-[90vw] justify-between">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center gap-2 mt-4 max-w-[300px] h-auto border-[1px] p-2 rounded-md md:rounded-none  md:border-none"
            >
              <img src={project.image} alt={project.name} />
              <p>{project.name}</p>
              <div className="mt-5">
                <Link href="#portfolio">
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
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 2,
    name: "Oryx",
    image: "/oryx.png",
  },
  {
    id: 3,
    name: "Oryx",
    image: "/oryx.png",
  },
];
