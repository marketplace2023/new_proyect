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

import { gbpFormSchema, GbpFormSchema } from '../zod-schema/gbps-schemas';

const GbpCreate = () => {
  const form = useForm<GbpFormSchema>({
    resolver: zodResolver(gbpFormSchema),
    defaultValues: {
      id: v4(),
      clientId: '',
      companyName: '',
      bussinessType: '',
      email: '',
      bussinessCategory: '',
      servicesArea: '',
      phoneNumber: '',
      website: '',
      country: '',
      city: '',
      state: '',
      address: '',
      postalCode: '',
      additionalServices: '',
      schedules: '',
      largeDescription: '',
      pinterest: '',
      tiktok: '',
      linkedin: '',
      instagram: '',
      facebook: '',
      twitter: '',
      youtube: '',
      shortDescription: '',
      customersOpinions: '',
      featuredProperties: '',
      appointmentsContacts: '',
      relatedAgencies: '',
      paymentMethods: '',
      hashtags: '',
      keywords: '',
      slongan: '',
      startOperations: '',
      certification: '',
      positions: '',
      description: '',
    },
  });

  function onSubmit(values: GbpFormSchema) {
    console.log(values);
  }

  return (
    <>
      <div>
        <div>
          <p className="font-bold text-2xl mb-4">Create Gbp</p>{' '}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="clientId"
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
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la Empresa</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el nombre de la empresa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bussinessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Negocio</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el tipo de negocio"
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
                        placeholder="Ingrese un email valido"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bussinessCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Negocio</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese un tipo de negocio"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="servicesArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Areas de Servicio</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese un area de servicio"
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
                    <FormLabel>Numero de Telefono</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ingrese un numero de telefono"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sitio Web</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese un sitio web"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pais</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese un pais"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una ciudad"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese un estado"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Direccion</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una direccion"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Codigo Postal</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ingrese un codigo postal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="additionalServices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Servicios Adicionales</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese un servicio adicional"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="schedules"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horarios</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese un horario"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="largeDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripcion Larga</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una descripcion larga"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pinterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pinterest</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una cuenta de pinterest"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tiktok"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiktok</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una cuenta de tiktok"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una direccion linkedin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una direccion de instagram"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una direccion de facebook"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una direccion de Twitter"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="youtube"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Youtube</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una cuenta de youtube"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripcion Corta</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese una descripcion corta"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customersOpinions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opiniones de Clientes</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese las opiniones de los clientes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="featuredProperties"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Propiedades Destacadas</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese las propiedades destacadas"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="appointmentsContacts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contactos de Cita</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese los contactos afiliados"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="relatedAgencies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agencias Relacionadas</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese agencias relacionadas"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paymentMethods"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Metodos de Pago</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese los metodos de pago"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hashtags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hashtags</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese los hashtags afiliados"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese los keywords afiliados"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slongan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slogan</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el slogan de la empresa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startOperations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fecha de Inicio</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese inicio de operaciones"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="certification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Certificacion</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese la certificacion de la empresa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="positions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Posiciones</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese la posicion de la empresa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese la descripcion de la empresa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Añadir GBP</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default GbpCreate;
