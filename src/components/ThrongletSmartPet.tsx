import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ThrongletSmartPet: React.FC = () => {
  const [posX, setPosX] = useState(100);
  const [isWalking, setIsWalking] = useState(true);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    let isMounted = true;

    const patrol = () => {
      if (!isMounted) return;

      const minX = 40;
      const maxX = window.innerWidth - 120;
      const targetX = Math.random() * (maxX - minX) + minX;

      // Evaluamos la dirección de forma absoluta comparando el destino con la posición actual
      setPosX((currentPosX) => {
        const newDirection = targetX < currentPosX ? 'left' : 'right';
        setDirection(newDirection);
        return targetX;
      });

      setIsWalking(true);
      const walkTime = 4; // 4 segundos constantes

      setTimeout(() => {
        if (!isMounted) return;
        setIsWalking(false);

        const restTime = Math.random() * 2000 + 2000;
        setTimeout(patrol, restTime);

      }, walkTime * 1000);
    };

    const timer = setTimeout(patrol, 1000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 z-[9999] pointer-events-none"
      animate={{ x: posX }}
      transition={{
        duration: 4,
        ease: "linear",
      }}
      style={{
        width: '64px',
        height: '64px',
      }}
    >
      {/* Forzamos la inversión usando la propiedad scaleX basada directamente en el string 'left' / 'right' */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
          transformOrigin: 'center center',
          imageRendering: 'pixelated',
          transition: 'transform 0.1s ease-in-out',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            overflow: 'hidden',
            imageRendering: 'pixelated',
          }}
        >
          <img
            src="/sprite-ai-animation-094f06ce.png"
            alt="Thronglet Walking"
            style={{
              height: '64px',
              maxWidth: 'none',
              animation: isWalking ? 'walkCycle 0.8s steps(8) infinite' : 'none',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes walkCycle {
          from { transform: translateX(0px); }
          to { transform: translateX(-512px); }
        }
      `}</style>
    </motion.div>
  );
};