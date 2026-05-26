import { useState, type FormEvent } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';
import { ContactConsts } from '../constants/constants';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative" style={{ backgroundColor: 'var(--color-primary-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">08.</span>
            {ContactConsts.heading}
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-highlight mb-4">
                {ContactConsts.headingText}
              </h3>
              <p className="text-secondary leading-relaxed">
                {ContactConsts.description}
              </p>
            </div>

            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-theme hover:border-accent transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary">{ContactConsts.contactLabels.email}</p>
                  <p className="text-highlight text-sm group-hover:text-accent transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-theme hover:border-accent transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary">{ContactConsts.contactLabels.phone}</p>
                  <p className="text-highlight text-sm group-hover:text-accent transition-colors">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-theme">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary">{ContactConsts.contactLabels.location}</p>
                  <p className="text-highlight text-sm">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-theme">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary">{ContactConsts.contactLabels.timezone}</p>
                  <p className="text-highlight text-sm">{personalInfo.timezone}</p>
                </div>
              </div>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {personalInfo.availability}
              </span>
              {personalInfo.freelance && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {ContactConsts.statusBadge}
                </span>
              )}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all" aria-label={ContactConsts.socialLinks.github}>
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all" aria-label={ContactConsts.socialLinks.linkedin}>
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all" aria-label={ContactConsts.socialLinks.twitter}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="text-xl font-bold text-highlight">{ContactConsts.formTitle}</h3>
                <p className="text-secondary">{ContactConsts.formSuccessMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-secondary mb-2">{ContactConsts.formFields.name}</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-theme text-highlight text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50"
                      placeholder={ContactConsts.formFields.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-secondary mb-2">{ContactConsts.formFields.email}</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-theme text-highlight text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50"
                      placeholder={ContactConsts.formFields.emailPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-2">{ContactConsts.formFields.subject}</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={e => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-theme text-highlight text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50"
                    placeholder={ContactConsts.formFields.subjectPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-2">{ContactConsts.formFields.message}</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-theme text-highlight text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-secondary/50"
                    placeholder={ContactConsts.formFields.messagePlaceholder}
                  />
                </div>
                <button type="submit" className="btn-filled w-full justify-center">
                  <Send size={16} />
                  {ContactConsts.formFields.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
