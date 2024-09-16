import { House, Rss, UsersRound } from 'lucide-react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <House color="black" size={24} />,
  },
  {
    title: 'Profiles',
    path: '/profiles',
    icon: <UsersRound color="black" size={24} />,
    submenu: true,
    subMenuItems: [
      { title: 'Clientes', path: '/profiles/clients' },
      { title: 'Gbp', path: '/profiles/gbp' },
      { title: 'Txt', path: '/profiles/txt' },
    ],
  },
  {
    title: 'Media',
    path: '/media',
    icon: <Rss color="black" size={24} />,
    submenu: true,
    subMenuItems: [
      { title: 'Posts', path: '/media/posts' },
      { title: 'Reviews', path: '/media/reviews' },
      { title: 'Notices', path: '/media/notices' },
    ],
  },
];
