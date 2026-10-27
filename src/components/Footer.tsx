import React from 'react';
import { Github, ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100/80 dark:bg-slate-950 py-12 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Attribution */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-slate-900 dark:text-white tracking-tight">
            Arthur<span className="text-rose-500">.dev</span>
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
          <span>Desenvolvido com TypeScript, React e Tailwind CSS</span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
          <span>FATEC Rio Claro</span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1.5"
            aria-label="Perfil do GitHub"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1.5"
            aria-label="E-mail direto"
          >
            <Mail className="w-4 h-4" />
            <span>E-mail</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 transition-colors shadow-sm dark:shadow-none"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
