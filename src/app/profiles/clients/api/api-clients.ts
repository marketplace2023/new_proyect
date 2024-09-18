export type Client = {
  id: number;
  attributes: {
    name_client: string;
    phone_number_personal: string;
    email: string;
    password: string;
  };
};

export const fetchClients = async (): Promise<Client[]> => {
  const response = await fetch('http://localhost:1337/api/clients');
  const data = await response.json();
  return data.data;
};
