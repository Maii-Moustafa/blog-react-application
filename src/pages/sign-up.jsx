import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";

import { useSignUp } from "../hooks/useSignup";

//schema
const schema = yup
  .object({
    firstName: yup
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(10, "Name has a maximum limit of 100 characters.")
      .required(),
    lastName: yup
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(10, "Name has a maximum limit of 100 characters.")
      .required(),
    age: yup
      .number("Must be a valid number")
      .integer()
      .min(18, "Age must be more than 18.")
      .required("Age is requred"),

    email: yup.string().email("Must be a valid email").required(),
    password: yup
      .string()
      .required()
      .min(6, "Password must be at least 6 characters."),
    confirmPassword: yup
      .string()
      .required()
      .min(6, "Password must be at least 6 characters."),
  })
  .required();

export default function SignUp() {
  //------------- state -------------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const { signUp, isLoading, error } = useSignUp();

  //------------- handlers -------------
  const onSubmit = async (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      toast("Password did not match .Please try again");
    } else {
      await signUp(data);
      navigate("/");
    }
  };

  //------------- UI -------------
  return (
    <div className="container mx-auto">
      <div className="flex gap-10 mt-20">
        {/*------------- form inputs ------------- */}
        <div className="form w-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className=" text-center">
              <h1 className="text-4xl ">Welcome !</h1>
              <div className="mt-2 border-b-4 border-accent w-20"></div>

              <p className="mt-4 text-xl">Please fill your information</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="First Name"
                className="input input-bordered w-full mt-6"
                {...register("firstName")}
              />

              {errors.firstName && (
                <ErrorMsg errorMsg={errors.firstName?.message} />
              )}

              <input
                placeholder="Last Name"
                className="input input-bordered w-full mt-4"
                {...register("lastName")}
              />
              {errors.lastName && (
                <ErrorMsg errorMsg={errors.lastName?.message} />
              )}

              <input
                placeholder="Age"
                className="input input-bordered w-full mt-4"
                {...register("age")}
              />
              {errors.age && <ErrorMsg errorMsg={errors.age?.message} />}

              <input
                placeholder="example@mail..com"
                className="input input-bordered w-full mt-4"
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
              <input
                placeholder="Confirm Password"
                type="password"
                className="input input-bordered w-full mt-4"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <ErrorMsg errorMsg={errors.confirmPassword?.message} />
              )}
              <div className=" flex justify-center items-center">
                <button
                  className="btn bg-accent hover:bg-secondary mt-10 w-4/5 flex justify-center items-center border-0"
                  disabled={isLoading}
                >
                  Sign Up
                </button>
              </div>
              {error && <ErrorMsg errorMsg={error} />}
            </form>
            <div className="m-4">
              <h1>
                Already a member ?{" "}
                <Link to="/login" className=" underline ml-2">
                  Log in
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
                  "https://pbs.twimg.com/media/FnNfxYtXgAACMyB.jpg:large" +
                  ")",
                backgroundPosition: "center",
                // backgroundSize: "cover",
                height: "700px",
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
