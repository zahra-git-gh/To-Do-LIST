// import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export function LoginForm() {
  //   const dispatch = useDispatch();
  //react hook form for handle our form create task
  const {
    handleSubmit,
    // reset,
    // register,
    formState: { errors },
  } = useForm();
  //

  //helper text for show errors after inputs
  const helperText = {};
  //handle submit function form
  function submitCreateTaskForm(value) {
    console.log(value);
  }

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center py-4 items-center mt-11 lg:flex-row">
        <div className="w-full h-44 lg:h-screen max-w-sm  md:w-1/2 md:max-w-none bg-[url('./login-background.png')] bg-center bg-cover"></div>
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
          <form onSubmit={handleSubmit(submitCreateTaskForm)}>
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
              />
              {errors.title && (
                <div className="text-sm text-red-500 font-thin">
                  {helperText.title[errors.title.type]}
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
                className="bg-slate-100 dark:bg-slate-600 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                type="password"
                id="password"
              />
              {
                //helper text error
                <div className="text-sm text-red-500 font-thin"></div>
              }
            </div>

            <button
              type="submit"
              className="mt-7 bg-[#333d91] text-white w-full px-4 py-3 rounded-lg hover:bg-[#5163ae] text-xs sm:text-sm xl:text-base"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
