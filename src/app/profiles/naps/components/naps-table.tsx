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

import { Client, fetchClients } from '../../clients/api/api-clients';

const NapsTable = () => {
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
        <TableCaption>A list of your recent naps.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Bussines Name</TableHead>
            <TableHead>Busines Address</TableHead>
            <TableHead>Zipcode</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients?.map((client) => (
            <TableRow
              key={client.id}
              onClick={() => handleRowClick(client)}
              className="cursor-pointer"
            >
              <TableCell>{client.attributes.business_name}</TableCell>
              <TableCell>
                {client.attributes.address.address_line_one}
              </TableCell>
              <TableCell>{client.attributes.address.zip}</TableCell>
              <TableCell>{client.attributes.contact.phone}</TableCell>
              <TableCell>{client.attributes.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nap Client Information</DialogTitle>
          </DialogHeader>
          <div>
            <p>
              <strong>Name Bussines</strong>{' '}
              {selectedClient?.attributes.business_name}
            </p>
            <p>
              <strong>Busines Address:</strong>{' '}
              {selectedClient?.attributes.address.address_line_one}
            </p>
            <p>
              <strong>Zipcode:</strong> {selectedClient?.attributes.address.zip}
            </p>
            <p>
              <strong>Phone:</strong> {selectedClient?.attributes.contact.phone}
            </p>
            <p>
              <strong>Email:</strong> {selectedClient?.attributes.email}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NapsTable;
