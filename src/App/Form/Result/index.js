import "./style.css";

const Result = ({ setResult, amountValue, result, currencyName, calculation }) => (
    <>
        < p >
            Wynik:
            <span className="result">
                {result === null || amountValue < 0 ? result = "brak" : result.toFixed(2)}
            </span>
            <span>
                {result > 0 ? currencyName : ""}
            </span>
        </p >
        <button
            onClick={() => amountValue === "" || amountValue < 1 ? result === "brak" : setResult(result = calculation)}
            className="form__button"
        >
            Przelicz
        </button>
    </>
);

export default Result;