import { useEffect, useState } from "react";
import s from "./s_main.module.css";
const Main = () => {
  const [name, setName] = useState("");
  const [task, setTask] = useState([]);
  const [select, setSelect] = useState(true);
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(1 + num);
    setName(name);
    console.log(name.length);
    name.length ? setTask([...task, name]) : undefined;

    setName("");
  };
  const handleDelete = (id) => {
    setTask(
      task.filter((e, i) => {
        return i != id;
      })
    );
  };

  useEffect(() => {
    return task.length < 1 && num
      ? setSelect(false)
      : setSelect(true);
  }, [num, task]);

  const Random = () => {
    setNum(1 + num);
    !task.length ? setSelect(false) : setSelect(true);
  };

  return (
    <section className={s["main-container"]}>
      <p className={s.p}>
        Explore Options, Embrace Fun: Your Day, Your Way!
      </p>
      <button className={s.button} onClick={Random}>
        {" "}
        Help Me Decide
      </button>
      <p className={`${s.add} ${select ? s.hide : s.show}`}>
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
  );
};

export default Main;
