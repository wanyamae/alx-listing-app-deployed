import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
    {children}
  </button>
);

export default Button;
