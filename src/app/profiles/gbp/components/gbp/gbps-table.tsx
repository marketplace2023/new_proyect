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

import { gbps } from '../../api/data';

const GbpsTable = () => {
  return (
    <Table>
      <TableCaption>
        A list of your recent clients register gbp including.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Nombre de la empresa</TableHead>
          <TableHead>Tipo de negocio</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Categoria de negocio</TableHead>
          <TableHead>Areas de servicio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gbps.map((gbp, index) => (
          <TableRow key={index}>
            <TableCell>{gbp.clientId}</TableCell>
            <TableCell>{gbp.companyName}</TableCell>
            <TableCell>{gbp.bussinessType}</TableCell>
            <TableCell>{gbp.email}</TableCell>
            <TableCell>{gbp.bussinessCategory}</TableCell>
            <TableCell>{gbp.servicesArea}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GbpsTable;
