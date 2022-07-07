import React from 'react';
import './ProfileNav.scss';
import { Container, Navbar } from 'react-bootstrap';
import userIco from '../../../svg/user.svg';
import bellIco from '../../../svg/black-bell.svg';
import registerIco from '../../../svg/register.svg';
import fileIco from '../../../svg/file.svg';
import lockIco from '../../../svg/lock.svg';
import loadIco from '../../../svg/load.svg';
import exitIco from '../../../svg/exit.svg';

const ProfileNav = () => {
  return (
    <div className="profile__nav">
      <Navbar className="profile__nav-link">
        <Container>
          <Navbar.Brand href="">
            <img src={userIco} alt="user-ico" /> Мои данные
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="profile__nav-link">
        <Container>
          <Navbar.Brand href="">
            <img src={bellIco} alt="bell-ico" /> Уведомления
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="profile__nav-link">
        <Container>
          <Navbar.Brand href="">
            <img src={registerIco} alt="register-ico" /> Реестры
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="profile__nav-link">
        <Container>
          <Navbar.Brand href="">
            <img src={fileIco} alt="register-ico" /> Метаданные
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="profile__nav-link">
        <Container>
          <Navbar.Brand href="">
            <img src={lockIco} alt="register-ico" /> Безопасность
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="profile__nav-link">
        <Container>
          <Navbar.Brand href="">
            <img src={loadIco} alt="register-ico" /> Мои загрузки
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="profile__nav-link">
        <Container>
          <Navbar.Brand href="">
            <img src={exitIco} alt="register-ico" /> Выход
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
export default ProfileNav;
