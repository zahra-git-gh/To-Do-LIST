import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../hooks/ModalContext";
import "../EditTaskModal/EditTaskModal.css";
import { removeTodo } from "../../../redux/todos.slice";

export function DeleteTaskModal({ modalIDD }) {
  const { isModalOpen, closeModal, modalID, id } = useModal();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  async function handleDelete() {
    try {
      await dispatch(removeTodo({ id, token }));
      closeModal();
    } catch (error) {
      console.log(error);
    }
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
          className="w-full max-w-lg p-4 md:p-5 bg-slate-200 dark:bg-slate-900 rounded-lg"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-semibold text-slate-500 dark:text-slate-200 md:text-2xl">
              Are you sure?
            </h1>
            <button
              onClick={closeModal}
              className="close w-6 h-6 bg-slate-600 dark:bg-slate-200"
            ></button>
          </div>
          <p className="text-xs sm:text-sm xl:text-base mt-5 text-slate-500">
            This task will be deleted permanently.
          </p>
          <div className="mt-6 flex justify-end gap-x-3 items-center">
            <button
              onClick={closeModal}
              className="text-xs py-3 px-3 hover:text-red-500 sm:text-sm xl:text-base dark:text-slate-100 dark:hover:text-red-500"
            >
              Cancle
            </button>
            <button
              onClick={handleDelete}
              className="text-xs bg-[#333d91] hover:bg-[#5163ae] text-slate-100 rounded-lg py-3 px-6 sm:text-sm xl:text-base"
            >
              Confirm
            </button>
          </div>
        </section>
      </section>
    );
  }
}
