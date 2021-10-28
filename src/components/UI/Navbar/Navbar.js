import DarkmodeToggle from "../Buttons/DarkmodeToggle";
import { useState } from "react";

function Navbar(props) {
  const [toggle, settoggle] = useState(false);
  const [mode, setMode] = useState("dark");
  const [icon, setIcon] = useState("☀️");

  function onClickHandler() {
    if (toggle === false) {
      setMode("light");
      settoggle(true);
      setIcon("🌙");
      document.body.style.background = "#121212";
    } else {
      setMode("dark");
      settoggle(false);
      setIcon("☀️");
      document.body.style.background = "white";
    }
  }

  return (
    <nav className={`navbar bg-${!toggle ? "light" : "dark"}`}>
      <div className="container-fluid">
        <div className="row">
          <DarkmodeToggle icon={icon} mode={mode} clickEvent={onClickHandler} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
