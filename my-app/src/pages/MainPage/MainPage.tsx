import React from 'react';
import DocsContainer from '../../components/MainComponents/DocsContainer';
import InfoContainer from '../../components/MainComponents/InfoContainer';
import NewsRegContainer from '../../components/MainComponents/NewsRegContainer';
import QuestionsContainer from '../../components/MainComponents/QuestionsContainer';
import RegistriesContainer from '../../components/MainComponents/RegistriesContainer';
import './MainPage.scss';

const MainPage = () => {
  return (
    <>
      <InfoContainer />
      <RegistriesContainer />
      <NewsRegContainer />
      <DocsContainer />
      <QuestionsContainer />
    </>
  );
};

export default MainPage;
