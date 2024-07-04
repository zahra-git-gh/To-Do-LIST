import { useEffect, useState } from "react";
import "./Star.css";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/todos.slice";
export function Star({ isImportant, isToday, id }) {
  const [important, setIsImportant] = useState(isImportant);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTodo({ id, isImportant: important }));
  }, [important, dispatch, id]);
  return (
    <>
      <div
        onClick={() => {
          setIsImportant((i) => !i);
        }}
        style={{
          backgroundColor: important ? "red" : isToday && "white",
        }}
        className={`${
          important ? "star" : "star-solid"
        } bg-slate-600 dark:bg-slate-400 w-4 h-4 sm:w-5 sm:h-5`}
      ></div>
    </>
  );
}
