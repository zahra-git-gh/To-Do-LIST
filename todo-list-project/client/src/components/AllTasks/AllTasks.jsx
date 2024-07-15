import { useDispatch, useSelector } from "react-redux";
import { ListStylelSelect } from "../ListStyle&Select/ListSttyle&Select";
import { ParentTaskCards } from "../ParentTaskCards/ParentTaskCards";
import { useEffect } from "react";
import { fetchTodos } from "../../redux/todos.slice";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export function AllTasks() {
  const isList = useSelector((state) => state.todo.isList);
  const token = useSelector((state) => state.user.token);
  const todos = useSelector((state) => state.todo.todos);
  const isLoading = useSelector((state) => state.todo.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const start = async () => {
      dispatch(fetchTodos(token));
    };
    start();
  }, []);
  return (
    <section className="w-full">
      <div className="w-full my-5">
        <h1 className="text-center text-lg md:text-2xl sm:text-left font-semibold text-slate-600 dark:text-slate-200">
          <LoadingSpinner isLoading={isLoading} />
          {!isLoading && `All tasks (${todos.length} tasks)`}
        </h1>
      </div>
      <ListStylelSelect />
      <ParentTaskCards isList={isList} />
    </section>
  );
}
