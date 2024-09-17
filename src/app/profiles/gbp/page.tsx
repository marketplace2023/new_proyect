import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import GbpsTable from './components/gbp/gbps-table';

const GbpPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl">Gbps</p>
      </div>
      <div className="flex content-end justify-end">
        <Button variant="default">
          <Link
            href="/profiles/gbp/create"
            className="inline-flex items-center"
          >
            Registrar Gbp
          </Link>
        </Button>
      </div>
      <div>
        <GbpsTable />
      </div>
    </>
  );
};

export default GbpPage;
