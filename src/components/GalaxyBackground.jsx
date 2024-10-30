// src/components/GalaxyBackground.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../App.css';

const GalaxyBackground = () => {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');
    gsap.to(stars, {
      opacity: 0.7,
      repeat: -1,
      yoyo: true,
      duration: 2,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="galaxy-background">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );
};

export default GalaxyBackground;
