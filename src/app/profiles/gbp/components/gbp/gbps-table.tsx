import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { gbps } from '../../api/data';

const GbpsTable = () => {
  return (
    <Table>
      <TableCaption>
        A list of your recent clients register gbp including.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Nombre de la empresa</TableHead>
          <TableHead>Tipo de negocio</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Categoria de negocio</TableHead>
          <TableHead>Areas de servicio</TableHead>
          <TableHead>Numero de telefono</TableHead>
          <TableHead>Sitio web</TableHead>
          <TableHead>Pais</TableHead>
          <TableHead>Ciudad</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Direccion</TableHead>
          <TableHead>Codigo postal</TableHead>
          <TableHead>Servicios Adicionales</TableHead>
          <TableHead>Horarios</TableHead>
          <TableHead>Descripcion Larga</TableHead>
          <TableHead>Pinterest</TableHead>
          <TableHead>Tik Tok</TableHead>
          <TableHead>Linkedin</TableHead>
          <TableHead>Instagram</TableHead>
          <TableHead>Facebook</TableHead>
          <TableHead>Twitter</TableHead>
          <TableHead>Youtube</TableHead>
          <TableHead>Descripcion corta</TableHead>
          <TableHead>Opiniones de clientes</TableHead>
          <TableHead>Propiedades destacadas</TableHead>
          <TableHead>Contactos</TableHead>
          <TableHead>Agencias relacionadas</TableHead>
          <TableHead>Metodos de pago</TableHead>
          <TableHead>Hashtags</TableHead>
          <TableHead>Palabras clave</TableHead>
          <TableHead>Slogan</TableHead>
          <TableHead>Fecha de inicio</TableHead>
          <TableHead>Certificacion</TableHead>
          <TableHead>Posicion</TableHead>
          <TableHead>Descripcion</TableHead>
          <TableHead>Fecha de creacion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gbps.map((gbp, index) => (
          <TableRow key={index}>
            <TableCell>{gbp.clientId}</TableCell>
            <TableCell>{gbp.companyName}</TableCell>
            <TableCell>{gbp.bussinessType}</TableCell>
            <TableCell>{gbp.email}</TableCell>
            <TableCell>{gbp.bussinessCategory}</TableCell>
            <TableCell>{gbp.servicesArea}</TableCell>
            <TableCell>{gbp.phoneNumber}</TableCell>
            <TableCell>{gbp.website}</TableCell>
            <TableCell>{gbp.country}</TableCell>
            <TableCell>{gbp.city}</TableCell>
            <TableCell>{gbp.state}</TableCell>
            <TableCell>{gbp.address}</TableCell>
            <TableCell>{gbp.postalCode}</TableCell>
            <TableCell>{gbp.additionalServices}</TableCell>
            <TableCell>{gbp.schedules}</TableCell>
            <TableCell>{gbp.largeDescription}</TableCell>
            <TableCell>{gbp.pinterest}</TableCell>
            <TableCell>{gbp.tiktok}</TableCell>
            <TableCell>{gbp.linkedin}</TableCell>
            <TableCell>{gbp.instagram}</TableCell>
            <TableCell>{gbp.facebook}</TableCell>
            <TableCell>{gbp.twitter}</TableCell>
            <TableCell>{gbp.youtube}</TableCell>
            <TableCell>{gbp.shortDescription}</TableCell>
            <TableCell>{gbp.customersOpinions}</TableCell>
            <TableCell>{gbp.featuredProperties}</TableCell>
            <TableCell>{gbp.appointmentsContacts}</TableCell>
            <TableCell>{gbp.relatedAgencies}</TableCell>
            <TableCell>{gbp.paymentMethods}</TableCell>
            <TableCell>{gbp.hashtags}</TableCell>
            <TableCell>{gbp.keywords}</TableCell>
            <TableCell>{gbp.slongan}</TableCell>
            <TableCell>{gbp.startOperations}</TableCell>
            <TableCell>{gbp.certification}</TableCell>
            <TableCell>{gbp.positions}</TableCell>
            <TableCell>{gbp.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GbpsTable;
