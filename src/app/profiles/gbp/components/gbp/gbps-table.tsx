'use client';

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
import { useQuery } from '@tanstack/react-query';

import { fetchGbps, Gbp } from '../../api/api-gbps';

const GbpsTable = () => {
  const {
    data: gbps,
    isLoading,
    isError,
  } = useQuery<Gbp[]>({
    queryKey: ['gbps'],
    queryFn: fetchGbps,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <Table>
      <TableCaption>A list of your recent clients.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name Client</TableHead>
          <TableHead>Categoria de la Empresa</TableHead>
          <TableHead>Codigo Postal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gbps?.map((gbp) => (
          <TableRow key={gbp.id}>
            <TableCell>{gbp.attributes.nombre_empresa}</TableCell>
            <TableCell>{gbp.attributes.categoria_empresa}</TableCell>
            <TableCell>{gbp.attributes.codigo_postal}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GbpsTable;
