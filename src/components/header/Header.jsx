import s from "./s_header.module.css";
// import logo from "/what To Do/src/assets/take-note_8910864.png";
const Header = () => {
  return (
    <header className={s.header}>
      <img
        src={"/what To Do/public/take-note_8910864.png"}
        alt=""
      />
      <h3 className={s.h3}>what To Do?</h3>
    </header>
  );
};

export default Header;
