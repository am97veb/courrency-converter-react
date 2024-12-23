import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="form__clock">
            Dzisiaj jest {date.toLocaleDateString("pl", { weekday: "long", day: "numeric", month: "long" })}, {date.toLocaleTimeString()}
        </p>
    );
};

export default Clock;