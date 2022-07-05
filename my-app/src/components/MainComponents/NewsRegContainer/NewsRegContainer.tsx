import { Button } from '@mui/material';
import React from 'react';
import newsData from '../../../data/newsData';
import './NewsRegContainer.scss';

const NewsRegContainer = () => {
  return (
    <div className="news-container">
      <div className="news__title-container">
        <h3 className="news__title">Новости реестра</h3>
      </div>
      <div className="news__content">
        {newsData.map((news) => (
          <div className="news__item" key={news.date}>
            <img className="news__item-image" src={news.img} alt="news" />
            <h4 className="news__item-title">{news.title}</h4>
            <p className="news__item-date">{news.date}</p>
            <p className="news__item-text">{news.text}</p>
          </div>
        ))}
      </div>
      <Button className="news_button" variant="contained">
        Показать все
      </Button>
    </div>
  );
};

export default NewsRegContainer;
