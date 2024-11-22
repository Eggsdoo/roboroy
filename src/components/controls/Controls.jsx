import React from "react";
import './controls.css';

const Controls = ({moveForward, turnLeft, turnRight}) => {
    return (
        <div className="controls">
            <button onClick={turnLeft}>Turn Left</button>
            <button onClick={moveForward}>Move Forward</button>
            <button onClick={turnRight}>Turn Right</button>
        </div>
    );
}

export default Controls;