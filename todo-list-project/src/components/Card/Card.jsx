import { CardDate } from "../CardDate/CardDate";
import { CardFooter } from "../CardFooter/CardFooter";
import { DirectoryCard } from "../Directory/DirectoryCard";

export function Card({ isNew }) {
  return (
    <section className="flex flex-col items-end">
    <DirectoryCard/>
    <section
      style={{ backgroundColor: isNew && "#333d91" }}
      className="h-56 bg-slate-100 dark:bg-slate-800 rounded-lg py-4 px-5 flex flex-col justify-between hover:shadow-lg"
    >
      <div>
        <h1
          style={{ color: isNew && "white" }}
          className="text-sm dark:text-white font-semibold sm:text-base"
        >
          Task 1
        </h1>
        <p
          style={{ color: isNew && "rgb(203 213 225)" }}
          className="text-slate-500 text-sm dark:text-slate-500 sm:text-base"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque{" "}
        </p>
      </div>
      <div>
        <CardDate isToday={isNew} date={"04/12/2023"} />
        <CardFooter isToday={isNew} />
      </div>
    </section>
    </section>
  );
}
