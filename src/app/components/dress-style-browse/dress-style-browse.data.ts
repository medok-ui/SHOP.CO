import { ICategory } from './dress-style-browse.interface';

export const categories: ICategory[] = [
  {
    id: 1,
    label: 'Casual',
    link: '/casual',
    width: '407px',
    height: '289px',
    img: '/assets/background-card/casual.png',
  },
  {
    id: 2,
    label: 'Formal',
    link: '/formal',
    width: '684px',
    height: '289px',
    img: '/assets/background-card/formal.png',
  },
  {
    id: 3,
    label: 'Party',
    link: '/party',
    width: '684px',
    height: '289px',
    img: '/assets/background-card/party.png',
  },
  {
    id: 4,
    label: 'Gym',
    link: '/gym',
    width: '407px',
    height: '289px',
    img: '/assets/background-card/gym.png',
  },
];
