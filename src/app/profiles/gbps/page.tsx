import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

const ClientsPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl">Gbps</p>
      </div>
      <div className="flex content-end justify-end">
        <Button variant="default">
          <Link
            href="/profiles/clients/create"
            className="inline-flex items-center"
          >
            Crear Gbp
          </Link>
        </Button>
      </div>
      <div></div>
    </>
  );
};

export default ClientsPage;
