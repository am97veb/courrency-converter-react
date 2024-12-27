import { StyledForm, FormFieldset, FormLegend, LabelText, FormField } from "./styled";

const Form = ({ currencyName, setCurrency, currencyTable, amountValue, setAmount, clock, result }) => {

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
                            {currencyTable.map(currencyTable => (
                                <option key={currencyTable.id}>{currencyTable.name}</option>
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
            </FormFieldset>
        </StyledForm >
    );
};

export default Form;