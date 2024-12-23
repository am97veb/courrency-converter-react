import Form from "./Form";
import Result from "./Form/Result";
import Clock from "./Clock";
import { currencyTable } from "./currencyTable";
import { useState } from "react";

function App() {
  const [currencyName, setCurrency] = useState("EUR");
  const [amountValue, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const filterNameOnTable = currencyTable.filter(({ name }) => name === currencyName);
  const currencyValue = filterNameOnTable.map(({ value }) => value);

  const calculation = () => {
    return amountValue / currencyValue
  };

  return (
    <main>
      <Form
        clock={<Clock />}
        setCurrency={setCurrency}
        currencyTable={currencyTable}
        currencyName={currencyName}
        amountValue={amountValue}
        setAmount={setAmount}

        result={<Result
          setResult={setResult}
          amountValue={amountValue}
          result={result}
          currencyName={currencyName}
          calculation={calculation}
        />}
      />
    </main >
  )
}

export default App;