import "./Star.css";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../redux/todos.slice";
export function Star({ isImportant, isToday, id }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  return (
    <>
      <div
        onClick={() => {
          dispatch(
            editTodo({ id: id, data: { isImportant: !isImportant }, token })
          );
        }}
        style={{
          backgroundColor: isImportant ? "red" : isToday && "white",
        }}
        className={`${
          isImportant ? "star" : "star-solid"
        } bg-slate-600 dark:bg-slate-400 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer`}
      ></div>
    </>
  );
}
