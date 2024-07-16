//function for get today tasks
export function todayTodos(today, todos) {
  const todayTodosArr = todos?.filter(
    (todo) => Date.parse(todo.deadline) === today
  );
  const todayTodosCompleted = todayTodosArr?.filter(
    (todo) => todo.isCompleted === true
  );
  const todayTodosUncompleted = todayTodosArr?.filter(
    (todo) => todo.isCompleted === false
  );
  return { todayTodosArr, todayTodosCompleted, todayTodosUncompleted };
}