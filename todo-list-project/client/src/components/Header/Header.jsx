import { useSelector } from "react-redux";
import { useModal } from "../../hooks/ModalContext";
import { NewTaskBtn } from "../Add-new-task-button/NewTaskBtn";
import { Menu } from "../Menu/Menu";
import { SearchInput } from "../Search-Input/SearchInput";
import "./Header.css";
import { UncompletedTaskToday } from "../UncompletedTaskToday/UncompletedTaskToday";
import { todayTodos } from "../../utils/todayTodos";
export function Header() {
  const { openModal: secondModal } = useModal();
  const todos = useSelector((state) => state.todo.todos);
  const user = useSelector((state) => state.user.userData);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const today1 = Date.parse(formattedDate);

  return (
    <header className="w-full grid grid-cols-3 grid-flow-row-dense grid-rows-2 gap-y-3 md:flex md:justify-between items-center">
      <div className="mr-8 xl:mr-0">
        <Menu />
      </div>
      <div className="flex-1 col-span-3 md:mr-8 row-start-2">
        <SearchInput />
      </div>
      <div className="place-self-center">
        <h1 className="font-bold text-sm dark:text-white xl:hidden text-slate-600">
          TO-DO LIST
        </h1>
        <p className="text-xs sm:text-sm xl:text-base text-slate-700 dark:text-slate-100">
          {`${year}, ${today.toLocaleString("default", { month: "long" })} ${day
            .toString()
            .padStart(2, "0")}`}
        </p>
      </div>
      <div className=" flex flex-row items-center gap-4 place-self-end justify-end flex-1">
        <div className="relative w-max">
          {todayTodos(today1, todos).todayTodosUncompleted.length > 0 && (
            <>
              <div className="w-2 h-2  bg-red-500 rounded-full absolute  -right-1 -top-0"></div>
              <div className="w-2 h-2 animate-ping  bg-red-500 rounded-full absolute  -right-1 -top-0"></div>
            </>
          )}
          <div
            onClick={() => secondModal(9)}
            className="cursor-pointer bell w-5 h-5 bg-blue-700 md:w-6 md:h-6"
          ></div>
          <UncompletedTaskToday
            data={todayTodos(today1, todos).todayTodosUncompleted}
            modalIDD={9}
          />
        </div>
        <div className="hidden sm:block">
          <NewTaskBtn />
        </div>
        <div
          onClick={() => secondModal(2)}
          className={`cursor-pointer xl:hidden w-10 h-10 rounded-full bg-[url('${user.profile}')] bg-center bg-cover`}
        ></div>
      </div>
    </header>
  );
}
