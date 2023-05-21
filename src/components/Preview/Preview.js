/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import "./Preview.css";

import previewImageLeft from "../../media/qr-code-table-min.jpg";
import previewImageCenter from "../../media/computer.jpg";
import previewImageRight from "../../media/id.jpg";
import Preloader from "../Preloader/Preloader";

export default function Preview(props) {
  const { loading, setLoading } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setLoading]);

  const testPush = () => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        navigator.serviceWorker.ready.then((registeration) => {
          registeration.showNotification("hello", {
            body: "hello",
          });
        });
      }
    });
  };

  return (
    <div className="preview">
      {loading === true ? (
        <Preloader />
      ) : (
        <>
          <div className="preview__image-container">
            <img
              alt="Картинка превью"
              className="preview__image preview__image_position_left"
              src={previewImageLeft}
            />
            <img
              alt="Картинка превью"
              className="preview__image preview__image_position_center"
              src={previewImageCenter}
            />
            <img
              alt="Картинка превью"
              className="preview__image preview__image_position_right"
              src={previewImageRight}
            />
          </div>
          <div className="preview__text-container">
            <h1 className="preview__title">
              Лучший способ быть в курсе работы
            </h1>
            <p className="preview__subtitle">
              Личный кабинет сотрудника компании
            </p>
          </div>
          <button className="preview__button" id="subscribe" onClick={testPush}>
            Начать
          </button>
        </>
      )}
    </div>
  );
}
