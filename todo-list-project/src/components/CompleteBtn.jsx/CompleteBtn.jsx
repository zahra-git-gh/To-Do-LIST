export function CompleteBtn({ isCompleted }) {
  return (
    <button
      style={{
        backgroundColor: isCompleted ? "#a1ffb1" : "#fede4b",
        color: isCompleted ? "#060a19" : "#994426",
      }}
      className="py-1 px-4 rounded-xl"
    >
      {isCompleted ? "completed" : "uncompleted"}
    </button>
  );
}
