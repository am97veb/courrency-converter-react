import { useState, useEffect } from "react";

const useCurrencyDownload = () => {
    const [currencyData, setCurrencyData] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch("currency-converter-react/currency.json");

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    };

                    const currency = await response.json();
                    setCurrencyData(currency);
                    // setDataState({loading: "success"});
                } catch (error) {
                    console.error("Ups...coś jest nie tak", error);
                    // setDataState({loading: "error"})
                };
            })();
        }, 1000);
    }, []);

    return currencyData;
};

export default useCurrencyDownload;