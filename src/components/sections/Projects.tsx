import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types/portfolio';
import { ProjectModal } from '../modals/ProjectModal';
import { Badge } from '../common/Badge';
import { GitHubIcon } from '../common/Icons';
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured Systems' },
    { id: 'ai', label: 'AI & Developer Tools' },
    { id: 'realtime', label: 'Real-Time & Microservices' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'featured') return p.featured;
    if (filter === 'ai') return p.category.toLowerCase().includes('ai');
    if (filter === 'realtime') return p.category.toLowerCase().includes('real-time') || p.category.toLowerCase().includes('microservices');
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#07090e]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Featured Projects"
          subtitle="Production-ready applications demonstrating full-stack engineering, real-time protocols, database management, and AI integration."
        />

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === opt.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/[0.06]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-indigo-500/40 backdrop-blur-xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between glow-card"
            >
              <div>
                {/* Project Image Preview with subtle overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950 border-b border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0a0e1a]/90 backdrop-blur-md border border-white/[0.1] text-indigo-300">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-500/30 backdrop-blur-md">
                        <Sparkles className="w-2.5 h-2.5" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="brand" size="sm">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-white/[0.06] transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="p-2 rounded-xl text-slate-400 hover:text-sky-400 bg-slate-800/80 hover:bg-slate-700 border border-white/[0.06] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:translate-x-0.5 cursor-pointer py-1.5 px-3 rounded-lg hover:bg-indigo-500/10"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
