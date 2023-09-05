import s from "./s_share.module.css";
const Share = ({ popUp }) => {
  const link = `http://twitter.com/intent/tweet?text=Confused%20about%20how%20to%20handle%20your%20daily%20plans?%20%20Elevate%20your%20daily%20routine%20with%20'What%20to%20Do'%3A&url=http%3A%2F%2Fgoogle.com%2F&`;
  return (
    <section className={s.share}>
      <a
        href={link}
        className={`${s["share-text"]} ${
          popUp ? s.show : ""
        }`}
        target="_blank"
        rel="noreferrer"
      >
        Join the Twitter Party!
      </a>{" "}
    </section>
  );
};

export default Share;
