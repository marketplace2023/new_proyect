'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useForm<ClientFormSchema>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      id: v4(),
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: ClientFormSchema) {
    setLoading(true);
    setError('');

    const clientData = {
      data: {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      },
    };

    try {
      const response = await fetch('http://localhost:1337/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        body: JSON.stringify(clientData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el cliente en Strapi');
      }

      const data = await response.json();
      console.log('Cliente creado:', data);
      router.push('/clients');
    } catch (error) {
      console.error(error);
      setError('Hubo un error al guardar el cliente');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div>
        <p className="font-bold text-2xl mb-4">Crear Cliente</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* Form Fields... */}
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ingrese el nombre"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ingrese el apellido"
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
                  <FormLabel>Correo Electronico</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Ingrese correo"
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
                      placeholder="Ingrese contraeña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Otros campos adicionales... */}
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? 'Guardando...' : 'Añadir Cliente'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ClientCreate;
