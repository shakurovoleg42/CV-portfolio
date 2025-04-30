import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col py-10 px-[8px] lg:p-10 gap-10 bg-[#f9f9f9] font-poppins"
    >
      <div className="border-l-[6px] border-l-secondaryBg">
        <h3 className="text-[18px] sm:text-2xl md:text-3xl font-[600] text-textTitle pl-4">
          Мои работы
        </h3>
      </div>
      {portfolio.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row gap-5 border-[1px] rounded-md p-5"
        >
          <div>
            <Image
              className="border border-collapse"
              src={item.image}
              width={500}
              height={700}
              alt={item.name}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h5 className="text-[18px] sm:text-2xl md:text-3xl font-bold">
                {item.name}
              </h5>
            </div>
            <p className="text-[#4f4f4f]">{item.description}</p>
            <div className="flex flex-col ml-2">
              {item.tech.map((item) => (
                <p key={item.items}>- {item.items}</p>
              ))}
            </div>
            <div className="mt-2">
              <a href={`projects/${item.slug}`}>
                <Button>Подробнее</Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

const portfolio = [
  {
    id: 1,
    name: "Oryx",
    description: "Доставка товаров из США в Казахстан - ORYX",
    image: "/oryx.png",
    tech: [
      { items: "Next.js" },
      { items: "Redux" },
      { items: "MUI" },
      { items: "Sass" },
      { items: "REST API" },
    ],
    slug: "oryx?id=4",
  },
  {
    id: 2,
    name: "А-Промсталь",
    description: "А-Промсталь - лучший металл в Казахстане",
    image: "/apromstal.png",
    tech: [
      { items: "Next.js" },
      { items: "Redux" },
      { items: "ui.shadcn" },
      { items: "MUI" },
      { items: "Tailwind" },
      { items: "REST API" },
    ],
    slug: "apromstal?id=6",
  },
  {
    id: 3,
    name: "Coffeelogia",
    description: "Кофе зерновой/молотый в Казахстане",
    image: "/coffeelogia.png",
    tech: [{ items: "WordPress" }, { items: "Elementor" }],
    slug: "coffeelogia?id=7",
  },
];
