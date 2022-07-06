import React from 'react';
import './Footer.scss';
import footerLogoSvg from '../../svg/footer-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer__content">
          <div className="footer__company-info">
            <div className="footer__logo"></div>
            <p className="footer__text">
              Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта
              2014 г
            </p>
          </div>
          <div className="footer__dev-info">
            <h5 className="footer__dev-title">Разработчик</h5>
            <p className="footer__text">ОАО «Агентство сервисизации и реинжиниринга»</p>
            <p className="footer__text">Минск, улица Клары Цеткин, 24</p>
          </div>
        </div>
        <div className="footer__info">
          <h4 className="footer__subtitle">Информация</h4>
          <ul className="footer__list">
            <li className="footer__list-item">Реестры</li>
            <li className="footer__list-item">Новости</li>
            <li className="footer__list-item">Документы</li>
            <li className="footer__list-item">Вопросы</li>
          </ul>
        </div>
        <div className="footer__support">
          <h4 className="footer__subtitle">Техническая поддержка</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и
              праздничных дней.
            </li>
            <li className="footer__list-item">+375 25 111 22 33 </li>
            <li className="footer__list-item">+375 29 222 44 55</li>
            <li className="footer__list-item">ReestrPOsupport@mail.ru</li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h4 className="footer__subtitle">Контакты</h4>
          <ul className="footer__list">
            <li className="footer__list-item">+375 33 112 22 45</li>
            <li className="footer__list-item">+375 29 222 44 88</li>
            <li className="footer__list-item">ReesrtPO@mail.ru</li>
            <li className="footer__list-item">220004 г. Минск, ул. Карла Маркса, 38</li>
            <li className="footer__list-item item-link">Связаться с поддержкой</li>
          </ul>
        </div>
      </div>

      <div className="footer__signature">
        <p>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;
