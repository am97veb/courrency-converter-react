import { Button, ResultText } from "./styled";

const Result = ({ amountValue, result, currencyName, calculation }) => (
    <>
        < p >
            Wynik:
            <ResultText>
                {result === null || amountValue < 0
                    ? "brak"
                    :
                    <>
                        {result.wynik.toFixed(2)}&nbsp;
                        {result.currencyName}
                    </>
                }
            </ResultText>

        </p >

        <Button
            onClick={() => amountValue === "" || amountValue < 1
                ? result === "brak"
                : calculation(currencyName, amountValue)
            }
        >
            Przelicz
        </Button>
    </>
);

export default Result;