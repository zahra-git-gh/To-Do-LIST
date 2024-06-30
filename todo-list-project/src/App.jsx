import "./App.css";
// import { NewTaskBtn } from "./components/Add-new-task-button/NewTaskBtn";
import { Card } from "./components/Card/Card";
function App() {
  // window.document.body.style.backgroundColor = "rgb(15, 23, 42)";
  // window.document.body.style.backgroundColor='#'
  return <>
  <section className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
  <Card isNew={true}/> 
  <Card isNew={false}/> 
  <Card isNew={false}/> 
  <Card isNew={false}/> 
  <Card isNew={false}/> 

  </section>

  </>;
}

export default App;
