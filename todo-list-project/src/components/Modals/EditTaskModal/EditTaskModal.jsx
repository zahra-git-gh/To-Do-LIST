import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../hooks/ModalContext";
import { CheckBox } from "../../CheckBox/CheckBox";
import "./EditTaskModal.css";
import { useEffect, useState } from "react";
import { updateTodo } from "../../../redux/todos.slice";
export function EditTaskModal({ modalIDD }) {
  const { isModalOpen, closeModal, modalID, id } = useModal();
  const todos = useSelector((state) => state.todo.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];

  const [data, setData] = useState();
  const [isImportant, setIsImportant] = useState();
  const [isCompleted, setIsCompleted] = useState();
  const dispatch = useDispatch();

  function handleSubmitEdit(e) {
    e.preventDefault();
    //some code and submit
    dispatch(updateTodo({ ...data, isImportant, isCompleted }));
    closeModal();
  }

  useEffect(() => {
    if (isModalOpen) {
      setData(todo);
    }
  }, [isModalOpen, todo]);

  if (modalID !== modalIDD) {
    return null;
  }
  if (isModalOpen) {
    return (
      <>
        <section
          onClick={() => {
            setData({ title: "from befor" });

            closeModal();
          }}
          className="w-full h-full px-2 py-7 bg-slate-600/30 dark: z-40 fixed top-0 right-0 flex items-center justify-center"
        >
          <section
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-slate-200 p-3 rounded-lg dark:bg-slate-900 z-50"
          >
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-semibold text-slate-500 dark:text-slate-200 lg:text-2xl">
                Edit task
              </h1>
              <button
                onClick={closeModal}
                className="close w-6 h-6 bg-slate-600 dark:bg-slate-200"
              ></button>
            </div>
            <form onSubmit={handleSubmitEdit}>
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
                    setData({ ...data, title: e.target.value });
                  }}
                  value={data?.title}
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
                  required
                  onChange={(e) => {
                    setData({ ...data, deadline: e.target.value });
                  }}
                  value={data?.deadline}
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
                  onChange={(e) => {
                    setData({ ...data, description: e.target.value });
                  }}
                  value={data && data.description}
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
                  onChange={(e) => {
                    setData({ ...data, directory: e.target.value });
                  }}
                  value={data && data.directory}
                >
                  <option className="" value="main">
                    Main
                  </option>
                </select>
              </div>
              <div className="flex items-center gap-x-2 mt-5">
                <CheckBox
                  defaultChecked={todo?.isImportant}
                  onClick={(checked) => {
                    setIsImportant(checked);
                  }}
                />
                <label className="text-xs text-slate-500 sm:text-sm xl:text-base">
                  Mark as important
                </label>
              </div>
              <div className="flex items-center gap-x-2 mt-4">
                <CheckBox
                  defaultChecked={todo?.isCompleted}
                  onClick={(checked) => {
                    setIsCompleted(checked);
                  }}
                />
                <label className="text-xs text-slate-500 sm:text-sm xl:text-base">
                  Mark as completed
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 bg-[#333d91] text-white w-full px-4 py-3 rounded-lg hover:bg-[#5163ae] text-xs sm:text-sm xl:text-base"
              >
                Edit task
              </button>
            </form>
          </section>
        </section>
      </>
    );
  }
}
