import React, { Suspense, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mantine/core';

// export interface IUser {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// }

// export interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }

// export interface Geo {
//   lat: string;
//   lng: string;
// }

// export interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
// export interface IPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

export interface Root {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

const getSingleProduct = async (productId: number): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${productId}?delay=2000`);
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};
const getData = async (): Promise<Root> => {
  const response = await fetch(`https://dummyjson.com/products?delay=2000`);
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

const React19 = async (props: { params: Promise<any>; searchParams: Promise<any> }) => {
  const searchParams = await props.searchParams;

  //   const [currentProductNumber, setCurrentProductNumber] = useState(1);
  //   const [dataPromiseState, setDataPromiseState] = useState(() => getSingleProduct(1));

  return (
    <div className="bg-green-200 w-full h-full min-h-screen flex items-center justify-center relative">
      <Suspense fallback={<>loading...</>}>
        <DataRenderer productId={searchParams.productId} />
      </Suspense>
      <div className="fixed bottom-10 right-10 w-auto">
        <Link
          className="bg-blue-400 rounded-xl text-white uppercase p-2"
          href={`/react19?productId=${Number(searchParams.productId) + 1}`}
        >
          next Product Promise
        </Link>
      </div>
    </div>
  );
};

export default React19;

const DataRenderer = ({ productId }: { productId: number }) => {
  const data = use(getSingleProduct(productId));

  return (
    <div className="flex flex-col gap-3">
      <Image src={data.thumbnail} alt={data.brand} width={300} height={300} />
    </div>
  );
};
