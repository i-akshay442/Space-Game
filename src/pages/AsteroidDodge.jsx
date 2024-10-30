// src/pages/AsteroidDodge.jsx
import React, { useEffect, useState } from 'react';
import asteroidImage from '../assets/asteroid.png'; // Importing the asteroid image


const AsteroidDodge = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [spaceshipPosition, setSpaceshipPosition] = useState(50); // Center position
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAsteroid = {
        id: Date.now(),
        left: Math.random() * 100,
        top: 0,
      };
      setAsteroids((prev) => [...prev, newAsteroid]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveAsteroids = setInterval(() => {
      setAsteroids((prev) =>
        prev.map((asteroid) => ({
          ...asteroid,
          top: asteroid.top + 5, // Move asteroid down
        })).filter((asteroid) => asteroid.top < 100) // Remove asteroids that go out of view
      );
    }, 100);

    return () => clearInterval(moveAsteroids);
  }, []);

  useEffect(() => {
    const checkCollision = () => {
      asteroids.forEach((asteroid) => {
        if (
          asteroid.top > 80 && // Adjust this for your spaceship's position
          asteroid.left >= spaceshipPosition - 5 &&
          asteroid.left <= spaceshipPosition + 5
        ) {
          setGameOver(true);
        }
      });
    };

    checkCollision();
  }, [asteroids, spaceshipPosition]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      setSpaceshipPosition((prev) => Math.max(prev - 5, 0));
    } else if (event.key === 'ArrowRight') {
      setSpaceshipPosition((prev) => Math.min(prev + 5, 95));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (gameOver) {
    return <h1>Game Over</h1>;
  }

  return (
    <div className="asteroid-dodge">
      <h1>Asteroid Dodge Game</h1>
      <div
        className="spaceship"
        style={{ left: `${spaceshipPosition}%` }}
      />
      {asteroids.map((asteroid) => (
        <div
          key={asteroid.id}
          className="asteroid"
          style={{ left: `${asteroid.left}%`, top: `${asteroid.top}%` }}
        />
      ))}
    </div>
  );
};

export default AsteroidDodge;
