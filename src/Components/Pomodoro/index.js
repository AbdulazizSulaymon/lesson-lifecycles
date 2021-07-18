import { useState, useEffect } from "react";
import "./style.css"

const Pomodoro = (props) => {
    const workTime = props.workTime;
    const restTime = props.restTime;

    const [minute, setminute] = useState(workTime);
    const [second, setsecond] = useState(0);
    const [isWorking, setIsWorking] = useState(true);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        status && setTimeout(() => {
            if (second > 0) setsecond(second - 1);
            else {
                if (minute != 0) setsecond(59);
                if (minute > 0) setminute(minute - 1)
                else {
                    if (isWorking) {
                        alert("Dam oling!");
                        setminute(restTime)
                    }
                    else {
                        alert("Ishni boshlang!");
                        setminute(workTime)
                    }

                    setIsWorking(!isWorking)
                }
            }
        }, 1000)
    }, [second, isWorking, status])

    const setZero = (n) => (n < 10 ? "0" : "") + n;
    const setZero2 = (n) => (n < 10 && "0" || "") + n;
    const setZero3 = (n) => {
        if (n < 10) n = "0" + n;
        return n;
    }

    return status ?
        <h1>{setZero(minute)}:{setZero3(second)}</h1> :
        <button className="btn btn-dark" onClick={() => setStatus(true)}>Start</button>
}

export default Pomodoro;