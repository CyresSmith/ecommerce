import { getProducts } from '@api';

const ProductsPage = async () => {
    const products = await getProducts({
        populate: '*',
        'pagination[limit]': 10,
    });

    return (
        <div>
            {products?.length ? (
                <ul>
                    {products.map(({ name, id }) => (
                        <li key={id}>
                            <h2>{name}</h2>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>'Not found'</p>
            )}
        </div>
    );
};

export default ProductsPage;
