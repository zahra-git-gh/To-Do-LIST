import { NewTaskBtn } from "../Add-new-task-button/NewTaskBtn";
import "./Nav.css";
import { useModal } from "../../hooks/ModalContext.jsx";
import { useState } from "react";
export function Nav({ modalIDD }) {
  const { isModalOpen, closeModal, modalID, openModal } = useModal();
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  if (modalIDD !== modalID && width < 1280) {
    return null;
  }

  if (isModalOpen || width >= 1280)
    return (
      <>
        <section
          onClick={closeModal}
          className="xl:hidden z-10 fixed w-full h-full bg-slate-400/30 left-0 top-0"
        ></section>
        <div className="fixed z-20 h-full w-60 xl:w-56 bg-slate-100 left-0 top-0  dark:bg-slate-800">
          <h1 className="font-bold text-lg hidden dark:text-white xl:block text-center mt-8">
            TO-DO LIST
          </h1>
          <section className="py-8 px-4">
            <NewTaskBtn />
          </section>
          <nav>
            <ul>
              <li className="text-xs sm:text-sm xl:text-base text-slate-500 mb-5 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200">
                <a href="#">Today's tasks</a>
              </li>
              <li className="text-xs sm:text-sm xl:text-base text-slate-500 mb-5 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200">
                <a href="#">All tasks</a>
              </li>
              <li className="text-xs sm:text-sm xl:text-base text-slate-500 mb-5 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200">
                <a href="#">Important tasks</a>
              </li>
              <li className="text-xs sm:text-sm xl:text-base text-slate-500 mb-5 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200">
                <a href="#">Completed tasks</a>
              </li>
              <li className="text-xs sm:text-sm xl:text-base text-slate-500 mb-7 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200">
                <a href="#">Uncompleted tasks</a>
              </li>
            </ul>
          </nav>
          <section className="pl-4">
            <div className="flex flex-row items-center">
              <div className="arrow bg-slate-700 w-3 h-3 rotate-90 dark:bg-slate-200"></div>
              <p className="text-xs sm:text-sm xl:text-base text-slate-500 pl-2 cursor-pointer dark:text-slate-200">
                Directories
              </p>
            </div>
            <div className="pl-3">
              <div className="flex flex-row justify-between mt-4 pl-2 pr-4">
                <p className="text-xs sm:text-sm xl:text-base text-slate-500  cursor-pointer hover:text-red-500  dark:text-slate-400 dark:hover:text-slate-200">
                  English
                </p>
                <div>
                  <button
                    onClick={() => openModal(7)}
                    className="edit-category w-5 h-5 bg-slate-700 mr-2"
                  ></button>
                  <button
                    onClick={() => openModal(8)}
                    className="delete-category w-5 h-5 bg-slate-700"
                  ></button>
                </div>
              </div>
              <p className="text-xs sm:text-sm xl:text-base text-slate-500 pl-2 cursor-pointer hover:text-red-500 mt-4 dark:text-slate-400 dark:hover:text-slate-200">
                Main
              </p>
              <button
                onClick={() => openModal(6)}
                className="text-xs sm:text-sm xl:text-base text-slate-500 pl-2 ml-2 cursor-pointer mt-4 border-2 border-dashed border-slate-300 rounded-md py-1 px-3 hover:text-blue-700 dark:border-slate-600"
              >
                + New
              </button>
            </div>
          </section>
        </div>
      </>
    );
}
