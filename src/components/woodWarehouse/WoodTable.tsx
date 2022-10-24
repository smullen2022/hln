import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { Wood } from '../../types/graphql';
import { OrderBy, SortOrder } from './types';

interface WoodTableProps {
  woodItems: Wood[];
  onDelete: (id: number) => void;
}

export const WoodTable: React.FC<WoodTableProps> = ({ woodItems, onDelete }) => {
  const headers: { key: OrderBy; label: string }[] = [
    { key: 'woodSpecies', label: 'Wood Species' },
    { key: 'price', label: 'Price' }
  ];
  const [order, setOrder] = useState<SortOrder>('asc');
  const [orderBy, setOrderBy] = useState<OrderBy>('woodSpecies');
  const [sortedWoodItems, setSortedWoodItems] = useState<Wood[]>();

  const sortComparison = (a: Wood, b: Wood, orderBy: OrderBy) =>
    b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0;

  const handleSort = (key: OrderBy) => {
    const sameKeyAsc = orderBy === key && order === 'asc';
    setOrder(sameKeyAsc ? 'desc' : 'asc');
    setOrderBy(key);
  };

  useEffect(() => {
    if (woodItems && woodItems.length > 0 && order && orderBy) {
      const sortedItems = [...woodItems].sort((a, b) =>
        order === 'desc' ? sortComparison(a, b, orderBy) : -sortComparison(a, b, orderBy)
      );
      setSortedWoodItems(sortedItems);
    }
  }, [woodItems, order, orderBy]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                sx={{ fontWeight: 'bold' }}
                key={header.key}
                sortDirection={orderBy === header.key ? order : false}
              >
                <TableSortLabel
                  active={orderBy === header.key}
                  direction={orderBy === header.key ? order : 'asc'}
                  onClick={() => handleSort(header.key)}
                >
                  {header.label}
                  {orderBy === header.key ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedWoodItems?.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.woodSpecies}
              </TableCell>
              <TableCell>{`$${row.price.toFixed(2)}`}</TableCell>
              <TableCell align="right">
                <Button variant="contained" onClick={() => onDelete(row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
