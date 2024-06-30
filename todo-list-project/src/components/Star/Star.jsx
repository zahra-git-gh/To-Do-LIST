import "./Star.css";
export function Star({ isImportant, isToday }) {
  return (
    <>
      <div
        style={{
          backgroundColor: isImportant ? "red" : isToday && "white",
        }}
        className={`${isImportant ? "star" : "star-solid"} bg-slate-600 dark:bg-slate-400 w-5 h-5`}
      ></div>
    </>
  );
}
