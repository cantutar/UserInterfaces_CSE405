import { useState } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import FormPage from "./pages/FormPage";

function App() {
  const [isDarkValid, setIsDarkValid] = useState(false);

  function darkModeHandler() {
    setIsDarkValid(true);
  }

  return (
    <div>
      <Navbar onValid={isDarkValid} onSetIsDarkValid={darkModeHandler} />
      <div className="container">
        <FormPage onValid={isDarkValid} />
      </div>
    </div>
  );
}

export default App;
