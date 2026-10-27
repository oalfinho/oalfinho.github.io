import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Printer,
  CheckCircle2,
  BadgeCheck
} from 'lucide-react';
import {
  EDUCATION_DATA,
  SKILL_CATEGORIES,
  EXPERIENCE_HIGHLIGHTS
} from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tudo' | 'formacao' | 'habilidades' | 'experiencia'>('tudo');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="curriculo" className="py-20 border-b border-slate-200 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/60 print:bg-white print:text-black print:p-0 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-500 mb-2">
              <span>Carreira &amp; Qualificações</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500 dark:text-slate-400">Currículo Profissional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Currículo &amp; Competências
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Resumo da formação acadêmica na FATEC, experiência prática com código e matriz técnica de habilidades.
            </p>
          </div>

          {/* Print/Download Button */}
          <div className="flex items-center gap-3 self-start md:self-end print:hidden">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-rose-500/50 rounded-lg transition-colors flex items-center gap-2 shadow-sm dark:shadow-none"
              aria-label="Imprimir ou exportar currículo em PDF"
            >
              <Printer className="w-4 h-4 text-rose-600 dark:text-rose-500" />
              <span>Imprimir / Salvar PDF</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Filter for large screens */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800/80 print:hidden">
          {[
            { id: 'tudo', label: 'Visão Completa' },
            { id: 'formacao', label: 'Formação Acadêmica' },
            { id: 'habilidades', label: 'Habilidades Técnicas' },
            { id: 'experiencia', label: 'Experiência & Projetos' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-slate-300 dark:border-rose-500/30 font-semibold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Printable/Responsive CV Sheet Container */}
        <div className="space-y-12">
          {/* 1. Academic Education */}
          {(activeTab === 'tudo' || activeTab === 'formacao') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-500">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Formação Acadêmica
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm dark:shadow-none transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-mono text-rose-600 dark:text-rose-400">{edu.period}</span>
                      <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded text-[11px]">
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>

                    <div className="text-xs text-slate-700 dark:text-slate-300 font-medium mb-3">
                      {edu.institution}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Technical Skills Matrix */}
          {(activeTab === 'tudo' || activeTab === 'habilidades') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-red-600 dark:text-red-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Matriz de Habilidades Técnicas
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span>{cat.title}</span>
                        <BadgeCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
                      </h4>

                      <div className="space-y-3.5">
                        {cat.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <div className="flex items-center justify-between text-slate-800 dark:text-slate-200 font-medium mb-0.5">
                              <span>{skill.name}</span>
                              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                                {skill.level}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                              {skill.context}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Practical Experience & Highlights */}
          {(activeTab === 'tudo' || activeTab === 'experiencia') && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-amber-600 dark:text-amber-500">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Experiência Prática &amp; Iniciativas
                </h3>
              </div>

              <div className="space-y-6">
                {EXPERIENCE_HIGHLIGHTS.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm dark:shadow-none transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <div className="text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-medium">
                          {exp.organization} · {exp.location}
                        </div>
                      </div>

                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 self-start sm:self-auto">
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Resultados &amp; Realizações:
                      </div>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary Box with Direct Contact Info */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950 border border-rose-300 dark:border-rose-500/30 shadow-sm dark:shadow-none flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Procurando um Desenvolvedor Júnior ou Estagiário dedicado?
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                Tenho facilidade para aprender novas stacks, espírito de colaboração e paixão por resolver problemas com dados e código de qualidade.
              </p>
            </div>

            <a
              href="#contato"
              className="px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-md shadow-rose-600/20"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
