import "./style.css";

const Amount = () => (
    <input
        className="form__field"
        name="amound"
        type="number"
        min="1"
        step="any"
        required
    />
);

export default Amount;