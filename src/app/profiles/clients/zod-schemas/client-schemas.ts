import { z } from 'zod';

export const clientFormSchema = z.object({
  id: z.string().uuid(),
  first_name: z.string().min(1, 'El nombre es obligatorio'),
  last_name: z.string().min(1, 'El apellido es obligatorio'),
  email: z.string().email('Correo electrónico inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  position: z.string().optional(),
  business_name: z.string().optional(),
  slogan: z.string().optional(),
  work_hours: z.array(z.string()).optional(),
  start_year: z.number().int().optional(),
  category: z.string().optional(),
  contact: z.object({
    id: z.string().uuid(),
    phone: z.string().min(1, 'El teléfono es obligatorio'),
    email: z.string().email('Correo electrónico inválido'),
  }),
  address: z.object({
    id: z.string().uuid(),
    address_line_one: z.string().min(1, 'La dirección es obligatoria'),
    city: z.string().min(1, 'La ciudad es obligatoria'),
    state: z.string().min(1, 'El estado es obligatorio'),
    zip: z.string().min(1, 'El código postal es obligatorio'),
    country: z.string().min(1, 'El país es obligatorio'),
  }),
  website: z
    .object({
      id: z.string().uuid(),
      website_url: z.string().optional(),
      facebook: z.string().optional(),
      linkedin: z.string().optional(),
      youtube: z.string().optional(),
      instagram: z.string().optional(),
      google_profile_url: z.string().optional(),
    })
    .optional(),
  payment: z
    .object({
      id: z.string().uuid(),
      payment_methods: z.array(z.string()).optional(),
    })
    .optional(),
  service: z
    .object({
      id: z.string().uuid(),
      service_name: z.string().optional(),
      specialties: z.array(z.string()).optional(),
    })
    .optional(),
  service_area: z
    .object({
      id: z.string().uuid(),
      service_area: z.array(z.string()).optional(),
    })
    .optional(),
});

export type ClientFormSchema = z.infer<typeof clientFormSchema>;
