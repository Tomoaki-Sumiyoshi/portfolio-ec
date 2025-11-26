import { NextResponse } from 'next/server';
import { ProductListSchema } from '@/schemas/product';
import { mockProducts } from '@/mocks/products';

export async function GET() {
  const parsed = ProductListSchema.parse(mockProducts);
  return NextResponse.json(parsed);
}
