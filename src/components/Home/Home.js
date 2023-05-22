import React from "react";
import "./Home.css";

import userPhoto from "../../media/profile-image.jpeg";
import gkLogo from "../../media/gk-logo.svg";

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
    </>
  );
}
