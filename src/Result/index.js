import "./style.css";

const Result = ({ result, amountValue, currencyName }) => (
    < p >
        Wynik:
        <span className="result">
            {result === null || amountValue < 0 ? result = "brak" : result.toFixed(2)}
        </span>
        <span>
            {result > 0 ? currencyName : ""}
        </span>
    </p >
);

export default Result;