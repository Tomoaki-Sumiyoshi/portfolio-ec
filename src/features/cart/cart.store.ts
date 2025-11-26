'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartState } from './cart,types';

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (id) =>
        set((s) =>
          s.items.some((it) => it.id === id)
            ? s
            : { items: [...s.items, { id }] }
        ),
      remove: (id) =>
        set((s) => ({ items: s.items.filter((it) => it.id !== id) })),
      clear: () => set({ items: [] }),
      has: (id) => get().items.some((it) => it.id === id),
    }),
    { name: 'cart-v1' }
  )
);
