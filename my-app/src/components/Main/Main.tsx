import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProfilePage from '../../pages/ProfilePage';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Main;
