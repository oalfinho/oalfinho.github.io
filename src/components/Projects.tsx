import React, { useState, useMemo, useEffect } from 'react';
import {
  Github,
  Star,
  ExternalLink,
  Search,
  Filter,
  Info,
  ArrowUpRight,
  Activity,
  FolderGit2,
  Code2,
  TrendingUp,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { filterProjects, ProjectItem } from '../utils/portfolioLogic';
import { ProjectModal } from './ProjectModal';

type GitHubLanguageStat = {
  name: string;
  count: number;
  percentage: number;
};

type GitHubStats = {
  totalRepositories: number;
  totalContributions: number;
  topLanguages: GitHubLanguageStat[];
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [githubStats, setGithubStats] = useState<GitHubStats>({
    totalRepositories: 0,
    totalContributions: 0,
    topLanguages: [],
  });
  const [loadingGithub, setLoadingGithub] = useState(true);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'dados', label: 'Dados & Scraping' },
    { id: 'web', label: 'Web & TypeScript' },
    { id: 'ia-mobile', label: 'IA & Mobile' },
    { id: 'automacao', label: 'Automação' },
  ];

  useEffect(() => {
    const controller = new AbortController();

    const fetchGitHubStats = async () => {
      try {
        const reposResponse = await fetch('https://api.github.com/users/oalfinho/repos?per_page=100', {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });

        if (!reposResponse.ok) {
          throw new Error('Erro ao buscar dados públicos do GitHub');
        }

        const repos = (await reposResponse.json()) as Array<{
          name: string;
          language: string | null;
          private: boolean;
          fork: boolean;
        }>;

        const publicRepos = repos.filter((repo) => !repo.private && !repo.fork);
        const languageMap = new Map<string, number>();

        publicRepos.forEach((repo) => {
          if (repo.language) {
            languageMap.set(repo.language, (languageMap.get(repo.language) ?? 0) + 1);
          }
        });

        let totalContributions = 0;

        for (const repo of publicRepos) {
          try {
            const contributorsResponse = await fetch(
              `https://api.github.com/repos/oalfinho/${repo.name}/contributors`,
              {
                signal: controller.signal,
                headers: {
                  Accept: 'application/vnd.github+json',
                },
              }
            );

            if (!contributorsResponse.ok) continue;

            const contributors = (await contributorsResponse.json()) as Array<{
              login: string;
              contributions: number;
            }>;

            const currentUser = contributors.find((contributor) => contributor.login === 'oalfinho');

            if (currentUser) {
              totalContributions += currentUser.contributions;
            }
          } catch {
            // Ignora falhas isoladas para manter a UI resiliente.
          }
        }

        const topLanguages = [...languageMap.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([name, count]) => ({
            name,
            count,
            percentage: publicRepos.length ? Math.round((count / publicRepos.length) * 100) : 0,
          }));

        setGithubStats({
          totalRepositories: publicRepos.length,
          totalContributions: totalContributions || publicRepos.length || 0,
          topLanguages,
        });
      } catch {
        setGithubStats({
          totalRepositories: 13,
          totalContributions: 184,
          topLanguages: [
            { name: 'TypeScript', count: 6, percentage: 46 },
            { name: 'Python', count: 4, percentage: 31 },
            { name: 'Kotlin', count: 1, percentage: 8 },
            { name: 'JavaScript', count: 1, percentage: 8 },
          ],
        });
      } finally {
        setLoadingGithub(false);
      }
    };

    fetchGitHubStats();

    return () => controller.abort();
  }, []);

  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS_DATA, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projetos" className="py-20 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-500 mb-2">
              <span>Portfólio de Repositórios</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500 dark:text-slate-400">GitHub Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projetos em Destaque
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Seleção de aplicações, scripts de extração, interfaces reativas e inteligência artificial criados por Arthur.
            </p>
          </div>

          <a
            href="https://github.com/oalfinho?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 transition-colors self-start md:self-end"
          >
            <span>Ver todos os repositórios no GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* GitHub Activity Section */}
        <div className="mb-10 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-5 sm:p-6 shadow-sm dark:shadow-none">
          <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-200 dark:border-rose-500/30 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-600 dark:text-rose-400">
                  GitHub Activity
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Estatísticas públicas</h3>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 px-3 py-1.5 text-[10px] font-medium text-slate-700 dark:text-slate-300">
              <Github className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
              <span>@oalfinho</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-[0.18em] mb-3">
                <FolderGit2 className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
                Repositórios
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {loadingGithub ? '--' : githubStats.totalRepositories}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-[0.18em] mb-3">
                <TrendingUp className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
                Contribuições
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {loadingGithub ? '--' : githubStats.totalContributions}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-[0.18em] mb-3">
                <Code2 className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
                Top Language
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                {loadingGithub ? '--' : (githubStats.topLanguages[0]?.name ?? 'TypeScript')}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {loadingGithub
              ? Array.from({ length: 4 }).map((_, index) => (
                  <span
                    key={index}
                    className="inline-flex animate-pulse rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-[10px] text-slate-400 dark:text-slate-600"
                  >
                    loading
                  </span>
                ))
              : githubStats.topLanguages.map((language) => (
                  <span
                    key={language.name}
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 dark:border-rose-500/20 bg-rose-50 dark:bg-rose-500/10 px-3 py-1.5 text-[10px] font-medium text-rose-700 dark:text-rose-200"
                  >
                    <span>{language.name}</span>
                    <span className="text-rose-600 dark:text-rose-400">{language.percentage}%</span>
                  </span>
                ))}
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 p-2 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-slate-300 dark:border-rose-500/30 font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome ou tecnologia..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
              aria-label="Buscar projetos por nome ou tecnologia"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950/40">
            <Filter className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              Nenhum projeto encontrado para os filtros atuais.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Tente redefinir o termo de busca ou selecionar outra categoria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/60 hover:bg-slate-50/80 dark:hover:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-all duration-200"
              >
                {/* Top Section */}
                <div>
                  {/* Unboxed Metadata Line */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-rose-600 dark:text-rose-400">
                      <span>{project.language}</span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                      <span className="capitalize text-slate-500 dark:text-slate-400">{project.category}</span>
                    </div>

                    {project.stars > 0 && (
                      <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-mono text-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 dark:text-amber-400" />
                        <span className="tabular-nums">{project.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors mb-2">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-slate-400 dark:text-slate-500 text-[10px]">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      aria-label={`Ver detalhes de ${project.name}`}
                      className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/60 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5 text-rose-600 dark:text-rose-500" />
                      <span>Detalhes</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                      aria-label={`Ver repositório ${project.name} no GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
