import React from 'react';

import { Button } from '@/components/ui/button';

const MessagesPage = () => {
  return (
    <>
      <span className="font-bold text-4xl">Messages</span>
      <div className="flex justify-end">
        <Button>Ingresar Nuevo Cliente</Button>
      </div>

      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </>
  );
};

export default MessagesPage;
