import Image from 'next/image';
import axios from 'axios';

const SingleProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const data = await axios.get(`https://api.digikala.com/fresh/v1/product/${id}/?_whid=29`);

  return (
    <div>
      <Image
        src={data.data?.data?.product?.images?.main.webp_url[0]}
        alt="image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default SingleProductPage;
