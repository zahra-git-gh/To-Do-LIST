import { useEffect, useState } from "react";
import "./CompleteBtn.css";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/todos.slice";
export function CompleteBtn({ isCompleted, id }) {
  const [completed, setCompleted] = useState(isCompleted);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTodo({ id, isCompleted: completed }));
  }, [dispatch, id, completed]);
  return (
    <button
      onClick={() => {
        setCompleted(!completed);
      }}
      style={{
        backgroundColor: completed ? "#a1ffb1" : "#fede4b",
        color: completed ? "#060a19" : "#994426",
      }}
      className="w-6 h-6 sm:w-max sm:h-7 sm:py-1 sm:px-2 rounded-full flex items-center mr-3"
    >
      <div className="hidden sm:block font-semibold">
        {completed ? "completed" : "uncompleted"}
      </div>
      {
        <div
          style={{}}
          className={`${
            completed ? "completed-sm" : "unCompleted-sm"
          }  w-4 h-4 m-auto sm:hidden`}
        ></div>
      }
    </button>
  );
}
