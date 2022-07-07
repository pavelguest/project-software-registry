import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import docsData from '../../data/docsData';
import './DocsTable.scss';

const DocsTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        margin: '40px 0',
      }}
    >
      <Table sx={{ minWidth: 650, height: '638px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#009cb4' }} align="right">
              Категория
            </TableCell>
            <TableCell sx={{ color: '#009cb4' }} align="right">
              Наименование{' '}
            </TableCell>
            <TableCell sx={{ color: '#009cb4' }} align="right">
              Дата
            </TableCell>
            <TableCell sx={{ color: '#009cb4' }} align="right">
              Номер
            </TableCell>
            <TableCell sx={{ color: '#009cb4' }} align="right">
              Содержание
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {docsData.map((doc) => (
            <TableRow key={doc.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right">{doc.category}</TableCell>
              <TableCell align="right">{doc.name}</TableCell>
              <TableCell align="right">{doc.date}</TableCell>
              <TableCell align="right">{doc.num}</TableCell>
              <TableCell sx={{ color: '#009cb4' }} align="right">
                {doc.file}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DocsTable;
