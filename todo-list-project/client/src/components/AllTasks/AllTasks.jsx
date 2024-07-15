import { useDispatch, useSelector } from "react-redux";
import { ListStylelSelect } from "../ListStyle&Select/ListSttyle&Select";
import { ParentTaskCards } from "../ParentTaskCards/ParentTaskCards";
import { useEffect } from "react";
import { fetchTodos } from "../../redux/todos.slice";

export function AllTasks() {
  const isList = useSelector((state) => state.todo.isList);
  const token = useSelector((state) => state.user.token);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos(token));
  }, [dispatch, token]);
  console.log(todos);
  return (
    <section className="w-full">
      <div className="w-full my-5">
        <h1 className="text-center text-lg md:text-2xl sm:text-left font-semibold text-slate-600 dark:text-slate-200">
          All tasks ({todos.length} tasks)
        </h1>
      </div>
      <ListStylelSelect />
      <ParentTaskCards isList={isList} />
    </section>
  );
}
