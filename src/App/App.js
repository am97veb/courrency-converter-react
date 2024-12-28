import Form from "./Form";
import Result from "./Form/Result";
import Clock from "./Clock";
import { currencyTable } from "./currencyTable";
import { useState } from "react";
import { GlobalStyles } from "./globalStyle";

function App() {
  const [currencyName, setCurrency] = useState("EUR");
  const [amountValue, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const calculation = (currencyName, amountValue) => {
    const filterNameOnTable = currencyTable.filter(({ name }) => name === currencyName);
    const currencyValue = filterNameOnTable.map(({ value }) => value);

    setResult({
      wynik: amountValue / currencyValue,
      currencyName,
    });
  };

  return (

    <main>
      <GlobalStyles />
      <Form
        clock={<Clock />}
        setCurrency={setCurrency}
        currencyTable={currencyTable}
        currencyName={currencyName}
        amountValue={amountValue}
        setAmount={setAmount}
        result={<Result
          amountValue={amountValue}
          result={result}
          currencyName={currencyName}
          calculation={calculation}
        />}
      />
    </main>
  )
}

export default App;