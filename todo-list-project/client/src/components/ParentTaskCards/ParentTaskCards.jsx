import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { NewTaskCard } from "../Add-new-task-card/NewTaskCard";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";
import { todayTodos } from "../../utils/todayTodos";
export function ParentTaskCards({ isList, todoLength }) {
  //get all data of todos and render cards
  const todos = useSelector((state) => state.todo.todos);
  //filter cards with value search input all
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q");
  const filterTodos = todos.filter((todo) => todo.title.includes(searchValue));
  const sortBySelect = useSelector((state) => state.todo.sortBy);
  // const [todosRoute, setTodosRoute]=useState(todos)
  let todosRoute = [];
  const { pathname, state: todo } = useLocation();
  const { dirId } = useParams();
  //get todos for today
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const today1 = Date.parse(formattedDate);
  // todayTodos(today1, todos)
  if (pathname === "/") {
    todosRoute = [...todos];
    todoLength(todosRoute.length);
  } else if (pathname === "/today") {
    const { todayTodosArr } = todayTodos(today1, todos);
    todosRoute = [...todayTodosArr];
    todoLength(todosRoute.length);
  } else if (pathname === "/important") {
    todosRoute = [...todos].filter((todo) => todo.isImportant === true);
    todoLength(todosRoute.length);
  } else if (pathname === "/completed") {
    todosRoute = [...todos].filter((todo) => todo.isCompleted === true);
    todoLength(todosRoute.length);
  } else if (pathname === "/uncompleted") {
    todosRoute = [...todos].filter((todo) => todo.isCompleted === false);
    todoLength(todosRoute.length);
  } else if (pathname.includes("/task")) {
    todosRoute = [todo];
    todoLength(todosRoute.length);
  } else if (pathname.includes("/directory")) {
    todosRoute = [...todos].filter((todo) => todo.directory === dirId);
    todoLength(todosRoute.length);
  } else if (pathname.includes("result")) {
    todosRoute = [...filterTodos];
    todoLength(todosRoute.length);
  } else {
    //not found
    //navigate to not found page
  }
  console.log(pathname); // /routename

  function sortArray(sortBy) {
    if (sortBy === "Uncompleted first") {
      const todos = [...todosRoute].sort((a, b) => {
        return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
      });
      return todos;
    } else if (sortBy === "Completed first") {
      const todos = [...todosRoute].sort((a, b) => {
        return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? -1 : 1;
      });
      return todos;
    } else if (sortBy === "later first") {
      const todos = [...todosRoute].sort((a, b) => {
        return new Date(b.deadline) - new Date(a.deadline);
      });
      return todos;
    } else if (sortBy === "Earlier first") {
      const todos = [...todosRoute].sort((a, b) => {
        return new Date(a.deadline) - new Date(b.deadline);
      });
      return todos;
    } else if (sortBy === "Order added") {
      return [...todosRoute];
    } else {
      return [...todosRoute];
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
