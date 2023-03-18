import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import RadioButtons from "../RadioButtons/RadioButtons";
import { useState } from "react";
import './MeasureSubmitArea.css';
import Modal from "../Modal/Modal";

const MeasureSubmitArea = ({options, type}) => {
    const [answerValue, setAnswerValue] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isErroneous, setIsErroneous] = useState(false);

    const handleSubmitClick = () => {
        //check if an selection is made
        if(answerValue===null){
            //show error message
            setIsErroneous(true);
            setShowModal(true);
        }
        else{
            //show success message
            //open pop-up ask for wanna fill another
            //fetch new sample
            setIsErroneous(false);
            setShowModal(true);
        }

    }

    const handleAnswerChange = (event) => {
        setAnswerValue(event.target.value);
    }

    return (
        
        showModal ? 
        <Modal isErroneous={isErroneous} closeModalCallback={()=>{setShowModal(false)}} />
        :
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