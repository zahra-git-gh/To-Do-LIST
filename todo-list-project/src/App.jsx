import "./App.css";
import { EditTaskModal } from "./components/Modals/EditTaskModal/EditTaskModal";
// import { UserProfile } from "./components/UserProfile/UserProfile";
// import { Darkmode } from "./components/Darkmode/Darkmode";

function App() {
  return <>
  {/* <UserProfile/> */}
  <EditTaskModal/>
  <p className="text-white">todolist</p>
  </>;
}

export default App;
