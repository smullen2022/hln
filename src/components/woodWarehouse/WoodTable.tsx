import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Wood } from '../../types/graphql';

interface WoodTableProps {
  woodItems: Wood[];
  onDelete: (id: number) => void;
}

export const WoodTable: React.FC<WoodTableProps> = ({ woodItems, onDelete }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Wood Species</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {woodItems.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.woodSpecies}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <Button onClick={() => onDelete(row.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
