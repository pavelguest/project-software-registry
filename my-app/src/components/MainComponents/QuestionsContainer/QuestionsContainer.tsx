import React from 'react';
import './QuestionsContainer.scss';

const QuestionsContainer = () => {
  return (
    <div className="questions-container">
      <div className="questions__title-container">
        <h3 className="questions__title">Вопрос-ответ</h3>
      </div>
      <div className="questions__content">
        <h4 className="question__subtitle">Для подачи заявления необходимо подготовить</h4>
        <ul className="question__list">
          <li className="question__list-item">1. Данные для авторизации в личном кабинете</li>
          <li className="question__list-item">
            2. Квалифицированный сертификат ключа проверки электронной подписи.
          </li>
          <li className="question__list-item">
            3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.
          </li>
          <li className="question__list-item">
            4. Установить специализированное ПО для подписания документов электронной подписью.
            Подписание производится с использованием усиленной квалифицированной (отсоединяемой)
            электронной подписи.
          </li>
        </ul>
        <h4 className="question__subtitle">Связь с оператором реестра</h4>
        <h4 className="question__subtitle">
          Как подать заявление на включение программного обеспечения в реестр
        </h4>
        <h4 className="question__subtitle">Где можно подать заявление</h4>
        <h4 className="question__subtitle">Как узнать мне причину отказа</h4>
        <h4 className="question__subtitle">Что делать, если Вам отказали</h4>
        <h4 className="question__subtitle">Изменение реестревой записи</h4>
      </div>
    </div>
  );
};

export default QuestionsContainer;
