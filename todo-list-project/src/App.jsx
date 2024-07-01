import "./App.css";

// import { Header } from "./components/Header/Header";

// import { SortBySelect } from "./components/SortBySelect/SortBySelect";
import { ParentTaskCards } from "./components/ParentTaskCards/ParentTaskCards";
// import { SearchInput } from "./components/Search-Input/SearchInput";
// import { NewTaskBtn } from "./components/Add-new-task-button/NewTaskBtn";

function App() {
  // window.document.body.style.backgroundColor = "rgb(15, 23, 42)";
  // window.document.body.style.backgroundColor='#'
  //classnames for square cards parent

  return (
    <>
    <section className="px-4">

      <ParentTaskCards isList={false}/>
    </section>
      {/* <SortBySelect /> */}
      {/* <SearchInput /> */}
      {/* <Header /> */}
    </>
  );
}

export default App;
