import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Pagination } from 'react-bootstrap';
import dataRows from '../../../data/registriesData';
import './RegistriesTable.scss';

const RegistriesTable = () => {
  return (
    <div className="table-container">
      <TableContainer
        component={Paper}
        sx={{
          margin: '40px 0',
        }}
      >
        <Table sx={{ minWidth: 650, height: ' 1364px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#009cb4' }} align="right">
                Регистрационный номер
              </TableCell>
              <TableCell sx={{ color: '#009cb4' }} align="right">
                Наименование программного обеспечения
              </TableCell>
              <TableCell sx={{ color: '#009cb4' }} align="right">
                Код класса
              </TableCell>
              <TableCell sx={{ color: '#009cb4' }} align="right">
                Класс программного обеспечения
              </TableCell>
              <TableCell sx={{ color: '#009cb4' }} align="right">
                Дата регистрации
              </TableCell>
              <TableCell sx={{ color: '#009cb4' }} align="right">
                Адрес сайта
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row) => (
              <TableRow key={row.reg} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{`#${row.reg}`}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.classProg}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell sx={{ color: '#009cb4', textDecoration: 'underline' }} align="right">
                  {row.path}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{112}</Pagination.Item>
        <Pagination.Item>{113}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default RegistriesTable;
