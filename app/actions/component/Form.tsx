import React from 'react';
import { searchProducts } from '../actions';
import FormButton from './Button';

const Form = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <form action={searchProducts} className="mt-4 flex gap-2">
      <input
        name="q"
        defaultValue={defaultValue}
        placeholder="Search..."
        className="bg-white text-black p-2 border rounded-sm"
      />
      <FormButton />
    </form>
  );
};

export default Form;
