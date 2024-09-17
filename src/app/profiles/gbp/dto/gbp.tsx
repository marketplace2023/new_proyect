export interface Gbp {
  id: string;
  clientId: string;
  companyName: string;
  bussinessType: string;
  email: string;
  bussinessCategory: string;
  servicesArea: string;
  phoneNumber: string;
  website: string;
  country: string;
  city: string;
  state: string;
  address: string;
  postalCode: string;
  additionalServices: string;
  schedules: string; // TODO: change to Schedule[]
  largeDescription: string;
  pinterest: string;
  tiktok: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  twitter: string;
  youtube: string;
  shortDescription: string;
  customersOpinions: string;
  featuredProperties: string;
  appointmentsContacts: string; // TODO: change to AppointmentContact[]
  relatedAgencies: string; // TODO: change to RelatedAgency[]
  paymentMethods: string; // TODO: change to PaymentMethod[]
  hashtags: string;
  keywords: string;
  slongan: string;
  startOperations: string;
  certification: string;
  positions: string;
  description: string;
  createdAt: string;
}
