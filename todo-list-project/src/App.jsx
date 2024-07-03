import "./App.css";
import { ModalProvider } from "./hooks/ModalContext";
import { HomePage } from "./pages/HomePage";


function App() {
  return <>
  <ModalProvider>
  <HomePage/>

  </ModalProvider>
    </>;
}

export default App;
