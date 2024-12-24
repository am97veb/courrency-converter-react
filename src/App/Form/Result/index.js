import { Button, ResultText } from "./styled";

const Result = ({ setResult, amountValue, result, currencyName, calculation }) => (
    <>
        < p >
            Wynik:
            <ResultText>
                {result === null || amountValue < 0 ? result = "brak" : result.toFixed(2)}
            </ResultText>
            <span>
                {result > 0 ? currencyName : ""}
            </span>
        </p >
        <Button
            onClick={() => amountValue === "" || amountValue < 1 ? result === "brak" : setResult(result = calculation)}
        >
            Przelicz
        </Button>
    </>
);

export default Result;