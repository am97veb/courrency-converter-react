import { StyledForm, FormFieldset, FormLegend } from "../Form/styled.js";
import { LoadingText } from "./styled.js";

const LoadingForm = ({ clock }) => {

    return (
        <StyledForm>
            <FormFieldset>
                <FormLegend>
                    Kalkulator walut
                </FormLegend>
                {clock}
                <LoadingText>
                    Proszę czekać, trwa ładowanie danych⏳
                </LoadingText>
            </FormFieldset>
        </StyledForm >
    )
}

export default LoadingForm;