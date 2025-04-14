// components/ui/button.tsx

import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className = '',
  onClick,
  children,
}) => {
  const baseStyles =
    'px-4 py-2 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300';

  const variantStyles = variant === 'outline' ? 'bg-transparent border border-green-400 text-green-400' : 'bg-green-400';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
