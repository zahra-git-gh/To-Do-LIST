import { NavLink } from "react-router-dom";
import { useModal } from "../../hooks/ModalContext";

export function DirectoryNav({ dir }) {
  const { openModal, setDataID } = useModal();
  const isDark = document.documentElement.className;
  return (
    <div className="">
      <NavLink
        style={({ isActive }) => {
          return {
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
          };
        }}
        to={`/directory/${dir._id}`}
        className="text-xs sm:text-sm xl:text-base text-slate-500  cursor-pointer hover:text-red-500  dark:text-slate-400 dark:hover:text-slate-200 flex flex-row justify-between group pl-7 pr-4 py-2"
      >
        {dir.name}
      </NavLink>
      <div
        style={{ display: dir.name === "Main" ? "none" : "flex" }}
        className="flex "
      >
        <button
          onClick={() => {
            openModal(7);
            setDataID(dir._id);
          }}
          className="edit-category hidden group-hover:block w-5 h-5 bg-slate-700 mr-2"
        ></button>
        <button
          onClick={() => {
            openModal(8);
            setDataID(dir._id);
          }}
          className="delete-category hidden group-hover:block w-5 h-5 bg-slate-700"
        ></button>
      </div>
    </div>
  );
}
