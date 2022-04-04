import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../api/categories";
// import { Categories } from "../../type/Categories";
type Categories = {
  _id: string,
  name: string,
}
type Inputs = {
  name: string;
  price: number;
  desc: string;
  category: string | number;
};
type ProductAddProps = {
  onAdd: (product: Inputs) => void;
};
// product
const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (dataInputs) => {
    props.onAdd(dataInputs);
    navigate("/admin/products");
  };
  // category
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await getAll();
      setCategories(data);
    }
    getCategories();
  }, []);

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Tên sản phẩm" /> <br />
        <input
          type="number"
          {...register("price")}
          placeholder="Giá sản phẩm"
        /> <br />
        <input
          type="text"
          {...register("desc")}
          placeholder="Chi tiết sản phẩm"
        /> <br />
        <select {...register("category")} >
          <option selected disabled>Chọn danh mục</option>
          {
            categories.map((item) => {
              return (
                <option key={item._id} value={item._id}>{item.name}</option>
              )
            })
          }
        </select> <br />
        <button>Thêm</button>
      </form>
    </div>
  );
};

export default ProductAdd;
