import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../api/categories";
import { list } from "../api/product";
import Banner from "../components/Banner";
import { Categories } from "../type/Categories";
import { ProductType } from "../type/ProductType";

type HomePageProps = {
  product: ProductType[];
};

const HomePage = (props: HomePageProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(8);
  const [count, setCount] = useState<number>();

  // get all product
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list(page, perPage);
      setProducts(data[0].value);
      setCount(Math.ceil(data[1].value / perPage));
    };
    getProducts();
  }, [page]);
  // category
  const getCategories = async () => {
    const { data } = await getAll();
    setCategories(data);
  }
  useEffect(() => {
    getCategories();
  }, []);


  return (
    <>
      <div>
        <Banner />
      </div>
      <h2 className="h-20 w-full py-5 text-3xl font-extrabold tracking-tight text-gray-900 text-center">Sản phẩm</h2>
      <div className="container grid grid-cols-4 px-32">
        {products.map((item, index) => (
          <div className="" key={index}>
            <div className="max-w-2xl mx-auto lg:py-4 sm:px-6 lg:max-w-7xl lg:px-8 text-black">
              <div className="grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className="group w-64">
                  <div className="w-64 min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                  </div>
                  <div className="w-64 mt-4 block text-center">
                    <h3 className="text-2xl text-gray-700 ">
                      <Link to={`/products/${item._id}`}>
                        <span aria-hidden="true" className="inset-0" />
                        {item.name}
                      </Link>
                    </h3>
                  </div>
                  <div className="w-64 mt-2 text-center">
                    <p className="text-lg font-medium text-red-500">
                      {new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format(item.price)}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link to={`/products/${item._id}`} className="mt-4 text-sm text-gray-500">
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))
        }
      </div>
      <div className="flex justify-center  ">
        <button className="block p-4 bg-blue-500" onClick={() => {
          if (page != 1) {
            setPage(page - 1);
          } else {
            setPage(1);
          }
        }
        }>
          Giảm
        </button>
        <button className="block p-4 bg-blue-500" onClick={() => {
          if (count != page) {
            setPage(page + 1);
          } else {
            setPage(page);
          }
        }}>
          Tăng
        </button>
      </div>

    </>
  );
};

export default HomePage;
