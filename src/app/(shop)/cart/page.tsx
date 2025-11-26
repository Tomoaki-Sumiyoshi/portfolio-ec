'use client';
import Link from 'next/link';
import { Button, List, Text } from '@mantine/core';
import { useCart } from '@/features/cart/cart.store';
import { mockProducts } from '@/mocks/products';

export default function CartPage() {
  const { items, remove } = useCart();
  const products = mockProducts.filter((p) => items.some((i) => i.id === p.id));
  const total = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <main style={{ padding: 24 }}>
      <Text size="lg" fw={700}>
        カート
      </Text>
      {products.length === 0 ? (
        <Text mt="sm">カートは空です</Text>
      ) : (
        <>
          <List mt="sm" spacing="sm">
            {products.map((p) => (
              <List.Item key={p.id}>
                {p.name}-{p.price.toLocaleString()}円
                <Button
                  ml="sm"
                  size="xs"
                  variant="subtle"
                  onClick={() => remove(p.id)}
                >
                  削除
                </Button>
              </List.Item>
            ))}
          </List>
          <Text mt="md">合計: {total.toLocaleString()}円</Text>
          <Button component={Link} href="/checkout" mt="md">
            決済へ進む
          </Button>
        </>
      )}
    </main>
  );
}
