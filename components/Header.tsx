import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const headerLeftLinks = [
    { label: "Обо мне", href: "#about" },
    { label: "Портфолио", href: "#portfolio" },

  ];
  return (
    <div className="w-auto h-[100vh] bg-secondaryBg shadow-md text-white px-4 py-4">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-2xl font-[800]">Frontend Developer</h1>
          </div>
          <div className="mt-9">
            <Image src="/avatar.jpg" alt="logo" width={200} height={200} className="rounded-full"/>
          </div>
          <div className="flex flex-col items-center justify-between text-sm font-[600] mt-5 gap-1">
          {headerLeftLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
          </div>
          
        </div>
        <div className="flex flex-row gap-4">Ссылки на страницы</div>
    </div>
  );
}
