import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../type/ProductType";
import { getOne } from "../api/product";
type ProductDetailProps = {
};
const ProductDetail = (props: ProductDetailProps) => {
  const [detailProduct, setDetailProduct] = useState<ProductType>();
  const [count, setCount] = useState<number>(1);
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
  // add to cart
  let cart: any = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart") || "");
  }
  const handleAddToCart = () => {
    const carts = {
      id: detailProduct?._id,
      name: detailProduct?.name,
      price: detailProduct?.price,
    };
    cart.push(carts);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // increase & deincrease product
  const pre = () => {
    setCount(count - 1);
  }
  const next = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a href="/products" className="mr-2 text-sm font-medium text-gray-900"> Product </a>
                  <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600"> {detailProduct?.name} </a>
              </li>
            </ol>
          </nav>
          {/* Image gallery */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
            </div>
          </div>
          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{detailProduct?.name}</h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{detailProduct?.price}</p>
              <div className="flex justify-center items-center py-5 w-full ">
                <button className="px-5 py-1 bg-[#b9b4c7]" onClick={() => pre()}>-</button>
                <input type="number" className="px-4 text-center" value={count} />
                <button className="px-5 py-1 bg-[#b9b4c7]" onClick={() => next()}>+</button>
              </div>

              <button onClick={() => handleAddToCart()} className="mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to cart</button>
            </div>
            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Details</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{detailProduct?.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ProductDetail;
