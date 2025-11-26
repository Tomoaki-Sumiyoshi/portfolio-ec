'use client';
import { Modal, Text, Image } from '@mantine/core';
import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import type { Product } from '@/schemas/product';

export function ProductModal({ products }: { products: Product[] }) {
  const sp = useSearchParams();
  const router = useRouter();
  const id = sp.get('productId');
  const product = useMemo(
    () => products.find((p) => p.id === id),
    [id, products]
  );
  const opened = Boolean(id && product);

  return (
    <Modal
      opened={opened}
      onClose={() => router.push('/')}
      title={product?.name}
    >
      {product && (
        <>
          <Image src={product.imageUrl} alt={product.name} />
          <Text mt="sm">{product.price.toLocaleString()}円</Text>
          {product.description && <Text mt="sm">{product.description}</Text>}
        </>
      )}
    </Modal>
  );
}
