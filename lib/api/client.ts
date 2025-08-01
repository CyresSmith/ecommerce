import createClient from 'openapi-fetch';
import qs from 'qs';

import { paths } from '@types';

const strapiUrl = process.env['NEXT_PUBLIC_STRAPI_API_URL'] || 'http://127.0.0.1:1337';

export const client = createClient<paths>({
    baseUrl: `${strapiUrl}/api`,
    headers: {
        Accept: 'application/json',
    },
    querySerializer(params) {
        return qs.stringify(params, {
            encodeValuesOnly: true,
        });
    },
});
