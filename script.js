const siteData = {
  projects: [
    {
      title: "CAD Design Portfolio",
      category: "CAD Designs",
      description:
        "A collection of clean parametric parts, assembly studies, and dimensioned manufacturing drawings built for iterative design reviews.",
      technologies: ["AutoCAD", "SolidWorks", "Technical Drawing"],
      github: "https://github.com/your-name",
      live: "#",
      accent: "Coordinate. refine. manufacture."
    },
    {
      title: "Smart Water Monitor",
      category: "Arduino Projects",
      description:
        "An embedded prototype that tracks tank level, temperature, and flow conditions to support safe utility monitoring.",
      technologies: ["Arduino", "Sensors", "C++"],
      github: "https://github.com/your-name",
      live: "#",
      accent: "Sense. alert. respond."
    },
    {
      title: "Process Data Toolkit",
      category: "Python Projects",
      description:
        "A Python workflow for cleaning laboratory data, plotting trends, and producing concise reports for engineering analysis.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      github: "https://github.com/your-name",
      live: "#",
      accent: "Analyze. visualize. explain."
    },
    {
      title: "Heat Transfer Model",
      category: "MATLAB Projects",
      description:
        "A MATLAB model used to compare thermal behavior under different material and boundary-condition assumptions.",
      technologies: ["MATLAB", "Numerical Methods", "Simulation"],
      github: "https://github.com/your-name",
      live: "#",
      accent: "Model. iterate. validate."
    },
    {
      title: "Materials Research Brief",
      category: "Research",
      description:
        "A structured research summary highlighting methodology, findings, and engineering implications from literature review work.",
      technologies: ["Research", "Writing", "Data Interpretation"],
      github: "https://github.com/your-name",
      live: "#",
      accent: "Question. test. conclude."
    },
    {
      title: "Engineering Report Suite",
      category: "Engineering Reports",
      description:
        "A polished set of technical reports that communicate problem statements, calculations, recommendations, and lessons learned.",
      technologies: ["Technical Writing", "Excel", "Presentation"],
      github: "https://github.com/your-name",
      live: "#",
      accent: "Structure. communicate. deliver."
    }
  ],
  skills: [
    { name: "Python", level: 86 },
    { name: "C++", level: 74 },
    { name: "MATLAB", level: 82 },
    { name: "AutoCAD", level: 88 },
    { name: "SolidWorks", level: 84 },
    { name: "Excel", level: 92 },
    { name: "Technical Drawing", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Teamwork", level: 94 }
  ],
  badges: [
    "Process design",
    "Lab documentation",
    "Simulation",
    "Data analysis",
    "Mechanical drafting",
    "Technical communication"
  ]
};

const typedPhrases = [
  "Designing practical systems with a chemical engineering mindset.",
  "Turning analysis into clear, reliable engineering decisions.",
  "Building, testing, and improving with curiosity and precision."
];

const svgDataUri = (label, tone) => {
  const [a, b] = tone;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${a}"/>
          <stop offset="100%" stop-color="${b}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" rx="36" fill="url(#g)"/>
      <circle cx="640" cy="120" r="110" fill="rgba(255,255,255,0.16)"/>
      <circle cx="160" cy="380" r="150" fill="rgba(255,255,255,0.12)"/>
      <path d="M120 335C195 220 285 180 398 180s203 42 285 135" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="8" stroke-linecap="round"/>
      <path d="M170 385h460" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="8" stroke-linecap="round"/>
      <text x="56" y="98" fill="white" font-family="Segoe UI, sans-serif" font-size="26" font-weight="700">${label}</text>
      <text x="56" y="140" fill="rgba(255,255,255,0.82)" font-family="Segoe UI, sans-serif" font-size="18">${label}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const imageThemes = [
  ["#0b1f3a", "#315a8a"],
  ["#102845", "#5f7fa6"],
  ["#0f172a", "#3b82f6"],
  ["#1e293b", "#64748b"],
  ["#17324f", "#7aa2c8"],
  ["#0c1a2c", "#2f4f7f"]
];

const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
const theme = storedTheme || (prefersDark ? "dark" : "light");

document.documentElement.dataset.theme = theme;

const themeToggle = document.querySelector("[data-theme-toggle]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const scrollTopBtn = document.querySelector("[data-scroll-top]");
const revealTargets = document.querySelectorAll(".reveal, .skill-item");
const pageName = document.body.dataset.page;

const setThemeIcon = () => {
  if (!themeToggle) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.innerHTML = isDark
    ? '<span aria-hidden="true">☀</span>'
    : '<span aria-hidden="true">☾</span>';
};

setThemeIcon();

themeToggle?.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  setThemeIcon();
});

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navMenu?.classList.toggle("open");
});

navMenu?.querySelectorAll("a").forEach((link) => {
  const href = link.getAttribute("href") || "";
  if (href.endsWith(`${pageName}.html`) || (pageName === "home" && href.endsWith("index.html"))) {
    link.setAttribute("aria-current", "page");
  }
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        if (entry.target.classList.contains("skill-item")) {
          entry.target.classList.add("in-view");
        }
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((target) => observer.observe(target));

window.addEventListener("scroll", () => {
  if (!scrollTopBtn) return;
  scrollTopBtn.classList.toggle("visible", window.scrollY > 500);
});

scrollTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const renderProjects = () => {
  const grid = document.querySelector("[data-projects-grid]");
  if (!grid) return;

  grid.innerHTML = siteData.projects
    .map((project, index) => {
      const imgSrc = svgDataUri(project.title, imageThemes[index % imageThemes.length]);
      return `
        <article class="project-card reveal">
          <img class="project-media" src="${imgSrc}" alt="${project.category} preview for ${project.title}">
          <div class="project-body">
            <div class="meta-row">
              <span class="pill">${project.category}</span>
              <span class="pill">${project.accent}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="stack" aria-label="Technologies used">
              ${project.technologies.map((tech) => `<span class="pill">${tech}</span>`).join("")}
            </div>
            <div class="project-actions">
              <a class="project-link" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
              <a class="project-link" href="${project.live}" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>`;
    })
    .join("");

  const generatedTargets = grid.querySelectorAll(".reveal");
  generatedTargets.forEach((target) => observer.observe(target));
};

const renderSkills = () => {
  const skillsGrid = document.querySelector("[data-skills-grid]");
  const badgeWrap = document.querySelector("[data-badge-wrap]");
  if (badgeWrap) {
    badgeWrap.innerHTML = siteData.badges.map((badge) => `<span class="pill">${badge}</span>`).join("");
  }
  if (!skillsGrid) return;

  skillsGrid.innerHTML = siteData.skills
    .map(
      (skill) => `
        <div class="skill-item reveal">
          <div class="skill-head">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-track" aria-hidden="true">
            <div class="skill-fill" style="--level: ${skill.level}%"></div>
          </div>
        </div>`
    )
    .join("");

  skillsGrid.querySelectorAll(".skill-item").forEach((item) => observer.observe(item));
};

const initTyping = () => {
  const target = document.querySelector("[data-typing]");
  if (!target) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = typedPhrases[phraseIndex];
    target.textContent = current.slice(0, charIndex);

    if (!deleting) {
      charIndex += 1;
      if (charIndex > current.length) {
        deleting = true;
        window.setTimeout(tick, 1500);
        return;
      }
    } else {
      charIndex -= 1;
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typedPhrases.length;
        charIndex = 0;
      }
    }

    const speed = deleting ? 40 : 55;
    window.setTimeout(tick, speed);
  };

  tick();
};

const initParticles = () => {
  const canvas = document.querySelector("[data-particles]");
  if (!canvas || pageName !== "home") return;

  const context = canvas.getContext("2d");
  const hero = canvas.parentElement;
  let width = 0;
  let height = 0;
  const dots = [];
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = canvas.width = rect.width * devicePixelRatio;
    height = canvas.height = rect.height * devicePixelRatio;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    dots.length = 0;
    const count = Math.max(32, Math.round(rect.width / 18));
    for (let i = 0; i < count; i += 1) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.8 + 0.6
      });
    }
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    context.fillStyle = document.documentElement.dataset.theme === "dark" ? "rgba(138,180,255,0.85)" : "rgba(49,90,138,0.7)";

    dots.forEach((dot, index) => {
      dot.x += dot.vx;
      dot.y += dot.vy;
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;

      context.globalAlpha = 0.8;
      context.beginPath();
      context.arc(dot.x, dot.y, dot.r * devicePixelRatio, 0, Math.PI * 2);
      context.fill();

      for (let other = index + 1; other < dots.length; other += 1) {
        const dx = dot.x - dots[other].x;
        const dy = dot.y - dots[other].y;
        const distance = Math.hypot(dx, dy);
        if (distance < 160 * devicePixelRatio) {
          context.globalAlpha = 0.08 * (1 - distance / (160 * devicePixelRatio));
          context.beginPath();
          context.moveTo(dot.x, dot.y);
          context.lineTo(dots[other].x, dots[other].y);
          context.strokeStyle = context.fillStyle;
          context.stroke();
        }
      }
    });
    context.globalAlpha = 1;
    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  if (!prefersReduced) requestAnimationFrame(draw);
};

const initContactForm = () => {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Thanks. Your message is ready to send from this template form.";
    form.reset();
  });
};

const updateYear = () => {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
};

renderProjects();
renderSkills();
initTyping();
initParticles();
initContactForm();
updateYear();
