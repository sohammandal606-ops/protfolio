import React from 'react';
import { portfolioConfig } from '../../data/portfolioConfig';
import { Mail, ArrowUp, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070b] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col sm:items-start items-center text-center sm:text-left space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              {portfolioConfig.personal.name}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {portfolioConfig.personal.role} &middot; {portfolioConfig.personal.subrole}
          </p>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioConfig.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/[0.06] transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href={portfolioConfig.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl text-slate-400 hover:text-sky-400 bg-slate-900/60 hover:bg-slate-800 border border-white/[0.06] transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${portfolioConfig.personal.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl text-slate-400 hover:text-indigo-400 bg-slate-900/60 hover:bg-slate-800 border border-white/[0.06] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/[0.06] transition-colors cursor-pointer ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/[0.04] text-center">
        <p className="text-xs text-slate-400 font-mono">
          &copy; 2026 Soham Mandal. All rights reserved. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
