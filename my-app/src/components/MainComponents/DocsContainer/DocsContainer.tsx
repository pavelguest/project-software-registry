import React from 'react';
import docsData from '../../../data/docsData';
import DocsTable from '../../DocsTable';
import './DocsContainer.scss';

const DocsContainer = () => {
  return (
    <div className="docs-container">
      <div className="docs__title-container">
        <h3 className="docs__title">Документы</h3>
        <p className="docs__count">Всего документов: {docsData.length}</p>
      </div>
      <DocsTable />
    </div>
  );
};

export default DocsContainer;
