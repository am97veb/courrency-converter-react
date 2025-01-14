import { useState, useEffect } from "react";
import { currencyDownload } from "./currencyDownload";

const useCurrencyDownload = () => {
    const [dataState, setDataState] = useState({status: "loading", currencyData: null});

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await currencyDownload;

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