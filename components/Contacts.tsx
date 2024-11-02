import React from "react";
import { Button } from "./ui/button"; // Убедитесь, что компонент Button правильно экспортируется
import Link from "next/link";
import { FaTelegram, FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  const socialNav = [
    { icon: <FaTelegram size={60} />, name: 'Телеграм',href: "https://t.me/Sellkon", hoverEffect:'hover:text-[#0088CC] transition duration-200' },
    {
      icon: <FaLinkedin size={60} />, name:
'LinkedIn',      href: "https://www.linkedin.com/in/oleg-shakurov-9550ba258/", hoverEffect:'hover:text-[#0077B5] transition duration-200'
    },
  ];

  return (
    <div id="contacts" className="flex flex-col sm:flex-row p-10 gap-10 bg-[#f9f9f9]">
      <div className="flex flex-col">
        <div className="border-l-[6px] border-l-secondaryBg">
          <h3 className="text-3xl font-[600] text-textTitle pl-4">
            Оставить заявку
          </h3>
        </div>
        <div className="mt-4">
          <p className="text-[#4f4f4f]">
            Заполните форму заявки сейчас, и я свяжусь с вами в ближайшее время.
          </p>
        </div>
        <div>
          <form action="" className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="max-w-[340px] h-[50px] border-[1px] border-border rounded-[5px] pl-4 mt-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш e-mail"
              className="max-w-[340px] h-[50px] border-[1px] border-border rounded-[5px] pl-4 mt-4"
              required
            />
            <textarea
              name="message"
              placeholder="Сообщение"
              className="max-w-[360px] h-[130px] border-[1px] border-border rounded-[5px] px-2 py-2 mt-4"
              required
            />
            <div className="mt-6">
              <Button>Отправить</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="border-l-[6px] border-l-secondaryBg">
          <h3 className="text-3xl font-[600] text-textTitle pl-4">
            Или свяжитесь со мной напрямую
          </h3>
        </div>
        <div className="flex w-full mt-4">
          {" "}
          {socialNav.map((nav) => (
            <div key={nav.href} className="w-full flex flex-row items-center justify-center">
              <div className="flex flex-col items-center">
              <Link
                href={nav.href}
                target="_blank"
                className={nav.hoverEffect}
              >
                {nav.icon}
              </Link>
              
              <div className="mt-3">
                <p>{nav.name}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
