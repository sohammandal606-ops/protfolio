import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioConfig } from '../../data/portfolioConfig';
import { 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  BrainCircuit, 
  Layers, 
  Users, 
  Clock, 
  MessageSquareCode, 
  Sparkles,
  GitBranch,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';

export const About: React.FC = () => {
  const softSkills = [
    { name: 'Problem Solving', icon: <BrainCircuit className="w-4 h-4 text-indigo-400" /> },
    { name: 'Team Collaboration', icon: <Users className="w-4 h-4 text-sky-400" /> },
    { name: 'Communication', icon: <MessageSquareCode className="w-4 h-4 text-emerald-400" /> },
    { name: 'Adaptability', icon: <GitBranch className="w-4 h-4 text-purple-400" /> },
    { name: 'Analytical Thinking', icon: <Layers className="w-4 h-4 text-amber-400" /> },
    { name: 'Time Management', icon: <Clock className="w-4 h-4 text-rose-400" /> },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title="About Me"
          subtitle="Engineering robust full-stack software backed by deep computer science fundamentals and modern AI paradigms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Developer Profile Card with Photo */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] p-6 backdrop-blur-xl space-y-5 glow-card">
            <div className="relative group overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl">
              <img
                src={portfolioConfig.personal.avatarUrl}
                alt={portfolioConfig.personal.name}
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/[0.08]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Soham Mandal</h4>
                    <p className="text-[11px] font-mono text-indigo-400">Full-Stack &middot; AI/ML</p>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick credentials inside photo card */}
            <div className="space-y-3 pt-1 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 border border-white/[0.05]">
                <span className="text-slate-400 font-mono">Education</span>
                <span className="font-semibold text-white">MAKAUT (2024–2028)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 border border-white/[0.05]">
                <span className="text-slate-400 font-mono">Academic CGPA</span>
                <span className="font-mono font-bold text-emerald-400">8.13 / 10</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 border border-white/[0.05]">
                <span className="text-slate-400 font-mono">Location</span>
                <span className="text-slate-200">Hooghly, India</span>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={portfolioConfig.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/[0.06] flex items-center justify-center gap-2 text-xs font-mono transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioConfig.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-sky-400 border border-white/[0.06] flex items-center justify-center gap-2 text-xs font-mono transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Main Narrative & Capabilities */}
          <div className="lg:col-span-8 space-y-6">
            {/* Main Narrative Card */}
            <div className="rounded-2xl bg-slate-900/50 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-6 glow-card">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                Engineering Philosophy &amp; Experience
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  {portfolioConfig.personal.bioParagraph1}
                </p>
                <p>
                  {portfolioConfig.personal.bioParagraph2}
                </p>
                <p className="text-slate-400 text-sm">
                  I prioritize writing clean, maintainable code, leveraging defensive programming principles, rigorous database schema structuring, and responsive user-centric frontends.
                </p>
              </div>

              {/* Quick Metadata Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-white/[0.05]">
                  <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Degree</div>
                    <div className="text-sm font-medium text-white">B.Tech in CSE (AI &amp; ML)</div>
                    <div className="text-xs text-indigo-400 font-mono">CGPA 8.13 / 10</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-white/[0.05]">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-medium text-white">{portfolioConfig.personal.location}</div>
                    <div className="text-xs text-sky-400 font-mono">Open to Relocation / Remote</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Strengths & Soft Skills */}
            <div className="rounded-2xl bg-slate-900/50 border border-white/[0.08] p-6 sm:p-7 backdrop-blur-xl space-y-4 glow-card">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                  Professional Attributes
                </h3>
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/30 border border-white/[0.05] hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-800 shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Pillars Box */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80 border border-indigo-500/20 p-6 backdrop-blur-xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold">
                What I Bring to Engineering Teams
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React UI to Node.js/Express APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-Time WebRTC &amp; WebSocket</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>MongoDB &amp; PostgreSQL schemas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Token security (JWT) &amp; AI Tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
