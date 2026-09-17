import React, { useState } from 'react';
import type { Project } from '../../types/portfolio';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  Lightbulb, 
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { Button } from '../common/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech' | 'architecture'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0b0f19] border border-white/[0.1] shadow-2xl shadow-black overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0e1424] border-b border-white/[0.08] flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-medium">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Showcase Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950 border-b border-white/[0.08]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-3 left-6">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900/90 text-sky-300 border border-white/[0.1] backdrop-blur-md">
              Verified Project Specification
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-white/[0.08] bg-slate-900/40 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'text-white border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Overview &amp; Problem
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'features'
                ? 'text-white border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Key Features ({project.features.length})
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'tech'
                ? 'text-white border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Tech Stack ({project.technologies.length})
          </button>
          {project.architecture && (
            <button
              onClick={() => setActiveTab('architecture')}
              className={`py-3 px-3.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'architecture'
                  ? 'text-white border-indigo-500'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              Architecture &amp; Challenges
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-2">
                  Project Description
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {project.problem && (
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs font-mono uppercase">
                    <AlertCircle className="w-4 h-4" />
                    Problem Statement
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs font-mono uppercase">
                    <Lightbulb className="w-4 h-4" />
                    Implemented Solution
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3">
                Verified System Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TECH STACK */}
          {activeTab === 'tech' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-2">
                Technologies &amp; Libraries Used
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/[0.08] text-xs font-mono text-slate-200 flex items-center gap-2"
                  >
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.05] mt-6 text-xs text-slate-400">
                <p>
                  * All listed dependencies and frameworks represent the actual implemented software architecture verified in the source repository.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: ARCHITECTURE & CHALLENGES */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {project.architecture && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    System Architecture
                  </h4>
                  <ul className="space-y-2.5">
                    {project.architecture.map((item, idx) => (
                      <li
                        key={idx}
                        className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.05] text-xs text-slate-300 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Engineering Challenges &amp; Solutions
                  </h4>
                  <ul className="space-y-2.5">
                    {project.challenges.map((challenge, idx) => (
                      <li
                        key={idx}
                        className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs text-slate-300 leading-relaxed"
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 bg-[#0e1424] border-t border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={<GitHubIcon className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              GitHub Repository
            </Button>

            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Open Live Demo
              </Button>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
