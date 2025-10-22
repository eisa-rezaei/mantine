// 'use client';

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { DUMProduct } from '@/types/products.model';
// import { getProducts, testReq } from './actions';

// const Actions = () => {
//   const [data, setData] = useState<DUMProduct[]>([]);
//   const getProductsClient = async (e: FormData) => {
//     try {
//       const res = await getProducts(e);
//       console.log(res);
//       setData(res);
//       toast.success('oh wow');
//     } catch (error) {
//       toast.error('oh no');
//     }
//   };

//   const testReqClient = async (e: FormData) => {
//     try {
//       const res = await testReq(e);
//       console.log(res);
//       toast.success('oh wow');
//     } catch (error) {
//       toast.error('oh no');
//     }
//   };
//   return (
//     <div className="text-center bg-blue-500 h-screen overflow-auto flex flex-col items-center justify-center">
//       <div>
//         products
//         <form action={getProductsClient}>
//           <input name="q" className="bg-white text-black" />
//           <button
//             type="submit"
//             className="cursor-pointer bg-red-500 text-white p-2 px-5 rounded-md mt-2"
//           >
//             جستجو
//           </button>
//         </form>
//       </div>
//       <div>
//         test
//         <form action={testReqClient}>
//           <input name="q" className="bg-white text-black" />
//           <button
//             type="submit"
//             className="cursor-pointer bg-red-500 text-white p-2 px-5 rounded-md mt-2"
//           >
//             جستجو
//           </button>
//         </form>
//       </div>

//       <ul className=" text-neutral-950 flex flex-wrap h-auto gap-2.5">
//         {data.map((i) => (
//           <li className=" flex flex-col items-center justify-start bg-white" key={i.id}>
//             <img
//               src={i?.thumbnail}
//               alt={i?.brand}
//               width={150}
//               height={150}
//               className="object-cover"
//             />
//             <div>{i?.brand || 'no brand'}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Actions;

import { Suspense } from 'react';
import Form from './component/Form';
import ProductsList from './component/List';

export default async function Page(props: { params: Promise<any>; searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;

  return (
    <div>
      <Suspense
        fallback={
          <div className="min-h-[350px] w-full animate-pulse bg-gray-200">Loading products...</div>
        }
      >
        <ProductsList queries={searchParams} />
      </Suspense>

      <Form defaultValue={searchParams.q} />
    </div>
  );
}
