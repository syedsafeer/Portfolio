const skillGroups = [
  {
    title: "Languages and Frameworks",
    items: ["Python", "JavaScript", "HTML", "CSS", "React", "Django", "Flask", "Kivy", "Tkinter"]
  },
  {
    title: "Cloud, Security, and Data",
    items: [
      "Firebase Realtime Database",
      "Firebase Authentication",
      "Network Security",
      "Database Security",
      "Cloud Security Principles",
      "Data Analytics"
    ]
  },
  {
    title: "Systems and Operations",
    items: ["Linux", "Networking", "IT Infrastructure", "Troubleshooting", "SEO", "Git", "Prompt Design"]
  }
];

const projects = [
  {
    title: "HandyPro: Multi-Service Worker/Admin Management System",
    type: "Web Application",
    category: ["web"],
    description:
      "Scalable Flask application with Firebase authentication and real-time database support for admins, workers, and users.",
    highlights: [
      "Built admin approval flow and secure multi-role authentication",
      "Implemented real-time chat and offer negotiation between users and workers",
      "Integrated automated email notifications for account approval and rejection"
    ],
    tech: ["Python", "Flask", "Firebase", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/syedsafeer/Handypro"
  },
  {
    title: "Medicine Reminder Application (Kivy Version)",
    type: "Desktop Application",
    category: ["python"],
    description:
      "Desktop medicine reminder with custom alarms, dosage tracking, and a user-friendly GUI for daily adherence.",
    highlights: [
      "Developed reminder workflow for timely medication",
      "Designed GUI flow optimized for regular use"
    ],
    tech: ["Python", "Kivy"],
    link: "https://github.com/syedsafeer/Medicine-Reminder-App/tree/main"
  },
  {
    title: "Medicine Reminder Application (Tkinter Version)",
    type: "Desktop Application",
    category: ["python"],
    description:
      "Object-oriented Tkinter application that supports alarm setup and dosage tracking through a clean desktop interface.",
    highlights: ["Applied OOP structure for maintainability", "Focused on clear daily medication interaction"],
    tech: ["Python", "Tkinter", "OOP"],
    link: "https://github.com/syedsafeer/Medicine-Reminder-App"
  },
  {
    title: "Dual-Boot System Administration",
    type: "System Administration",
    category: ["systems"],
    description:
      "Configured Windows 11 and Kali Linux dual-boot environment and resolved partitioning plus BitLocker/NTFS mount issues.",
    highlights: [
      "Implemented secure dual-boot setup",
      "Resolved complex disk and file-system troubleshooting cases"
    ],
    tech: ["Kali Linux", "Windows 11", "Disk Partitioning", "Troubleshooting"],
    link: ""
  },
  {
    title: "Solar Energy System Configuration & Management",
    type: "Technical Administration",
    category: ["systems"],
    description:
      "Managed and optimized a 4.68 kW hybrid solar setup with inverter logic tuning, load balancing, and system troubleshooting.",
    highlights: [
      "Configured charging/discharging logic and priority order",
      "Handled load balancing for heavy appliances and sensitive IT equipment"
    ],
    tech: ["Hybrid Inverter", "Load Analysis", "System Monitoring", "Troubleshooting"],
    link: ""
  }
];

const certifications = [
  {
    title: "Applying AI Principles with Google Cloud",
    issuer: "Google Cloud Skills Boost",
    category: ["cloud", "ai"],
    description: "Ethical AI practices, fairness, privacy, and model safety in cloud deployments.",
    link:
      "https://www.skills.google/public_profiles/85a960b0-2bb4-4c68-a3eb-2ae6635ad69a/badges/16927225?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Introduction to Data Analytics in Google Cloud",
    issuer: "Google Cloud Skills Boost",
    category: ["cloud"],
    description: "Foundational analytics workflows, processing, warehousing, and insight generation.",
    link:
      "https://www.skills.google/public_profiles/85a960b0-2bb4-4c68-a3eb-2ae6635ad69a/badges/16931758?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    category: ["ai"],
    description: "Core concepts of generative AI and differences from traditional AI development.",
    link:
      "https://www.skills.google/public_profiles/85a960b0-2bb4-4c68-a3eb-2ae6635ad69a/badges/16906138?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud Skills Boost",
    category: ["ai"],
    description: "LLM architecture, capabilities, and prompt tuning fundamentals.",
    link:
      "https://www.skills.google/public_profiles/85a960b0-2bb4-4c68-a3eb-2ae6635ad69a/badges/16917339?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud Skills Boost",
    category: ["ai"],
    description: "Transparent, ethical AI development with bias mitigation concepts.",
    link:
      "https://www.skills.google/public_profiles/85a960b0-2bb4-4c68-a3eb-2ae6635ad69a/badges/16917372?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Introduction to Security Principles in Cloud Computing",
    issuer: "Google Cloud Skills Boost",
    category: ["cloud"],
    description: "Shared responsibility model, identity management, and cloud data protection.",
    link:
      "https://www.skills.google/public_profiles/85a960b0-2bb4-4c68-a3eb-2ae6635ad69a/badges/16936787?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google Cloud Skills Boost",
    category: ["cloud", "ai"],
    description: "Validated skill in writing optimized prompts for Vertex AI use cases.",
    link: "https://www.credly.com/badges/5c14925f-c837-435c-866d-191738f387b4/linked_in_profile"
  },
  {
    title: "Build 8 Python Apps, Games, and Web Applications",
    issuer: "Udemy",
    category: ["development"],
    description: "Hands-on Python development across desktop apps, games, and web projects.",
    link: "https://www.udemy.com/certificate/UC-297d6ac0-8e0e-4612-af8e-5fb11fbea13b/"
  },
  {
    title: "Master the Machine Muse: Build Generative AI with ML",
    issuer: "Udemy",
    category: ["development", "ai"],
    description: "Generative AI and deep learning implementation using Python-based ML workflows.",
    link: "https://www.udemy.com/certificate/UC-14eb93f2-ccb9-42f8-b993-bb527f79a09c/"
  }
];

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (typeof text === "string") {
    element.textContent = text;
  }
  return element;
}

function renderSkills() {
  const wrapper = document.getElementById("skillGroups");
  const fragment = document.createDocumentFragment();

  skillGroups.forEach((group) => {
    const groupCard = makeElement("article", "skill-group");
    const heading = makeElement("h3", "", group.title);
    const pillWrap = makeElement("div", "skills-pills");

    group.items.forEach((skill) => {
      pillWrap.appendChild(makeElement("span", "skill-pill", skill));
    });

    groupCard.appendChild(heading);
    groupCard.appendChild(pillWrap);
    fragment.appendChild(groupCard);
  });

  wrapper.appendChild(fragment);
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    const card = makeElement("article", "project-card reveal-up");
    card.dataset.category = project.category.join(" ");

    if (index === 0) {
      card.classList.add("featured");
    }
    if (index === 1 || index === 4) {
      card.classList.add("compact");
    }

    const body = makeElement("div", "card-body");
    body.appendChild(makeElement("p", "card-kicker", project.type));
    body.appendChild(makeElement("h3", "", project.title));
    body.appendChild(makeElement("p", "", project.description));

    const highlightList = makeElement("ul", "project-highlights");
    project.highlights.forEach((item) => {
      const point = makeElement("li", "", item);
      highlightList.appendChild(point);
    });
    body.appendChild(highlightList);

    const tagWrap = makeElement("div", "card-meta");
    project.tech.forEach((item) => {
      tagWrap.appendChild(makeElement("span", "meta-tag", item));
    });
    body.appendChild(tagWrap);

    if (project.link) {
      const link = makeElement("a", "card-link", "View Repository");
      link.href = project.link;
      link.target = "_blank";
      link.rel = "noreferrer";
      body.appendChild(link);
    }

    card.appendChild(body);
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

function renderCertifications() {
  const grid = document.getElementById("certGrid");
  const fragment = document.createDocumentFragment();

  certifications.forEach((cert) => {
    const card = makeElement("article", "cert-card reveal-up");
    card.dataset.category = cert.category.join(" ");

    const body = makeElement("div", "card-body");
    body.appendChild(makeElement("p", "cert-issuer", cert.issuer));
    body.appendChild(makeElement("h3", "", cert.title));
    body.appendChild(makeElement("p", "", cert.description));

    const link = makeElement("a", "card-link", "View Certificate");
    link.href = cert.link;
    link.target = "_blank";
    link.rel = "noreferrer";

    body.appendChild(link);
    card.appendChild(body);
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

function initFilterGroup(filterContainerId, itemSelector) {
  const filterContainer = document.getElementById(filterContainerId);
  const buttons = filterContainer.querySelectorAll(".filter-btn");

  const updateFilterLabels = () => {
    buttons.forEach((button) => {
      const filter = button.dataset.filter;
      const count = Array.from(document.querySelectorAll(itemSelector)).filter((item) => {
        return filter === "all" || item.dataset.category.includes(filter);
      }).length;

      const baseLabel = button.textContent.split(" (")[0];
      button.textContent = `${baseLabel} (${count})`;
    });
  };

  updateFilterLabels();

  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }

    const selected = button.dataset.filter;
    buttons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    document.querySelectorAll(itemSelector).forEach((item) => {
      const matches = selected === "all" || item.dataset.category.includes(selected);
      item.dataset.hidden = String(!matches);
    });
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") {
        return;
      }

      const section = document.querySelector(id);
      if (!section) {
        return;
      }

      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      const navLinks = document.getElementById("navLinks");
      navLinks.classList.remove("is-open");
      document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
    });
  });
}

function initNavbar() {
  const topbar = document.getElementById("topbar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const updateTopbar = () => {
    topbar.classList.toggle("scrolled", window.scrollY > 20);
  };

  const closeMenu = () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  updateTopbar();
  window.addEventListener("scroll", updateTopbar, { passive: true });

  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = event.target.closest(".nav");
    if (!clickedInsideNav) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function initActiveSectionLinks() {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));

  if (!sections.length || !navAnchors.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.id;
        navAnchors.forEach((anchor) => {
          const isCurrent = anchor.getAttribute("href") === `#${id}`;
          anchor.classList.toggle("is-active", isCurrent);
        });
      });
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealOnScroll() {
  const revealItems = Array.from(document.querySelectorAll(".reveal-up"));
  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 35, 280)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("in-view");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initPortfolio() {
  renderSkills();
  renderProjects();
  renderCertifications();

  initFilterGroup("projectFilters", ".project-card");
  initFilterGroup("certFilters", ".cert-card");

  initSmoothScroll();
  initNavbar();
  initActiveSectionLinks();
  initRevealOnScroll();
}

document.addEventListener("DOMContentLoaded", initPortfolio);

