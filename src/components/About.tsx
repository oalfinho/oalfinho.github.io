import React, { useState } from 'react';
import {
  Database,
  Brain,
  Globe,
  Smartphone,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copiedGithub, setCopiedGithub] = useState(false);

  const handleCopyGithub = () => {
    navigator.clipboard.writeText('https://www.github.com/oalfinho');
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-rose-600 dark:text-rose-500" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-amber-600 dark:text-amber-500" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default:
        return <Code2 className="w-5 h-5 text-rose-600 dark:text-rose-500" />;
    }
  };

  return (
    <section id="sobre" className="py-20 border-b border-slate-200 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-500 mb-2">
            <span>Trajetória &amp; Propósito</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400">Sobre Mim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curiosidade técnica, dados estruturados e código que resolve.
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Detailed Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-slate-900 dark:text-white font-medium text-lg sm:text-xl leading-snug">
              {PERSONAL_INFO.aboutText.lead}
            </p>

            {PERSONAL_INFO.aboutText.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}

            {/* GitHub Card Link Callout */}
            <div className="pt-4">
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm dark:shadow-none flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-500">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Repositórios Open-Source</span>
                      <span className="text-xs text-rose-600 dark:text-rose-400 font-mono">@oalfinho</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      www.github.com/oalfinho · Códigos, projetos e experimentos públicos
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyGithub}
                    className="flex-1 sm:flex-initial px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    aria-label="Copiar link do GitHub"
                  >
                    {copiedGithub ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Visitar Perfil</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interest Areas & Values */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-600 dark:text-rose-500" />
              <span>Principais Áreas de Interesse</span>
            </h3>

            <div className="space-y-4">
              {PERSONAL_INFO.aboutText.interestAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/80 hover:border-rose-400 dark:hover:border-rose-900/40 shadow-sm dark:shadow-none transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60">
                      {getIcon(area.icon)}
                    </div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Credential Note */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 shadow-sm dark:shadow-none flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-rose-600 dark:text-rose-500 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white block mb-0.5">FATEC Rio Claro</strong>
                Formação acadêmica com sólida ênfase em estruturas de dados, banco de dados relacionais e modelagem de software, complementada por projetos práticos contínuos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
