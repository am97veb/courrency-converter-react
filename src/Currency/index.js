import "./style.css";

const Currency = ({ currencyTable, currencyName, setCurrency }) => (
    <select
        value={currencyName}
        onChange={(event) => setCurrency(event.target.value)}
        className="form__field"
    >
        {currencyTable.map(currencyTable => (
            <option key={currencyTable.id}>{currencyTable.name}</option>
        ))}
    </select>
);

export default Currency;