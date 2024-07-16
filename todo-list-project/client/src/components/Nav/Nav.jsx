import { NewTaskBtn } from "../Add-new-task-button/NewTaskBtn";
import "./Nav.css";
import { useModal } from "../../hooks/ModalContext.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DirectoryNav } from "../DirectoryCardNav/DirectoryNav.jsx";
import { fetchDirectory } from "../../redux/todos.slice.js";
import { NavLink } from "react-router-dom";
export function Nav({ modalIDD }) {
  const isDark = document.documentElement.className;
  console.log(isDark);
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
              <li>
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
                  to={"/today"}
                  className="text-xs sm:text-sm xl:text-base text-slate-500 mb-3 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200 w-full block py-2"
                >
                  {"Today's tasks"}
                </NavLink>
              </li>
              <li>
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
                  to={"/"}
                  className="text-xs sm:text-sm xl:text-base text-slate-500 mb-3 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200 w-full block py-2"
                >
                  All tasks
                </NavLink>
              </li>
              <li>
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
                  to={"/important"}
                  className="text-xs sm:text-sm xl:text-base text-slate-500 mb-3 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200 w-full block py-2"
                >
                  Important tasks
                </NavLink>
              </li>
              <li>
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
                  to={"/completed"}
                  className="text-xs sm:text-sm xl:text-base text-slate-500 mb-3 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200 w-full block py-2"
                >
                  Completed tasks
                </NavLink>
              </li>
              <li>
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
                  to={"/uncompleted"}
                  className="text-xs sm:text-sm xl:text-base text-slate-500 mb-5 pl-4 cursor-pointer hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200 w-full block py-2"
                >
                  Uncompleted tasks
                </NavLink>
              </li>
            </ul>
          </nav>
          <section className=" pb-4 max-h-80 xl:max-h-52 overflow-y-auto directories">
            <div
              onClick={() => setIsShow(!isShow)}
              className="flex flex-row items-center pl-4"
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
              className="pl-4"
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
