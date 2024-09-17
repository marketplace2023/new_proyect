import { DataTable } from '@/components/data-table/data-table';

import { clients } from '../../api/data';
import { columns } from './colums';

const ClientsTable = () => {
  return <DataTable columns={columns} data={clients} />;
};

export default ClientsTable;
