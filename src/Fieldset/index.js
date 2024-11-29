import "./style.css";

const Fieldset = ({ children, fieldsetTitle }) => (
    <fieldset className="form__fieldset">
        <legend className="form__legend">{fieldsetTitle}</legend>
        {children}
    </fieldset>
);

export default Fieldset;