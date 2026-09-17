import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioConfig } from '../../data/portfolioConfig';
import { Trophy, Code2, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('leetcode')) {
      return <Code2 className="w-6 h-6 text-amber-400" />;
    }
    return <Trophy className="w-6 h-6 text-indigo-400" />;
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Milestones"
          title="Key Achievements"
          subtitle="Demonstrated algorithmic problem solving, competitive dedication, and collaborative engineering under real-world constraints."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioConfig.achievements.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/60 border border-white/[0.08] p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-300 glow-card relative overflow-hidden group space-y-6"
            >
              {/* Ambient backlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />

              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-white/[0.08]">
                  {getIcon(item.title)}
                </div>
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/[0.06]">
                  {item.category}
                </span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight flex items-baseline gap-2">
                  <span className="text-gradient-brand">{item.metric}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-2">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified track record</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
