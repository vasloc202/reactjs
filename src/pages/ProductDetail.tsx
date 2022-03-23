import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../type/ProductType";
import { getOne } from "../api/product";
type ProductDetailProps = {};
const ProductDetail = (props: ProductDetailProps) => {
  const [detailProduct, setDetailProduct] = useState<ProductType>();
  const { id } = useParams();
  // call api
  const handleProduct = async () => {
    const response = await getOne(id);
    setDetailProduct(response.data);
  };
  // chạy useEffect trước khi call api
  useEffect(() => {
    // kiểm tra xem có id không mới gọi thằng call api
    if (id) {
      handleProduct();
    }
  }, [id]);
  return (
    <div>
      <h1>{detailProduct?.name}</h1>
      <h1>{detailProduct?.price}</h1>
    </div>
  );
};

export default ProductDetail;
