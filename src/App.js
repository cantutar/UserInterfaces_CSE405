import FormPage from "./components/FormPage/FormPage";
// import Navbar from "./components/UI/Navbar/Navbar";
// import Home from "./pages/Home";
import DarkModeContextProvider from "./store/darkmode-context";

function App() {
  return (
    <DarkModeContextProvider>
      {/* <Navbar /> */}
      <FormPage />
      {/* <Home /> */}
    </DarkModeContextProvider>
  );
}

export default App;
