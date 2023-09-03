import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App() {
  const darkMode = JSON.parse(localStorage.getItem("mode"));
  const [toggle, setToggle] = useState(darkMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(toggle));
    let body = document.body;
    toggle
      ? body.classList.add("dark")
      : body.classList.remove("dark");
  }, [toggle]);
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} setToggle={setToggle} />
    </>
  );
}

export default App;
