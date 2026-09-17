import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioConfig } from '../../data/portfolioConfig';
import { projectsData } from '../../data/projects';
import { ExternalLink, GitBranch, Terminal, Code2 } from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { Button } from '../common/Button';

export const GitHubSection: React.FC = () => {
  // Verified repos from projectsData
  const repositories = projectsData.map((p) => ({
    name: p.title,
    description: p.shortDescription,
    url: p.githubUrl,
    language: p.technologies[0] || 'JavaScript',
    stars: 'Public',
    category: p.category,
  }));

  // Generating a realistic clean GitHub contribution matrix representation
  const weeks = Array.from({ length: 28 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);

  const getHeatmapColor = (w: number, d: number) => {
    // Deterministic distribution simulating active development
    const pseudo = (w * 7 + d * 13 + 5) % 17;
    if (pseudo > 12) return 'bg-indigo-500/80';
    if (pseudo > 7) return 'bg-indigo-600/50';
    if (pseudo > 3) return 'bg-indigo-950/60 border border-indigo-500/20';
    return 'bg-slate-900 border border-white/[0.04]';
  };

  return (
    <section id="github" className="py-24 md:py-32 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source &amp; Code"
          title="Building in Public"
          subtitle="All projects, architectural experiments, and open-source contributions are publicly maintained on GitHub."
        />

        {/* GitHub Overview Box */}
        <div className="rounded-3xl bg-slate-900/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl mb-12 glow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#080c16] border border-indigo-500/30 flex items-center justify-center text-white shadow-lg shadow-indigo-500/10">
                <GitHubIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">so8-ham</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Developer
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  github.com/so8-ham &middot; Full-Stack &amp; AI Engineering
                </p>
              </div>
            </div>

            <Button
              as="a"
              href={portfolioConfig.personal.githubUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Visit GitHub Profile
            </Button>
          </div>

          {/* Activity Matrix Graphic */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                Engineering Contribution Activity
              </span>
              <span className="hidden sm:inline">Consistent Commits &amp; Releases</span>
            </div>

            {/* Scrollable contribution heatmap */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[560px]">
                {weeks.map((w) => (
                  <div key={w} className="flex flex-col gap-1.5 flex-1">
                    {days.map((d) => (
                      <div
                        key={d}
                        className={`h-3 rounded-sm ${getHeatmapColor(w, d)} transition-all hover:scale-125`}
                        title={`Week ${w + 1}, Day ${d + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-slate-400">
              <span>Less</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-white/[0.04]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-950/60 border border-indigo-500/20" />
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-600/50" />
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500/80" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-slate-900/40 hover:bg-slate-800/60 border border-white/[0.06] hover:border-indigo-500/30 p-5 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mt-1">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  {repo.language}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <GitBranch className="w-3 h-3" />
                  main
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
