import Link from 'next/link';
import React from 'react';

export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.productsdetails}`,
    description: `this is the description of ${params.productsdetails}`,
  };
};

const ProductDetails = ({ params }) => {
  return (
    <>
      <div>Here is your product id : {params.productsdetails}</div>
      <Link href="/">Go to Home</Link>
    </>
  );
};

export default ProductDetails;
