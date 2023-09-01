import { useEffect, useState } from "react";
import s from "./s_main.module.css";
const Main = () => {
  const [name, setName] = useState("");
  const [task, setTask] = useState([]);
  const [select, setSelect] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [num, setNum] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    setNum(1 + num);
    setName(name);
    // console.log(name.length);
    // console.log(task.length);
    // console.log(num);
    !name.length || name.startsWith(" ")
      ? setCheckName(true)
      : update();
    // : setSelect(false);
    // console.log(select);
    setName("");
  };
  const handleDelete = (id) => {
    setTask(
      task.filter((e, i) => {
        return i != id;
      })
    );
  };
  function update() {
    setTask([...task, name]);
    setCheckName(false);
  }

  useEffect(() => {
    num && !task.length
      ? setSelect(true)
      : setSelect(false);
  }, [num, task, select]);

  const rndm = () => {
    setPopUp(true);
    setText(task[Math.floor(Math.random() * task.length)]);
  };

  const Random = () => {
    setNum(1 + num);
    task.length ? rndm() : undefined;
  };

  return (
    <>
      <section className={s["main-container"]}>
        <p className={s.p}>
          Explore Options, Embrace Fun: Your Day, Your Way!
        </p>
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
          <ol className={s.ul}>
            {task.map((el, i) => (
              <section className={s["list-parent"]} key={i}>
                <li className={s.li}>{el}</li>
                <button onClick={() => handleDelete(i)}>
                  delete
                </button>
              </section>
            ))}
          </ol>
        </section>
      </section>
      <section
        className={`${popUp ? s["pop-up"] : s.hide}`}
      >
        <section className={s["pop-up-text"]}>
          <p>{text}</p> <button>OK</button>
        </section>
      </section>
    </>
  );
};

export default Main;
