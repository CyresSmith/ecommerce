import { components, operations } from './api.types';

export type ProductItem = components['schemas']['Product'];

export type ProductQuery = operations['get/products']['parameters']['query'];
