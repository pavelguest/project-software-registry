import React from 'react';
import DocsContainer from '../MainComponents/DocsContainer';
import InfoContainer from '../MainComponents/InfoContainer';
import NewsRegContainer from '../MainComponents/NewsRegContainer';
import QuestionsContainer from '../MainComponents/QuestionsContainer';
import RegistriesContainer from '../MainComponents/RegistriesContainer';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <InfoContainer />
      <RegistriesContainer />
      <NewsRegContainer />
      <DocsContainer />
      <QuestionsContainer />
    </div>
  );
};

export default Main;
