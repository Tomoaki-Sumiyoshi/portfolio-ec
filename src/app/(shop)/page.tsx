import { ProductListSchema } from '@/schemas/product';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductModal } from '@/components/product/ProductModal';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return ProductListSchema.parse(data);
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main style={{ padding: 24 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 16,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}

        {/* クエリがあれば開く */}
        <ProductModal products={products} />
      </div>
    </main>
  );
}
