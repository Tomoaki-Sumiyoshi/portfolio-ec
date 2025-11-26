import type { Product } from '@/schemas/product';

export const mockProducts: Product[] = [
  {
    id: 'p-todo',
    name: 'TODOアプリ使用権',
    appKey: 'todo',
    price: 1200,
    imageUrl: '/file.svg',
    description: '軽量でサクサクなTODOアプリ',
  },
  {
    id: 'p-notes',
    name: 'ノートアプリ使用権',
    appKey: 'notes',
    price: 900,
    imageUrl: '/globe.svg',
    description: 'Markdown対応のノートアプリ',
  },
  {
    id: 'p-calendar',
    name: 'カレンダー使用権',
    appKey: 'calendar',
    price: 1500,
    imageUrl: '/window.svg',
    description: '予定管理カレンダー',
  },
];
