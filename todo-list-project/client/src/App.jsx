import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ModalProvider } from "./hooks/ModalContext";
import { HomePage } from "./pages/HomePage";
import { useSelector } from "react-redux";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  //!verify if token does not exist
  const token = useSelector((state) => state.user.token);
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={token ? <HomePage /> : <Navigate to={"/login"} />}
            >
              <Route path="/directory/:dirId" element={<HomePage />} />
              <Route path="/task/:id" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
