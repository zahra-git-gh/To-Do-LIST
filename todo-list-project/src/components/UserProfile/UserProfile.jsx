import { BarProgress } from "../BarProgress/BarProgress";
import { Darkmode } from "../Darkmode/Darkmode";

export function UserProfile() {
  return (
    <section className="h-screen w-60 bg-slate-100 dark:bg-slate-800">
      <section className="w-full h-full p-5 flex flex-col">
        <div className="flex items-center justify-center">
          <p className="dark:text-slate-400 text-sm sm:text-xs xl:text-base">Hi, User!</p>
          <div className="profile w-10 h-10 rounded-full bg-[url('./avatar-1.jpg')] bg-center bg-cover ml-4"></div>
        </div>
        <Darkmode />
        <BarProgress title={"Tasks today"} allTasks={3} completedTasks={1} />
        <BarProgress title={"All tasks"} allTasks={8} completedTasks={4} />
        <div className="mt-8">
          <p className="text-sm sm:text-sm xl:text-base text-slate-600 dark:text-slate-400">Today's tasks</p>
          <ul className="ml-4">
            <li className="dark:text-slate-100 cursor-pointer text-xs sm:text-sm xl:text-base text-slate-400  mt-3">study</li>
            <li className="dark:text-slate-100 cursor-pointer text-xs sm:text-sm xl:text-base text-slate-400  mt-3">test</li>
          </ul>
        </div>
        <div className=" mt-auto ">
        <button className="text-sm text-slate-600 hover:text-red-500 w-full py-4 text-left dark:text-slate-400">Delete all data</button>
        </div>
        <div>
          <button className="btn bg-red-100 text-red-500 w-full px-4 py-3 rounded-lg hover:bg-red-200 text-xs sm:text-sm xl:text-base dark:bg-slate-700 dark:text-slate-100">Created by APSignals</button>
        </div>
      </section>
    </section>
  );
}
