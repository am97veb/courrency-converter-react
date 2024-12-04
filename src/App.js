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
  const [resultValue, setResultValue] = useState("brak");

  const currencyTable = [
    { id: 1, name: "EUR", value: 4.34 },
    { id: 2, name: "USD", value: 4.03 },
    { id: 3, name: "CHF", value: 4.57 },
  ];

  const filterNameOnTable = currencyTable.filter(({ name }) => name === currencyName);
  const currencyValue = filterNameOnTable.map(({ value }) => value);

  const result = () => {
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
          resultValue={resultValue}
          amountValue={amountValue}
          currencyName={currencyName}
        />
        <Button
          result={result}
          resultValue={resultValue}
          setResultValue={setResultValue}
          amountValue={amountValue}
          currencyName={currencyName}
        />
      </Fieldset>
    </Form>
  )
}

export default App;