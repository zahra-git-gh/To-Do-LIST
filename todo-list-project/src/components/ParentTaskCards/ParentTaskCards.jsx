import { NewTaskCard } from "../Add-new-task-card/NewTaskCard";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";
export function ParentTaskCards({ isList }) {
  //get all data of todos and render cards
  const todos = useSelector((state) => state.todo.todos);
  //filter cards with value search input
  const searchValue = useSelector((state) => state.todo.searchTasks);
  console.log(searchValue);
  const filterTodos = todos.filter((todo) => todo.title.includes(searchValue));
  return (
    <section
      className={`grid  ${
        isList
          ? "grid-cols-1 gap-y-4"
          : "grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-4 items-center sm:gap-4 xl:gap-6 "
      } w-full mt-4 flex justify-center`}
    >
      {filterTodos.map((todo, i) => {
        return (
          <Card
            key={todo.id}
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
