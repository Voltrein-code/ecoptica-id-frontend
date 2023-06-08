/* eslint-disable prettier/prettier */
import React from "react";
import "./Home.css";

import userPhoto from "../../media/profile-image.jpeg";
import gkLogo from "../../media/gk-logo.svg";
import lowPriotity from "../../media/low-priority-svgrepo-com.svg";
import mediumPriority from "../../media/medium-priority-svgrepo-com.svg";
import highPriority from "../../media/high-priority-svgrepo-com.svg";

export default function Home() {
  return (
    <>
      <div className="home__heading-container">
        <div className="home__text-container">
          <p className="home__heading-text">С возвращением</p>
          <h2 className="home__user-name">Евгений</h2>
        </div>
        <img
          alt="Фото пользователя"
          src={userPhoto}
          className="home__user-photo"
        ></img>
      </div>
      <div className="home__card-user">
        <div className="home__card-text">
          <p className="home__company-name">АСГ48</p>
          <p className="home__user-fio">Шальнев Е.В.</p>
          <p className="home__user-post">Инженер-программист</p>
          <p className="home__user-department">
            Отдел разработки программного обеспечения
          </p>
        </div>

        <img
          src={gkLogo}
          alt="Лого группы компаний"
          className="home__gk-logo"
        ></img>
      </div>
      <button className="home__bonus">
        <span>Бонусная система</span>
        <span>У вас 3000 бонусов</span>
      </button>
      <div className="home__notifications">
        <h3 className="home__notifications-heading">Уведомления</h3>
        <ul className="home__notifications-container">
          <li className="home__notifications-item">
            <img
              className="home__notifications-priority"
              alt="Приоритет"
              src={highPriority}
            ></img>
            <div className="home__notifications-text">
              <h5 className="home__notifications-title">О пропускном режиме</h5>
              <p className="home__notifications-date">1 июня 2023 • 12:01</p>
            </div>
          </li>
          <li className="home__notifications-item">
            <img
              className="home__notifications-priority"
              alt="Приоритет"
              src={lowPriotity}
            ></img>
            <div className="home__notifications-text">
              <h5 className="home__notifications-title">График работы магазина с 1 июня</h5>
              <p className="home__notifications-date">30 мая 2023 • 12:20</p>
            </div>
          </li>
          <li className="home__notifications-item">
            <img
              className="home__notifications-priority"
              alt="Приоритет"
              src={mediumPriority}
            ></img>
            <div className="home__notifications-text">
              <h5 className="home__notifications-title">Конкурс</h5>
              <p className="home__notifications-date">29 мая 2023 • 9:01</p>
            </div>
          </li>
          <li className="home__notifications-item">
            <img
              className="home__notifications-priority"
              alt="Приоритет"
              src={highPriority}
            ></img>
            <div className="home__notifications-text">
              <h5 className="home__notifications-title">О пропускном режиме</h5>
              <p className="home__notifications-date">28 мая 2023 • 12:01</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
