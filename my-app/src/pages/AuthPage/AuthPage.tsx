import React from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.scss';
import { useAppDispatch } from '../../redux/hooks/redux';
import { authActions } from '../../redux/reducers/authSlice';

interface IInitialValues {
  name: string;
  password: string;
}

const initialValues: IInitialValues = {
  name: '',
  password: '',
};

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().trim().min(5, 'Too Short!').max(15, 'Too Long!').required(),
    password: yup
      .string()
      .trim()
      .required('Please Enter your password')
      .min(5, 'Too Short!')
      .max(15, 'Too Long!')
      .required(),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(authActions.toggleAuth(true));
      navigate('/');
    },
  });

  return (
    <div className="auth-container">
      <div className="auth__link-main">
        <Link id="link-main" to="/">
          Главная
        </Link>
      </div>
      <h3 className="auth__title">Авторизация</h3>
      <Form className="auth__form" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="auth-name">
          <Form.Label style={{ fontSize: '14px' }}>Имя</Form.Label>
          <Form.Control
            id="auth-name"
            name="name"
            type="name"
            placeholder="Введите имя"
            value={formik.values.name}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.name}
            isValid={formik.touched.name && !formik.errors.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="auth-pass">
          <Form.Label style={{ fontSize: '14px' }}>Пароль</Form.Label>
          <Form.Control
            id="auth-pass"
            name="password"
            type="password"
            placeholder="Введите пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
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
