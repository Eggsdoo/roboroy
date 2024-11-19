import React from "react";
import { GiOwl } from "react-icons/gi";
import './robot.css';


const Robot = ({x, y, direction}) => {
    return (
            <div className="robot" style={{ top: `${y * 20}%`, left: `${x * 20}%` }}>
            <GiOwl />
            </div>
    );
}

export default Robot;