import { useEffect, useState } from "react";
import "./SearchInput.css";
import { useDispatch } from "react-redux";
import { addsearchTasks } from "../../redux/todos.slice";
export function SearchInput() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const stop = setTimeout(() => {
      dispatch(addsearchTasks(query));
    }, 2000);
    return () => clearTimeout(stop);
  }, [query, dispatch]);
  function handleSearch(e) {
    setQuery(e.target.value);
  }
  return (
    <form className="w-full md:max-w-xs relative transition-all duration-300 ">
      <input
        onChange={handleSearch}
        type="search"
        className="focus:outline focus:outline-2 focus:outline-blue-600 bg-slate-100 rounded-lg w-full  px-4 py-2 hover:outline hover:outline-2 hover:outline-blue-600 placeholder:text-sm sm:placeholder:text-base sm:py-3 dark:dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
        placeholder="Search task"
      />
      <div className="w-4 h-4 bg-slate-400 searchIcon absolute right-5 bottom-1/3 sm:w-5 sm:h-5"></div>
    </form>
  );
}
