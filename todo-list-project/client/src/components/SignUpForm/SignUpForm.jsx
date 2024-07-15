import { useForm } from "react-hook-form";
import { registerUser } from "../../api/user.api";
import { useState } from "react";
import { AlertSignUp } from "../AlertSignUp/AlertSignUp";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
export function SignUpForm() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [isHide, setIsHide] = useState(true);
  const registerMessage =
    "Thanks for signing up. Your account has been created. Please check your email.";
  //react hook form for handle our form create task
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  //

  //helper text for show errors after inputs
  const helperText = {
    name: {
      required: "Name is required",
    },
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
  async function registerNewUser(value) {
    try {
      setIsHide(true);
      setIsError(false);
      setIsLoading(true);
      setAlertMessage("");
      await registerUser(value);
      setAlertMessage(registerMessage);
    } catch (error) {
      setAlertMessage(
        error.message.includes(1100)
          ? "Email already exists. please try another one."
          : error.message
      );
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsHide(false);
      reset();
    }
  }

  return (
    <section className="w-full relative h-full flex flex-col justify-start items-center">
      <AlertSignUp
        isSuccess={!isError}
        alertMessage={alertMessage}
        isHide={isHide}
      />
      <div className="w-full h-full flex justify-center py-4 items-center">
        <section className="w-11/12 mt-8 max-w-lg bg-slate-50 p-3 rounded-lg dark:bg-slate-900 ">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-lg font-semibold text-slate-500 dark:text-slate-200 lg:text-2xl">
              SignUp
            </h1>
          </div>
          <form onSubmit={handleSubmit(registerNewUser)}>
            <div className="flex flex-col gap-y-2 mt-5">
              <label
                className="text-xs sm:text-sm text-slate-500 xl:text-base"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="text-sm text-red-500 font-thin">
                  {helperText.name[errors.name.type]}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <label
                className="text-xs sm:text-sm text-slate-500 xl:text-base"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                })}
              />
              {errors.email && (
                <div className="text-sm text-red-500 font-thin">
                  {helperText.email[errors.email.type]}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-y-2 mt-5">
              <label
                className="text-xs sm:text-sm text-slate-500 xl:text-base"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
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
              <LoadingSpinner isLoading={isLoading}/>
              {!isLoading && "Submit"}
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}
