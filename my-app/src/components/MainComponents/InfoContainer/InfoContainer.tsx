import React from 'react';
import './InfoContainer.scss';
import infoImage from '../../../images/3d-Office-Work-1.png';
import { Button, Form } from 'react-bootstrap';

const InfoContainer = () => {
  return (
    <div className="info-container">
      <div className="info__content">
        <h1 className="info__title">РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
        <p className="info__text">
          Единый реестр программ для электронных вычислительных машин и баз данных
        </p>
        <p className="info__text">Включено ПО в реестр: 13 438 Правообладателей: 4 272</p>
        <div className="info__inputs">
          <div className="info__form">
            <Form className="info__search-container">
              <Form.Group className="mb-3 inner-addon" controlId="info__input">
                <i className="glyphicon"></i>
                <Form.Control
                  type="email"
                  placeholder="Искать реестр..."
                  className="input-search"
                  id="info__input"
                />
              </Form.Group>
            </Form>
            <div>
              <Button id="info__button" variant="primary">
                Искать
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="info__image-container">
        <img className="info__image" src={infoImage} alt="info__image" />
      </div>
    </div>
  );
};

export default InfoContainer;
