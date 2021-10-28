import Navbar from "./components/UI/Navbar/Navbar";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormPage />
      </div>
    </div>
  );
}

export default App;
