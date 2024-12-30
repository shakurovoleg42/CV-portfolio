import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaRegLightbulb,
  FaNetworkWired,
} from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const socialNav = [
    { icon: <FaGithub size={30} />, href: "https://github.com/shakurovoleg42" },
    { icon: <FaTelegram size={30} />, href: "https://t.me/Sellkon" },
    {
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/oleg-shakurov-9550ba258/",
    },
  ];
  const headerNav = [
    {
      icon: (
        <div>
          <CgProfile size={15} className="hidden sm:block" />
          <CgProfile size={30} className="block sm:hidden" />
        </div>
      ),
      label: "Обо мне",
      href: "/#about",
    },
    {
      icon: (
        <div>
          <FaRegLightbulb size={15} className="hidden sm:block" />
          <FaRegLightbulb size={30} className="block sm:hidden" />
        </div>
      ),
      label: "Скилы",
      href: "/#skills",
    },
    {
      icon: (
        <div>
          <FiBookOpen size={15} className="hidden sm:block" />
          <FiBookOpen size={30} className="block sm:hidden" />
        </div>
      ),
      label: "Портфолио",
      href: "/#portfolio",
    },
    {
      icon: (
        <div>
          <FaNetworkWired size={15} className="hidden sm:block" />
          <FaNetworkWired size={30} className="block sm:hidden" />
        </div>
      ),
      label: "Места работы",
      href: "/#works",
    },
    {
      icon: (
        <div>
          <RiContactsBook3Fill size={15} className="hidden sm:block" />
          <RiContactsBook3Fill size={30} className="block sm:hidden" />
        </div>
      ),
      label: "Контакты",
      href: "/#contacts",
    },
  ];
  return (
    <div className="max-w-[150px]  sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] fixed h-full bg-secondaryBg shadow-right text-white px-4 py-4">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-[18px] sm:text-2xl md:text-3xl text-center font-[800]">
            Frontend Developer
          </h1>
        </div>
        <div className="hidden md:block mt-9">
          <Image
            src="/avatar.jpg"
            alt="logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="mt-5 max-w-[400px]">
          <p className="text-center font-[300]">
            Frontend-разработчик с более чем двумя годами опыта.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-sm font-[600] gap-3 mt-5">
          {socialNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-accent"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between text-sm font-[600] mt-6 gap-5 items-start border-t-[1px] pt-4">
          {headerNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline text-[1.06rem] flex flex-row items-center gap-1"
            >
              <div>{link.icon}</div>
              <div className="hidden sm:block">{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
