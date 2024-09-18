import { FaHome, FaRss, FaUsers } from 'react-icons/fa'; // Nuevos íconos de react-icons

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome color="black" size={24} />, // Ícono de Home
  },
  {
    title: 'Profiles',
    path: '/profiles',
    icon: <FaUsers color="black" size={24} />, // Ícono de Usuarios
    submenu: true,
    subMenuItems: [
      { title: 'Clientes', path: '/profiles/clients' },
      { title: 'Gbp', path: '/profiles/gbp' },
      { title: 'Nap', path: '/profiles/nap' },
    ],
  },
  {
    title: 'Media',
    path: '/media',
    icon: <FaRss color="black" size={24} />, // Ícono de RSS para Media
    submenu: true,
    subMenuItems: [
      { title: 'Posts', path: '/media/posts' },
      { title: 'Reviews', path: '/media/reviews' },
      { title: 'Notices', path: '/media/notices' },
    ],
  },
];
