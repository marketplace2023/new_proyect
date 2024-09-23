import React from 'react';

import NapsTable from './components/naps-table';

const NapsPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl mb-4">Naps</p>
      </div>
      <div>
        <NapsTable />
      </div>
    </>
  );
};

export default NapsPage;
