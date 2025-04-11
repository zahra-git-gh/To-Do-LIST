import { useModal } from "../../hooks/ModalContext";
import { Star } from "../Star/Star";
import { EllipsisVertical, Trash2 } from "lucide-react";
import "./IconsFooter.css";
export function IconsFooter({ isToday, isImportant, id }) {
  const { openModal, setDataID } = useModal();
  return (
    <div className="flex gap-x-2">
      <Star id={id} isImportant={isImportant} isToday={isToday} />
      <button
        onClick={() => {
          openModal(4);
          setDataID(id);
        }}
        style={{ color: isToday && "white" }}
        className=" w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-400 "
      >
        <Trash2 />
      </button>
      <button
        onClick={() => {
          openModal(5);
          setDataID(id);
        }}
        style={{ color: isToday && "white" }}
        className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-400"
      >
        <EllipsisVertical />
      </button>
    </div>
  );
}
