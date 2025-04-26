import React, { useRef, useState } from 'react';
import StopwatchDisplay from '../components/StopwatchDisplay';
import Button from '../components/Button';
import { formatTime } from '../utils/formatTime';

/**
 * 碼表頁面，提供 Start/Pause/Reset 功能。
 */
const Stopwatch: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 開始或暫停
  const handleStartPause = () => {
    if (running) {
      setRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      setRunning(true);
      const start = Date.now() - elapsed;
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - start);
      }, 10);
    }
  };

  // 重設
  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // 離開時清理 interval
  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="p-6 flex flex-col items-center space-y-6">
      <h2 className="text-xl font-semibold">碼表 Stopwatch</h2>
      <StopwatchDisplay elapsed={elapsed} />
      <div className="flex space-x-4">
        <Button onClick={handleStartPause}>
          {running ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={handleReset} disabled={elapsed === 0 && !running}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;
