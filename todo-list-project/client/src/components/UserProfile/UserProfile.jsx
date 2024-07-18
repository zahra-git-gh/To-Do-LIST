import { useState } from "react";
import { useModal } from "../../hooks/ModalContext";
import { BarProgress } from "../BarProgress/BarProgress";
import { Darkmode } from "../Darkmode/Darkmode";
import { useSelector } from "react-redux";
import "./UserProfile.css";
export function UserProfile({ modalIDD }) {
  const { isModalOpen, closeModal, modalID, openModal } = useModal();
  const [width, setWidth] = useState(window.innerWidth);

  // let userName = "User";
  const userData = useSelector((state) => state.user.userData);

  console.log(userData);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  //get all tasks for bar progress
  const todos = useSelector((state) => state.todo.todos);
  //function return completed task [you should pluse today tasks and complete today tasks to it]
  function completedTodos(array) {
    let completed = 0;
    array.map((todo) => {
      if (todo.isCompleted) {
        completed++;
      }
    });
    return completed;
  }
  //open modal delete all data
  function deleteAllDataHandler() {
    openModal(10);
  }
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const today1 = Date.parse(formattedDate);
  //function for get today tasks
  function todayTodos(today) {
    const todayTodosArr = todos.filter(
      (todo) => Date.parse(todo.deadline) === today
    );
    const todayTodosCompleted = todayTodosArr.filter(
      (todo) => todo.isCompleted === true
    );
    return { todayTodosArr, todayTodosCompleted };
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
                {` Hi, ${userData.name}!`}
              </p>
              <div
                onClick={() => {
                  openModal(11);
                }}
                className={`profile cursor-pointer w-10 h-10 rounded-full bg-[url('${userData.profile}')] bg-center bg-cover ml-4`}
              ></div>
            </div>
            <Darkmode />
            {todayTodos(today1).todayTodosArr.length > 0 && (
              <BarProgress
                title={"Tasks today"}
                allTasks={todayTodos(today1).todayTodosArr.length}
                completedTasks={todayTodos(today1).todayTodosCompleted.length}
              />
            )}
            {todos.length > 0 && (
              <BarProgress
                title={"All tasks"}
                allTasks={todos.length}
                completedTasks={completedTodos(todos)}
              />
            )}

            {todayTodos(today1).todayTodosArr.length > 0 ? (
              <div className="mt-8">
                <p className="text-sm sm:text-sm xl:text-base text-slate-600 dark:text-slate-400">
                  {"Today's tasks"}
                </p>
                <ul className="ml-4 max-h-60 overflow-y-auto todays-tasks">
                  {todayTodos(today1).todayTodosArr.map((todo, i) => {
                    return (
                      <li
                        key={i}
                        className="dark:text-slate-100 cursor-pointer text-xs sm:text-sm xl:text-base text-slate-400  mt-3"
                      >
                        {todo.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="mt-8 border-t-2 border-slate-200 py-3">
                <p className="text-slate-500 dark:text-slate-100">
                  No task today
                </p>
              </div>
            )}

            <div className=" mt-auto ">
              <button
                onClick={deleteAllDataHandler}
                className="text-sm text-slate-600 hover:text-red-500 w-full py-4 text-left dark:text-slate-400"
              >
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
