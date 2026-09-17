import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioConfig } from '../../data/portfolioConfig';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { Badge } from '../common/Badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="Real-world engineering experience delivering production-grade web features, REST APIs, and collaborative version workflows."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500 via-sky-500 to-indigo-900/20" />

          <div className="space-y-8">
            {portfolioConfig.experience.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-indigo-500/30 items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:border-indigo-400 transition-colors z-10">
                  <Briefcase className="w-6 h-6 text-indigo-400" />
                </div>

                {/* Experience Card */}
                <div className="flex-1 rounded-2xl bg-slate-900/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-300 glow-card space-y-5">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-base font-medium text-sky-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-white/[0.06] text-xs font-mono text-slate-300 shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center flex-wrap gap-2">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-2">
                      <Terminal className="w-3.5 h-3.5 text-slate-400" />
                      Stack:
                    </span>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
