import React, { useMemo } from 'react';

const ParticleEngine = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => {
      // Randomize position, size, animation delay and duration for each particle
      const left = Math.random() * 100 + 'vw';
      const top = Math.random() * 100 + 'vh';
      const size = Math.random() * 200 + 50 + 'px'; // 50px to 250px
      const animationDelay = Math.random() * -20 + 's';
      const animationDuration = Math.random() * 10 + 15 + 's'; // 15s to 25s

      return (
        <div
          key={i}
          className="particle"
          style={{
            left,
            top,
            width: size,
            height: size,
            animationDelay,
            animationDuration,
          }}
        />
      );
    });
  }, []);

  return <div id="particle-engine">{particles}</div>;
};

export default ParticleEngine;
