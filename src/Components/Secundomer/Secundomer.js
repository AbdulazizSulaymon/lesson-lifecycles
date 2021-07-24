import { useEffect, useState } from "react";
import "./Secundomer.css";
import moment from 'moment';

const setZero = n => n < 10 ? "0" + n : n;

const Secundomer = (props) => {
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [millisecond, setMillisecond] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (second >= 60) {
                setSecond(0);
                setMinute(minute + 1)
            }

            if (millisecond >= 99) {
                setMillisecond(0);
                setSecond(second + 1)
            }
            else setMillisecond(millisecond + 1);
        }, 10)
    }, [millisecond])



    return <h1>{setZero(minute)}:{setZero(second)}:{setZero(millisecond)}</h1>
}

export default Secundomer;