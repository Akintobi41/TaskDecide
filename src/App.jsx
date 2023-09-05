import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import DarkMode from "./components/dark-mode/DarkMode";
import Share from "./components/share/Share";

function App() {
  const darkMode = JSON.parse(localStorage.getItem("mode"));
  const [toggle, setToggle] = useState(darkMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(toggle));
    const body = document.body;
    toggle
      ? body.classList.add("dark")
      : body.classList.remove("dark");
  }, [toggle]);
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <DarkMode setToggle={setToggle} toggle={toggle} />
      <Main toggle={toggle} setToggle={setToggle} />
      <Share />
    </>
  );
}

export default App;
