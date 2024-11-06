/* eslint-disable @next/next/no-img-element */
import React from "react";

function Project() {
  return (
    <div className="w-full flex flex-col md:flex-row p-10 bg-[#f9f9f9]">
      <div className="flexx flex-col md:flex-row">
        <div>
          <img src="/oryx.png" className="w-[100vw] h-[600px]" alt="oryx" />
        </div>
        <div>
          <h1>Oryx</h1>
          <p>Описание проекта</p>
          <p>Мой вклад</p>
        </div>
      </div>
      <div>
        <h2>Технологии</h2>
        <div>
          <ul>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
