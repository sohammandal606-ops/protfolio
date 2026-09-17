import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'neutral' | 'accent' | 'emerald' | 'amber';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className,
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-xs font-medium gap-1.5',
  };

  const variantStyles = {
    brand: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/25',
    neutral: 'bg-slate-800/60 text-slate-300 border border-slate-700/50',
    accent: 'bg-sky-500/10 text-sky-300 border border-sky-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/25',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full font-mono tracking-wide backdrop-blur-sm transition-colors',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
