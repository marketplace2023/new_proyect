import { FaHome, FaUsers } from 'react-icons/fa'; // Nuevos íconos de react-icons

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
      { title: 'Agents', path: '/profiles/agents' },
      { title: 'Website Brief', path: '/profiles/websites' },
    ],
  },
];
