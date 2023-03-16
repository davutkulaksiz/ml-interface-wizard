import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import RadioButtons from "../RadioButtons/RadioButtons";
import { useState } from "react";
import './MeasureSubmitArea.css';

const MeasureSubmitArea = ({options, type}) => {
    const [answerValue, setAnswerValue] = useState("Cat");

    const handleSubmitClick = () => {

    }

    const handleAnswerChange = (event) => {
        setAnswerValue(event.target.value);
    }

    return (
        <div className="submit-area-wrapper" >
            <div style={{fontSize: 25, fontWeight:500, marginBottom:30}} >
                Pick One
            </div>
            <div className="options-wrapper" >
            {
                type === "dropdown"
                ?
                <Dropdown onChange={handleAnswerChange} options={options} disabled={false} value={answerValue} />
                :
                <RadioButtons handleChange={handleAnswerChange} disabled={false} options={options} label={""} value={answerValue} row={true} />
            }
            </div>
            <Button buttonType={"success"} text="Submit" type={"submit"} onClick={handleSubmitClick} />
        </div>
    )
}


export default MeasureSubmitArea;