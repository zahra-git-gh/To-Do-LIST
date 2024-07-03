import { NewTaskBtn } from "../components/Add-new-task-button/NewTaskBtn";
import { AllTasks } from "../components/AllTasks/AllTasks";
import { Header } from "../components/Header/Header";
import { Nav } from "../components/Nav/Nav";
import { UserProfile } from "../components/UserProfile/UserProfile";

export function HomePage() {
  return (
    <section
      className="w-full h-full px-3 pt-5 pb-8 md:px-7
    "
    >
      <Nav modalIDD={1} />
      <UserProfile modalIDD={2} />
      <div className="xl:w-8/12 xl:m-auto xl:pr-4">
        <Header />

        <AllTasks />
        <div className="w-28 fixed right-3 bottom-5 shadow-lg shadow-slate-400 sm:hidden ">
          <NewTaskBtn />
        </div>

        <footer className="text-center text-slate-800 text-xs w-full mt-4">
          TODO-LIST
        </footer>
      </div>
    </section>
  );
}
