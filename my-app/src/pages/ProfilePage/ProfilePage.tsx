import React from 'react';
import ProfileForm from '../../components/ProfileComponents/ProfileForm';
import ProfileNav from '../../components/ProfileComponents/ProfileNav';
import './ProfilePage.scss';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h3 className="profile__title">Личный кабинет</h3>
      <div className="profile-content">
        <ProfileNav />
        <div className="profile__user-container">
          <div className="profile__user-title">Здравствуй, Захар!</div>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
