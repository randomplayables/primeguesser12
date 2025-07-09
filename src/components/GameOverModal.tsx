import React from 'react';
import Button from './Button';

interface GameOverModalProps {
  score: number;
  attempts: number;
  onRestart: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ score, attempts, onRestart }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>Game Over</h2>
      <p>Your final score: {score}</p>
      <p>Total attempts: {attempts}</p>
      <Button onClick={onRestart}>Play Again</Button>
    </div>
  </div>
);

export default GameOverModal;