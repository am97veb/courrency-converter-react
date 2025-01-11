import { StyledInformation, SideInformation } from "./styled";

const CurrencyInformation = ({ currencyData }) => {

    const currencyDate = Object.values(currencyData.meta);
    const newDate = new Date(currencyDate);

    return (
        <StyledInformation>
            Kursy walut pochodzą ze strony
            {" "}
            <a target="_blank" rel="noreferrer noopener" href="https://currencyapi.com/">currencyapi.com</a>*
            {" "}
            i&nbsp;są&nbsp;aktualne&nbsp;na&nbsp;dzień
            {" "}
            {newDate.toLocaleDateString(undefined, { month: "long", year: "numeric", day: "numeric" })}
            &nbsp;roku.
            <br></br>
            <SideInformation>
                *strona otwiera się w nowej karcie.
            </SideInformation>
        </StyledInformation>
    );
};

export default CurrencyInformation;