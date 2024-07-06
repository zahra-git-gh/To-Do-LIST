import { useDispatch } from "react-redux";
import { addSortBy } from "../../redux/todos.slice";

export function SortBySelect() {
  const options = [
    "Order added",
    "Earlier first",
    "later first",
    "Completed first",
    "Uncompleted first",
  ];
  const dispatch = useDispatch();
  function onChangeSelect(e) {
    const option = e.target.value;
    dispatch(addSortBy(option));
  }

  return (
    <select
      onChange={onChangeSelect}
      name="Sort By"
      id=""
      className="text-sm py-3 px-4 sm:text-sm text-slate-500 rounded-lg bg-slate-100 hover:outline hover:outline-2 hover:outline-blue-700 focus:outline focus:outline-2 focus:outline-blue-700 dark:bg-slate-800 dark:text-slate-100"
    >
      <option className="text-xs">Sort by</option>
      {options.map((option, i) => {
        return (
          <option value={option} key={i} className="text-xs">
            {option}
          </option>
        );
      })}
    </select>
  );
}
