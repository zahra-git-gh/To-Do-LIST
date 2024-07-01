
export function NewTaskCard({ isList }) {
  return (
    <section className="flex flex-col flex-1 items-end">

    <section
      className={`${isList && "w-full"} ${isList ? "h-24" : "h-56"} ${
        isList ? "flex-row" : "flex-col"
      } ${
        isList && ""
      } bg-inherit border-2 border-dashed border-slate-300 dark:hover:bg-slate-800/50 dark:border-slate-700 rounded-lg  hover:bg-slate-300 cursor-pointer mt-7 py-4 px-5 flex justify-center items-center w-full max-w-[250.78px] sm:max-w-[321.05px] group`}
    >
          <p className="text-slate-400 text-xs dark:text-slate-500 sm:text-base group-hover:text-slate-500 dark:group-hover:text-slate-300">
            Add new task
          </p>
    </section>
    </section>
  );
}
