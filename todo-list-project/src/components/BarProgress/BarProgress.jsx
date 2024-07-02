export function BarProgress({ allTasks, completedTasks, title }) {
  const width = (100 / allTasks) * completedTasks;
  console.log(width);
  return (
    <section className="mt-6">
      <div className="flex justify-between mb-2">
        <p className="text-xs sm:text-sm xl:text-base text-slate-500 dark:text-slate-400 ">
          {title}
        </p>
        <p className="text-xs sm:text-sm xl:text-base text-slate-500 dark:text-slate-400 ">{`${completedTasks}/${allTasks}`}</p>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div
          style={{ width: `${width.toFixed(3)}%` }}
          className="bg-blue-700 overflow-hidden h-2"
        ></div>
      </div>
    </section>
  );
}
