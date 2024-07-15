import "./CompleteBtn.css";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../redux/todos.slice";
export function CompleteBtn({ isCompleted, id }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  return (
    <button
      onClick={() => {
        dispatch(editTodo({ id, data: { isCompleted: !isCompleted }, token }));
      }}
      style={{
        backgroundColor: isCompleted ? "#a1ffb1" : "#fede4b",
        color: isCompleted ? "#060a19" : "#994426",
      }}
      className="w-6 h-6 sm:w-max sm:h-7 sm:py-1 sm:px-2 rounded-full flex items-center mr-3"
    >
      <div className="hidden sm:block font-semibold">
        {isCompleted ? "completed" : "uncompleted"}
      </div>
      {
        <div
          style={{}}
          className={`${
            isCompleted ? "completed-sm" : "unCompleted-sm"
          }  w-4 h-4 m-auto sm:hidden`}
        ></div>
      }
    </button>
  );
}
