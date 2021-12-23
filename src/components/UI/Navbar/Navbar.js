import DarkmodeToggle from "../Buttons/DarkmodeToggle";
import { useEffect, useState } from "react";
import { useTheme, useToggleDark } from "../../../store/darkmode-context";

function Navbar(props) {
  const theme = useTheme();
  const TMode = useToggleDark();
  const [mode, setMode] = useState("dark");
  const [icon, setIcon] = useState("🌙");
  useEffect(() => {
    if (theme === true) {
      setMode("light");
      setIcon("☀️");
      document.body.style.background = "#121212";
    } else {
      setMode("dark");
      setIcon("🌙");
      document.body.style.background = "white";
    }
  }, [theme]);

  return (
    <nav className={`navbar bg-${!theme ? "light" : "dark"}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h2>Can T.</h2>
          </div>
          <div className="col-md-3 ml-auto">
            <DarkmodeToggle icon={icon} mode={mode} clickEvent={TMode} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
