import { useState, useEffect } from "react";
import { fetchApiData } from "./fetchApiData";
import { source } from "./source"; 

const useCurrencyDownload = () => {
    const [dataState, setDataState] = useState({status: "loading", currencyData: null});

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const currency = await fetchApiData(source);
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