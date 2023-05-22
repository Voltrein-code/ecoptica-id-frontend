/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import "./Shop.css";

import Countdown from "react-countdown";
import preloaderSVG from "../../media/puff-black.svg";
import shopCard from "../../media/shop-card.svg";

export default function Shop() {
  const [cardShow, setCardShow] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);

  const cardLoadingHandler = () => {
    setCardLoading(true);
    setTimeout(() => {
      setCardShow(true);
      setCardLoading(false);
    }, 3000);
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

  return (
    <div className="shop">
      <div className="shop__header">
        <button className="shop__back-btn"></button>
        <h2 className="shop__heading">Карта лояльности</h2>
      </div>
      <div className="shop__card-space">
        <div className="shop__card-container">
          {cardShow === false ? (
            <img
              className="shop__image"
              alt="Иконка"
              src={cardLoading === false ? shopCard : preloaderSVG}
            ></img>
          ) : (
            <QRCodeSVG
              size={212}
              value="46020080663921620366659511819655767220348495277"
            />
          )}
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
