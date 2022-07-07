import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ProfileForm.scss';

const ProfileForm = () => {
  const [isViewPass, setIsViewPass] = useState<boolean>(false);
  const toggleViewPass = () => {
    setIsViewPass(!isViewPass);
  };

  return (
    <>
      <Form>
        <h4 className="profile-form__subtitle">Основные данные</h4>
        <div className="profile__main-data">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="profile-form__label">Имя</Form.Label>
            <Form.Control
              id="formBasicName"
              type="name"
              placeholder="Введите имя"
              defaultValue={'Захар'}
              className="profile__input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName1">
            <Form.Label className="profile-form__label">Фамилия</Form.Label>
            <Form.Control
              id="formBasicName1"
              type="name"
              placeholder="Введите фамилию"
              defaultValue={'Палазник'}
              className="profile__input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName2">
            <Form.Label className="profile-form__label">Отчество</Form.Label>
            <Form.Control
              id="formBasicName2"
              type="name"
              placeholder="Введите отчество"
              defaultValue={'Геннадьевич'}
              className="profile__input"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="profile-form__label">Страна</Form.Label>
            <Form.Select aria-label="Default select example" className="profile__input">
              <option>Беларусь</option>
              <option value="1">Китай</option>
              <option value="2">Англия</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="profile-form__label">Город</Form.Label>
            <Form.Select aria-label="Default select example" className="profile__input">
              <option>Минск</option>
              <option value="1">Брест</option>
              <option value="2">Витебск</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTel">
            <Form.Label className="profile-form__label">Мобильный телефон</Form.Label>
            <Form.Control
              id="formBasicTel"
              type="tel"
              placeholder="Введите номер"
              defaultValue={'+375 22 111 33 44'}
              className="profile__input"
            />
          </Form.Group>
        </div>
        <h4 className="profile-form__subtitle">Пароль</h4>
        <div className="profile__pass-data">
          <Form.Group className="mb-3 inner" controlId="formBasicPass">
            <Form.Label className="profile-form__label">Новый пароль</Form.Label>
            <Form.Control
              id="formBasicPass"
              type={isViewPass ? 'text' : 'password'}
              placeholder="Введите пароль"
              defaultValue={'1234567'}
              className="profile__input"
            />
            <i className="glyphicon-pass" onClick={toggleViewPass}></i>
          </Form.Group>
          <Form.Group className="mb-3 inner" controlId="formBasicPass1">
            <Form.Label className="profile-form__label">Подтвердите пароль</Form.Label>
            <Form.Control
              id="formBasicPass1"
              type={isViewPass ? 'text' : 'password'}
              placeholder="Введите пароль"
              defaultValue={'1234567'}
              className="profile__input"
            />
            <i className="glyphicon-pass" onClick={toggleViewPass}></i>
          </Form.Group>
        </div>
        <div className="profile__submit-container">
          <Button variant="primary" type="submit" className="profile__submit">
            Сохранить
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ProfileForm;
