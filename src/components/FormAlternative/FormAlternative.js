
import Checkbox from '../Checkbox/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import MeasureSubmitArea from '../MeasureSubmitArea/MeasureSubmitArea';
import RadioButtons from '../RadioButtons/RadioButtons';
import './FormAlternative.css';


const FormAlternative = ({movie, isTrue, animals, formName}) => {

    return (
    <div className="form-wrapper" >
        <div className="form-upper" >
            {formName}
        </div>
        <div className='form-divider'></div>
        <div className="form-lower-wrapper" >
            <div className="form-lower" >
                <Dropdown value={movie} disabled = {true} options={[movie]} />
                <Checkbox checked={isTrue} label="Label" disabled={true} />
                <RadioButtons value={animals[0]} handleChange={()=>{}} label={"Favourite Animal"} options={animals}  disabled={true} />

                <Dropdown value={movie} disabled = {true} options={[movie]} />
                <Checkbox checked={!isTrue} label="Label" disabled={true} />
                <RadioButtons value={animals[0]} handleChange={()=>{}} label={"Favourite Animal"} options={animals}  disabled={true} />

                <Dropdown value={movie} disabled = {true} options={[movie]} />
                <Checkbox checked={isTrue} label="Label" disabled={true} />
                <RadioButtons value={animals[1]} handleChange={()=>{}} label={"Favourite Animal"} options={animals}  disabled={true} />
            </div>
            <MeasureSubmitArea options={["Malignant", "Benign"]} type={"RadioButtons"}  />
        </div>
    </div>
    )


}

export default FormAlternative;