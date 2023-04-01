import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useLogIn } from "../hooks/useLogin";
import ErrorMsg from "../components/shared/errorMsg";

//------------- schema -------------
const schema = yup
  .object({
    email: yup.string().email("Must be a valid email").required(),
    password: yup
      .string()
      .required()
      .min(6, "Password must be at least 6 characters."),
  })
  .required();

export default function logIn() {
  //------------- state -------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const { logIn, isLoading, error } = useLogIn();

  //------------- handlers -------------
  const onSubmit = async (data) => {
    console.log(data);

    await logIn(data);
    window.location.reload(false);
  };

  //------------- UI -------------
  return (
    <div className="container mx-auto">
      <div className="flex gap-10 mt-20">
        {/*------------- form inputs ------------- */}
        <div className="form w-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <div className=" text-center">
              <h1 className="text-4xl ">Welcome Back !</h1>
              <div className="mt-2 border-b-4 border-accent w-20"></div>

              <p className="mt-4 text-xl">Please fill your information</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="example@mail..com"
                className="input input-bordered w-full mt-8"
                {...register("email")}
              />
              {errors.email && <ErrorMsg errorMsg={errors.email?.message} />}
              <input
                placeholder="Password"
                type="password"
                className="input input-bordered w-full mt-4"
                {...register("password")}
              />
              {errors.password && (
                <ErrorMsg errorMsg={errors.password?.message} />
              )}
              {error && (
                <ErrorMsg errorMsg={"Email or Password is not valid"} />
              )}
              <div className=" flex justify-center items-center">
                <button
                  className="btn bg-accent hover:bg-secondary mt-10 w-4/5 flex justify-center items-center border-0"
                  disabled={isLoading}
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="m-4">
              <h1>
                New member ?
                <Link to="/register" className=" underline ml-2 ">
                  Create Account
                </Link>
              </h1>
            </div>
          </div>
        </div>

        {/*------------- form image -------------*/}
        <div className="form-img w-1/2 mt-20 mb-20">
          <div>
            <div
              style={{
                backgroundImage:
                  "url(" +
                  "https://i.pinimg.com/736x/49/49/af/4949af47402819af28d3d173a07fdb8d.jpg" +
                  ")",
                backgroundPosition: "center",
                // backgroundSize: "cover",
                height: "500px",
                border: "30px solid  rgba(255, 255, 255, 0)",
                borderRadius: "60px",
                boxShadow: "inset 0px 0px 0px 2px rgb(235, 195, 166)",
                boxSizing: "border-box",
              }}
              className="card  bg-base-100 shadow-xl  p-10 flex justify-end "
            >
              <div>
                <div
                  className="card-body bg-white p-4 mb-15  "
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <h2
                    style={{
                      borderRadius: "10px",
                    }}
                    className="card-title flex justify-center"
                  >
                    Explore your creativity
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
