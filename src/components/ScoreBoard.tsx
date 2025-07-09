import React from 'react';

interface ScoreBoardProps {
  score: number;
  attempts: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, attempts }) => (
  <div className="scoreboard">
    <div>Score: {score}</div>
    <div>Attempts: {attempts}</div>
  </div>
);

export default ScoreBoard;