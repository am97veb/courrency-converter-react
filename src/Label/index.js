import "./style.css"

const Label = ({ labelText, formField }) => (
  <p>
    <label>
      <span className="form__labelText">
        {labelText}
      </span>
      
      {formField}
    </label>
  </p>
);

export default Label;