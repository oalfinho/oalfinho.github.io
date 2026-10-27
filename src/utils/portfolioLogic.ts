export interface ProjectItem {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'dados' | 'web' | 'ia-mobile' | 'automacao';
  language: string;
  stars: number;
  forks: number;
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  techStack: string[];
  featured: boolean;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export function filterProjects(
  projects: ProjectItem[],
  category: string,
  searchQuery: string = ''
): ProjectItem[] {
  const query = searchQuery.toLowerCase().trim();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'todos' || project.category === category;

    const matchesSearch =
      query === '' ||
      project.name.toLowerCase().includes(query) ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

export function validateContactForm(data: ContactFormInput): ValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (!data.name.trim()) {
    errors.name = 'Por favor, informe seu nome.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'O nome deve ter pelo menos 2 caracteres.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Por favor, informe seu e-mail.';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Informe um endereço de e-mail válido.';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Por favor, informe o assunto.';
  } else if (data.subject.trim().length < 3) {
    errors.subject = 'O assunto deve ter pelo menos 3 caracteres.';
  }

  if (!data.message.trim()) {
    errors.message = 'Por favor, escreva sua mensagem.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'A mensagem deve conter pelo menos 10 caracteres.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildMailtoUrl(toEmail: string, form: ContactFormInput): string {
  const subject = encodeURIComponent(`[Portfólio] ${form.subject}`);
  const body = encodeURIComponent(
    `Olá Arthur,\n\nNome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}\n\nEnviado através do portfólio.`
  );
  return `mailto:${toEmail}?subject=${subject}&body=${body}`;
}

export function calculatePortfolioStats(projects: ProjectItem[]) {
  const totalProjects = projects.length;
  const categoriesCount = new Set(projects.map((p) => p.category)).size;
  const totalStars = projects.reduce((acc, p) => acc + (p.stars || 0), 0);
  const techSet = new Set(projects.flatMap((p) => p.techStack));

  return {
    totalProjects,
    categoriesCount,
    totalStars,
    totalTechs: techSet.size,
  };
}
