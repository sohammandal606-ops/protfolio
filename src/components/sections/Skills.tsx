import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioConfig } from '../../data/portfolioConfig';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Binary, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages': <Code2 className="w-4 h-4 text-sky-400" />,
    'Frontend': <Layout className="w-4 h-4 text-indigo-400" />,
    'Backend': <Server className="w-4 h-4 text-emerald-400" />,
    'Databases': <Database className="w-4 h-4 text-cyan-400" />,
    'AI / ML': <Cpu className="w-4 h-4 text-purple-400" />,
    'Tools & DevOps': <Wrench className="w-4 h-4 text-amber-400" />,
    'Core Computer Science': <Binary className="w-4 h-4 text-rose-400" />,
  };

  const categories = ['All', ...portfolioConfig.skillCategories.map((c) => c.name)];

  const filteredCategories =
    activeCategory === 'All'
      ? portfolioConfig.skillCategories
      : portfolioConfig.skillCategories.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#090d16]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Capabilities"
          title="Skills &amp; Technologies"
          subtitle="A comprehensive toolkit structured across modern full-stack development, distributed databases, core computer science, and applied AI systems."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/[0.06]'
                }`}
              >
                {cat !== 'All' && categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl bg-slate-900/50 border border-white/[0.08] p-6 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-300 glow-card flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-white/[0.08]">
                      {categoryIcons[category.name] || <Layers className="w-4 h-4 text-indigo-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-2.5 rounded-xl bg-slate-800/30 hover:bg-slate-800/70 border border-white/[0.04] hover:border-indigo-500/25 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <Check className="w-3.5 h-3.5 text-indigo-400/60 group-hover:text-indigo-400 transition-colors" />
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 group-hover:text-slate-300 font-mono mt-0.5 line-clamp-1">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified in projects</span>
                <Sparkles className="w-3 h-3 text-indigo-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
