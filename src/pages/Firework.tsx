import React, { useRef, useState } from 'react';
import { Fireworks } from 'fireworks-js';

/**
 * 放煙火頁面，直接用 fireworks-js 畫煙火動畫。
 */
const Firework: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fireworksRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleStartFirework = () => {
    if (containerRef.current && !isRunning) {
      setIsRunning(true);
      setCountdown(5);
      if (!fireworksRef.current) {
        fireworksRef.current = new Fireworks(containerRef.current, {
          rocketsPoint: { min: 50, max: 50 },
          hue: { min: 0, max: 360 },
          delay: { min: 15, max: 30 },
          traceSpeed: 10,
          acceleration: 1.02,
          friction: 0.96,
          gravity: 1.5,
          particles: 50,
          explosion: 5,
          autoresize: true,
        });
      }
      fireworksRef.current.start();
      // Countdown interval
      intervalRef.current = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      // Stop after 5 seconds
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        fireworksRef.current.stop();
        setIsRunning(false);
        setCountdown(0);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }, 5000);
    }
  };

  // Clean up on unmount
  React.useEffect(() => {
    return () => {
      if (fireworksRef.current) fireworksRef.current.stop();
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <button
        onClick={handleStartFirework}
        style={{ marginBottom: 16, padding: '8px 24px', fontSize: 18 }}
        disabled={isRunning}
      >
        {isRunning ? `Firework running... (${countdown}s)` : 'Start Firework (5s)'}
      </button>
      <div
        ref={containerRef}
        style={{ width: 600, height: 400, border: '2px solid #ccc', borderRadius: 8, background: '#000' }}
      />
    </div>
  );
};

export default Firework;
