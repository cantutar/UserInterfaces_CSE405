import Navbar from "./components/UI/Navbar/Navbar";
import FormPage from "./pages/FormPage";
import DarkModeContextProvider from "./store/darkmod-context";

function App() {
  return (
    <DarkModeContextProvider>
      <Navbar />
      <div className="container my-3 d-flex justify-content-center align-items-center">
        <FormPage />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
