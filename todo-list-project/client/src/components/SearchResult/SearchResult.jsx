import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export function SearchResult() {
  const todos = useSelector((state) => state.todo.todos);
  const searchValue = useSelector((state) => state.todo.searchTasks);
  const filterTodos = todos.filter((todo) => todo.title.includes(searchValue));
  const navigate = useNavigate();
  const [showSearchResult, setShowSearchResult] = useState(false);
  const searchResultRef = useRef(null);
  useEffect(() => {
    function handleClick(event) {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target)
      ) {
        setShowSearchResult(false);
      }
    }
    if (searchValue.length > 0) {
      setShowSearchResult(true);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [searchValue.length, searchResultRef]);
  //change deadline to yy/mm/dd structure
  function changeDeadline(date) {
    const newDate = new Date(date);
    let formattedDate = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  }
  return (
    <section
      ref={searchResultRef}
      className={`${!searchValue && "hidden"} ${
        !showSearchResult && "hidden"
      } w-full bg-slate-100 dark:dark:bg-slate-800 rounded-lg mt-2 md:max-w-xs absolute z-50 px-3 py-3`}
    >
      <ul>
        {filterTodos.length > 0 ? (
          filterTodos.map((todo, i) => {
            return (
              <li key={i}>
                <Link
                  state={todo}
                  to={`/task/${todo._id}`}
                  className="flex justify-between items-center  py-2 text-slate-600 text-xs hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200 sm:text-sm xl:text-base"
                >
                  <span>{todo.title}</span>
                  <span>{changeDeadline(todo.deadline)}</span>
                </Link>
              </li>
            );
          })
        ) : (
          <Link className="flex items-center py-2 text-slate-600 text-xs">
            <span>No tasks found</span>
          </Link>
        )}
      </ul>
      {filterTodos.length > 0 && (
        <button
          onClick={() => {
            navigate({ pathname: "/result", search: `q=${searchValue}` });
          }}
          className="btn bg-red-100 text-red-500 w-full  py-3 rounded-lg hover:bg-red-200 text-xs sm:text-sm xl:text-base dark:bg-slate-700 dark:text-slate-100 mt-2"
        >
          {`All result for "${searchValue}"`}
        </button>
      )}
    </section>
  );
}
