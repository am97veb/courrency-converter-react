import { StyledForm, FormFieldset, FormLegend, LabelText, FormField, LoadingText, ErrorText, Imagin } from "./styled";
import loadingGif from "./loadingGif.gif";

const Form = ({ currencyName, setCurrency, amountValue, setAmount, clock, result, currencyInformation, dataState }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <FormFieldset>
        <FormLegend>
          Kalkulator walut
        </FormLegend>
        {clock}
        {dataState.status === "loading"
          ?
          (<>
            <LoadingText>Proszę czekać, trwa ładowanie danych⏳</LoadingText>
            <Imagin src={loadingGif} alt="ikona ładowania" />
          </>
          )
          :
          dataState.status === "error"
            ?
            (<ErrorText>Upsik... coś poszło nie tak😮
              <br></br>
              Przeładuj stronę lub spróbuj później.</ErrorText>)
            :
            (
              <>
                <p>
                  <label>
                    <LabelText>
                      Waluta:
                    </LabelText>
                    <FormField
                      value={currencyName}
                      onChange={(event) => setCurrency(event.target.value)}
                    >
                      {Object.keys(dataState.currencyData.data).map(currencyData => (
                        <option key={currencyData}>{currencyData}</option>
                      ))}
                    </FormField>
                  </label>
                </p>
                <p>
                  <label>
                    <LabelText>
                      Kwota do przeliczenia:
                    </LabelText>
                    <FormField
                      value={amountValue}
                      onChange={(event) => setAmount(event.target.value)}
                      as="input"
                      name="amount"
                      type="number"
                      min="1"
                      step="any"
                      placeholder="PLN"
                      required
                    />
                  </label>
                </p>
                {result}
                {currencyInformation}
              </>
            )}
      </FormFieldset>
    </StyledForm >
  );
};

export default Form;