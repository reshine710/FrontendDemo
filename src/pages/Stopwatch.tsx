import React, { useRef, useState } from 'react';
import StopwatchDisplay from '../components/StopwatchDisplay';
import { Button } from 'antd';
import { Space } from 'antd';
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
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600 }}>碼表 Stopwatch</h2>
      <StopwatchDisplay elapsed={elapsed} />
      <Space>
        <Button type={running ? 'default' : 'primary'} onClick={handleStartPause}>
          {running ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={handleReset} disabled={elapsed === 0 && !running} danger>
          Reset
        </Button>
      </Space>
    </div>
  );
};

export default Stopwatch;
