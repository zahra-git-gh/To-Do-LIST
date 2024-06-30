import { CardDate } from "../CardDate/CardDate";
import { CardFooter } from "../CardFooter/CardFooter";
import { DirectoryCard } from "../Directory/DirectoryCard";

export function Card({ isNew, isList }) {
console.log( 'Lorem ipsum dolor sit amet consectetur'.length
);
  return (
    <section className={`flex flex-col items-end`}>
      <DirectoryCard />
      <section
        style={{ backgroundColor: isNew && "#333d91" }}
        className={`${isList && "w-full"} ${isList? "h-24": "h-56"} ${isList? "flex-row": "flex-col"} ${isList&& ""} bg-slate-100 dark:bg-slate-800 rounded-lg py-4 px-5 flex justify-between hover:shadow-lg `} 
      >
        <div className="flex flex-col justify-between h-full">
          <div>
          <h1
            style={{ color: isNew && "white" }}
            className="text-xs dark:text-white font-semibold sm:text-base"
          >
            Task 1
          </h1>
          <p
            style={{ color: isNew && "rgb(203 213 225)" }}
            className="text-slate-500 text-xs dark:text-slate-500 sm:text-base"
          >
            Lorem ipsum dolor sit amet consectetur
          </p>

          </div>
          <CardDate isToday={isNew} date={"04/12/2023"} />
        </div>
        <div>
          <CardFooter isToday={isNew} isList={isList}/>
        </div>
      </section>
    </section>
  );
}
