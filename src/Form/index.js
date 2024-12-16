import "./style.css";

const Form = ({ setCurrency, currencyTable, currencyName, amountValue, setAmount, result, clock }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        < form
            onSubmit={onFormSubmit}
            className="form"
        >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                {clock}
                <p>
                    <label>
                        <span className="form__labelText">
                            Waluta:
                        </span>
                        <select
                            value={currencyName}
                            onChange={(event) => setCurrency(event.target.value)}
                            className="form__field"
                        >
                            {currencyTable.map(currencyTable => (
                                <option key={currencyTable.id}>{currencyTable.name}</option>
                            ))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota do przeliczenia:
                        </span>
                        <input
                            value={amountValue}
                            onChange={(event) => setAmount(event.target.value)}
                            className="form__field"
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
            </fieldset>
        </form >
    );
};

export default Form;