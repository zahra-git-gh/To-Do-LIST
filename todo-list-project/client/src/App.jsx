import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ModalProvider } from "./hooks/ModalContext";
import { HomePage } from "./pages/HomePage";
import { useSelector } from "react-redux";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { todayTodos } from "./utils/todayTodos";
import { AllTasks } from "./components/AllTasks/AllTasks";

function App() {
  //!verify if token does not exist
  const token = useSelector((state) => state.user.token);
  //get all data of todos and render cards
  const todos = useSelector((state) => state.todo.todos);
  //get todos for today
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const today1 = Date.parse(formattedDate);

  const importantTasks = [...todos].filter((todo) => todo.isImportant === true);
  const completedTasks = [...todos].filter((todo) => todo.isCompleted === true);
  const uncompletedTasks = [...todos].filter(
    (todo) => todo.isCompleted === false
  );
  const todayTasks = [...todayTodos(today1, todos).todayTodosArr];

  const html = document.getElementsByTagName("html")[0];
  if (localStorage.getItem("theme") === "dark") {
    html.setAttribute("class", "dark");
  }
  const routes = [
    {
      route: "/important",
      title: "Important tasks",
      data: importantTasks,
    },
    {
      route: "/today",
      title: "Today tasks",
      data: todayTasks,
    },
    {
      route: "/uncompleted",
      title: "Uncompleted tasks",
      data: uncompletedTasks,
    },
    {
      route: "/completed",
      title: "Completed tasks",
      data: completedTasks,
    },
    {
      route: "/task/:id",
    },
    {
      route: "/directory/:dirId",
      data: [...todos],
    },
    {
      route: "/result",
      data: [...todos],
    },
  ];
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route
              path="/"
              element={token ? <HomePage /> : <Navigate to={"/login"} />}
            >
              <Route
                index
                element={<AllTasks title={"All Tasks"} data={todos} />}
              />
              {routes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={route.route}
                    element={<AllTasks data={route.data} title={route.title} />}
                  />
                );
              })}
            </Route>
            <Route path="*" element={<Navigate to={"/404"} />} />
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
