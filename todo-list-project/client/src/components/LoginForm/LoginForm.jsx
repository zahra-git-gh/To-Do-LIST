import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user.api";
import { AlertSignUp } from "../AlertSignUp/AlertSignUp";
import { useState } from "react";
import { setToken } from "../../redux/user.slice";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
// import './LoginForm.css';
export function LoginForm() {
  const dispatch = useDispatch();
  //react hook form for handle our form create task
  const [alertMessage, setAlertMessage] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  //

  //helper text for show errors after inputs
  const helperText = {
    email: {
      required: "Email is required",
      pattern: "Invalid email address",
    },
    password: {
      required: "Password is required",
      pattern:
        "Passwords must contain minimum eight characters, at least one letter and one number",
    },
  };
  //handle submit function form
  async function loginUserSubmit(value) {
    try {
      setIsHide(true);
      setIsLoading(true);
      const response = await loginUser(value);
      dispatch(setToken(response.token));
      localStorage.setItem("token", response.token);
      setIsSuccess(true);
      setAlertMessage("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      console.log(error.message);
      setAlertMessage(error.message);
      setIsSuccess(false);
    } finally {
      setIsHide(false);
      setIsLoading(false);
      reset();
    }
  }

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center py-4 items-center mt-11 lg:flex-row">
        <AlertSignUp
          isSuccess={isSuccess}
          isHide={isHide}
          alertMessage={alertMessage}
        />
        <div className="w-full h-44 lg:h-screen max-w-sm  md:w-1/2 md:max-w-none bg-[url('/login-background.png')] bg-center bg-cover"></div>
        <section className="w-11/12 relative  max-w-lg bg-slate-50 p-3  rounded-lg dark:bg-slate-800 ">
          <div className="w-1/2 bg-blue-800 py-3 px-2 rounded-l-lg absolute right-0">
            <h1 className="font-bold text-white text-sm sm:text-lg md:text-xl italic">
              Welcome back{" "}
            </h1>
          </div>
          <div className="flex w-full justify-between items-center mt-8">
            <h1 className="text-lg font-semibold text-slate-500 dark:text-slate-200 lg:text-2xl">
              Login
            </h1>
          </div>
          <form onSubmit={handleSubmit(loginUserSubmit)}>
            <div className="flex flex-col gap-y-2 mt-5">
              <label
                className="text-xs sm:text-sm text-slate-500 xl:text-base"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-slate-100 dark:bg-slate-600 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                })}
              />
              {
                //helper text error
                errors.email && (
                  <div className="text-sm text-red-500 font-thin">
                    {helperText.email[errors.email.type]}
                  </div>
                )
              }
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <label
                className="text-xs sm:text-sm text-slate-500 xl:text-base"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-slate-100 dark:bg-slate-600 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                })}
              />
              {
                //helper text error
                errors.password && (
                  <div className="text-sm text-red-500 font-thin">
                    {helperText.password[errors.password.type]}
                  </div>
                )
              }
            </div>

            <button
              type="submit"
              className="mt-7 bg-[#333d91] text-white w-full px-4 py-3 rounded-lg hover:bg-[#5163ae] text-xs sm:text-sm xl:text-base flex justify-center items-center"
              disabled={isLoading}
            >
              <LoadingSpinner isLoading={isLoading} />
              {!isLoading && "Submit"}
            </button>
            <div className="w-full flex justify-center">
              <Link to={"/signup"} className="text-[#333d91] text-center mt-4">
                Create Account
              </Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
