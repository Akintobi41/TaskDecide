import s from "./s_PopUp.module.css";
const PopUp = ({ popUp, setPopUp, text }) => {
  return (
    <section
      className={`${popUp ? s["pop-up"] : s["hide-popUp"]}`}
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
  );
};

export default PopUp;
