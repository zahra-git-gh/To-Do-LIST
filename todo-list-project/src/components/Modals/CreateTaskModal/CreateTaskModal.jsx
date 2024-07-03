import { useModal } from "../../../hooks/ModalContext";
import { CheckBox } from "../../CheckBox/CheckBox";
import "../EditTaskModal/EditTaskModal.css";
export function CreateTaskModal({ modalIDD }) {
  const { isModalOpen, closeModal, modalID } = useModal();

  if (modalID !== modalIDD) {
    return null;
  }
  if (isModalOpen) {
    return (
      <>
        <div
          onClick={closeModal}
          className="w-full h-full  bg-slate-600/30 z-10 dark:z-10 fixed top-0 right-0 flex justify-center py-4"
        >
          <section
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-11/12  max-w-lg bg-slate-200 p-3 fixed rounded-lg dark:bg-slate-900 z-50"
          >
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-semibold text-slate-500 dark:text-slate-200 lg:text-2xl">
                Add a task
              </h1>
              <button
                onClick={(e) => {
                  closeModal();
                  e.stopPropagation();
                }}
                className="close w-6 h-6 bg-slate-600 dark:bg-slate-200"
              ></button>
            </div>
            <form>
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
                  placeholder="e.g, study for the test"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-5">
                <label
                  className="text-xs sm:text-sm text-slate-500 xl:text-base"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                  type="date"
                  id="date"
                />
              </div>

              <div className="flex flex-col gap-y-2 mt-5">
                <label
                  className="text-xs sm:text-sm text-slate-500 xl:text-base"
                  htmlFor="description"
                >
                  Description (optional)
                </label>
                <textarea
                  className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-16 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none p-2 text-xs sm:text-sm xl:text-base"
                  id="description"
                  placeholder="e.g, study for the test"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-5">
                <label
                  className="text-xs sm:text-sm text-slate-500 xl:text-base"
                  htmlFor="directory"
                >
                  Select a directory
                </label>
                <select
                  className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs text-slate-600 sm:text-sm xl:text-base"
                  id="directory"
                >
                  <option className="" value="main">
                    Main
                  </option>
                </select>
              </div>
              <div className="flex items-center gap-x-2 mt-5">
                <CheckBox />
                <label className="text-xs text-slate-500 sm:text-sm xl:text-base">
                  Mark as important
                </label>
              </div>
              <div className="flex items-center gap-x-2 mt-4">
                <CheckBox />
                <label className="text-xs text-slate-500 sm:text-sm xl:text-base">
                  Mark as completed
                </label>
              </div>
              <button className="mt-7 bg-[#333d91] text-white w-full px-4 py-3 rounded-lg hover:bg-[#5163ae] text-xs sm:text-sm xl:text-base">
                Add a task
              </button>
            </form>
          </section>
        </div>
      </>
    );
  }
}
