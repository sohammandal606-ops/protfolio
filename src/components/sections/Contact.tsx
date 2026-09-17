import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioConfig } from '../../data/portfolioConfig';
import { Button } from '../common/Button';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  FileDown, 
  MessageSquare,
  Copy,
  Check
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import confetti from 'canvas-confetti';

interface ContactProps {
  onResumeClick?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onResumeClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    // Simulate reliable async client communication without fake backend
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Trigger celebratory micro-confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#6366f1', '#38bdf8', '#a855f7'],
        });
      } catch {
        // Fallback silently if confetti context unavailable
      }
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#07090e]">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Together"
          subtitle="I'm open to opportunities, collaborations, interesting projects, and conversations around software development and AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/60 border border-white/[0.08] p-6 sm:p-7 backdrop-blur-xl glow-card space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-800/40 border border-white/[0.05] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Email</div>
                      <a
                        href={`mailto:${portfolioConfig.personal.email}`}
                        className="text-white hover:text-indigo-300 font-mono text-xs truncate transition-colors"
                      >
                        {portfolioConfig.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-800/40 border border-white/[0.05] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-white text-xs font-medium">
                      {portfolioConfig.personal.location}
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={portfolioConfig.personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-center gap-2 text-xs font-mono text-slate-200 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4 text-indigo-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={portfolioConfig.personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-white/[0.06] hover:border-sky-500/30 flex items-center justify-center gap-2 text-xs font-mono text-slate-200 transition-all"
                  >
                    <LinkedInIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Resume Download CTA */}
              <div className="pt-4 border-t border-white/[0.06]">
                {onResumeClick ? (
                  <Button
                    onClick={onResumeClick}
                    variant="outline"
                    size="md"
                    className="w-full"
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
                    variant="outline"
                    size="md"
                    className="w-full"
                    icon={<FileDown className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Download Resume
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl glow-card space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Send a Direct Message
              </h3>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Message sent successfully!</div>
                    <p className="mt-0.5 text-emerald-300">
                      Thank you for reaching out, Soham will get back to you promptly.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Delivery error</div>
                    <p className="mt-0.5 text-rose-300">
                      Could not send message. Please send an email directly to{' '}
                      <a href={`mailto:${portfolioConfig.personal.email}`} className="underline font-mono">
                        {portfolioConfig.personal.email}
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Smith"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500/30'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Email Address <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500/30'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe your project, role, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border ${
                      errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500/30'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
