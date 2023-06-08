import React, { useEffect, useState } from "react";
import "./Auth.css";
import Preloader from "../Preloader/Preloader";

import Logo from "../../media/gk-logo.svg";

export default function Auth(props) {
  const { loading, setLoading } = props;

  const [isLogin, setIsLogin] = useState(false);
  // const [isPasswordVisible setIsPasswordVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading, setLoading]);

  const changeAuthType = (event) => {
    event.preventDefault();
    isLogin ? setIsLogin(false) : setIsLogin(true);
    setLoading(true);
  };

  return (
    <div className="auth">
      {loading === true ? (
        <Preloader />
      ) : (
        <>
          <div className="auth__container">
            <img className="auth__logo" src={Logo} alt="Логотип"></img>
            {isLogin ? (
              <>
                <h2 className="auth__heading">Войти</h2>
                <p className="auth__text">Войдите с вашей учетной записью</p>
                <form className="auth__form auth__form_type_login">
                  <p className="auth__label">Эл. почта</p>
                  <input
                    className="auth__input auth__input_type_email"
                    placeholder="Введите эл. почту"
                    type="email"
                  ></input>
                  <p className="auth__label">Пароль</p>
                  <input
                    className="auth__input auth__input_type_password"
                    placeholder="Введите пароль"
                    type="password"
                  ></input>
                  <button
                    className="auth__button auth__button_type_noborder"
                    id="forgot"
                  >
                    Забыли пароль?
                  </button>
                  <button
                    className="auth__button auth__button_type_border"
                    id="login"
                    type="submit"
                  >
                    Войти
                  </button>

                  <button
                    className="auth__button auth__button_type_noborder"
                    id="registration"
                    onClick={changeAuthType}
                  >
                    Еще не зарегистрированы?{" "}
                    <span className="auth__span">Зарегистрироваться</span>
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="auth__heading">Зарегистрироваться</h2>
                <p className="auth__text">
                  Зарегистрируйтесь для получения доступа
                </p>
                <form className="auth__form auth__form_type_login">
                  <p className="auth__label">Эл. почта</p>
                  <input
                    className="auth__input auth__input_type_email"
                    placeholder="Введите эл. почту"
                    type="email"
                  ></input>
                  <button
                    className="auth__button auth__button_type_border"
                    id="login"
                    type="submit"
                  >
                    Зарегистрироваться
                  </button>

                  <button
                    className="auth__button auth__button_type_noborder"
                    id="registration"
                    onClick={changeAuthType}
                  >
                    Уже зарегистрированы?{" "}
                    <span className="auth__span">Войти</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
