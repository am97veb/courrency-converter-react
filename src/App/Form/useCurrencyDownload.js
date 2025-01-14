import { useState, useEffect } from "react";

const useCurrencyDownload = () => {
    const [dataState, setDataState] = useState({status: "loading", currencyData: null});

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_QMcSRMkZ96pW8YABpy0Cnu6cfxFn560cnkq4pEpW&base_currency=PLN");

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    };

                    const currency = await response.json();
                    setDataState({status: "success", currencyData: currency});
                    
                } catch (error) {
                    setDataState({status: "error"});
                    console.error("Ups...coś jest nie tak", error);
                    
                };
            })();
        }, 1000);
    }, []);
    
    return  dataState;
};
    
export default useCurrencyDownload;