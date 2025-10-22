import { getProducts } from '../actions';

export default async function ProductsList({ queries }: { queries: Record<string, string> }) {
  const products = await getProducts(queries);

  if (!products.length) return <div className="text-center text-2xl">No products found</div>;
  return (
    <ul className="flex flex-wrap gap-3 text-black min-h-[350px]">
      {products.map((p: any) => (
        <li key={p.id} className="bg-white p-2 rounded">
          <img src={p.thumbnail} alt={p.brand} width={150} height={150} />
          <div>{p.brand || 'no brand'}</div>
        </li>
      ))}
    </ul>
  );
}
