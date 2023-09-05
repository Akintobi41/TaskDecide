import { useEffect, useState } from "react";
import Header from "../header/Header";
import DarkMode from "../dark-mode/DarkMode";
import Main from "../main/Main";
import s from "./s_layout.module.css";

const Layout = () => {
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
    <section className={s.layout}>
      <Header toggle={toggle} setToggle={setToggle} />
      <DarkMode setToggle={setToggle} toggle={toggle} />
      <Main toggle={toggle} setToggle={setToggle} />
    </section>
  );
};

export default Layout;
