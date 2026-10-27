import { ProjectItem } from "../utils/portfolioLogic";

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  status: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: "Avançado" | "Intermediário" | "Prático";
    context: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Arthur",
  fullName: 'Arthur ("Alfinho")',
  role: "Engenheiro de Dados Jr. & Desenvolvedor de Software",
  tagline:
    "Transformando dados brutos em inteligência acionável e construindo aplicações web e móveis modernas com foco em impacto real.",
  email: "arthur.fs.lemos@gmail.com",
  github: "https://github.com/oalfinho",
  githubUsername: "oalfinho",
  location: "Rio Claro, SP — Brasil",
  availability: "Disponível para contratação (Júnior / Estágio)",
  avatar: "https://avatars.githubusercontent.com/u/109887797?v=4",
  heroImage: "/src/assets/images/dev_workspace_red_1793105280379.jpg",
  aboutText: {
    lead: "Sou um desenvolvedor apaixonado por tecnologia, ciência de dados e inteligência artificial aplicada, movido pela curiosidade de desvendar como sistemas complexos operam sob o capô.",
    paragraphs: [
      "Minha trajetória no desenvolvimento de software começou pela vontade de resolver problemas práticos do dia a dia e da vida acadêmica na FATEC Rio Claro. Ao longo dessa jornada, consolidei uma base sólida tanto no ecossistema de dados — com pipelines de web scraping, análise exploratória e modelagem relacional — quanto no desenvolvimento moderno em TypeScript, React, Python e Kotlin para Android.",
      "Acredito profundamente no aprendizado contínuo: para mim, cada novo desafio é uma oportunidade de dissecar uma biblioteca, otimizar um algoritmo ou explorar as fronteiras da IA generativa e da automação. Desenvolvo ferramentas que vão desde sistemas de gestão e combate a faltas acadêmicas (SemDP) até iniciativas de forte relevância social, como mapas de calor para análise geoespacial de dados públicos de segurança (Aurora).",
      "No meu GitHub (www.github.com/oalfinho), compartilho abertamente o código de meus projetos, experimentos com engenharia de prompts (como corretores analíticos baseados em IA para redações ENEM), scripts de produtividade e projetos acadêmicos. Minhas principais áreas de interesse e foco de atuação são Engenharia e Tratamento de Dados (ETL/ELT), Inteligência Artificial & LLMs, Desenvolvimento Web Full-Stack e Automação de Processos.",
    ],
    interestAreas: [
      {
        title: "Engenharia de Dados & ETL",
        desc: "Construção de pipelines de extração (Scraping), tratamento de dados e modelagem relacional com Python, Pandas e SQL.",
        icon: "Database",
      },
      {
        title: "Inteligência Artificial Aplicada",
        desc: "Engenharia de prompt estruturada, integração com APIs de LLMs (GPT/Gemini), detecção de padrões e machine learning.",
        icon: "Brain",
      },
      {
        title: "Desenvolvimento Web Moderno",
        desc: "Criação de interfaces reativas, responsivas e acessíveis com TypeScript, React, Tailwind CSS e Vite.",
        icon: "Globe",
      },
      {
        title: "Automação & Mobile",
        desc: "Desenvolvimento em Kotlin para ecossistema Android, scripts de automação de fluxo de trabalho e utilitários.",
        icon: "Smartphone",
      },
    ],
  },
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "semdp",
    name: "SemDP",
    title: "SemDP — Gestor Inteligente de Frequência Acadêmica",
    description: "Controle suas faltas, fique SemDP.",
    longDescription:
      "Aplicação web desenvolvida para estudantes universitários acompanharem de perto o limite regulamentar de faltas por disciplina, com cálculo preditivo de risco de dependência (DP) e alertas em tempo real.",
    category: "web",
    language: "TypeScript",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/oalfinho/SemDP",
    highlights: [
      "Cálculo de margem de faltas por carga horária (40h, 80h)",
      "Interface interativa e responsiva em React + Vite",
      "Persistência local e design focado na experiência acadêmica",
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    featured: true,
  },
  {
    id: "aurora",
    name: "Aurora",
    title: "Aurora — Mapa de Calor e Análise de Violência contra a Mulher",
    description: "Projeto Mapa de Calor sobre a violência contra a mulher.",
    longDescription:
      "Plataforma geoespacial e analítica com visualização de mapas de calor para mapear e conscientizar sobre dados de ocorrências de violência contra a mulher, permitindo identificar focos geográficos de atenção prioritária.",
    category: "dados",
    language: "TypeScript",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/oalfinho/Aurora",
    highlights: [
      "Renderização de camadas georreferenciadas com densidade de calor",
      "Cruzamento de dados abertos e estatísticas públicas",
      "Impacto social direto e visualização humanizada de métricas",
    ],
    techStack: [
      "TypeScript",
      "GeoJSON",
      "React",
      "Leaflet / Maps",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    id: "pokemon-scrap",
    name: "pokemon-scrap",
    title: "Pokemon Scrap — Pipeline de Web Scraping & Data Extraction",
    description: "Projeto de Web Scraping em Python.",
    longDescription:
      "Pipeline de engenharia de dados focado em raspagem automatizada de dados da web, higienização, normalização estrutural e exportação para formatos analíticos (CSV/JSON/DataFrames).",
    category: "dados",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/oalfinho/pokemon-scrap",
    highlights: [
      "Extração automatizada de atributos, estatísticas e metadados",
      "Tratamento de dados tabulares com Pandas",
      "Tratamento de erros e controle de requisições resilientes",
    ],
    techStack: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    featured: true,
  },
  {
    id: "callblocker",
    name: "CallBlocker",
    title: "CallBlocker — Filtro Inteligente de Spam Telefônico",
    description: "Feito com IA para bloqueio preventivo de chamadas.",
    longDescription:
      "Aplicativo Android nativo que utiliza lógica de inteligência artificial e heurísticas para identificar chamadas suspeitas de telemarketing predatório e spam, bloqueando-as antes de interromperem o usuário.",
    category: "ia-mobile",
    language: "Kotlin",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/oalfinho/CallBlocker",
    highlights: [
      "Integração com serviços de telefonia do Android (CallScreeningService)",
      "Lógica de filtragem com suporte a regras e IA",
      "Interface limpa e foco em privacidade do usuário",
    ],
    techStack: ["Kotlin", "Android SDK", "Machine Learning", "Jetpack"],
    featured: true,
  },
  {
    id: "gptpromptenem",
    name: "gptpromptENEM",
    title: "gptpromptENEM — Corretor de Redação Padrão ENEM com IA",
    description:
      "Prompt para correção de Redação Modelo ENEM no ChatGPT 4.o e 3.5.",
    longDescription:
      "Estruturação avançada de prompt engineering que atua como avaliador oficial do ENEM, analisando a redação submetida sob a ótica das 5 competências do INEP, gerando nota estimada de 0 a 1000 e feedback corretivo.",
    category: "ia-mobile",
    language: "Markdown / IA",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/oalfinho/gptpromptENEM",
    highlights: [
      "Critérios detalhados das 5 competências do INEP (200 pts cada)",
      "Detecção de desvios gramaticais e coesão textual",
      "Sugestões práticas de proposta de intervenção detalhada",
    ],
    techStack: ["Prompt Engineering", "GPT-4o", "OpenAI", "NLP"],
    featured: false,
  },
  {
    id: "degusta",
    name: "Degusta",
    title: "Degusta — Algoritmos & Estrutura de Dados Acadêmico",
    description: "Projeto acadêmico de estrutura de dados na FATEC.",
    longDescription:
      "Implementação de estruturas de dados clássicas em Python (árvores, filas, ordenação e tabelas hash) aplicadas a um sistema temático de degustação e catalogação gastronômica.",
    category: "dados",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/oalfinho/Degusta",
    highlights: [
      "Análise de complexidade temporal e espacial (Big-O)",
      "Estruturas de busca e ordenação eficientes",
      "Código modular e boas práticas de orientação a objetos",
    ],
    techStack: ["Python", "Estruturas de Dados", "Algoritmos", "OOP"],
    featured: false,
  },
  {
    id: "autoalura",
    name: "AutoAlura",
    title: "AutoAlura — Script de Automação e Otimização de Estudos",
    description: "Automação para plataformas de cursos e CMSP.",
    longDescription:
      "Script utilitário em JavaScript desenvolvido para automatizar tarefas repetitivas de navegação e catalogação de progresso em plataformas de aprendizado virtual.",
    category: "automacao",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/oalfinho/AutoAlura",
    highlights: [
      "Manipulação de DOM e injeção de scripts no browser",
      "Execução automatizada em fluxos assíncronos",
      "Economia de tempo operacional em rotinas diárias",
    ],
    techStack: ["JavaScript", "DOM API", "Web Automation"],
    featured: false,
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: "Em andamento",
    degree: "Graduação em Tecnologia em Inteligência Artificial",
    institution: "FATEC Rio Claro (Faculdade de Tecnologia de Rio Claro)",
    status: "Em andamento",
    details:
      "Foco em Engenharia de Software, Estrutura de Dados, Banco de Dados Relacionais, Redes e Desenvolvimento Ia",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Engenharia de Dados & Back-End",
    skills: [
      {
        name: "Python",
        level: "Avançado",
        context: "Automação, Pandas, NumPy, Scripts e Análise",
      },
      {
        name: "Web Scraping (BeautifulSoup / Requests)",
        level: "Avançado",
        context: "Coleta de dados da web e pipelines",
      },
      {
        name: "SQL & Modelagem de Dados",
        level: "Intermediário",
        context: "PostgreSQL, SQLite, consultas complexas",
      },
      {
        name: "Pipelines ETL & Limpeza",
        level: "Intermediário",
        context: "Normalização, parsing de JSON e CSV",
      },
    ],
  },
  {
    title: "Desenvolvimento Front-End & Mobile",
    skills: [
      {
        name: "TypeScript",
        level: "Avançado",
        context: "Tipagem estrita, interfaces e tooling",
      },
      {
        name: "React & Vite",
        level: "Avançado",
        context: "Hooks, componentes funcionais, SPA moderna",
      },
      {
        name: "Tailwind CSS",
        level: "Avançado",
        context: "Design responsivo, layouts e microinterações",
      },
      {
        name: "Kotlin (Android)",
        level: "Prático",
        context: "Criação de aplicativos nativos e serviços de background",
      },
    ],
  },
  {
    title: "Inteligência Artificial & Ferramentas",
    skills: [
      {
        name: "Prompt Engineering & LLMs",
        level: "Avançado",
        context: "Sistemas de avaliação, OpenAI e Gemini APIs",
      },
      {
        name: "Git & GitHub Workflow",
        level: "Avançado",
        context: "Versionamento, branching, pull requests e open-source",
      },
      {
        name: "Linux & Terminal Bash",
        level: "Avançado",
        context: "Ambiente de desenvolvimento e automação",
      },
      {
        name: "APIs RESTful & Integrações",
        level: "Intermediário",
        context: "Consumo, autenticação e documentação",
      },
    ],
  },
];

export const EXPERIENCE_HIGHLIGHTS: ExperienceItem[] = [
  {
    period: "2024 — Atual",
    role: "Desenvolvedor & Criador Open-Source",
    organization: "Projetos Pessoais & GitHub",
    location: "Rio Claro, SP",
    description:
      "Idealização e implementação de aplicações de utilidade pública e acadêmica, aplicando as melhores práticas de código limpo e arquitetura modular.",
    achievements: [
      "Criação do SemDP, auxiliando universitários no monitoramento de faltas e gestão do tempo acadêmico.",
      "Desenvolvimento do projeto Aurora com mapa de calor para espacialização de dados sobre violência contra a mulher.",
      "Construção de spiders e scrapers em Python para extração de dados estruturados em projetos analíticos.",
    ],
  },
  {
    period: "Apoio acadêmico",
    role: "Instrutor e Participante de Treinamentos de Git/GitHub",
    organization: "FATEC Rio Claro",
    location: "Rio Claro, SP",
    description:
      "Condução e apoio em oficinas práticas ensinando versionamento de código, fluxo de trabalho em equipe e boas práticas de commits e repositórios para estudantes ingressantes.",
    achievements: [
      "Facilitação de dinâmicas práticas com comandos Git essenciais e resolução de conflitos de merge.",
      "Disseminação da cultura de contribuição para software livre na comunidade acadêmica.",
    ],
  },
];
