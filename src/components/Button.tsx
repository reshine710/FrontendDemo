import React from 'react';

/**
 * 標準按鈕元件，統一樣式。
 */
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 transition-colors font-semibold"
    {...props}
  >
    {children}
  </button>
);

export default Button;
