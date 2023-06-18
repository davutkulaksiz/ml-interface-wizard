import "./MeasureHome.css";
import { useHistory } from "react-router-dom";

const MeasureHome = () => {
  const history = useHistory();

  const onCardClick = (pageToNavigate) => {
    history.push(`/measure/${pageToNavigate}`);
  };

  return (
    <div className="home-container">
      <div
        className="card-wrapper"
        onClick={() => {
          onCardClick("invite");
        }}
      >
        <div className="card-upper">Invite A User</div>
        <div className="card-lower-wrapper">
          <img
            src="https://i.hizliresim.com/d71i3c4.jpg"
            alt="inviteUserImage"
            className="measure-home-image-style"
          />
        </div>
      </div>
      <div
        className="card-wrapper"
        onClick={() => {
          onCardClick("predict");
        }}
      >
        <div className="card-upper">Make A Prediction</div>
        <div className="card-lower-wrapper">
          <img
            src="https://i.hizliresim.com/aa5qio4.jpg"
            alt="predictionImage"
            className="measure-home-image-style"
          />
        </div>
      </div>
    </div>
  );
};

export default MeasureHome;
