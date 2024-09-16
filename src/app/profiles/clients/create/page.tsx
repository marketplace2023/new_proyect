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
} from '../zod-schemas/clients-schemas';

const ClientCreate = () => {
  const form = useForm<ClientFormSchema>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      id: v4(),
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: ClientFormSchema) {
    console.log(values);
  }

  return (
    <>
      <div>
        <div>
          <p className="font-bold text-2xl mb-4">Create Client</p>{' '}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del cliente</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el nombre del cliente"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de teléfono</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el número de teléfono"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Ingrese el correo electrónico"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Ingrese una contraseña"
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
