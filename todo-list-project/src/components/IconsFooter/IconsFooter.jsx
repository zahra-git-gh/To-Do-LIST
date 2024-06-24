import { Star } from "../Star/Star";
import "./IconsFooter.css";
export function IconsFooter({ isToday }) {
  return (
    <div className="flex gap-x-2">
      <Star isImportant={false} isToday={isToday} />
      <div
        style={{ backgroundColor: isToday ? "white" : "gray" }}
        className="trash w-5 h-5"
      ></div>
      <div
        style={{ backgroundColor: isToday ? "white" : "gray" }}
        className="details w-5 h-5"
      ></div>
    </div>
  );
}
