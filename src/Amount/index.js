import "./style.css";

const Amount = ({amountValue, setAmount}) => (
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
)

export default Amount;