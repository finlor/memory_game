import React from 'react';

const GameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Partie Terminée!</h1>
    <h3>Merci d'avoir joué avec nous! Une autre partie ?</h3>
    <button className="restart-button" onClick={restartGame}>Nouvelle partie</button>
  </div>
);

export default GameOver;