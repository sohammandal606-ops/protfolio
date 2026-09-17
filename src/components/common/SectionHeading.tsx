import React from 'react';
import { clsx } from 'clsx';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={clsx(
        'mb-12 md:mb-16 space-y-3',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl',
        className
      )}
    >
      {badge && (
        <div className={clsx('flex', align === 'center' ? 'justify-center' : 'justify-start')}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 shadow-sm shadow-indigo-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
