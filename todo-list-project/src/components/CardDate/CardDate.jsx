import "./CardDate.css";
export function CardDate({ isToday, date }) {
  return (
    <time
      style={{ color: isToday && "white" }}
      className="w-full flex gap-2 items-center mb-3 text-sm text-slate-600 dark:text-slate-400"
    >

        <div
          style={{ backgroundColor: isToday && "white" }}
          className="dateIcon bg-slate-600 dark:bg-slate-400 w-5 h-6"
        ></div>
        {date}
  
    </time>
  );
}
