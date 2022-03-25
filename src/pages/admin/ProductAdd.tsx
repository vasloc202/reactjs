import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  price: number;
};
type ProductAddProps = {
  onAdd: (product: Inputs) => void;
};

const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (dataInputs) => {
    props.onAdd(dataInputs);
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Tên sản phẩm" />
        <input
          type="number"
          {...register("price")}
          placeholder="Giá sản phẩm"
        />
        <button>Thêm</button>
      </form>
    </div>
  );
};

export default ProductAdd;
