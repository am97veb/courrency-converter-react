import "./style.css";

const Button = ({ setResult, amountValue, result, calculation }) => (
    <button
        onClick={() => amountValue === "" || amountValue < 1 ? result === "brak" : setResult(result = calculation)}
        className="form__button"
    >
        Przelicz
    </button>
);

export default Button;