'use client';

import { useFormStatus } from 'react-dom';

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="cursor-pointer bg-red-500 text-white p-2 px-5 rounded-md"
    >
      {pending ? 'درحال راسال' : 'جستجو'}
    </button>
  );
};

export default FormButton;
