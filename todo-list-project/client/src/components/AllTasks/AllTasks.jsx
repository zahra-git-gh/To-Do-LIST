import { useDispatch, useSelector } from "react-redux";
import { ListStylelSelect } from "../ListStyle&Select/ListSttyle&Select";
import { ParentTaskCards } from "../ParentTaskCards/ParentTaskCards";
import { useEffect } from "react";
import { deleteIsAdded, fetchTodos } from "../../redux/todos.slice";
import { AlertSignUp } from "../AlertSignUp/AlertSignUp";
import { Toast } from "../ToastTodo/Toast";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { fetchUser } from "../../redux/user.slice";
export function AllTasks({ data, title }) {
  let newData = data;
  let newTitle = title;
  useEffect(() => {
    newData = data;
    newTitle = title;
  }, [data, title]);
  const isList = useSelector((state) => state.todo.isList);
  const token = useSelector((state) => state.user.token);
  const isLoading = useSelector((state) => state.todo.loading);
  const isAdded = useSelector((state) => state.todo.isAdded);
  const isError = useSelector((state) => state.todo.error);
  const { state: todo, pathname } = useLocation();
  const directories = useSelector((state) => state.todo.directories);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchValue = searchParams.get("q");
  const dispatch = useDispatch();
  const { dirId } = useParams();

  if (dirId) {
    newData = [...data].filter((todo) => todo.directory === dirId);
    const nameDir = directories?.filter((dir) => dir._id === dirId)[0];
    if (!nameDir) {
      navigate("/404");
    }
    newTitle = `${nameDir?.name}'s tasks`;
  }
  if (pathname.includes("result")) {
    const filterTodos = data.filter((todo) => todo.title.includes(searchValue));
    newData = [...filterTodos];
    newTitle = `${searchValue}'s results`;
    if (newData.length < 1 || !newTitle) {
      navigate("/404");
    }
  }
  useEffect(() => {
    if (pathname.includes("task") && !todo) {
      navigate("/404");
    }
    return;
  }, [todo, pathname, navigate]);
  useEffect(() => {
    async function start() {
      await dispatch(fetchTodos(token));
      return;
    }
    start();
  }, [token, dispatch]);
  useEffect(() => {
    const start = async () => {
      await dispatch(fetchUser(token));
    };
    start();
  }, [token, dispatch]);
  useEffect(() => {
    const stop = setTimeout(() => {
      dispatch(deleteIsAdded());
    }, 4000);
    return () => clearTimeout(stop);
  }, [dispatch, isAdded]);
  //show notfound page when we dont have todo

  // if (!title) {
  //   navigate("/notfound");
  // }
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
          {!isLoading &&
            `${newTitle ? newTitle : todo?.title} (${
              newData ? newData.length : [todo]?.length
            } tasks)`}
        </h1>
      </div>
      <ListStylelSelect />
      <ParentTaskCards
        isList={isList === "true"}
        data={newData ? newData : [todo]}
      />
      <Toast isHidden={!isAdded} />
    </section>
  );
}
