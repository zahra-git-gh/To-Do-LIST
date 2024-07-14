import "./App.css";
import { ModalProvider } from "./hooks/ModalContext";
// import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";

function App() {
  return (
    <>
      <ModalProvider>
        {/* <HomePage /> */}
        <SignUpPage />
      </ModalProvider>
    </>
  );
}

export default App;
