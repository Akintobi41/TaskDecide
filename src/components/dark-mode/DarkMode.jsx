import { useEffect } from "react";
import s from "./s_darkmode.module.css";
const DarkMode = ({ toggle, setToggle }) => {
  //   useEffect(() => {
  //     console.log(toggle);
  //   }, [toggle]);
  return (
    <section className={s["dark-mode"]}>
      <div
        className={`${s.label} ${toggle ? s.switch : " "}`}
        onClick={() => setToggle(!toggle)}
      >
        {/* <img src="" alt="" /> */}
        <div
          className={`${s.toggler} ${
            toggle ? s["toggler-dark"] : " "
          }`}
        ></div>{" "}
      </div>
    </section>
  );
};

export default DarkMode;
