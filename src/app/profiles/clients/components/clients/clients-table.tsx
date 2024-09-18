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

import { Client, fetchClients } from '../../api/api-clients';

const ClientsTable = () => {
  const {
    data: clients,
    isLoading,
    isError,
  } = useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

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
        {clients?.map((client) => (
          <TableRow key={client.id}>
            <TableCell>{client.attributes.name_client}</TableCell>
            <TableCell>{client.attributes.phone_number_personal}</TableCell>
            <TableCell>{client.attributes.email}</TableCell>
            <TableCell>{client.attributes.password}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientsTable;
