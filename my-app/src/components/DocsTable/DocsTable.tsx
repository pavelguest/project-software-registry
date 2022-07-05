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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Категория</TableCell>
            <TableCell align="right">Наименование </TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Номер</TableCell>
            <TableCell align="right">Содержание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {docsData.map((doc) => (
            <TableRow key={doc.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right">{doc.category}</TableCell>
              <TableCell align="right">{doc.name}</TableCell>
              <TableCell align="right">{doc.date}</TableCell>
              <TableCell align="right">{doc.num}</TableCell>
              <TableCell align="right">{doc.file}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DocsTable;
