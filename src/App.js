import { Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage/FormPage";
import Navbar from "./components/UI/Navbar/Navbar";
import Page404 from "./pages/404Page";
import Home from "./pages/Home";
import DarkModeContextProvider from "./store/darkmode-context";

function App() {
  return (
    <DarkModeContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<FormPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </DarkModeContextProvider>
  );
}

export default App;
