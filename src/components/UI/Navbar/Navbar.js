import DarkmodeToggle from "../Buttons/DarkmodeToggle";
import { useEffect, useState } from "react";
import { useTheme, useToggleDark } from "../../../store/darkmod-context";

function Navbar(props) {
  const theme = useTheme();
  const TMode = useToggleDark();
  const [mode, setMode] = useState("dark");
  const [icon, setIcon] = useState("🌙");
  useEffect(() => {
    if (theme === false) {
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
    <nav className={`navbar bg-${theme ? "light" : "dark"}`}>
      <div className="container-fluid">
        <div className="row">
          <DarkmodeToggle icon={icon} mode={mode} clickEvent={TMode} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
