import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux';
import { authActions } from '../../redux/reducers/authSlice';
import './Header.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return (
    <div className="header">
      <div className="header__left-content">
        <div className="header__logo"></div>
        <Form className="header__search">
          <Form.Group className="mb-3 inner-addon" controlId="formBasicSearch">
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
          {isAuth ? (
            <div className="header__profile-nav">
              <Navbar expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown
                        title="Захар Палазник"
                        id="basic-nav-dropdown"
                        className="header__user-title"
                      >
                        <NavDropdown.Item href="" onClick={() => navigate('/profile')}>
                          Профиль
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href=""
                          onClick={() => {
                            dispatch(authActions.toggleAuth(false));
                            navigate('/');
                          }}
                        >
                          Выйти
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          ) : (
            <Link to="/login">Войти</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
