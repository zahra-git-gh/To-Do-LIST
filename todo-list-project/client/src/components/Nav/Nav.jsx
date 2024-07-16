import { NewTaskBtn } from "../Add-new-task-button/NewTaskBtn";
import "./Nav.css";
import { useModal } from "../../hooks/ModalContext.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DirectoryNav } from "../DirectoryCardNav/DirectoryNav.jsx";
import { fetchDirectory } from "../../redux/todos.slice.js";
export function Nav({ modalIDD }) {
  const directories = useSelector((state) => state.todo.directories);
  const { isModalOpen, closeModal, modalID, openModal } = useModal();
  const [isShow, setIsShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    const start = async () => {
      dispatch(fetchDirectory(token));
    };
    start();
  }, []);

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
          <section className="pl-4 pb-4 max-h-80 xl:max-h-52 overflow-y-auto">
            <div
              onClick={() => setIsShow(!isShow)}
              className="flex flex-row items-center"
            >
              <div
                className={`${
                  isShow ? "rotate-180" : "rotate-90"
                } arrow bg-slate-700 w-3 h-3  dark:bg-slate-200`}
              ></div>
              <p className="text-xs sm:text-sm xl:text-base text-slate-500 pl-2 cursor-pointer dark:text-slate-200">
                Directories
              </p>
            </div>
            <div
              style={{ display: isShow ? "block" : "none" }}
              className="pl-3"
            >
              {directories.map((directory, i) => {
                return <DirectoryNav dir={directory} key={i} />;
              })}
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
