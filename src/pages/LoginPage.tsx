import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signin } from "../api/user";
import { UserType } from "../type/UserType";
import { authenticated } from "../utils/localStorage";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserType> = async (data) => {
    const { data: user } = await signin(data);
    console.log(user);
    
    authenticated(user, () => {
      navigate("/");
    });
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="text" className="form-control" {...register("email")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="text"
            className="form-control"
            {...register("password")}
          />
        </div>
        <button className="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginPage;
