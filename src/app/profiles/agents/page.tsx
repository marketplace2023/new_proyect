import React from 'react';

import AgentsTable from './components/clients/agents-table';

const AgentsPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl mb-4">Agents</p>
      </div>
      <div>
        <AgentsTable />
      </div>
    </>
  );
};

export default AgentsPage;
