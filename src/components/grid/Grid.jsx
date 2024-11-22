import React, { useState } from "react";
import Robot from "../robots/Robot";
import Controls from "../controls/Controls";
import './grid.css';

const Grid = () => {
    const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, direction: 'north' });


    const moveForward = () => {
        setRobotPosition((prevPosition) => {
            let { x, y, direction } = prevPosition;
            switch (direction) {
                case 'north':
                    if (y > 0) y -= 1;
                    break;
                case 'east':
                    if (x < 4) x += 1;
                    break;
                case 'south':
                    if (y < 4) y += 1;
                    break;
                case 'west':
                    if (x > 0) x -= 1;
                    break;
                default:
                    break;
            }
            return { ...prevPosition, x, y };
        });
    };

    const turnLeft = () => {
        setRobotPosition((prevPosition) => {
            const directions = ['north', 'west', 'south', 'east'];
            const currentIndex = directions.indexOf(prevPosition.direction);
            const newDirection = directions[(currentIndex + 1) % 4];
            return { ...prevPosition, direction: newDirection };
        })
    }

    const turnRight = () => {
        setRobotPosition((prevPosition) => {
            const directions = ['north', 'east', 'south', 'west'];
            const currentIndex = directions.indexOf(prevPosition.direction);
            const newDirection = directions[(currentIndex + 1) % 4];
            return { ...prevPosition, direction: newDirection };
        })
    }

    return (
        <>
            <div className="control-menu">
                <Controls moveForward={moveForward} turnLeft={turnLeft} turnRight={turnRight} />
                <div className="current-direction">
                    <h3>You are currently facing <span className="current-direction_sp">{robotPosition.direction}</span>.</h3>
                </div>
            </div>
            <div className="grid">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
            <Robot x={robotPosition.x} y={robotPosition.y} direction={robotPosition.direction} />
            </div>
        </>
    );
}

export default Grid;