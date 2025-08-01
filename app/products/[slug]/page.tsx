import { client } from 'lib/api/client';

import { WithParams } from '@types';

import { getProductBySlug } from '@api';

export async function generateStaticParams() {
    const products = await client.GET('/products');

    return (
        products.data?.data?.map(({ slug }) => ({
            slug,
        })) ?? []
    );
}

const ProductPage = async ({ params }: WithParams<{ slug: string }>) => {
    const { slug } = await params;

    const product = await getProductBySlug(slug);

    return <div>{product ? product.name : 'Not found'}</div>;
};

export default ProductPage;
