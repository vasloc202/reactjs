import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Categories } from '../../type/Categories'

type Inputs = {
    name: string
}
type CategoresAddProps = {
    onAddCate: (category: Categories) => void;
}

const CategoriesAdd = (props: CategoresAddProps) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (dataInputs) => {
        props.onAddCate(dataInputs);
        navigate("/admin/categories");
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <button>Thêm danh mục</button>
            </form>
        </div>
    )
}

export default CategoriesAdd