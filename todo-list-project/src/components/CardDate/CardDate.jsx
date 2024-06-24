import "./CardDate.css";
export function CardDate({ isToday, date }) {
  return (
    <div style={{ color: isToday?'white': 'gray' }} className="w-full flex gap-2">
      <div
        style={{ backgroundColor: isToday?'white': 'gray' }}
        className="dateIcon w-5 h-6"
      ></div>
      <div>{date}</div>
    </div>
  );
}
