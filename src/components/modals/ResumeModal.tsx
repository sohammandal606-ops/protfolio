import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  Mail, 
  MapPin, 
} from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';
import { projectsData } from '../../data/projects';
import { Button } from '../common/Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-[#0b0f19] border border-white/[0.1] shadow-2xl shadow-black overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="px-6 py-4 bg-[#0e1424] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider">
              Verified Candidate Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5" />}
              iconPosition="left"
              onClick={handlePrint}
            >
              Print
            </Button>

            <Button
              as="a"
              href={portfolioConfig.personal.resumePath}
              download="Soham-Mandal-Resume.pdf"
              variant="primary"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              Download PDF
            </Button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-white/[0.06] transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 text-slate-300 font-sans bg-[#0c101c]">
          {/* Header section */}
          <div className="border-b border-white/[0.1] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  {portfolioConfig.personal.name}
                </h1>
                <div className="text-base font-semibold text-indigo-400 font-mono mt-0.5">
                  {portfolioConfig.personal.role} &middot; {portfolioConfig.personal.subrole}
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{portfolioConfig.personal.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${portfolioConfig.personal.email}`} className="text-sky-400 hover:underline">
                    {portfolioConfig.personal.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-2 pt-1">
                  <a href={portfolioConfig.personal.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                    github.com/so8-ham
                  </a>
                  <span>&middot;</span>
                  <a href={portfolioConfig.personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                    linkedin
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              {portfolioConfig.personal.bioParagraph1}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="space-y-3">
              {portfolioConfig.education.map((edu, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05] flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-white">{edu.degree}</div>
                    <div className="text-xs text-indigo-300">{edu.institution}</div>
                    {edu.score && <div className="text-xs font-mono text-emerald-400 mt-1">{edu.score}</div>}
                  </div>
                  <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </h2>
            {portfolioConfig.experience.map((exp, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-sm font-bold text-white">{exp.role}</span>
                    <span className="text-slate-400 text-xs ml-2">@ {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  {exp.description.map((d, di) => (
                    <li key={di}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <Code className="w-4 h-4" />
              Key Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectsData.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{proj.title}</span>
                    <span className="text-[10px] font-mono text-indigo-400">{proj.category}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {proj.shortDescription}
                  </p>
                  <div className="text-[10px] font-mono text-slate-400 pt-1">
                    Tech: {proj.technologies.slice(0, 4).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioConfig.achievements.map((ach, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.05]">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="text-sky-400 font-mono">{ach.metric}</span>
                    <span>{ach.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0e1424] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Configurable file: {portfolioConfig.personal.resumePath}</span>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
