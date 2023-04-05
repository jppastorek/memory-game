import React from "react";

const ScoreBoard = ({score, best}) => {

    return (
        <div className="scoreboard">
            <div className="score">Score: {score}</div>
            <div className="best">Best: {best}</div>
        </div>
    )
}

export default ScoreBoard;