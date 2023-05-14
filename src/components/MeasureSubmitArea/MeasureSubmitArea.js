import Button from "../Button/Button";
import "./MeasureSubmitArea.css";

const MeasureSubmitArea = ({ options, onSubmit }) => {
  const handleSubmitClick = async (answerValue) => {
    onSubmit(answerValue);
  };

  return (
    <div className="submit-area-wrapper">
      <div>
        Make your prediction for the patient, according to the information
        above.{" "}
      </div>
      <div
        style={{
          fontSize: 25,
          fontWeight: 500,
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        Pick One
      </div>
      <div className="options-wrapper">
        {options.map((element, index) => {
          return (
            <Button
              text={element}
              key={index}
              type={"submit"}
              buttonType={"success"}
              onClick={() => {
                handleSubmitClick(element);
              }}
            ></Button>
          );
        })}
      </div>
    </div>
  );
};

export default MeasureSubmitArea;
