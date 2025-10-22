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

import React, { Suspense } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getProducts } from '../actions';

export async function searchProducts(formData: FormData) {
  'use server';
  const q = formData.get('q')?.toString().trim() || '';
  redirect(`/actions/${q ? `${encodeURIComponent(q)}` : ''}`);
}

export default async function Page(props: { params: Promise<any>; searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  console.log(params, searchParams);

  const initialForm = new FormData();
  const query = params?.q || 'headphones';
  initialForm.append('q', query);

  const products = await getProducts(initialForm);

  return (
    <div>
      <Suspense fallback={<div>Loading... from suspense</div>}>
        {/* ✅ Server-rendered product list */}
        <ul className="text-neutral-950 flex flex-wrap h-auto gap-2.5">
          {products.map((i) => (
            <li className="flex flex-col items-center bg-white" key={i.id}>
              <img
                src={i.thumbnail}
                alt={i.brand}
                width={150}
                height={150}
                className="object-cover"
              />
              <div>{i.brand || 'no brand'}</div>
            </li>
          ))}
        </ul>
      </Suspense>

      {/* ✅ Server Action Form */}
      <form action={searchProducts} className="mt-4 flex gap-2">
        <input
          name="q"
          defaultValue={query}
          placeholder="Search..."
          className="bg-white text-black p-2"
        />
        <button type="submit" className="cursor-pointer bg-red-500 text-white p-2 px-5 rounded-md">
          جستجو
        </button>
      </form>
    </div>
  );
}
