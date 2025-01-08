import Form from "./Form";
import Result from "./Form/Result";
import Clock from "./Clock";
import CurrencyInformation from "./CurrencyInformation";
import { currencyTable } from "./currencyTable";
import { useState } from "react";
import { GlobalStyles } from "./globalStyle";
// import currency from "./currency.json";

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




  fetch("courrency_converter_react/currency.json")
    .then(response => response.json())
    .then(currency => console.log(currency))
    .catch(error => console.error("Ups...coś poszło nie tak.", error));




  // (async () => {
  //   try{
  //     const response = await fetch("currency.json");

  //     if (!response.ok) {
  //       throw new Error (response.statusText);
  //     }
  //     const currency = await response.json();
  //     console.log(currency);
  //   }
  //   catch (error) {
  //     console.error("ups...coś poszło źle", error);
  //   }
  // }) ();


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
        currencyInformation={<CurrencyInformation />}
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