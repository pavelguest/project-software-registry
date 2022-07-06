import { IconButton } from '@mui/material';
import React from 'react';
import './RegistriesContainer.scss';
import filterSvg from '../../../svg/filter.svg';
import etcSvg from '../../../svg/etc.svg';
import RegistriesTable from '../RegistriesTable';

const RegistriesContainer = () => {
  return (
    <div className="registries-container">
      <div className="registries__title__container">
        <div>
          <h3 className="registries__title">Реестры</h3>
        </div>
        <div className="registries__buttons-nav">
          <IconButton>
            <img src={filterSvg} alt="filter" />
          </IconButton>
          <IconButton>
            <img src={etcSvg} alt="etc" />
          </IconButton>
        </div>
      </div>
      <RegistriesTable />
    </div>
  );
};

export default RegistriesContainer;
