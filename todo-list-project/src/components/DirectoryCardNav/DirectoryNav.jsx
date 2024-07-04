import { useModal } from "../../hooks/ModalContext";

export function DirectoryNav({ dir }) {
  const { openModal, setDataID } = useModal();
  return (
    <div className="flex flex-row justify-between mt-4 pl-2 pr-4">
      <p className="text-xs sm:text-sm xl:text-base text-slate-500  cursor-pointer hover:text-red-500  dark:text-slate-400 dark:hover:text-slate-200">
        {dir.name}
      </p>
      <div>
        <button
          onClick={() => {
            openModal(7);
          }}
          className="edit-category w-5 h-5 bg-slate-700 mr-2"
        ></button>
        <button
          onClick={() => {
            openModal(8);
            setDataID(dir.id);
          }}
          className="delete-category w-5 h-5 bg-slate-700"
        ></button>
      </div>
    </div>
  );
}
