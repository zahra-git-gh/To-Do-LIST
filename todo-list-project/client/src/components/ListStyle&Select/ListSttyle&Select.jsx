import { SortBySelect } from "../SortBySelect/SortBySelect";
import "./ListStyle&Select.css";
import { useDispatch, useSelector } from "react-redux";
import { cardStyle, listStyle } from "../../redux/todos.slice";
export function ListStylelSelect() {
  const isList = useSelector((state) => state.todo.isList);
  const dispatch = useDispatch();
  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex justify-start gap-x-3">
        <button
          style={{ backgroundColor: isList === "true" && "blueviolet" }}
          onClick={() => {
            dispatch(listStyle());
            localStorage.setItem("isList", true);
          }}
          className="list w-6 h-6 bg-slate-400"
        ></button>
        <button
          style={{ backgroundColor: isList !== "true" && "blueviolet" }}
          onClick={() => {
            dispatch(cardStyle());
            localStorage.setItem("isList", false);
          }}
          className="card w-6 h-6 bg-slate-400"
        ></button>
      </div>
      <div>
        <SortBySelect />
      </div>
    </section>
  );
}
