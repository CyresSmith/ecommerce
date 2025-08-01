import Image from 'next/image';

export default function ProductList({ products }: { products: any[] }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {products.map(product => (
                <div key={product.id} className="rounded border p-4">
                    {product.image.data && (
                        <Image
                            src={`${process.env['NEXT_PUBLIC_STRAPI_API_URL']}${product.image.data.url}`}
                            width={300}
                            height={300}
                            alt={product.name}
                        />
                    )}
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-700">${product.price.toFixed(2)}</p>
                    <button className="mt-2 rounded bg-blue-500 px-4 py-2 text-white">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}
