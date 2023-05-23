import React from "react";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__user-container">
        <img alt="Аватар пользователя" className="profile__avatar"></img>
        <h3 className="profile__name">Евгений</h3>
        <p className="profile__surname">Шальнев</p>
      </div>
      <div className="profile__buttons">
        <h4 className="profile__buttons-heading">Основное</h4>
        <div className="profile__button profile__button_type_security">
          <div className="profile__button-image profile__button-image_type_security"></div>
          <div className="profile__button-text">
            <h5 className="profile__button-title">Безопасность</h5>
            <p className="profile__button-subtitle">Ваше пароль от аккаунта</p>
          </div>
        </div>
        <div className="profile__button profile__button_type_privacy">
          <div className="profile__button-image profile__button-image_type_privacy"></div>
          <div className="profile__button-text">
            <h5 className="profile__button-title">Приватность</h5>
            <p className="profile__button-subtitle">
              Узнайте о политике приватности
            </p>
          </div>
        </div>
      </div>
      <div className="profile__buttons">
        <h4 className="profile__buttons-heading">Помощь</h4>
        <div className="profile__button profile__button_type_help">
          <div className="profile__button-image profile__button-image_type_help"></div>
          <div className="profile__button-text">
            <h5 className="profile__button-title">Обратная связь</h5>
            <p className="profile__button-subtitle">Если нужна помощь</p>
          </div>
        </div>
        <div className="profile__button profile__button_type_contacts">
          <div className="profile__button-image profile__button-image_type_contacts"></div>
          <div className="profile__button-text">
            <h5 className="profile__button-title">Контакты</h5>
            <p className="profile__button-subtitle">
              Контакты для связи с нами
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
