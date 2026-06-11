// ─── Dados ───────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Sobre",        href: "#top" },
  { label: "Experiência",  href: "#experiencia" },
  { label: "Projetos",     href: "#projetos" },
  { label: "Certificados", href: "#certificados" },
  { label: "Contato",      href: "#contato" },
];

const experiences = [
  {
    icon: "briefcase",
    title: "Desenvolvedor Front-end (Estagiário)",
    company: "Ministério da Defesa — Brasília, DF",
    date: "2025 — 2025",
    items: [
      "Desenvolveu sistemas internos para centralização de dados, contribuindo para a otimização de processos administrativos e operacionais.",
      "Automatizou tarefas manuais para aumentar a agilidade e a precisão das rotinas internas.",
      "Digitalizou processos operacionais, melhorando a organização das informações e a eficiência dos fluxos de trabalho.",
    ],
  },
  {
    icon: "school",
    title: "Monitor Geral",
    company: "CEUB — Brasília, DF",
    date: "2023",
    items: [
      "Ministrou minicursos de HTML, CSS, Python e C, apoiando a disseminação de conhecimento técnico e o desenvolvimento de habilidades práticas.",
    ],
  },
  
];

const certificates = [
  { name: "Monitoria — Ciência da Computação",     hours: "147h", link: "https://drive.google.com/file/d/1F4-GMRRabohBO6mlK64Gd5rpbyX7sNDf/view?usp=sharing" },
  { name: "HTML, CSS E JAVASCRIPT",                hours: "2h",   link: "https://drive.google.com/file/d/1jHfsAsPu5qFfSkTP8s2MCbNmPdncjomN/view?usp=sharing" },
  { name: "Linux Básico",                          hours: "15h",  link: "https://drive.google.com/file/d/1hKP42qOt3TQZbxjJxCL5nqwuFic7scPE/view?usp=sharing" },
  { name: "C Básico",                              hours: "15h",  link: "https://drive.google.com/file/d/1s-hNwZ4ExuuyGaNMd6aIYruD85a6W3fB/view?usp=sharing" },
  { name: "Python",                                hours: "15h",  link: "https://drive.google.com/file/d/1PzlYoYqLkZaeIm1qOz-ZtZp-xvFWmFie/view?usp=sharing" },
  { name: "POO — Programação Orientada a Objetos", hours: "5h",   link: "https://drive.google.com/file/d/1EyVrud9iJ4nWdkQ1VcnGTQSLoqsE0Yvs/view?usp=sharing" },
];

// ─── Renderização ─────────────────────────────────────────────────────────────

function renderNav() {
  const list = document.getElementById("nav-list");
  if (!list) return;

  list.innerHTML = navItems
    .map(({ label, href }) => `<li><a href="${href}">${label}</a></li>`)
    .join("");
}

function renderExperiences() {
  const grid = document.getElementById("experience-grid");
  if (!grid) return;

  grid.innerHTML = experiences
    .map(({ icon, title, company, date, items }) => `
      <article class="experience-card">
        <div class="experience-icon">
          <ion-icon name="${icon}"></ion-icon>
        </div>
        <div class="experience-content">
          <h3>${title}</h3>
          <p class="experience-company">${company}</p>
          <p class="experience-date">${date}</p>
          <ul>
            ${items.map(item => `
              <li>
                <span class="experience-bullet"></span>
                ${item}
              </li>
            `).join("")}
          </ul>
        </div>
      </article>
    `)
    .join("");
}

function renderCertificates() {
  const grid = document.getElementById("certificates-grid");
  if (!grid) return;

  grid.innerHTML = certificates
    .map(({ name, hours, link }) => {
      const hasLink = link && link !== "#";
      const tag = hasLink ? "a" : "div";
      const attrs = hasLink
        ? `href="${link}" target="_blank" rel="noopener noreferrer"`
        : "";

      return `
        <${tag} ${attrs} class="certificate-card">
          <ion-icon name="ribbon-outline" class="certificate-icon"></ion-icon>
          <p>${name}</p>
          <p class="certificate-hours">${hours}</p>
        </${tag}>
      `;
    })
    .join("");
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderExperiences();
  renderCertificates();
});