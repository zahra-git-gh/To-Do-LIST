import { useModal } from "../../../hooks/ModalContext";
import "../EditTaskModal/EditTaskModal.css";
import { useDispatch, useSelector } from "react-redux";
import { editDirectory } from "../../../redux/todos.slice";
import { useEffect, useState } from "react";
export function EditDirectoryModal({ modalIDD }) {
  const { isModalOpen, closeModal, modalID, id } = useModal();
  const directories = useSelector((state) => state.todo.directories);
  const directory = directories.filter((dir) => dir._id === id)[0];
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    if (directory) {
      setData(directory);
    }
  }, [directory]);

  function submitEdit(e) {
    e.preventDefault();
    dispatch(editDirectory({ id, data, token }));
    setData(null);
    closeModal();
  }
  if (modalID !== modalIDD) {
    return null;
  }
  if (isModalOpen) {
    return (
      <section
        onClick={closeModal}
        className="w-full h-full fixed top-0 right-0 z-40 bg-slate-600/30 flex justify-center items-center px-2"
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg p-3 sm:p-5 md:p-5 bg-slate-200 dark:bg-slate-900 rounded-lg"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-lg  font-semibold text-slate-500 dark:text-slate-200 md:text-2xl">
              Edit directory name
            </h1>
            <button
              onClick={closeModal}
              className="close w-6 h-6 bg-slate-600 dark:bg-slate-200"
            ></button>
          </div>
          <form onSubmit={submitEdit}>
            <div className="flex flex-col gap-y-2 mt-5">
              <label
                className="text-xs sm:text-sm text-slate-500 xl:text-base"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                type="text"
                id="title"
                required
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                value={data?.name}
              />
            </div>
            <div className="mt-6 flex justify-start gap-x-3 items-center">
              <button
                type="submit"
                className="text-xs bg-[#333d91] hover:bg-[#5163ae] text-slate-100 rounded-lg py-3 px-6 sm:text-sm xl:text-base"
              >
                Edit
              </button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}
