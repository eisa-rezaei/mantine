'use server';

import { redirect } from 'next/navigation';
import crypto from 'crypto';
import axios from 'axios';
import { getToken } from '@/tools/getToken';
import { DUMProduct } from '@/types/products.model';

export const getProducts = async (formData: FormData | Record<string, any>) => {
  let params: Record<string, any> | FormData = formData;
  if (formData instanceof FormData) {
    params = Object.fromEntries(formData?.entries());
  }
  const res = await axios.get<{ products: DUMProduct[] }>(
    'https://dummyjson.com/products/search?dealy=5000',
    {
      params,
    }
  );

  //   console.log(data);

  return res.data.products;
};

export const testReq = async (formData: FormData) => {
  // console.log(await getToken());

  const data = Object.fromEntries(formData.entries());
  const res = await axios.post<{ data: any }>('https://httpbin.org/post', data);

  //   console.log(data);

  return res.data;
};

export async function searchProducts(formData: FormData) {
  'use server';

  // Build a URLSearchParams object from FormData
  const params = new URLSearchParams();

  // Iterate over all entries in the FormData
  formData.forEach((value, key) => {
    if (value !== null && value !== undefined) {
      params.append(key, value.toString());
    }
  });

  // Redirect to /actions with all query parameters
  redirect(`/actions?${params.toString()}`);
}
