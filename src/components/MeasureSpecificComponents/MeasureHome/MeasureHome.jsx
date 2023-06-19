import styles from "./MeasureHome.module.css";
import { useHistory } from "react-router-dom";

const MeasureHome = () => {
  const history = useHistory();

  const onCardClick = (pageToNavigate) => {
    history.push(`/measure/${pageToNavigate}`);
  };

  return (
    <div className={styles["home-container"]}>
      <div
        className={styles["card-wrapper"]}
        onClick={() => {
          onCardClick("invite");
        }}
      >
        <div className={styles["card-upper"]}>Invite User</div>
        <div className={styles["card-lower-wrapper"]}>
          <img
            src="https://i.hizliresim.com/d71i3c4.jpg"
            alt="inviteUserImage"
            className={styles["measure-home-image-style"]}
          />
        </div>
      </div>
      <div
        className={styles["card-wrapper"]}
        onClick={() => {
          onCardClick("predict");
        }}
      >
        <div className={styles["card-upper"]}>Make Prediction</div>
        <div className={styles["card-lower-wrapper"]}>
          <img
            src="https://i.hizliresim.com/aa5qio4.jpg"
            alt="predictionImage"
            className={styles["measure-home-image-style"]}
          />
        </div>
      </div>
      <div
        className={styles["card-wrapper"]}
        onClick={() => {
          onCardClick("analytics");
        }}
      >
        <div className={styles["card-upper"]}>View Analytics</div>
        <div className={styles["card-lower-wrapper"]}>
          <img
            src="https://i.hizliresim.com/b7bj157.jpg"
            alt="analyticsImage"
            className={styles["measure-home-image-style"]}
          />
        </div>
      </div>
    </div>
  );
};

export default MeasureHome;
