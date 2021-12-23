import FormPage from "./components/FormPage/FormPage";
import Navbar from "./components/UI/Navbar/Navbar";
import DarkModeContextProvider from "./store/darkmode-context";

function App() {
  return (
    <DarkModeContextProvider>
      <Navbar />
      <FormPage />
    </DarkModeContextProvider>
  );
}

export default App;
