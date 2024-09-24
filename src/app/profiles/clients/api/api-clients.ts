export type Client = {
  id: number;
  attributes: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    position: string;
    business_name: string;
    slogan: string;
    work_hours: string[];
    start_year: number;
    category: string;
    contact: {
      id: number;
      phone: string;
      email: string;
    };
    address: {
      id: number;
      address_line_one: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    website: {
      id: number;
      website_url: string;
      facebook: string;
      linkedin: string;
      youtube: string;
      instagram: string;
      google_profile_url: string;
    };
    payment: {
      id: number;
      payment_methods: string[];
    };
    service: {
      id: number;
      service_name: string;
      specialties: string[];
    };
    service_area: {
      id: number;
      service_area: string[];
    };
  };
};

export const fetchClients = async (): Promise<Client[]> => {
  const response = await fetch(
    'http://localhost:1337/api/clients?populate=contact,address,website,payment,service,service_area,',
  );
  const data = await response.json();

  return data.data.map((client: any) => ({
    id: client.id,
    attributes: {
      ...client.attributes,
      contact: {
        id: client.attributes.contact?.data?.id,
        phone: client.attributes.contact?.data?.attributes?.phone,
        email: client.attributes.contact?.data?.attributes?.email,
      },
      address: {
        id: client.attributes.address?.data?.id,
        address_line_one:
          client.attributes.address?.data?.attributes?.address_line_one,
        city: client.attributes.address?.data?.attributes?.city,
        state: client.attributes.address?.data?.attributes?.state,
        zip: client.attributes.address?.data?.attributes?.zip,
        country: client.attributes.address?.data?.attributes?.country,
      },
      website: {
        id: client.attributes.website?.data?.id,
        website_url: client.attributes.website?.data?.attributes?.website_url,
        facebook: client.attributes.website?.data?.attributes?.facebook,
        linkedin: client.attributes.website?.data?.attributes?.linkedin,
        youtube: client.attributes.website?.data?.attributes?.youtube,
        instagram: client.attributes.website?.data?.attributes?.instagram,
        google_profile_url:
          client.attributes.website?.data?.attributes?.google_profile_url,
      },
      payment: {
        id: client.attributes.payment?.data?.id,
        payment_methods:
          client.attributes.payment?.data?.attributes?.payment_methods,
      },
      service: {
        id: client.attributes.services?.data?.id,
        service_name:
          client.attributes.services?.data?.attributes?.service_name,
        specialties: client.attributes.services?.data?.attributes?.specialties,
      },
      service_area: {
        id: client.attributes.service_area?.data?.id,
        service_area:
          client.attributes.service_area?.data?.attributes?.service_area,
      },
    },
  }));
};
