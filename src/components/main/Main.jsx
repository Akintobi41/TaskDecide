// import { useEffect, useState } from "react";
import s from "./s_main.module.css";
import useOption from "./useOption";
const Main = () => {
  const {
    Random,
    name,
    setName,
    setPopUp,
    text,
    popUp,
    select,
    checkName,
    handleClick,
    handleDelete,
    task,
    removeAll,
  } = useOption();
  return (
    <>
      {" "}
      <p className={s.p}>
        Explore Options, Embrace Fun: Your Day, Your Way!
      </p>
      <section
        className={`${s["main-container"]} ${
          popUp ? s.shrink : ""
        }`}
      >
        <button className={s.button} onClick={Random}>
          {" "}
          Help Me Decide
        </button>
        <p
          className={`${s.add} ${
            select || checkName ? s.show : s.hide
          }`}
        >
          Unlock the Possibilities: No Tasks Entered.
        </p>

        <section className={s["input-section"]}>
          <input
            type="text"
            className={s.input}
            value={name}
            autoComplete="true"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className={s["select-button"]}
            onClick={(e, el) => handleClick(e, el)}
          >
            Add option
          </button>
        </section>
        <section className={s.task}>
          <div className={s.remove}>
            <p className="opt">Your options</p>
            <p
              className={s["remove-all"]}
              onClick={removeAll}
            >
              Delete All
            </p>
          </div>
          <ol className={s.ul}>
            {task.map((el, i) => (
              <section className={s["list-parent"]} key={i}>
                <li className={s.li}>{el}</li>
                <button
                  onClick={() => handleDelete(i)}
                  className={s.delete}
                >
                  delete
                </button>
              </section>
            ))}
          </ol>
        </section>
      </section>
      <section
        className={`${
          popUp ? s["pop-up"] : s["hide-popUp"]
        }`}
      >
        <section className={s["pop-up-text"]}>
          <p>Well, you have a choice now!</p>
          <p className={s["suggested-text"]}>{text}</p>{" "}
          <button
            className={s["suggested-button"]}
            onClick={() => setPopUp(false)}
          >
            OK
          </button>
        </section>
      </section>
    </>
  );
};

export default Main;
