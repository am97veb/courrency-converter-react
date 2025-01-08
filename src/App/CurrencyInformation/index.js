import { StyledInformation, SideInformation } from "./styled";

const CurrencyInformation = () => (
    <StyledInformation>
        Kursy walut pochodzą ze strony
        {" "}
        <a target="_blank" href="https://currencyapi.com/">currencyapi.com</a>*
        {" "}
        i są aktualne na dzień 
        {/* {meta.last_updated_at.value}. */}
        <br></br>
        <SideInformation>
            *strona otwiera się w nowej karcie
        </SideInformation>
    </StyledInformation>
)

export default CurrencyInformation;