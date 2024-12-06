import Form from "./Form";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [currencyName, setCurrency] = useState("EUR");
  const [amountValue, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const currencyTable = [
    { id: 1, name: "EUR", value: 4.34 },
    { id: 2, name: "USD", value: 4.03 },
    { id: 3, name: "CHF", value: 4.57 },
  ];

  const filterNameOnTable = currencyTable.filter(({ name }) => name === currencyName);
  const currencyValue = filterNameOnTable.map(({ value }) => value);

  const calculation = () => {
    return amountValue / currencyValue
  };

  return (

    <main>
      <Form
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