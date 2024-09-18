export type Gbp = {
  id: number;
  attributes: {
    nombre_empresa: string;
    tipo_de_negocio: string;
    categoria_empresa: string;
    areas_servicio: [];
    numero_telefono: string;
    sitio_web: string;
    pais_region: string;
    direccion: string;
    ciudad: string;
    estado: string;
    codigo_postal: string;
    servicios_adicionales: string;
    horarios: [];
    descripcion_larga_empresa: string;
    pinterest: string;
    tiktok: string;
    twitter: string;
    youtube: string;
    facebook: string;
    instagram: string;
    Linkedin: string;
    descripcion_corta_empresa: string;
    opiniones_de_clientes: [];
    propiedades_destacadas: [];
    citas_y_contactos: [];
    agencias_relacionadas: [];
    metodos_de_pagos: [];
    hashtags: [];
    keywords: [];
    slogan: string;
    inicio_de_operaciones: string;
    certificaciones: string;
    posicion: string;
    descripción: string;
  };
};

export const fetchGbps = async (): Promise<Gbp[]> => {
  const response = await fetch('http://localhost:1337/api/gbps');
  const data = await response.json();
  return data.data;
};
