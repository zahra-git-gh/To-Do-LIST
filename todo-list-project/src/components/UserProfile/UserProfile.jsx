import { useState } from "react";
import { useModal } from "../../hooks/ModalContext";
import { BarProgress } from "../BarProgress/BarProgress";
import { Darkmode } from "../Darkmode/Darkmode";
import { useSelector } from "react-redux";

export function UserProfile({ modalIDD }) {
  const { isModalOpen, closeModal, modalID } = useModal();
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  //get all tasks for bar progress
  const todos = useSelector((state) => state.todo.todos);
  //function return completed task [you should pluse today tasks and complete today tasks to it]
  function completedTodos() {
    let completed = 0;
    todos.map((todo) => {
      if (todo.isCompleted) {
        completed++;
      }
    });
    return completed;
  }
  if (modalIDD !== modalID && width < 1280) {
    return null;
  }
  if (isModalOpen || width >= 1280) {
    return (
      <>
        <section
          onClick={closeModal}
          className="xl:hidden z-10 fixed w-full h-full bg-slate-400/30 right-0 top-0 flex justify-end"
        ></section>
        <section className="h-screen z-20 w-60 right-0 top-0 fixed bg-slate-100 dark:bg-slate-800">
          <section className="w-full h-full p-5 flex flex-col">
            <div className="flex items-center justify-center">
              <p className="dark:text-slate-400 text-sm sm:text-xs xl:text-base">
                Hi, User!
              </p>
              <div className="profile w-10 h-10 rounded-full bg-[url('./avatar-1.jpg')] bg-center bg-cover ml-4"></div>
            </div>
            <Darkmode />
            <BarProgress
              title={"Tasks today"}
              allTasks={3}
              completedTasks={1}
            />
            <BarProgress
              title={"All tasks"}
              allTasks={todos.length}
              completedTasks={completedTodos()}
            />
            <div className="mt-8">
              <p className="text-sm sm:text-sm xl:text-base text-slate-600 dark:text-slate-400">
                Today's tasks
              </p>
              <ul className="ml-4">
                <li className="dark:text-slate-100 cursor-pointer text-xs sm:text-sm xl:text-base text-slate-400  mt-3">
                  study
                </li>
                <li className="dark:text-slate-100 cursor-pointer text-xs sm:text-sm xl:text-base text-slate-400  mt-3">
                  test
                </li>
              </ul>
            </div>
            <div className=" mt-auto ">
              <button className="text-sm text-slate-600 hover:text-red-500 w-full py-4 text-left dark:text-slate-400">
                Delete all data
              </button>
            </div>
            <div>
              <button className="btn bg-red-100 text-red-500 w-full px-4 py-3 rounded-lg hover:bg-red-200 text-xs sm:text-sm xl:text-base dark:bg-slate-700 dark:text-slate-100">
                Created by APSignals
              </button>
            </div>
          </section>
        </section>
      </>
    );
  }
}
