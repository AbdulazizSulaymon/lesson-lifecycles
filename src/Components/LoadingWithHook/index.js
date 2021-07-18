import { useEffect, useState } from "react";
import "./style.css"

// 1 - ko'rinishi
// function LoadingWithHook(props) {
//     return <h1>LoadingWithHook</h1>
// }

// 2 - ko'rinishi
const LoadingWithHook = (props) => {
    const [step, setStep] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("red");

    useEffect(() => {
        console.log("useEffect ishladi");

        if (step >= 30 && step < 70) setBackgroundColor("yellow");
        else if (step >= 70) setBackgroundColor("green");

        setTimeout(() => {
            if (step < 100) setStep(step + 1)
        }, 100)
    }, [step])

    return <div className="loading-panel">
        <div className="loading" style={{ width: `${step}%`, backgroundColor: backgroundColor }}>{step}</div>
    </div>
}

export default LoadingWithHook;