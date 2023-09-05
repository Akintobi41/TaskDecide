import s from "./s_main.module.css";
import useOption from "./useOption";
import PopUp from "../popup/PopUp";
import Share from "../share/Share";
const Main = ({ toggle }) => {
  const {
    Random,
    name,
    setPopUp,
    text,
    popUp,
    select,
    checkName,
    handleClick,
    handleDelete,
    task,
    removeAll,
    handleChange,
  } = useOption();
  return (
    <>
      <p className={`${s.p} ${popUp ? s["p-text"] : ""}`}>
        Explore Options, Embrace Fun: Your Day, Your Way!
      </p>
      <section
        className={`${s["main-container"]} ${
          popUp ? s.shrink : ""
        }`}
      >
        <button
          className={`${s.button} ${toggle ? s.dark : ""}`}
          onClick={Random}
        >
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
            onChange={(e) => handleChange(e)}
          />
          <button
            className={`${s["select-button"]} ${
              toggle ? s.dark : ""
            }`}
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
            {task?.map((el, i) => (
              <section
                className={`${s["list-parent"]} ${
                  toggle ? s["parent-dark"] : ""
                } `}
                key={i}
              >
                <li
                  className={`${s.li} ${
                    toggle ? s.dark : ""
                  }`}
                >
                  {el}
                </li>
                <button
                  onClick={() => handleDelete(i)}
                  className={`${s.delete} ${
                    toggle ? s.dark : ""
                  }`}
                >
                  delete
                </button>
              </section>
            ))}
          </ol>
        </section>
      </section>
      <PopUp
        popUp={popUp}
        setPopUp={setPopUp}
        text={text}
      />
      <Share popUp={popUp} />
    </>
  );
};

export default Main;
