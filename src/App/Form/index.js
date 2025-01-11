import { StyledForm, FormFieldset, FormLegend, LabelText, FormField } from "./styled";

const Form = ({ currencyName, setCurrency, amountValue, setAmount, clock, result, currencyInformation, currencyData }) => {

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
                
                <p>
                    <label>
                        <LabelText>
                            Waluta:
                        </LabelText>
                        <FormField
                            value={currencyName}
                            onChange={(event) => setCurrency(event.target.value)}
                        >
                            {Object.keys(currencyData.data).map(currencyData => (
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
            </FormFieldset>
        </StyledForm >
    );
};

export default Form;