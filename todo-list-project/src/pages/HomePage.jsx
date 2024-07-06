import { NewTaskBtn } from "../components/Add-new-task-button/NewTaskBtn";
import { AllTasks } from "../components/AllTasks/AllTasks";
import { Header } from "../components/Header/Header";
import { CreateDirectoryModal } from "../components/Modals/CreateDirectoryModal/CreateDirectoryModal";
import { CreateTaskModal } from "../components/Modals/CreateTaskModal/CreateTaskModal";
import { DeleteDirectoryModal } from "../components/Modals/DeleteDirectoryModal/DeleteDirectoryModal";
import { DeleteTaskModal } from "../components/Modals/DeleteTaskModal/DeleteTaskModal";
import { EditDirectoryModal } from "../components/Modals/EditDirectoryModal/EditDirectoryModal";
import { EditTaskModal } from "../components/Modals/EditTaskModal/EditTaskModal";
import { Nav } from "../components/Nav/Nav";
import { UserProfile } from "../components/UserProfile/UserProfile";
// import { useModal } from "../hooks/ModalContext";

export function HomePage() {
  return (
    <section
      className="w-full h-screen px-3 pt-5  md:px-7
    "
    >
      <Nav modalIDD={1} />
      <UserProfile modalIDD={2} />
      <CreateTaskModal modalIDD={3} />
      <DeleteTaskModal modalIDD={4} />
      <EditTaskModal modalIDD={5} />
      <CreateDirectoryModal modalIDD={6} />
      <EditDirectoryModal modalIDD={7} />
      <DeleteDirectoryModal modalIDD={8} />
      <div className="xl:w-8/12 xl:m-auto xl:pr-4 flex flex-col justify-between h-full">
        <Header />

        <AllTasks />
        <div className="w-28 fixed right-3 bottom-5 shadow-lg shadow-slate-400 sm:hidden ">
          <NewTaskBtn />
        </div>

        <footer className="text-center pb-8 text-slate-800 text-xs w-full mt-4">
          TODO-LIST
        </footer>
      </div>
    </section>
  );
}
