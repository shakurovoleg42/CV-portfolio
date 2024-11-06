import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col p-10 gap-10 bg-[#f9f9f9] font-poppins"
    >
      <div className="border-l-[6px] border-l-secondaryBg">
        <h3 className="text-3xl font-[600] text-textTitle pl-4">
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
              <h5 className="text-4xl font-bold">{item.name}</h5>
              <span className="hidden sm:block">-</span>
              <a
                className="flex sm:items-center text-secondaryBg hover:underline"
                href={item.link}
                target="_blank"
              >
                перейти на сайт
              </a>
            </div>
            <p className="text-[#4f4f4f]">{item.description}</p>
            <div className="flex  flex-col ml-2">
              {item.tech.map((item) => (
                <p key={item.items}>- {item.items}</p>
              ))}
            </div>
            {/* ссылка на отдельную страницу об этом проекте */}
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
      { items: "Laravel" },
    ],
    link: "https://oryx.kz",
    slug: "oryx_kz",
  },
  {
    id: 2,
    name: "А-Промсталь",
    description: "А-Промсталь - лучший металл в Казахстане",
    image: "/promstal.png",
    tech: [
      { items: "Next.js" },
      { items: "Redux" },
      { items: "ui.shadcn" },
      { items: "MUI" },
      { items: "Tailwind" },
      { items: "Laravel" },
    ],
    link: "https://apromstal.kz",
    slug: "promstal_kz",
  },
  {
    id: 3,
    name: "Coffeelogia",
    description: "Кофе зерновой/молотый в Казахстане",
    image: "/coffeelogia.png",
    tech: [
      { items: "WordPress" },
      { items: "Elementor" },
    ],
    link: "https://coffeelogia.kz/",
    slug: "coffeelogia_kz",
  },
];
