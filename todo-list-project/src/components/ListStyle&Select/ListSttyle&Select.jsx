import { SortBySelect } from "../SortBySelect/SortBySelect";
import "./ListStyle&Select.css";
export function ListStylelSelect() {
  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex justify-start gap-x-3">
        <button className="list w-6 h-6 bg-slate-400"></button>
        <button className="card w-6 h-6 bg-slate-400"></button>
      </div>
      <div>
        <SortBySelect />
      </div>
    </section>
  );
}
