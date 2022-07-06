import React from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AuthPage.scss';

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth__link-main">
        <Link id="link-main" to="/">
          Главная
        </Link>
      </div>
      <h3 className="auth__title">Авторизация</h3>
      <Form className="auth__form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: '14px' }}>Имя</Form.Label>
          <Form.Control id="auth-name" type="name" placeholder="Введите имя" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontSize: '14px' }}>Пароль</Form.Label>
          <Form.Control id="auth-pass" type="password" placeholder="Введите пароль" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check id="auth-check" type="checkbox" label="Запомнить меня на этом компьютере" />
        </Form.Group>
        <Button id="auth-submit" variant="primary" type="submit">
          Вход
        </Button>
      </Form>
      <Navbar>
        <Container>
          <Navbar.Brand id="auth-regen" href="">
            Забыли свой пароль?
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Navbar.Brand id="auth-log-es" href="">
            Авторизация с использованием ЕС ИФЮЛ
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Navbar.Brand id="auth-log-msi" href="">
            Авторизация с использованием МСИ
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="auth__reg-container">
        <p className="auth__reg-subtitle">У вас нет аккаунта?</p>
        <Navbar>
          <Container>
            <Navbar.Brand id="auth-reg" href="">
              Нажмите сюда чтобы создать
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default AuthPage;
