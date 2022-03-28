import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/user";
import { UserType } from "../type/UserType";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserType> = (data) => {
    signup(data);
    navigate("/signin");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
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
        <button className="btn btn-primary">Đăng ký</button>
      </form>
    </div>
  );
};

export default RegisterPage;
