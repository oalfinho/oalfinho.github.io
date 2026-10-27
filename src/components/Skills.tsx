import React, { useState } from 'react';
import {
  Database,
  Flame,
  Box,
  Terminal,
  Workflow,
  Search,
  GitBranch,
  Brain,
  Network,
  Layers,
  Smartphone,
  Cpu,
  Server,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface TechSkill {
  name: string;
  category: 'dados' | 'infra' | 'dev';
  categoryLabel: string;
  level: string;
  description: string;
  projectsUsed: string[];
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'dados' | 'infra' | 'dev'>('todos');

  const skills: TechSkill[] = [
    {
      name: 'Python',
      category: 'dados',
      categoryLabel: 'Engenharia de Dados',
      level: 'Avançado',
      description: 'Linguagem central para pipelines ETL, análise exploratória com Pandas/NumPy e scripts de automação.',
      projectsUsed: ['pokemon-scrap', 'Degusta', 'Fatec-2026'],
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      name: 'SQL & PostgreSQL',
      category: 'dados',
      categoryLabel: 'Bancos de Dados',
      level: 'Intermediário / Avançado',
      description: 'Modelagem relacional, queries analíticas complexas, indexação, integridade referencial e agregações.',
      projectsUsed: ['Aurora', 'SemDP', 'Fatec'],
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: 'Apache Spark',
      category: 'dados',
      categoryLabel: 'Big Data & Processamento',
      level: 'Prático / Em Estudo',
      description: 'Fundamentos de computação distribuída, processamento em batch de grandes volumes de dados (PySpark).',
      projectsUsed: ['Estudos FATEC', 'Data Pipelines'],
      icon: <Flame className="w-6 h-6" />,
    },
    {
      name: 'Docker & Containers',
      category: 'infra',
      categoryLabel: 'Infraestrutura & DevOps',
      level: 'Intermediário',
      description: 'Criação de imagens Dockerfile, docker-compose para bancos locais e empacotamento de serviços isolados.',
      projectsUsed: ['PostgreSQL Dev', 'Microservices'],
      icon: <Box className="w-6 h-6" />,
    },
    {
      name: 'Web Scraping & Spiders',
      category: 'dados',
      categoryLabel: 'Extração de Dados',
      level: 'Avançado',
      description: 'Raspagem automatizada com BeautifulSoup, Requests e Scrapy com controle de requisições e normalização.',
      projectsUsed: ['pokemon-scrap', 'Coleta de Dados Públicos'],
      icon: <Search className="w-6 h-6" />,
    },
    {
      name: 'Pipelines ETL / ELT',
      category: 'dados',
      categoryLabel: 'Engenharia de Dados',
      level: 'Avançado',
      description: 'Fluxos end-to-end de extração, limpeza, validação de schema e carga em warehouses e tabelas analíticas.',
      projectsUsed: ['pokemon-scrap', 'Aurora'],
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      name: 'Linux & Bash Scripting',
      category: 'infra',
      categoryLabel: 'Sistema Operacional',
      level: 'Intermediário',
      description: 'Operação de terminal Linux, scripts bash para automação de tarefas repetitivas e tarefas agendadas (Cron).',
      projectsUsed: ['Servidores Dev', 'Fatec-2026'],
      icon: <Server className="w-6 h-6" />,
    },
    {
      name: 'Git & GitHub Workflow',
      category: 'infra',
      categoryLabel: 'Versionamento',
      level: 'Avançado',
      description: 'Controle de versão, branching strategy, pull requests, releases e instrutoria em oficinas na FATEC.',
      projectsUsed: ['treinamento_git', 'Todos os Repositórios'],
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      name: 'Inteligência Artificial & LLMs',
      category: 'dev',
      categoryLabel: 'IA Aplicada',
      level: 'Avançado',
      description: 'Engenharia de prompts estruturada, avaliação de modelos, integração com OpenAI e Gemini APIs.',
      projectsUsed: ['gptpromptENEM', 'CallBlocker IA'],
      icon: <Brain className="w-6 h-6" />,
    },
    {
      name: 'APIs RESTful & Backend',
      category: 'dev',
      categoryLabel: 'Integrações',
      level: 'Intermediário',
      description: 'Modelagem de rotas HTTP, validação de payloads com Zod, autenticação e documentação de contratos de dados.',
      projectsUsed: ['SemDP API', 'Aurora Backend'],
      icon: <Network className="w-6 h-6" />,
    },
    {
      name: 'TypeScript & React',
      category: 'dev',
      categoryLabel: 'Front-End Moderno',
      level: 'Intermediário',
      description: 'Interfaces reativas, componentização modular, tipagem estrita com TypeScript e estilização Tailwind.',
      projectsUsed: ['SemDP', 'Aurora', 'Portfólio'],
      icon: <Layers className="w-6 h-6" />,
    },
    {
      name: 'Kotlin & Android',
      category: 'dev',
      categoryLabel: 'Mobile',
      level: 'Prático',
      description: 'Desenvolvimento de apps nativos para Android com foco em serviços de background e filtragem de chamadas.',
      projectsUsed: ['CallBlocker'],
      icon: <Smartphone className="w-6 h-6" />,
    },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (selectedFilter === 'todos') return true;
    return skill.category === selectedFilter;
  });

  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800/60 bg-slate-100/50 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-500 mb-2">
              <span>Stack Tecnológica &amp; Habilidades</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500 dark:text-slate-400">Competências</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tecnologias de Dados &amp; Engenharia
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Ecossistema prático para pipelines de extração, modelagem relacional, processamento analítico e aplicações web.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 self-start md:self-end overflow-x-auto scrollbar-none">
            {[
              { id: 'todos', label: 'Todas as Skills' },
              { id: 'dados', label: 'Engenharia de Dados' },
              { id: 'infra', label: 'Infra & DevOps' },
              { id: 'dev', label: 'Desenvolvimento & IA' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-white dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 shadow-sm dark:border dark:border-rose-500/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid with Interactive Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-rose-500/80 dark:hover:border-rose-500/80 hover:bg-rose-50/40 dark:hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Top: Icon + Level Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-rose-600/25 transition-all duration-300">
                    {skill.icon}
                  </div>

                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                    {skill.level}
                  </span>
                </div>

                {/* Name & Category */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {skill.name}
                </h3>
                <div className="text-[11px] font-medium text-rose-600 dark:text-rose-400 mb-2">
                  {skill.categoryLabel}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Bottom: Applied In */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="text-slate-400 dark:text-slate-500 select-none">Usado em: </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {skill.projectsUsed.join(' · ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
