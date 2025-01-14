import Form from "./Form";
import Result from "./Form/Result";
import Clock from "./Clock";
import CurrencyInformation from "./CurrencyInformation";
import { useState } from "react";
import { GlobalStyles } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import useCurrencyDownload from "./Form/useCurrencyDownload";

function App() {
  const [currencyName, setCurrency] = useState("EUR");
  const [amountValue, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const dataState = useCurrencyDownload();

  const calculation = (currencyName, amountValue) => {
    const filterNameOnTable = Object.values(dataState.currencyData.data)
      .filter(({ code }) => code === currencyName);
    const currencyValue = filterNameOnTable.map(({ value }) => value);

    setResult({
      wynik: amountValue * currencyValue,
      currencyName,
    });
  };

  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Form
          clock={<Clock />}
          setCurrency={setCurrency}
          currencyName={currencyName}
          amountValue={amountValue}
          setAmount={setAmount}
          dataState={dataState}
          currencyInformation={<CurrencyInformation
            dataState={dataState}
          />}
          result={<Result
            amountValue={amountValue}
            result={result}
            currencyName={currencyName}
            calculation={calculation}
          />}
        />
      </ThemeProvider>
    </main>
  )
}

export default App;