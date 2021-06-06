import React, { useEffect } from 'react';
import Frame from './Frame';
import "./ScoreBoard.css"

const ScoreBoard = ({scoreSheet}) => {


    const frameArray = Array.from(Array(10), (_, index) => index + 1);

    return (
        <div className="scoreboard">
            <div className="frames" >
                {
                    frameArray.map((num, index) => (
                        <Frame
                            key={index}
                            frameNum={num}
                            frame={scoreSheet[`frame${num}`]}
                        />
                    ))
                }
            </div>
            <h1>Game Score = 133</h1>
        </div>
    );
};

export default ScoreBoard;