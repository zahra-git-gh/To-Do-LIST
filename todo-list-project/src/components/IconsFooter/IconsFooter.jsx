import { Star } from "../Star/Star";
import "./IconsFooter.css";
export function IconsFooter({ isToday }) {
  return (
    <div className="flex gap-x-2">
      <Star isImportant={false} isToday={isToday} />
      <div
        style={{ backgroundColor: isToday && "white"}}
        className="trash w-5 h-5 bg-slate-600 dark:bg-slate-400 "
      ></div>
      <div
        style={{ backgroundColor: isToday && "white"}}
        className="details w-5 h-5 bg-slate-600 dark:bg-slate-400"
      ></div>
    </div>
  );
}
