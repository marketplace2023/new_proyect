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

const GbpsTable = () => {
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
        <TableCaption>A list of your recent gbps.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name Bussines</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Web site</TableHead>
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
              <TableCell>{client.attributes.category}</TableCell>
              <TableCell>
                {client.attributes.address.address_line_one}
              </TableCell>
              <TableCell>{client.attributes.contact.phone}</TableCell>
              <TableCell>{client.attributes.website.website_url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Gbp Client Information</DialogTitle>
          </DialogHeader>
          <div>
            <p>
              <strong>Name Bussines</strong>{' '}
              {selectedClient?.attributes.business_name}
            </p>
            <p>
              <strong>Category:</strong> {selectedClient?.attributes.category}
            </p>
            <p>
              <strong>Address:</strong>{' '}
              {selectedClient?.attributes.address.address_line_one}
            </p>
            <p>
              <strong>Phone:</strong> {selectedClient?.attributes.contact.phone}
            </p>
            <p>
              <strong>Website:</strong>{' '}
              {selectedClient?.attributes.website.website_url}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GbpsTable;
