export default async function ProductPage({params}: {params: Promise<{ productId: string}>;}){
    const {productId} = await params;
    return (
      <div>
          <h1 className="mt-10 text-bold">Product Id: {productId}</h1>
      </div>
    );
}