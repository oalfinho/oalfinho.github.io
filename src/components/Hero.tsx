import React from 'react';
import { ArrowDown, Github, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CodeTerminal } from './CodeTerminal';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-rose-600 dark:text-rose-500 mb-4 tracking-wide uppercase">
              <span>Desenvolvedor de Software &amp; Dados</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600 hidden sm:inline">·</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Construindo pipelines de dados e software que geram{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-amber-500 dark:from-rose-500 dark:via-red-400 dark:to-amber-400">
                impacto real.
              </span>
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
              Olá! Sou <strong className="text-slate-900 dark:text-white font-semibold">Arthur</strong>, graduando na{' '}
              <span className="text-rose-600 dark:text-rose-400 font-medium">FATEC Rio Claro</span> e entusiasta de{' '}
              Engenharia de Dados, Automação e Inteligência Artificial. Crio soluções que conectam
              extração de dados, código limpo e utilidade prática.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projetos"
                className="px-6 py-3 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-all shadow-md shadow-rose-600/20 flex items-center gap-2"
              >
                <span>Explorar Projetos no GitHub</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#curriculo"
                className="px-5 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-rose-500/50 rounded-lg transition-all flex items-center gap-2 shadow-sm dark:shadow-none"
              >
                <FileText className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Ver Currículo</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-lg transition-colors shadow-sm dark:shadow-none"
                aria-label="Abrir perfil no GitHub (www.github.com/oalfinho)"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Quiet metadata line */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono text-rose-600 dark:text-rose-400">github.com/oalfinho</span>
              <span aria-hidden="true">·</span>
              <span>Python · TypeScript · Kotlin · SQL</span>
              <span aria-hidden="true">·</span>
              <span>Rio Claro, SP</span>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Running Live Code */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <CodeTerminal />
          </div>
        </div>

        {/* Full-width KPI / Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 shadow-sm dark:shadow-none">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              13+
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Repositórios Públicos</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 shadow-sm dark:shadow-none">
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 dark:text-rose-500 font-mono tabular-nums">
              4
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Tecnologias Principais</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 shadow-sm dark:shadow-none">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
              FATEC
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Rio Claro — Ciência &amp; ADS</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 shadow-sm dark:shadow-none">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-500 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Open-Source no GitHub</div>
          </div>
        </div>
      </div>
    </section>
  );
};
