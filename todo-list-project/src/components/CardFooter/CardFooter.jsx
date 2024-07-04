import { CompleteBtn } from "../CompleteBtn.jsx/CompleteBtn";
import { IconsFooter } from "../IconsFooter/IconsFooter";
import "./CardFooter.css";
export function CardFooter({ isToday, isList, isImportant, isCompleted, id }) {
  return (
    <div
      className={`w-full flex justify-between items-center  ${
        !isList &&
        "border-t-2 border-dashed border-slate-400 border-opacity-50 pt-4"
      } `}
    >
      <CompleteBtn isCompleted={isCompleted} id={id} />
      <div>
        <IconsFooter id={id} isImportant={isImportant} isToday={isToday} />
      </div>
    </div>
  );
}
