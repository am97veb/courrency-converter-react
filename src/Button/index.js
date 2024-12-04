import "./style.css";

const Button = ({ setResultValue, amountValue, resultValue, result }) => (
    <button
        onClick={() => amountValue === "" || amountValue < 1 ? resultValue === "brak" : setResultValue(resultValue = result)}
        className="form__button"
    >
        Przelicz
    </button>
);

export default Button;