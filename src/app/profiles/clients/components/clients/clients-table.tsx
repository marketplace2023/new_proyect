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
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Password</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Country</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients?.map((client) => (
          <TableRow key={client.id}>
            <TableCell>{client.attributes.first_name}</TableCell>
            <TableCell>{client.attributes.last_name}</TableCell>
            <TableCell>{client.attributes.email}</TableCell>
            <TableCell>{client.attributes.password}</TableCell>
            <TableCell>{client.attributes.contact.email}</TableCell>
            <TableCell>{client.attributes.address.country}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientsTable;
