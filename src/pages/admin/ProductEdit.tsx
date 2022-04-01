import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getOne } from '../../api/product';
import { ProductType } from '../../type/ProductType';
type FormInputs = {
    name: string,
    price: number
}
type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getOne(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onUpdate(data);
        navigate("/admin/products");
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")}/> <br />
            <input type="number" {...register("price")} /> <br />
            <button className='btn btn-success'>Sửa sản phẩm</button>
        </form>
    </div>
  )
}

export default ProductEdit