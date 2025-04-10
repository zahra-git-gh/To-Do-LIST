// import { useSearchParams } from "react-router-dom";
import { NewTaskCard } from "../Add-new-task-card/NewTaskCard";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";

export function ParentTaskCards({ isList, data }) {
  // const todos = useSelector((state) => state.todo.todos);

  const sortBySelect = useSelector((state) => state.todo.sortBy);

  function sortArray(sortBy) {
    if (sortBy === "Uncompleted first") {
      const todos = [...data].sort((a, b) => {
        return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
      });
      return todos;
    } else if (sortBy === "Completed first") {
      const todos = [...data].sort((a, b) => {
        return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? -1 : 1;
      });
      return todos;
    } else if (sortBy === "later first") {
      const todos = [...data].sort((a, b) => {
        return new Date(b.deadline) - new Date(a.deadline);
      });
      return todos;
    } else if (sortBy === "Earlier first") {
      const todos = [...data].sort((a, b) => {
        return new Date(a.deadline) - new Date(b.deadline);
      });
      return todos;
    } else if (sortBy === "Order added") {
      return [...data];
    } else {
      return [...data];
    }
  }
  const filterTodosSelect = sortArray(sortBySelect);
  return (
    <section
      className={`grid  ${
        isList
          ? "grid-cols-1 gap-y-4"
          : "grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-4 items-center sm:gap-4 xl:gap-6 "
      } w-full mt-4 flex justify-center`}
    >
      {filterTodosSelect.map((todo, i) => {
        return (
          <Card
            key={i}
            {...todo}
            isNew={i === 0 ? true : false}
            isList={isList}
          />
        );
      })}
      <NewTaskCard isList={isList} />
    </section>
  );
}
