export function SignUpHeader() {
  const today = new Date();
  const year = today.getFullYear();
  const day = today.getDate();
  return (
    <header className="w-full flex justify-center fixed top-0">
      <div>
        <h1 className="font-bold text-sm dark:text-white  text-slate-600 ">
          TO-DO LIST
        </h1>
        <p className="text-xs sm:text-sm xl:text-base text-slate-700 dark:text-slate-100">
          {`${year}, ${today.toLocaleString("default", { month: "long" })} ${day
            .toString()
            .padStart(2, "0")}`}
        </p>
      </div>
    </header>
  );
}
