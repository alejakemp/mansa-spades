import React from 'react';

const GameBoard = () => {
    return (
        <div className="game-board">
            <div className="player-positions">
                <div className="player player-1">Player 1</div>
                <div className="player player-2">Player 2</div>
                <div className="player player-3">Player 3</div>
                <div className="player player-4">Player 4</div>
            </div>
            <div className="trick-progression">
                <h2>Current Trick</h2>
                <div className="trick-cards">
                    {/* Display cards played in the current trick here */}
                </div>
            </div>
            <div className="card-display">
                <h2>Your Cards</h2>
                <div className="cards">
                    {/* Display player cards here */}
                </div>
            </div>
        </div>
    );
};

export default GameBoard;
