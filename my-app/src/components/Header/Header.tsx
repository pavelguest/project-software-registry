import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left-content">
        <div className="header__logo"></div>
        <Form className="header__search">
          <Form.Group className="mb-3 inner-addon" controlId="formBasicEmail">
            <i className="glyphicon"></i>
            <Form.Control type="email" placeholder="Поиск" className="input-search" />
          </Form.Group>
        </Form>
      </div>
      <div className="header__right-content">
        {' '}
        <div className="header__content">
          <Button id="header-calendar" variant="primary"></Button>{' '}
          <Button id="header-bell" variant="primary"></Button>{' '}
        </div>
        <div className="header__profile">
          <Button id="header-login" variant="primary">
            войти
          </Button>
          <Button id="header-reg" variant="primary">
            регистрация
          </Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default Header;
