import Form from "./Form";
import Label from "./Label";
import Amount from "./Amount";
import Currency from "./Currency";
import Result from "./Result";
import Button from "./Button";
import Fieldset from "./Fieldset";
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

    <Form>
      <Fieldset
        fieldsetTitle="Kalkulator walut"
      >
        <Label
          labelText="Waluta:"
          formField={
            <Currency
              currencyTable={currencyTable}
              currencyName={currencyName}
              setCurrency={setCurrency}
            />
          }
        />
        <Label
          labelText="Kwota do przeliczenia:"
          formField={
            <Amount
              amountValue={amountValue}
              setAmount={setAmount}
            />
          }
        />
        <Result
          result={result}
          amountValue={amountValue}
          currencyName={currencyName}
        />
        <Button
          calculation={calculation}
          result={result}
          setResult={setResult}
          amountValue={amountValue}
          currencyName={currencyName}
        />
      </Fieldset>
    </Form>
  )
}

export default App;