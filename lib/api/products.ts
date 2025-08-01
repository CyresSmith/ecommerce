import { Product } from '../types/product';

const API_URL = process.env['NEXT_PUBLIC_STRAPI_API_URL'];

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${API_URL}/products?populate=*`);

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    const data = await res.json();
    return data.data;
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
    const res = await fetch(`${API_URL}/products?filters[slug][$eq]=${slug}&populate=*`);

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    const data = await res.json();
    return data.data[0];
}
