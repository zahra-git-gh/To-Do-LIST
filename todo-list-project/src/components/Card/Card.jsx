import { CardDate } from "../CardDate/CardDate";
import { CardFooter } from "../CardFooter/CardFooter";

export function Card({ isToday }) {
  return <section className="w-60 h-56 bg-white rounded-lg py-4 px-5">
    <div className="flex flex-col items-start justify-between h-full">
    <div className="w-full flex flex-col items-start">
        <p className="font-semibold text-left text-xl">Task1</p>
        <p className="text-left ">This is a description for task 1jlkjkj dfasefad adsfsdfa asdfsdf sfdfgafsfd sdfsdfsf asfdsfsdfdf sefsfsdfsdfsf dsfdfsdf a saasdfsf</p>
    </div>
    <div className="w-full">
    <CardDate isToday={false} date={'04/12/2023'}/>
    <CardFooter isToday={false}/>

    </div>
        
    </div>
  </section>;
}
