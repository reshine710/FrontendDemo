import React from 'react';
import { formatTime } from '../utils/formatTime';

/**
 * 顯示碼表時間（HH:mm:ss:ms）。
 */
const StopwatchDisplay: React.FC<{ elapsed: number }> = ({ elapsed }) => (
  <div className="text-4xl font-mono tracking-widest bg-white px-8 py-4 rounded shadow mb-4">
    {formatTime(elapsed)}
  </div>
);

export default StopwatchDisplay;
