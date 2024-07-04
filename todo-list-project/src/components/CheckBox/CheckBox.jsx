import { useState } from "react";

export function CheckBox({ onClick }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleClick() {
    setIsChecked((c) => !c);
    onClick(!isChecked);
  }
  return (
    <div
      className="bg-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full border border-slate-300 cursor-pointer text-xs w-5 h-5 flex items-center justify-center"
      onClick={handleClick}
    >
      <div
        style={{ display: isChecked ? "block" : "none" }}
        className="w-2 h-2 bg-red-500 rounded-full"
      ></div>
    </div>
  );
}
