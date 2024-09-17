import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { clients } from '../../api/data';

const ClientsTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent clients.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name Client</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Password</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client, index) => (
          <TableRow key={index}>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.phoneNumber}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.password}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientsTable;
