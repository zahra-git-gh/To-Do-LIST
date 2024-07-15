import "./App.css";
import { ModalProvider } from "./hooks/ModalContext";
// import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
// import { SignUpPage } from "./pages/SignUpPage";

function App() {
  return (
    <>
      <ModalProvider>
        <HomePage />
        {/* <SignUpPage /> */}
        {/* <LoginPage/> */}
      </ModalProvider>
    </>
  );
}

export default App;
