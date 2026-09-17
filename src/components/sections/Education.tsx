import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioConfig } from '../../data/portfolioConfig';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academia"
          title="Education"
          subtitle="Formal computer science engineering curriculum with specialization in Artificial Intelligence and Machine Learning."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500 via-sky-500 to-slate-800" />

          <div className="space-y-8">
            {portfolioConfig.education.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-white/[0.08] items-center justify-center shadow-lg group-hover:border-indigo-500/40 transition-colors z-10">
                  <GraduationCap className={`w-6 h-6 ${item.current ? 'text-indigo-400' : 'text-slate-400'}`} />
                </div>

                {/* Education Card */}
                <div className="flex-1 rounded-2xl bg-slate-900/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-300 glow-card space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-white/[0.06] pb-4">
                    <div>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Currently Pursuing
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      <div className="text-sm sm:text-base font-medium text-indigo-300 mt-1">
                        {item.institution}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 px-3 py-1 rounded-xl bg-slate-800/80 border border-white/[0.06]">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.period}</span>
                      </div>
                      {item.score && (
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.board && (
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>Affiliation: {item.board}</span>
                    </div>
                  )}

                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
