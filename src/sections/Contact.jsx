import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Code2, ShieldAlert } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    sender: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('IDLE'); // IDLE, TRANSMITTING, SENT

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING');

    setTimeout(() => {
      setStatus('SENT');
      // Prepare mailto link as fallback
      const mailtoUrl = `mailto:${personalData.contacts.email}?subject=${encodeURIComponent(
        `[PORTFOLIO UPLINK] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Sender: ${formData.sender}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setStatus('IDLE');
        setFormData({ sender: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-20 z-10 border-t border-cyber-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-neon tracking-wider">
            <span>// 06</span>
            <span className="w-6 h-px bg-cyber-neon"></span>
            <span>SECURE UPLINK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-cyber-heading tracking-tight">
            Establish Connection
          </h2>
          <p className="text-sm sm:text-base text-cyber-text/90 font-sans max-w-2xl">
            Have an internship opportunity, collaboration idea, or technical question? Open a direct communication channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Communication Coordinates (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-cyber-card border border-cyber-border cyber-glass space-y-5">
              
              <div className="pb-3 border-b border-cyber-border/70">
                <span className="text-[10px] font-mono text-cyber-muted uppercase tracking-wider block">
                  TRANSMISSION CHANNELS
                </span>
                <h3 className="font-mono text-base font-bold text-cyber-heading mt-0.5">
                  Direct Coordinates
                </h3>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyber-dark text-cyber-neon border border-cyber-border shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyber-muted">EMAIL DIRECT</div>
                    <a
                      href={`mailto:${personalData.contacts.email}`}
                      className="text-cyber-heading hover:text-cyber-neon font-semibold transition-colors break-all"
                    >
                      {personalData.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyber-dark text-cyber-cyan border border-cyber-border shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyber-muted">PHONE TELEMETRY</div>
                    <a
                      href={`tel:${personalData.contacts.phone}`}
                      className="text-cyber-heading hover:text-cyber-cyan font-semibold transition-colors"
                    >
                      {personalData.contacts.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyber-dark text-cyber-amber border border-cyber-border shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-cyber-muted">BASE LOCATION</div>
                    <div className="text-cyber-heading font-semibold">
                      {personalData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Network Links */}
              <div className="pt-4 border-t border-cyber-border/60">
                <span className="text-[10px] font-mono text-cyber-muted uppercase tracking-wider block mb-2.5">
                  AUTHENTICATED PROFILES
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalData.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-cyber-dark border border-cyber-border hover:border-cyber-neon text-center text-xs font-mono text-cyber-text hover:text-cyber-neon transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={personalData.contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-cyber-dark border border-cyber-border hover:border-cyber-cyan text-center text-xs font-mono text-cyber-text hover:text-cyber-cyan transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personalData.contacts.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-cyber-dark border border-cyber-border hover:border-cyber-amber text-center text-xs font-mono text-cyber-text hover:text-cyber-amber transition-colors"
                  >
                    LeetCode
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Message Transmission Console (Right) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-lg bg-cyber-card border border-cyber-border cyber-glass">
              
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-cyber-border/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse"></span>
                  <span className="font-mono text-xs font-bold text-cyber-heading uppercase tracking-wider">
                    TRANSMISSION CONSOLE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyber-muted">
                  PROTOCOL: SECURE // E2E
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-cyber-muted text-[11px]">IDENTIFIER / NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.sender}
                      onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                      placeholder="e.g. Technical Recruiter / Lead"
                      className="w-full px-3 py-2.5 rounded bg-cyber-dark border border-cyber-border focus:border-cyber-neon focus:outline-none text-cyber-heading placeholder-cyber-muted/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-cyber-muted text-[11px]">CONTACT EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2.5 rounded bg-cyber-dark border border-cyber-border focus:border-cyber-neon focus:outline-none text-cyber-heading placeholder-cyber-muted/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-cyber-muted text-[11px]">TRANSMISSION SUBJECT *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Opportunity / Project Inquiry"
                    className="w-full px-3 py-2.5 rounded bg-cyber-dark border border-cyber-border focus:border-cyber-neon focus:outline-none text-cyber-heading placeholder-cyber-muted/60 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-cyber-muted text-[11px]">DISPATCH PAYLOAD / MESSAGE *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide opportunity details, job spec, or collaboration scope..."
                    className="w-full px-3 py-2.5 rounded bg-cyber-dark border border-cyber-border focus:border-cyber-neon focus:outline-none text-cyber-heading placeholder-cyber-muted/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'IDLE'}
                  className="w-full py-3 rounded bg-cyber-neon text-cyber-void font-bold text-xs font-mono tracking-wider hover:bg-cyber-emerald transition-all flex items-center justify-center gap-2 shadow-neon-md hover:shadow-neon-lg disabled:opacity-50 cursor-pointer"
                >
                  {status === 'IDLE' && (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>DISPATCH SECURE TRANSMISSION</span>
                    </>
                  )}
                  {status === 'TRANSMITTING' && (
                    <>
                      <span className="w-3 h-3 border-2 border-cyber-void border-t-transparent rounded-full animate-spin"></span>
                      <span>ENCRYPTING & TRANSMITTING...</span>
                    </>
                  )}
                  {status === 'SENT' && (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>TRANSMISSION DISPATCHED</span>
                    </>
                  )}
                </button>

                {status === 'SENT' && (
                  <div className="p-2.5 rounded bg-cyber-neon/10 border border-cyber-neon/40 text-cyber-neon text-center text-[11px]">
                    Direct mail client launched with payload. You can also contact directly at {personalData.contacts.email}.
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
