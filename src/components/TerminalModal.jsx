import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, CornerDownLeft, Shield } from 'lucide-react';
import { personalData, projectsData, skillsData } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'MITHUN.OS KERNEL [Version 2.6.4-sec]', type: 'system' },
    { text: 'Type "help" to view available system directives.', type: 'info' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global key listener for Ctrl+K and ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${input}`, type: 'user' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about      - Display candidate technical profile & education
  projects   - List mission project repositories & architecture
  skills     - View categorized technical skill matrix
  contact    - Print direct communications coordinates
  resume     - Launch verified PDF resume uplink
  status     - Show system runtime telemetrics
  clear      - Clear terminal console screen
  sudo hire  - Execute recruit authorization directive
  exit       - Close terminal interface`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `CANDIDATE: ${personalData.fullName}
DEGREE:    ${personalData.degree} (2nd Year, CGPA: ${personalData.cgpa})
COLLEGE:   ${personalData.institution}
LOCATION:  ${personalData.location}
FOCUS:     Cloud Computing, Cybersecurity, Systems, Linux & Web Dev`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projectsData.map(p => `[${p.id}] ${p.title}\n    Status: ${p.status} | Tech: ${p.techStack.join(', ')}`).join('\n\n')
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: skillsData.map(s => `[${s.code}] ${s.category}: ${s.skills.map(k => k.name).join(', ')}`).join('\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `EMAIL:    ${personalData.contacts.email}
PHONE:    ${personalData.contacts.phone}
LINKEDIN: ${personalData.contacts.linkedin}
GITHUB:   ${personalData.contacts.github}
LEETCODE: ${personalData.contacts.leetcode}`
        });
        break;

      case 'resume':
        window.open(personalData.resumeLink, '_blank');
        newHistory.push({
          type: 'output',
          text: `[UPLINK ESTABLISHED] Opening resume document in secure browser tab...`
        });
        break;

      case 'status':
        newHistory.push({
          type: 'output',
          text: `KERNEL:   Linux / POSIX compatible
UPTIME:   99.98%
SECURITY: SOCKS5 / TLS1.3 Enabled
STATE:    ${personalData.availability}`
        });
        break;

      case 'sudo hire':
      case 'sudo hire mithun':
        newHistory.push({
          type: 'special',
          text: `[AUTH_GRANTED]: AUTHORIZATION CONFIRMED!
Target candidate Mithun A flagged as HIGH PRIORITY.
Recommendation: Immediate interview dispatch initiated.
Contact: ${personalData.contacts.email}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${cmd}". Type "help" for a list of valid directives.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-cyber-black border border-cyber-border rounded-lg shadow-2xl shadow-cyber-neon/10 overflow-hidden flex flex-col h-[520px]">
        
        {/* Terminal Title Bar */}
        <div className="bg-cyber-dark px-4 py-2.5 border-b border-cyber-border flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyber-neon" />
            <span className="font-mono text-xs font-semibold text-cyber-heading tracking-wider">
              MITHUN.OS // SECURE_SHELL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-cyber-muted hidden sm:inline">
              ESC to exit
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-cyber-surface text-cyber-muted hover:text-cyber-neon transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2.5 bg-cyber-void/90">
          {history.map((item, index) => (
            <div key={index} className="leading-relaxed whitespace-pre-wrap">
              {item.type === 'system' && (
                <div className="text-cyber-cyan font-bold">{item.text}</div>
              )}
              {item.type === 'info' && (
                <div className="text-cyber-muted">{item.text}</div>
              )}
              {item.type === 'user' && (
                <div className="text-cyber-neon font-semibold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-cyber-text/90 pl-2 border-l border-cyber-border/80">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-cyber-red font-semibold">{item.text}</div>
              )}
              {item.type === 'special' && (
                <div className="p-2.5 bg-cyber-emerald/10 border border-cyber-emerald/40 text-cyber-neon rounded">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleCommand} className="bg-cyber-dark/95 border-t border-cyber-border px-4 py-2.5 flex items-center gap-2">
          <span className="text-cyber-neon font-mono text-xs font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-cyber-heading placeholder-cyber-muted/60"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="p-1 text-cyber-muted hover:text-cyber-neon transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
