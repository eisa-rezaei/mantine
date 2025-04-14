// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { Welcome } from '../components/Welcome/Welcome';

import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const getData = async () => {
  const res = await axios.get('https://api.digikala.com/v1/best-selling/');
  const data = res.data;

  return {
    data,
    testRevalidate: Math.random(),
  };
};

export const revalidate = 10;

export default async function HomePage() {
  // console.log(data);
  const { data, testRevalidate } = await getData();
  return (
    <div className="max-w-screen">
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <span className=" text-yellow-200">{testRevalidate}</span>
      <ul className="flex flex-wrap gap-2">
        {data.data.products.map((item: any, index: number) => (
          <li key={index} className="w-full max-w-[32.5%]">
            <Link
              href={`/product/${item.id}`}
              className="w-full border-2 min-h-[200px] p-2 flex flex-col"
            >
              <Image
                src={item.images?.main.webp_url?.[0]}
                alt={item.title_fa}
                width={200}
                height={200}
              />
              <span>{item.title_fa}</span>
              <span className="text-red-300">{Math.floor(Math.random() * 1000)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
