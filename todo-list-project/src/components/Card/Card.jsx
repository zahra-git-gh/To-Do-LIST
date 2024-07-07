import { CardDate } from "../CardDate/CardDate";
import { CardFooter } from "../CardFooter/CardFooter";
import { DirectoryCard } from "../Directory/DirectoryCard";

export function Card({
  isNew,
  isList,
  deadline,
  description,
  directory,
  id,
  isCompleted,
  isImportant,
  title,
}) {
  //change deadline to */*/* structure
  function changeDeadline(date) {
    const array = date.split("-").reverse().join("/");
    return array;
  }

  // changeDeadline("2024-07-04")
  return (
    <section className={`flex flex-col items-center`}>
      <DirectoryCard dirName={directory.name} />
      <section
        style={{ backgroundColor: isNew && "#333d91" }}
        className={`${isList && "w-full"} ${isList ? "h-24 sm:h-32" : "h-56"} ${
          isList ? "flex-row items-center" : "flex-col"
        } ${
          isList && ""
        } bg-slate-100 dark:bg-slate-800 rounded-lg py-4 px-5 flex justify-between hover:shadow-lg w-full`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1
              style={{ color: isNew && "white" }}
              className="text-xs dark:text-white  sm:text-base"
            >
              {title}
            </h1>
            <p
              style={{ color: isNew && "rgb(203 213 225)" }}
              className="text-slate-500 text-xs dark:text-slate-500 sm:text-base"
            >
              {description}
            </p>
          </div>
          <CardDate isToday={isNew} date={changeDeadline(deadline)} />
        </div>
        <div>
          <CardFooter
            id={id}
            isCompleted={isCompleted}
            isImportant={isImportant}
            isToday={isNew}
            isList={isList}
          />
        </div>
      </section>
    </section>
  );
}
