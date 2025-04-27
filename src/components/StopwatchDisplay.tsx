import React from 'react';
import { formatTime } from '../utils/formatTime';

/**
 * 顯示碼表時間（HH:mm:ss:ms）。
 */
const StopwatchDisplay: React.FC<{ elapsed: number }> = ({ elapsed }) => (
  <div
    style={{
      fontFamily: 'Consolas, monospace',
      fontSize: 72,
      letterSpacing: 2,
      background: 'white',
      padding: '32px 48px',
      borderRadius: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      marginBottom: 32,
      textAlign: 'center',
      minWidth: 480,
    }}
  >
    {formatTime(elapsed)}
  </div>
);

export default StopwatchDisplay;
