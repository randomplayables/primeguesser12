import React from 'react';
import GuessItem from './GuessItem';
import { Guess } from '../types';

interface GuessListProps {
  guesses: Guess[];
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  return (
    <ul className="guess-list">
      {guesses.map((guess, index) => (
        <GuessItem key={index} guess={guess} />
      ))}
    </ul>
  );
};

export default GuessList;