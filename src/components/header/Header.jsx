import s from "./s_header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="public/take-note_8910864.png"
        alt="note-icon"
        className={s.img}
      />
      <h3 className={s.h3}>what To Do?</h3>
    </header>
  );
};

export default Header;
