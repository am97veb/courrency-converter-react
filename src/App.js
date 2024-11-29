import Form from "./Form";
import Label from "./Label";
import Amount from "./Amount";
import Currency from "./Currency";
import Result from "./Result";
import Button from "./Button";
import Fieldset from "./Fieldset";

function App() {
  return (

    <Form>
      <Fieldset
        fieldsetTitle="Kalkulator walut"
      >
        <Label
          labelText="Waluta:"
          formField={<Currency />}
        />
        <Label
          labelText="Kwota do przeliczenia:"
          formField={<Amount />}
        />
        <Result />
        <Button />
      </Fieldset>
    </Form>
  )
}

export default App;