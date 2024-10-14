import React from "react";
import { Button } from "./ui/button";

export default function Contacts() {
  return (
    <div id="contacts" className="flex flex-col p-10 bg-[#f9f9f9]">
      <div className="border-l-[6px] border-l-secondaryBg">
        <h3 className="text-3xl font-[600] text-textTitle pl-4">
          Оставить заявку
        </h3>
      </div>
      <div className="mt-4">
        <p className="text-[#4f4f4f]">
          Заполните форму заявки сейчас, и я свяжусь с вами в ближайшее время
        </p>
      </div>
      <div>
        <form action="" className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="max-w-[340px] h-[50px] border-[1px] border-border rounded-[5px] pl-4 mt-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            className="max-w-[340px] h-[50px] border-[1px] border-border rounded-[5px] pl-4 mt-4"
          />
          <textarea
            name="message"
            placeholder="Сообщение"
            className="max-w-[360px] h-[130px] border-[1px] border-border rounded-[5px] pl-4 mt-4"
          />
          <div className="mt-6">
            <Button>Отправить</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
