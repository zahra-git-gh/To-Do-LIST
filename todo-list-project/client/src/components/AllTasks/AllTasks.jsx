import { useDispatch, useSelector } from "react-redux";
import { ListStylelSelect } from "../ListStyle&Select/ListSttyle&Select";
import { ParentTaskCards } from "../ParentTaskCards/ParentTaskCards";
import { useEffect, useState } from "react";
import { deleteIsAdded, fetchTodos } from "../../redux/todos.slice";
import { AlertSignUp } from "../AlertSignUp/AlertSignUp";
import { Toast } from "../ToastTodo/Toast";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
export function AllTasks() {
  const isList = useSelector((state) => state.todo.isList);
  const token = useSelector((state) => state.user.token);
  const isLoading = useSelector((state) => state.todo.loading);
  const isAdded = useSelector((state) => state.todo.isAdded);
  const isError = useSelector((state) => state.todo.error);
  const directories = useSelector((state) => state.todo.directories);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const q = searchParams.get("q");
  const dispatch = useDispatch();
  const { pathname, state: todo } = useLocation();
  const { dirId } = useParams();
  const title =
    pathname === "/"
      ? "All tasks"
      : pathname === "/important"
      ? "Important tasks"
      : pathname === "/today"
      ? "Today tasks"
      : pathname === "/completed"
      ? "Completed tasks"
      : pathname === "/uncompleted"
      ? "Uncompleted tasks"
      : pathname.includes("/task")
      ? `${todo.title}`
      : pathname.includes("/directory")
      ? directories.find((dir) => dir._id === dirId)
        ? `${directories.find((dir) => dir._id === dirId).name}'s`
        : undefined
      : pathname.includes("/result")
      ? `${q}`
      : "";
  const [todosLength2, setTodosLength2] = useState();
  useEffect(() => {
    //some code?
  }, [todosLength2]);
  useEffect(() => {
    async function start() {
      await dispatch(fetchTodos(token));
      return;
    }
    start();
  }, [token, dispatch]);
  useEffect(() => {
    const stop = setTimeout(() => {
      dispatch(deleteIsAdded());
    }, 4000);
    return () => clearTimeout(stop);
  }, [dispatch, isAdded]);
  if (!title) {
    navigate("/notfound");
  }
  return (
    <section className="w-full">
      <div className="w-full my-5">
        <div className={`w-full flex justify-center ${!isError && "hidden"}`}>
          <AlertSignUp
            alertMessage={"An Error Occurred, Please Try Again Later"}
            isHide={!isError}
            isSuccess={!isError}
          />
        </div>
        <h1 className="text-center text-lg md:text-2xl sm:text-left font-semibold text-slate-600 dark:text-slate-200">
          <div
            className={`${
              !isLoading && "hidden"
            } w-12 h-12 md:w-16 md:h-16w-16 spinner bg-center bg-cover bg-[url('./spinner_home.png')] dark:bg-[url('./spinner_home_dark.png')] animate-spin`}
          ></div>
          {!isLoading && `${title} (${todosLength2} tasks)`}
        </h1>
      </div>
      <ListStylelSelect />
      <ParentTaskCards
        isList={isList === "true"}
        todoLength={(length) => {
          setTodosLength2(length);
        }}
      />
      <Toast isHidden={!isAdded} />
    </section>
  );
}
