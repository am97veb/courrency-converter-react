import "./style.css";

const Result = ({ resultValue, amountValue, currencyName }) => (
    < p >
        Wynik:
        <span className="result">
            {resultValue === "brak" || amountValue < 0 ? resultValue = "brak" : resultValue.toFixed(2)}
        </span>
        <span>
            {resultValue > 0 ? currencyName : ""}
        </span>
    </p >
);

export default Result;