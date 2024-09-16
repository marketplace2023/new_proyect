import { z } from 'zod';

export const clientFormSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Ingrese un nombre válido'),
  phoneNumber: z.coerce
    .string()
    .min(0, 'Ingrese un número igual o mayor a cero'),
  email: z.string().email('Ingrese un correo electrónico válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export type ClientFormSchema = z.infer<typeof clientFormSchema>;
