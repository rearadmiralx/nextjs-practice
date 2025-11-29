export default async function ReviewPage({ params, }: {
    params: Promise<{ productId: string, reviewId: string }>;
}) {
    const reviewId = (await params).reviewId
    const productId = (await params).productId

    return (
        <div>
            <h1>Product ID: {productId}</h1>
            <h1>Review ID: {reviewId}</h1>
        </div>
    );
}
