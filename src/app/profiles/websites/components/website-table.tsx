'use client';

import React, { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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

import { Client, fetchClients } from '../../agents/api/api-clients';

const WebsitesTable = () => {
  const {
    data: clients,
    isLoading,
    isError,
  } = useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRowClick = (client: Client) => {
    setSelectedClient(client);
    setIsDialogOpen(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Table>
        <TableCaption>A list of your recent clients.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Passsword</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients?.map((client) => (
            <TableRow
              key={client.id}
              onClick={() => handleRowClick(client)}
              className="cursor-pointer"
            >
              <TableCell>{client.attributes.first_name}</TableCell>
              <TableCell>{client.attributes.last_name}</TableCell>
              <TableCell>{client.attributes.email}</TableCell>
              <TableCell>{client.attributes.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Client Information</DialogTitle>
          </DialogHeader>
          <div>
            <p>
              <strong>First Name:</strong>{' '}
              {selectedClient?.attributes.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {selectedClient?.attributes.last_name}
            </p>
            <p>
              <strong>Email:</strong> {selectedClient?.attributes.email}
            </p>
            <p>
              <strong>Password:</strong> {selectedClient?.attributes.password}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WebsitesTable;
