/* eslint-disable react/jsx-no-undef */
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
export default function About() {
  return (
    <div
      id="about"
      className="w-full flex flex-col md:flex-row py-10 px-[8px] lg:p-10 bg-[#f9f9f9]"
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
      <div className="flex flex-col max-w-[768px]: text-start">
        <h3 className="text-[22px] mt-5 text-center  sm:text-[29px] md:text-start md:text-3xl font-[600] text-textTitle">
          Обо мне
        </h3>
        <h2 className="text-[18px] sm:text-2xl md:text-3xl font-[500] text-text mt-4">
          Frontend Developer
        </h2>
        <div className="max-w-[768px] flex flex-col gap-2 mt-4 text-[1rem] font-[500] text-[#4f4f4f]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            soluta perspiciatis quisquam, deserunt sequi obcaecati optio sed
            quam est eveniet repellendus dolore quia quaerat, facere explicabo
            odit illum sit vel id. Facere.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint odio
            eos repellat hic ipsa, laboriosam veritatis atque incidunt
            necessitatibus velit aperiam iure. Qui ducimus repellat quod ullam
            ipsum numquam enim.
          </p>
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
