import MUITextField from "../MUITextField/MUITextField";
import RadioButtons from "../RadioButtons/RadioButtons";
import Checkbox from "../Checkbox/Checkbox";

export const componentConstants = {
  numericInput: "textfield",
  radioButtons: "radio-buttons",
  dropdown: "Dropdown",
  label: "label",
  checkbox: "checkbox",
};

const DynamicHtmlGenerator = ({ feature, value }) => {
  return (
    <div>
      {feature.type === componentConstants.radioButtons ? (
        <RadioButtons
          defaultValue={value}
          label={feature.description}
          handleChange={() => {}}
          options={feature.values}
          disabled={true}
        />
      ) : feature.type === componentConstants.checkbox ? (
        <Checkbox
          checked={true}
          label={feature.description}
          onChange={() => {}}
          disabled={true}
        />
      ) : (
        <MUITextField
          label={feature.description}
          onChange={() => {}}
          defaultValue={value}
          disabled={true}
        />
      )}
    </div>
  );
};

export default DynamicHtmlGenerator;
