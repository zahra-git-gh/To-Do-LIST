import { Menu } from "../Menu/Menu";
import "./Header.css";
export function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center">
      <Menu />
      <div>
        <h1 className="font-bold text-sm dark:text-white">TO-DO LIST</h1>
        <p className="text-xs text-slate-700 dark:text-slate-100">2024, Jun 30</p>
      </div>
      <div className=" flex flex-row items-center gap-3">
        <div className="relative w-max">
          <div className="w-2 h-2 bg-red-500 rounded-full absolute  -right-1 -top-0"></div>
          <div className="bell w-5 h-5 bg-blue-700"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-[url('./avatar-1.jpg')] bg-center bg-cover"></div>
      </div>
    </header>
  );
}
