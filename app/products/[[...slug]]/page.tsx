import React from "react";

interface Props {
  params: { slug: string[] };
  searchParam: {
    sortOrder: string;
  };
}

const ProductPage = ({ params: { slug }, searchParam: { sortOrder }}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
