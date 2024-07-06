import "./CompleteBtn.css";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/todos.slice";
export function CompleteBtn({ isCompleted, id }) {
  console.log('this is iscompleted in complete button', {id, isCompleted});
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(updateTodo({ id, isCompleted: !isCompleted }));
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
