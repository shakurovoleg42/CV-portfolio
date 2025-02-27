import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { ChangeEvent } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const socialNav = [
    {
      icon: <FaTelegram size={60} />,
      name: "Телеграм",
      href: "https://t.me/Sellkon",
      hoverEffect: "hover:text-[#0088CC] transition duration-200",
    },
    {
      icon: <FaLinkedin size={60} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/oleg-shakurov-9550ba258/",
      hoverEffect: "hover:text-[#0077B5] transition duration-200",
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API
        }/telegram/telegram-form?name=${encodeURIComponent(
          formData.name
        )}&email=${encodeURIComponent(
          formData.email
        )}&message=${encodeURIComponent(formData.message)}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.success) {
        setResponseMessage("✅ Заявка успешно отправлена!");
        setFormData({ name: "", email: "", message: "" }); // Очищаем форму
      } else {
        setResponseMessage("❌ Ошибка отправки. Попробуйте позже.");
      }
    } catch (error) {
      console.log("Ошибка отправки заявки:", error);
      setResponseMessage("❌ Ошибка сети. Проверьте подключение.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contacts"
      className="flex flex-wrap py-10 px-[8px] lg:p-10 gap-10 bg-[#f9f9f9]"
    >
      <div className="flex flex-col">
        <div className="border-l-[6px] border-l-secondaryBg">
          <h3 className="text-[18px] sm:text-2xl md:text-3xl text-textTitle pl-4 font-[400] sm:font-[600]">
            Оставить заявку
          </h3>
        </div>
        <div className="mt-4">
          <p className="font-[400] sm:font-[600] text-[12px] sm:text-[16px] text-[#4f4f4f]">
            Заполните форму заявки сейчас, и я свяжусь с вами в ближайшее время.
          </p>
        </div>
        <div className="w-full max-w-md mx-auto p-4">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[50px] border-[1px] border-border rounded-[5px] pl-4 mt-4"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Ваш e-mail или телеграм"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[50px] border-[1px] border-border rounded-[5px] pl-4 mt-4"
              required
            />
            <textarea
              name="message"
              placeholder="Сообщение"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[130px] border-[1px] border-border rounded-[5px] px-2 py-2 mt-4"
              required
            />
            <div className="mt-6">
              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? "Отправка..." : "Отправить"}
              </Button>
            </div>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-sm">{responseMessage}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="border-l-[6px] border-l-secondaryBg">
          <h3 className="text-3xlfont-[400] sm:font-[600] text-[12px] sm:text-[22px] text-textTitle pl-4">
            Или свяжитесь со мной напрямую
          </h3>
        </div>
        <div className="flex w-full mt-4">
          {socialNav.map((nav) => (
            <div
              key={nav.href}
              className="w-full flex flex-row items-center justify-center"
            >
              <div className="flex flex-col items-center text-[12px] lg:text-[22px]">
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
