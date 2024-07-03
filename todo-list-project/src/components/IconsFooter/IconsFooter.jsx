import { useModal } from "../../hooks/ModalContext";
import { Star } from "../Star/Star";
import "./IconsFooter.css";
export function IconsFooter({ isToday }) {
  const { openModal } = useModal();
  return (
    <div className="flex gap-x-2">
      <Star isImportant={false} isToday={isToday} />
      <button
        onClick={() => openModal(4)}
        style={{ backgroundColor: isToday && "white" }}
        className="trash w-4 h-4 sm:w-5 sm:h-5 bg-slate-600 dark:bg-slate-400 "
      ></button>
      <button
        onClick={() => openModal(5)}
        style={{ backgroundColor: isToday && "white" }}
        className="details w-4 h-4 sm:w-5 sm:h-5 bg-slate-600 dark:bg-slate-400"
      ></button>
    </div>
  );
}
