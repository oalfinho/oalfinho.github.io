import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  validateContactForm,
  buildMailtoUrl,
  calculatePortfolioStats,
  ProjectItem,
} from './portfolioLogic.ts';

const mockProjects: ProjectItem[] = [
  {
    id: 'semdp',
    name: 'SemDP',
    title: 'SemDP — Controle de Faltas',
    description: 'Controle suas faltas, fique SemDP.',
    longDescription: 'Sistema completo para gestão de frequência de estudantes.',
    category: 'web',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    githubUrl: 'https://github.com/oalfinho/SemDP',
    highlights: ['TypeScript', 'Vite', 'React'],
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'pokemon-scrap',
    name: 'pokemon-scrap',
    title: 'Pokemon Web Scraper',
    description: 'Projeto de Web Scraping em Python.',
    longDescription: 'Pipeline de extração e estruturação de dados analíticos.',
    category: 'dados',
    language: 'Python',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/oalfinho/pokemon-scrap',
    highlights: ['Scraping', 'Pandas'],
    techStack: ['Python', 'BeautifulSoup', 'Pandas'],
    featured: true,
  },
  {
    id: 'callblocker',
    name: 'CallBlocker',
    title: 'CallBlocker IA',
    description: 'Feito com IA para bloqueio de chamadas.',
    longDescription: 'Detecção de spam em chamadas telefônicas.',
    category: 'ia-mobile',
    language: 'Kotlin',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/oalfinho/CallBlocker',
    highlights: ['Android', 'Kotlin', 'IA'],
    techStack: ['Kotlin', 'Android', 'Machine Learning'],
    featured: false,
  },
];

test('filterProjects filters correctly by category', () => {
  const webOnly = filterProjects(mockProjects, 'web');
  assert.equal(webOnly.length, 1);
  assert.equal(webOnly[0].id, 'semdp');

  const allProjects = filterProjects(mockProjects, 'todos');
  assert.equal(allProjects.length, 3);
});

test('filterProjects searches by name and techStack', () => {
  const result = filterProjects(mockProjects, 'todos', 'pandas');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'pokemon-scrap');

  const empty = filterProjects(mockProjects, 'todos', 'nonexistent_tool_xyz');
  assert.equal(empty.length, 0);
});

test('validateContactForm checks required fields and formats', () => {
  const invalid = validateContactForm({
    name: '',
    email: 'not-an-email',
    subject: 'hi',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Davi Dev',
    email: 'davi@example.com',
    subject: 'Oportunidade Júnior',
    message: 'Olá, gostei muito do seu portfólio e projetos!',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('buildMailtoUrl encodes recipient and body correctly', () => {
  const url = buildMailtoUrl('test@example.com', {
    name: 'Lucas',
    email: 'lucas@test.com',
    subject: 'Proposta de Projeto',
    message: 'Vamos conversar?',
  });
  assert.ok(url.startsWith('mailto:test@example.com'));
  assert.ok(url.includes(encodeURIComponent('Proposta de Projeto')));
  assert.ok(url.includes(encodeURIComponent('Lucas')));
});

test('calculatePortfolioStats calculates correct aggregated metrics', () => {
  const stats = calculatePortfolioStats(mockProjects);
  assert.equal(stats.totalProjects, 3);
  assert.equal(stats.categoriesCount, 3);
  assert.equal(stats.totalStars, 1);
  assert.ok(stats.totalTechs >= 6);
});
