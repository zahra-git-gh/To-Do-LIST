import "./App.css";
import { ParentTaskCards } from "./components/ParentTaskCards/ParentTaskCards";
// import { SearchInput } from "./components/Search-Input/SearchInput";
// import { NewTaskBtn } from "./components/Add-new-task-button/NewTaskBtn";

function App() {
  // window.document.body.style.backgroundColor = "rgb(15, 23, 42)";
  // window.document.body.style.backgroundColor='#'
  //classnames for square cards parent
  
  return <>
  <ParentTaskCards isList={true}/>
  {/* <SearchInput /> */}

  </>;
}

export default App;
