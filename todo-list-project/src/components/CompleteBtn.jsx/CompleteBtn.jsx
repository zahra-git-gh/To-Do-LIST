import './CompleteBtn.css'
export function CompleteBtn({ isCompleted }) {
  return (
    <button
      style={{
        backgroundColor: isCompleted ? "#a1ffb1" : "#fede4b",
        color: isCompleted ? "#060a19" : "#994426",
      }}
      className="w-6 h-6 sm:w-max sm:h-7 sm:py-1 sm:px-2 rounded-full flex items-center"
    >
      <div className='hidden sm:block font-semibold'>
        {isCompleted ? "completed" : "uncompleted"}
      </div>
      {
          <div style={{
        }} className={`${isCompleted? 'completed-sm': 'unCompleted-sm'}  w-4 h-4 m-auto sm:hidden`}></div>
   
      }
     
    </button>
  );
}
