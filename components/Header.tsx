import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTelegram, FaLinkedin, FaRegLightbulb, FaNetworkWired } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const socialNav = [
    { icon: <FaGithub size={30}/>, href: "https://github.com/oleg-rus" },
    { icon: <FaTelegram size={30}/>, href: "https://t.me/oleg_rus" },
    { icon: <FaLinkedin size={30}/>, href: "https://www.linkedin.com/in/oleg-rus/" },
  ]
  const headerNav = [
    { icon: <CgProfile size={15}/>,label: "Обо мне", href: "#about" },
    { icon: <FaRegLightbulb size={15}/>,label: "Скилы", href: "#skills" },
    { icon: <FiBookOpen size={15}/>,label: "Портфолио", href: "#portfolio" },
    { icon: <FaNetworkWired size={15}/>,label: "Места Работы", href: "#works" },
    { icon: <RiContactsBook3Fill size={15}/>,label: "Контакты", href: "#contacts" },

  ];
  return (
    <div className="max-w-[300px] fixed h-[100vh] bg-secondaryBg shadow-right text-white px-4 py-4">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-2xl font-[800]">Frontend Developer</h1>
          </div>
          <div className="mt-9">
            <Image src="/avatar.jpg" alt="logo" width={200} height={200} className="rounded-full"/>
          </div>
          <div className="mt-5 max-w-[400px]">
            <p className="text-center font-[300]">Frontend-разработчик с более чем двумя годами опыта.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm font-[600] gap-3 mt-5">
            {socialNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline hover:text-accent">
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-between text-sm font-[600] mt-10 gap-3 items-start">
          {headerNav.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline text-[1.06rem] flex flex-row items-center gap-1">
              {link.icon}{link.label}
            </Link>
          ))}
          </div>
          
        </div>
    </div>
  );
}
