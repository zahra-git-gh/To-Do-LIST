import { useSelector } from "react-redux";
import { ListStylelSelect } from "../ListStyle&Select/ListSttyle&Select";
import { ParentTaskCards } from "../ParentTaskCards/ParentTaskCards";

export function AllTasks() {
  const isList = useSelector((state) => state.todo.isList);
  return (
    <section className="w-full">
      <div className="w-full my-5">
        <h1 className="text-center text-lg md:text-2xl sm:text-left font-semibold text-slate-600">
          All tasks (8 tasks)
        </h1>
      </div>
      <ListStylelSelect />
      <ParentTaskCards isList={isList} />
    </section>
  );
}
