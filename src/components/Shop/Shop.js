/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useReducer, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./Shop.css";

import Countdown from "react-countdown";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import preloaderSVG from "../../media/puff-black.svg";
import shopCard from "../../media/shop-card.svg";

import debitIcon from "../../media/alt-plus-frame-svgrepo-com.svg";
import creditIcon from "../../media/alt-minus-frame-svgrepo-com.svg";

export default function Shop() {
  const [cardShow, setCardShow] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);
  const [scannerShow, setScannerShow] = useState(false);
  const [needReload, setNeedReload] = useState(false);

  const cardLoadingHandler = () => {
    setCardLoading(true);
    setTimeout(() => {
      setCardShow(true);
      setCardLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setScannerShow(false);
  }, []);

  useEffect(() => {
    needReload === true && window.location.reload();
  }, [needReload]);

  const handleShowScanner = () => {
    setScannerShow(true);
  };

  const Completionist = () => {
    setCardShow(false);
    setCardLoading(false);
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    }
    // Render a countdown
    return (
      <span>
        QR будет доступен еще {minutes}:{seconds}
      </span>
    );
  };

  const renderCard = () => {
    if (cardShow === false) {
      return (
        <img
          className="shop__image"
          alt="Иконка"
          src={cardLoading === false ? shopCard : preloaderSVG}
        ></img>
      );
    }
    return (
      <QRCodeSVG
        size={212}
        value="46020080663921620366659511819655767220348495277"
      />
    );
  };

  const [stopStream, setStopStream] = useState(false);
  // ...
  const dismissQrReader = () => {
    // Stop the QR Reader stream (fixes issue where the browser freezes when closing the modal) and then dismiss the modal one tick later
    setStopStream(true);
    setTimeout(() => console.log("123"), 0);
  };

  const navigate = useNavigate();

  return (
    <div className="shop">
      <div className="shop__header">
        <button className="shop__back-btn"></button>
        <h2 className="shop__heading">Карта лояльности</h2>
      </div>

      <button onClick={handleShowScanner}>Оплатить</button>
      <div className="shop__card-space">
        <div className="shop__card-container">
          {scannerShow === false ? (
            renderCard()
          ) : (
            <BarcodeScannerComponent
              width={212}
              height={212}
              stopStream={stopStream}
              onUpdate={(err, result) => {
                if (result) {
                  window.location.href = result.text;
                  setScannerShow(false);
                }
              }}
            />
          )}
        </div>
        <div className="home__notifications">
          <h3 className="home__notifications-heading">История операций</h3>
          <ul className="home__notifications-container">
            <li className="home__notifications-item">
              <img
                className="home__notifications-priority"
                alt="Приоритет"
                src={debitIcon}
              ></img>
              <div className="home__notifications-text">
                <h5 className="home__notifications-title">
                  Начисление: 115 баллов
                </h5>
                <p className="home__notifications-date">1 июня 2023 • 12:01</p>
              </div>
            </li>
            <li className="home__notifications-item">
              <img
                className="home__notifications-priority"
                alt="Приоритет"
                src={debitIcon}
              ></img>
              <div className="home__notifications-text">
                <h5 className="home__notifications-title">
                  Начисление: 400 баллов
                </h5>
                <p className="home__notifications-date">30 мая 2023 • 12:20</p>
              </div>
            </li>
            <li className="home__notifications-item">
              <img
                className="home__notifications-priority"
                alt="Приоритет"
                src={creditIcon}
              ></img>
              <div className="home__notifications-text">
                <h5 className="home__notifications-title">
                  Списание: 174 балла
                </h5>
                <p className="home__notifications-date">29 мая 2023 • 9:01</p>
              </div>
            </li>
            <li className="home__notifications-item">
              <img
                className="home__notifications-priority"
                alt="Приоритет"
                src={creditIcon}
              ></img>
              <div className="home__notifications-text">
                <h5 className="home__notifications-title">
                  Списание: 5 баллов
                </h5>
                <p className="home__notifications-date">28 мая 2023 • 12:01</p>
              </div>
            </li>
          </ul>
        </div>
        <button
          disabled={cardShow}
          className="shop__generate"
          onClick={cardLoadingHandler}
        >
          {cardShow === false ? (
            "Сгенерировать QR"
          ) : (
            <Countdown
              date={Date.now() + 600000}
              renderer={renderer}
              zeroPadTime={2}
            >
              <Completionist />
            </Countdown>
          )}
        </button>
      </div>
    </div>
  );
}
