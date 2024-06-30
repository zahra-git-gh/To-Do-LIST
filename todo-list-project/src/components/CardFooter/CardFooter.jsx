import { CompleteBtn } from "../CompleteBtn.jsx/CompleteBtn";
import { IconsFooter } from "../IconsFooter/IconsFooter";
import "./CardFooter.css";
export function CardFooter({isToday, isList}) {
  return (
    <div className= {`w-full flex justify-between items-center pt-4 ${!isList&& "border-t-2 border-dashed border-slate-400 border-opacity-50"} `}>
      <CompleteBtn isCompleted={false} />
      <div>
        <IconsFooter isToday={isToday} />
      </div>
    </div>
  );
}
