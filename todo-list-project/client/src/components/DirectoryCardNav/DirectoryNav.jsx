import { NavLink } from "react-router-dom";
import { useModal } from "../../hooks/ModalContext";
import { useState } from "react";

export function DirectoryNav({ dir }) {
  const { openModal, setDataID } = useModal();
  const isDark = document.documentElement.className;
  console.log(dir);
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      style={{
        backgroundColor:
          isActive && isDark === "dark"
            ? "rgb(51 65 85)"
            : isActive && "rgb(226 232 240)",
        color:
          isActive && isDark === "dark"
            ? "rgb(226 232 240)"
            : isActive && "rgb(239 68 68)",
        borderRight:
          isActive && isDark === "dark"
            ? "4px solid rgb(226 232 240)"
            : isActive && "4px solid rgb(239 68 68)",
      }}
      className="text-xs sm:text-sm xl:text-base text-slate-500  hover:text-red-500  dark:text-slate-400 dark:hover:text-slate-200 group flex flex-row justify-between items-center  pl-7 pr-4 py-2"
    >
      <NavLink
        style={({ isActive }) => {
          setIsActive(isActive);
        }}
        to={`/directory/${dir._id}`}
        className="cursor-pointer"
      >
        {dir.name}
      </NavLink>
      <div
        style={{ display: dir.name === "Main" ? "none" : "flex" }}
        className="flex "
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            openModal(7);
            setDataID(dir._id);
          }}
          className="edit-category hidden group-hover:block w-5 h-5 hover:bg-red-500 dark:hover:bg-slate-200 bg-slate-700 mr-2"
        ></button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            openModal(8);
            setDataID(dir._id);
          }}
          className="delete-category hidden hover:bg-red-500 dark:hover:bg-slate-200 group-hover:block w-5 h-5 bg-slate-700"
        ></button>
      </div>
    </div>
  );
}
