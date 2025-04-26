import React, { useState } from 'react';
import Button from './Button';

/**
 * 放煙火按鈕元件，觸發 5 秒動畫並期間禁用。
 * 動畫為簡易 CSS/emoji 實現。
 */
const FireworkButton: React.FC = () => {
  const [firing, setFiring] = useState(false);

  const handleFire = () => {
    setFiring(true);
    setTimeout(() => setFiring(false), 5000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button onClick={handleFire} disabled={firing}>
        {firing ? '煙火施放中...' : '放煙火'}
      </Button>
      <div className="h-32 flex items-end">
        {firing && (
          <span className="text-6xl animate-bounce">🎆</span>
        )}
      </div>
    </div>
  );
};

export default FireworkButton;
