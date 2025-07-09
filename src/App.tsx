import React from 'react';
import usePrimeGame from './hooks/usePrimeGame';
import NumberInput from './components/NumberInput';
import GuessList from './components/GuessList';
import ScoreBoard from './components/ScoreBoard';
import GameOverModal from './components/GameOverModal';
import Button from './components/Button';

const App: React.FC = () => {
  const {
    currentGuess,
    guesses,
    score,
    attempts,
    isGameOver,
    handleGuessChange,
    submitGuess,
    resetGame,
  } = usePrimeGame();

  return (
    <div className="app-container">
      <h1>Prime Number Guessing Game</h1>
      <ScoreBoard score={score} attempts={attempts} />
      {!isGameOver && (
        <div className="input-group">
          <NumberInput value={currentGuess} onChange={handleGuessChange} />
          <Button onClick={submitGuess} disabled={!currentGuess}>
            Guess
          </Button>
        </div>
      )}
      <GuessList guesses={guesses} />
      {isGameOver && (
        <GameOverModal score={score} attempts={attempts} onRestart={resetGame} />
      )}
    </div>
  );
};

export default App;