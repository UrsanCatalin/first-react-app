import { useState } from "react";
import "./counter.css";

const Counter = (props) => {
    const [count, setCount] = useState(props.initialValue || 0);
    const [displayColor, setDisplayColor] = useState('');

    const setBgColorDisplay = () => {
        if(count >= 50){
            setDisplayColor('red');
        }
        else {
            setDisplayColor('');
        }
    }

    const handleInc = () => {
        setCount((state) => state + 1);
        setBgColorDisplay()
    }

    const handleDec = () => {
        setCount((state) => state - 1);
        setBgColorDisplay()
    }

    return (
        <div className="counter-container">
            <div className={`counter-display ${displayColor}`}>
                {count}
            </div>
            <div className="counter-controls">
                <button onClick={handleDec}>---</button>
                <button onClick={handleInc}>+++</button>
            </div>
        </div>
    )
}

export default Counter;