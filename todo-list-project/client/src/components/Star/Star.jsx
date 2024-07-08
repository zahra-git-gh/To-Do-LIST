import "./Star.css";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/todos.slice";
export function Star({ isImportant, isToday, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          dispatch(updateTodo({ id, isImportant: !isImportant }));
        }}
        style={{
          backgroundColor: isImportant ? "red" : isToday && "white",
        }}
        className={`${
          isImportant ? "star" : "star-solid"
        } bg-slate-600 dark:bg-slate-400 w-4 h-4 sm:w-5 sm:h-5`}
      ></div>
    </>
  );
}
