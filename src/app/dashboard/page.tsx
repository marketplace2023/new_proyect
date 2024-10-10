'use client';

import { useEffect, useState } from 'react';

import { FaRegUserCircle } from 'react-icons/fa';
import { MdRealEstateAgent } from 'react-icons/md';
import { SiGooglemybusiness } from 'react-icons/si';

import { Client, fetchClients } from '../profiles/agents/api/api-clients';
import SummaryCard from '../profiles/shared/components/card-info';

export default function Home() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const clientsData = await fetchClients();
      setClients(clientsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <p className="font-bold text-4xl">Resumen</p>
      <div>
        <div className="bg-gray-100 p-8">
          <div className="grid grid-cols-3 gap-2">
            <SummaryCard
              icon={<FaRegUserCircle />}
              number={clients.length} // Total de clientes
              label="Clientes"
              color="text-yellow-500"
            />
            <SummaryCard
              icon={<SiGooglemybusiness />}
              number={clients.length}
              label="Gbp"
              color="text-red-500"
            />
            <SummaryCard
              icon={<MdRealEstateAgent />}
              number={
                clients.filter((client) => client.attributes.position).length
              }
              label="Propiedades"
              color="text-purple-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}
