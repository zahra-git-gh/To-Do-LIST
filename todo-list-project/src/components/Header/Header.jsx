import { NewTaskBtn } from "../Add-new-task-button/NewTaskBtn";
import { Menu } from "../Menu/Menu";
import { SearchInput } from "../Search-Input/SearchInput";
import "./Header.css";
export function Header() {
  return (
    <header className="w-full grid grid-cols-3 grid-flow-row-dense grid-rows-2 gap-y-3 md:flex md:justify-between items-center">
      <div className="mr-8">
      <Menu />
      </div>
      <div className="flex-1 col-span-3 md:mr-8">
        <SearchInput />
      </div>
      <div className="place-self-center">
        <h1 className="font-bold text-sm dark:text-white xl:hidden">TO-DO LIST</h1>
        <p className="text-xs sm:text-sm xl:text-base text-slate-700 dark:text-slate-100">
          2024, Jun 30
        </p>
      </div>
      <div className=" flex flex-row items-center gap-4 place-self-end justify-end flex-1">
        <div className="relative w-max">
          <div className="w-2 h-2 bg-red-500 rounded-full absolute  -right-1 -top-0"></div>
          <div className=" bell w-5 h-5 bg-blue-700 md:w-6 md:h-6"></div>
        </div>
        <div className="hidden sm:block">
          <NewTaskBtn />
        </div>
        <div className="xl:hidden w-10 h-10 rounded-full bg-[url('./avatar-1.jpg')] bg-center bg-cover"></div>
      </div>
    </header>
  );
}
