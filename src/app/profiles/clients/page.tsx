import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import ClientsTable from './components/clients/clients-table';

const ClientsPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl">Clients</p>
      </div>
      <div className="flex content-end justify-end">
        <Button variant="default">
          <Link
            href="/profiles/clients/create"
            className="inline-flex items-center"
          >
            Añadir Cliente
          </Link>
        </Button>
      </div>
      <div>
        <ClientsTable />
      </div>
    </>
  );
};

export default ClientsPage;
