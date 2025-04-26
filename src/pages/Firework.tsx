import React from 'react';
import FireworkButton from '../components/FireworkButton';

/**
 * 放煙火頁面，按下按鈕觸發動畫。
 */
const Firework: React.FC = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">放煙火 Firework</h2>
      <FireworkButton />
    </div>
  );
};

export default Firework;
