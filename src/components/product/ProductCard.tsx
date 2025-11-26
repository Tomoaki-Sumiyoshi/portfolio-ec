'use client';
import { Card, Button, Image, Text } from '@mantine/core';
import type { Product } from '@/schemas/product';
import styles from './ProductCard.module.scss';
import { useRouter } from 'next/navigation';
import { useCart } from '@/features/cart/cart.store';

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const has = useCart((s) => s.has(product.id));
  const add = useCart((s) => s.add);
  return (
    <Card shadow="sm" withBorder className={styles.card}>
      <Card.Section>
        <Image
          src={product.imageUrl}
          alt={product.name}
          className={styles.image}
        />
      </Card.Section>
      <Text mt="sm" fw={600}>
        {product.name}
      </Text>
      <Text c="dimmed">{product.price.toLocaleString()}円</Text>
      <div className={styles.footer}>
        <Button
          variant="light"
          onClick={() => router.push(`/?productId=${product.id}`)}
        >
          詳細
        </Button>
        <Button disabled={has} onClick={() => add(product.id)}>
          {has ? '追加済み' : 'カートに入れる'}
        </Button>
      </div>
    </Card>
  );
}
