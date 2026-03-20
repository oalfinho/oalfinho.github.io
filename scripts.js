const skills = [
  { name: "Python", level: 30 },
  { name: "SQL / PostgreSQL", level: 5 },
  { name: "Apache Spark", level: 0 },
  { name: "Machine Learning", level: 0 },
  { name: "Apache Airflow", level: 0 },
  { name: "Cloud (AWS/GCP)", level: 0 },
];

const badges = ["Python", "Pandas", "Git"];

const timeline = [
  {
    period: "2026 — Presente",
    title: "CST em Inteligência Artificial",
    org: "Fatec — Faculdade de Tecnologia do Estado de São Paulo",
    desc: "Curso Superior de Tecnologia com foco em machine learning, redes neurais, visão computacional e processamento de linguagem natural. Explorando a interseção entre IA e engenharia de dados.",
    badge: "em andamento",
  },
  {
    period: "2026 — Presente",
    title: "Autodidata em Engenharia de Dados",
    org: "Udemy",
    desc: "Aprendendo os fundamentos de pipelines ETL/ELT, modelagem dimensional, orquestração com Airflow, e ferramentas como dbt, Spark e plataformas cloud. Projetos práticos em desenvolvimento.",
    badge: "em andamento",
  },
];

const skillsList = document.getElementById("skills-list");
skills.forEach((s) => {
  skillsList.innerHTML += `
    <div class="skill-item">
      <div class="flex justify-between items-center mb-2">
        <span class="font-sans text-sm text-cream/75">${s.name}</span>
        <span class="font-mono text-xs text-rose/70">${s.level}%</span>
      </div>
      <div class="w-full h-px bg-cream/8 relative">
        <div class="skill-bar-fill absolute top-0 left-0" data-width="${s.level}"></div>
      </div>
    </div>
  `;
});

/* Badges */
const badgesEl = document.getElementById("badges-container");
badges.forEach((b) => {
  badgesEl.innerHTML += `
    <span class="font-mono text-xs px-3 py-1.5 border border-rose/15 text-cream/45 hover:border-rose/45 hover:text-rose transition-all cursor-default">${b}</span>
  `;
});

const tl = document.getElementById("timeline");
timeline.forEach((item, i) => {
  tl.innerHTML += `
    <div class="flex gap-6 reveal reveal-delay-${(i % 4) + 1}">
      <div class="flex flex-col items-center">
        <div class="timeline-dot"></div>
        ${i < timeline.length - 1 ? '<div class="flex-1 w-px bg-rose/15 mt-2"></div>' : ""}
      </div>
      <div class="pb-8">
        <p class="font-mono text-xs text-rose/60 mb-1">${item.period}</p>
        <div class="flex items-center gap-3 mb-1 flex-wrap">
          <h3 class="font-display text-xl font-light text-cream/90">${item.title}</h3>
          ${item.badge ? `<span class="font-mono text-xs px-2 py-0.5 border border-rose/30 text-rose/70">${item.badge}</span>` : ""}
        </div>
        <p class="font-sans text-xs text-rose/70 mb-3">${item.org}</p>
        <p class="text-cream/45 text-sm font-mono leading-loose">${item.desc}</p>
      </div>
    </div>
  `;
});

// Certificações em breve
document.getElementById("timeline").innerHTML += `
  <div class="flex gap-6 reveal reveal-delay-3">
    <div class="flex flex-col items-center">
      <div class="w-2 h-2 border border-rose/30 rotate-45 flex-shrink-0 mt-1.5"></div>
    </div>
    <div class="pb-2">
      <p class="font-mono text-xs text-cream/20 mb-1">Em breve</p>
      <h3 class="font-display text-xl font-light text-cream/30">Certificações</h3>
      <p class="font-sans text-xs text-cream/15 mt-1">Ainda não tenho — mas estão no roadmap.</p>
    </div>
  </div>
`;

// cursor
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");
let mouseX = 0,
  mouseY = 0,
  ringX = 0,
  ringY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

(function animRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + "px";
  ring.style.top = ringY + "px";
  requestAnimationFrame(animRing);
})();

document.querySelectorAll("a, button, input, textarea").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    dot.style.transform = "translate(-50%,-50%) scale(2)";
    ring.style.transform = "translate(-50%,-50%) scale(1.5)";
    ring.style.borderColor = "rgba(137,49,104,.8)";
  });
  el.addEventListener("mouseleave", () => {
    dot.style.transform = "translate(-50%,-50%) scale(1)";
    ring.style.transform = "translate(-50%,-50%) scale(1)";
    ring.style.borderColor = "rgba(137,49,104,.5)";
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        // Animate skill bars if inside skills section
        e.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const skillsSection = document.getElementById("skills");
const skillsObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
      }
    });
  },
  { threshold: 0.1 },
);
skillsObs.observe(skillsSection);

// Menu Mobile
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const iconO = document.getElementById("icon-open");
const iconC = document.getElementById("icon-close");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  iconO.classList.toggle("hidden");
  iconC.classList.toggle("hidden");
});

menu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    iconO.classList.remove("hidden");
    iconC.classList.add("hidden");
  });
});

function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById("btn-text");
  btn.textContent = "Enviando...";
  setTimeout(() => {
    btn.textContent = "✓ Mensagem enviada!";
    e.target.reset();
    setTimeout(() => (btn.textContent = "Enviar Mensagem"), 3000);
  }, 1200);
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener(
  "scroll",
  () => {
    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach((a) => {
      a.classList.remove("text-rose");
      if (a.getAttribute("href") === "#" + current)
        a.classList.add("text-rose");
    });
  },
  { passive: true },
);
