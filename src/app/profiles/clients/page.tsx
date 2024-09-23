import React from 'react';

import ClientsTable from './components/clients/clients-table';

const ClientsPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl mb-4">Clients</p>
      </div>
      <div>
        <ClientsTable />
      </div>
    </>
  );
};

export default ClientsPage;
