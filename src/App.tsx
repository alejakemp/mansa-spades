import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameBoard from './components/GameBoard';
import './App.css';

const App = () => {
    const [gameState, setGameState] = useState({});

    return (
        <div className="App">
            <Header />
            <GameBoard gameState={gameState} setGameState={setGameState} />
            <Footer />
        </div>
    );
};

export default App;