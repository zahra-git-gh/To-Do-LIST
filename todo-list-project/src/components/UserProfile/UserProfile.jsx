import { BarProgress } from "../BarProgress/BarProgress";
import { Darkmode } from "../Darkmode/Darkmode";

export function UserProfile() {
  return (
    <section className="h-screen w-60 bg-slate-100 dark:bg-slate-800">
      <section className="w-full h-full p-5">
        <div className="flex items-center justify-center">
          <p>Hi, User!</p>
          <div className="profile w-10 h-10 rounded-full bg-[url('./avatar-1.jpg')] bg-center bg-cover ml-4"></div>
        </div>
        <Darkmode />
        <BarProgress title={"Tasks today"} allTasks={3} completedTasks={1} />
        <BarProgress title={"All tasks"} allTasks={8} completedTasks={4} />
      </section>
    </section>
  );
}
