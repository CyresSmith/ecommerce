import { client } from 'lib/api/client';

import { ProductQuery } from '@types';

export const getProducts = async (query?: ProductQuery) => {
    const response = await client.GET('/products', {
        params: {
            query,
        },
    });

    return response.data?.data;
};

export const getProductBySlug = async (slug: string) => {
    const response = await client.GET('/products', {
        params: {
            query: {
                filters: {
                    slug: {
                        $eq: slug,
                    },
                },
                populate: '*',
            },
        },
    });
    return response.data?.data?.[0];
};
