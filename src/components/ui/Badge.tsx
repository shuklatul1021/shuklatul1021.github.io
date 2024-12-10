import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  variant: 'easy' | 'medium' | 'hard';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  return (
    <span
      className={clsx(
        'px-2 py-1 rounded-full text-xs font-medium',
        {
          'bg-green-100 text-green-800': variant === 'easy',
          'bg-yellow-100 text-yellow-800': variant === 'medium',
          'bg-red-100 text-red-800': variant === 'hard',
        }
      )}
    >
      {children}
    </span>
  );
};