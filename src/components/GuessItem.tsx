import React from 'react';
import { Guess } from '../types';

interface GuessItemProps {
  guess: Guess;
}

const GuessItem: React.FC<GuessItemProps> = ({ guess }) => {
  const { value, isCorrect } = guess;
  return (
    <li className={`guess-item ${isCorrect ? 'correct' : 'incorrect'}`}>
      {value} {isCorrect ? 'Correct' : 'Incorrect'}
    </li>
  );
};

export default GuessItem;