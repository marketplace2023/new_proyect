'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import {
  clientFormSchema,
  ClientFormSchema,
} from '../zod-schemas/client-schemas';

const ClientCreate = () => {
  const form = useForm<ClientFormSchema>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      id: v4(),
      business_name: '',
      phone: '',
      email: '',
      website_url: '',
      linkedin: '',
      slogan: '',
      start_year: '',
      certifications: [],
      description_long: '',
      description_short: '',
    },
  });

  function onSubmit(values: ClientFormSchema) {
    console.log(values);
  }

  return (
    <>
      <div>
        <div>
          <p className="font-bold text-2xl mb-4">Crear Client</p>{' '}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="business_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Negocio</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el nombre del negocio"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address_line_one"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Direccion Fisica</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una direccion fisica"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero de Telefono</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una numero de telefono"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Añadir Cliente</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ClientCreate;
