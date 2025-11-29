export default async function ProductPage({ params, }: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId
    return (
        <div>
            <h1>Product ID: {productId}</h1>
        </div>
    );
}
