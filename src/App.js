import { Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage/FormPage";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Navbar from "./components/UI/Navbar/Navbar";
import Page404 from "./pages/404Page";
import Home from "./pages/Home";
import UserPanel from "./pages/UserPanel";
import { useAuth } from "./store/auth-context";
import DarkModeContextProvider from "./store/darkmode-context";

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <DarkModeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/signup" element={<FormPage onPage="signup" />} />
            <Route path="/login" element={<FormPage onPage="login" />} />
          </Route>
          {currentUser && <Route path="/user" element={<UserPanel />} />}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </DarkModeContextProvider>
    </>
  );
}

export default App;
