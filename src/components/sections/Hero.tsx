import React from 'react';
import { ArrowDown, FileDown, FolderGit2, Mail, Sparkles, Terminal, Cpu, Network, MapPin } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';
import { Button } from '../common/Button';

interface HeroProps {
  onResumeClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle background gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Developer Avatar & Status Header */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={portfolioConfig.personal.avatarUrl}
                  alt={portfolioConfig.personal.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/20"
                />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#07090e]"></span>
                </span>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-indigo-500/20 shadow-inner backdrop-blur-md">
                  <span className="text-xs font-mono font-medium text-emerald-400">
                    ● Available for Opportunities
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Hooghly, West Bengal, India</span>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-gradient-brand">Soham Mandal</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 tracking-tight flex items-center gap-2.5">
                <span>{portfolioConfig.personal.role}</span>
                <span className="text-slate-600">|</span>
                <span className="text-sky-400 font-mono text-lg sm:text-2xl font-normal">
                  {portfolioConfig.personal.subrole}
                </span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed">
              <p className="font-medium text-slate-200">
                {portfolioConfig.personal.tagline}
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                I enjoy engineering real-world, production-ready products across responsive frontend interfaces, resilient backend APIs, relational &amp; NoSQL databases, real-time communication systems, and modern AI integrations.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                as="a"
                href="#projects"
                variant="primary"
                size="md"
                icon={<FolderGit2 className="w-4 h-4" />}
                iconPosition="left"
              >
                View My Projects
              </Button>

              {onResumeClick ? (
                <Button
                  onClick={onResumeClick}
                  variant="secondary"
                  size="md"
                  icon={<FileDown className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Download Resume
                </Button>
              ) : (
                <Button
                  as="a"
                  href={portfolioConfig.personal.resumePath}
                  download="Soham-Mandal-Resume.pdf"
                  variant="secondary"
                  size="md"
                  icon={<FileDown className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Download Resume
                </Button>
              )}

              <Button
                as="a"
                href="#contact"
                variant="outline"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
              >
                Contact Me
              </Button>
            </div>

            {/* Highlights Meta Row */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-bold font-mono text-white">8.13</div>
                <div className="text-xs text-slate-400">B.Tech CGPA</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">5+</div>
                <div className="text-xs text-slate-400">Full-Stack Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">150+</div>
                <div className="text-xs text-slate-400">LeetCode Solved</div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Developer Window Visual */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>

            {/* Terminal Window Card */}
            <div className="relative rounded-2xl bg-[#0b0f19] border border-white/[0.1] shadow-2xl shadow-black/80 overflow-hidden glow-card">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-[#0e1424] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>soham@dev-machine: ~/portfolio</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  live
                </div>
              </div>

              {/* Code / Architecture Snippet */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-sky-300">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'Soham Mandal'</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">'B.Tech CSE (AI &amp; ML)'</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">college:</span>{' '}
                    <span className="text-emerald-300">'MAKAUT (2024–2028)'</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">primaryFocus:</span> [
                    <span className="text-amber-300">'Full-Stack'</span>,{' '}
                    <span className="text-amber-300">'Real-Time'</span>,{' '}
                    <span className="text-amber-300">'AI/ML'</span>],
                  </div>
                  <div>
                    <span className="text-slate-400">stack:</span> &#123;
                  </div>
                  <div className="pl-4 text-[11px] text-slate-300 space-y-0.5">
                    <div>web: ['React', 'Node.js', 'Express', 'Vite'],</div>
                    <div>data: ['MongoDB', 'PostgreSQL', 'Redis'],</div>
                    <div>protocols: ['WebRTC', 'WebSocket', 'REST'],</div>
                    <div>ai: ['LangChain', 'FastAPI', 'PyTorch']</div>
                  </div>
                  <div>&#125;,</div>
                  <div>
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-sky-300">'Building Scalable Systems'</span>
                  </div>
                </div>
                <div>&#125;;</div>

                {/* Console Log Output */}
                <div className="pt-3 border-t border-white/[0.08] text-slate-400 flex items-center justify-between text-[11px]">
                  <span className="text-indigo-400">❯ npx verify-engineering-standards</span>
                  <span className="text-emerald-400">✓ All systems nominal</span>
                </div>
              </div>

              {/* Technologies Status Chips */}
              <div className="px-5 pb-5 pt-1 grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/20 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Network className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-semibold text-white">WebRTC &amp; Sockets</div>
                    <div className="text-[9px] text-slate-400">Low-latency sync</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-sky-500/20 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-semibold text-white">AI-Powered Systems</div>
                    <div className="text-[9px] text-slate-400">LLMs &amp; LangChain</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean bottom pill without any overlap */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0f172a]/95 border border-white/[0.1] shadow-lg backdrop-blur-md text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Clean Architecture &middot; Tested Systems</span>
              </div>
              <span className="text-[11px] text-indigo-400">v2.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About section" className="text-slate-400 hover:text-white">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
