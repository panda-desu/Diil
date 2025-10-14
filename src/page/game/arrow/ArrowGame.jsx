import React, { useEffect, useRef, useState } from "react";
import "./arrowGame.css";

const ArrowGame = () => {
  const canvasRef = useRef(null);
  const gameInstanceRef = useRef(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const [showTutorialComplete, setShowTutorialComplete] = useState(false);
  const [showGameComplete, setShowGameComplete] = useState(false);
  const [gameStats, setGameStats] = useState({
    timeLeft: 60,
    correctCount: 0,
    wrongCount: 0,
    coins: 0,
  });
  const [results, setResults] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    setIsMobile(checkMobile);

    // Import the game logic
    const initGame = async () => {
      if (!canvasRef.current) return;

      // Set canvas size
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Dynamically import the ArrowGame class from arrow.js
      const { default: ArrowGameClass } = await import("./arrow.js");

      // Create game instance
      gameInstanceRef.current = new ArrowGameClass(
        canvas,
        (stats) => setGameStats(stats),
        () => {
          setShowTutorial(false);
          setShowTutorialComplete(true);
        },
        (results) => {
          setResults(results);
          setShowGameComplete(true);
        }
      );
    };

    initGame();

    return () => {
      // Cleanup
      if (gameInstanceRef.current) {
        gameInstanceRef.current.cleanup?.();
      }
    };
  }, []);

  const handleStartTutorial = () => {
    setShowTutorial(false);
    if (gameInstanceRef.current) {
      gameInstanceRef.current.startTutorial();
    }
  };

  const handleStartGame = () => {
    setShowTutorialComplete(false);
    if (gameInstanceRef.current) {
      gameInstanceRef.current.startGame();
    }
  };

  const handleRestart = () => {
    setShowGameComplete(false);
    if (gameInstanceRef.current) {
      gameInstanceRef.current.restart();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="arrow-game-container">
      <canvas ref={canvasRef} className="arrow-game-canvas"></canvas>
      <div className="confetti-container"></div>

      <div className="arrow-game-ui hidden">
        <div className="arrow-game-info">
          <div>
            Time: <span id="timeLeft">{gameStats.timeLeft}</span>s
          </div>
          <div>
            Correct: <span id="correctCount">{gameStats.correctCount}</span>
          </div>
          <div>
            Wrong: <span id="wrongCount">{gameStats.wrongCount}</span>
          </div>
        </div>
      </div>

      <div className="arrow-time-display">TIME {formatTime(gameStats.timeLeft)}</div>

      <div className="arrow-coin-display">
        <img
          src="/assets/arrow/image/coin.png"
          alt="coin"
          className="arrow-coin-icon"
        />
        <span id="coinCount">{gameStats.coins}</span>
        <div id="coinIncrement" className="arrow-coin-increment"></div>
      </div>

      <img
        id="feedbackIcon"
        className="arrow-feedback-icon"
        alt="feedback"
      />

      {/* Tutorial Overlay */}
      {showTutorial && (
        <div className="arrow-overlay">
          <div className="arrow-modal">
            <h2>Game Tutorial</h2>
            <p>
              Press the arrow key that points in the{" "}
              <strong>opposite direction</strong> of the main arrow.
            </p>
            <div>
              <div className="arrow-instruction">↑ Up Arrow</div>
              <div className="arrow-instruction">→ Right Arrow</div>
              <div className="arrow-instruction">↓ Down Arrow</div>
              <div className="arrow-instruction">← Left Arrow</div>
            </div>
            {isMobile && (
              <p className="arrow-mobile-instructions">
                On mobile: Swipe in the direction of the colored arrow
              </p>
            )}
            <button className="arrow-btn" onClick={handleStartTutorial}>
              Start Tutorial
            </button>
          </div>
        </div>
      )}

      {/* Tutorial Complete Overlay */}
      {showTutorialComplete && (
        <div className="arrow-overlay">
          <div className="arrow-modal">
            <h2>Tutorial Complete!</h2>
            <p>Great job! Now let's play the real game.</p>
            <p>You have 60 seconds to get as many correct as possible!</p>
            <button className="arrow-btn" onClick={handleStartGame}>
              Start Game
            </button>
          </div>
        </div>
      )}

      {/* Game Complete Overlay */}
      {showGameComplete && results && (
        <div className="arrow-overlay">
          <div className="arrow-modal">
            <h2>Game Complete!</h2>
            <div className="arrow-results">
              <div>
                <strong>Correct:</strong> {results.correctCount}
              </div>
              <div>
                <strong>Wrong:</strong> {results.wrongCount}
              </div>
              <div>
                <strong>Accuracy:</strong> {results.accuracy}%
              </div>
              <div>
                <strong>Average Time:</strong> {results.avgTime}s
              </div>
              <div>
                <strong>Average Correct Time:</strong> {results.avgCorrectTime}s
              </div>
            </div>
            <button className="arrow-btn" onClick={handleRestart}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArrowGame;
