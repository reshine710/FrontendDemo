import React from 'react';
import { Button as AntdButton } from 'antd';

/**
 * 標準按鈕元件，統一用 Ant Design。
 */
const Button: React.FC<React.ComponentProps<typeof AntdButton>> = ({ children, ...props }) => (
  <AntdButton {...props}>{children}</AntdButton>
);

export default Button;
