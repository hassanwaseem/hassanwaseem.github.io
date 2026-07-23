import { DATASETS, displayOrder, isTruthy, parseCsv, splitList, validateDataset } from "./data-utils.js";

const THEME_LABELS = {
  "contactless-body": "Contactless & body-centred",
  "interfaces-embodied": "Interfaces & embodied interaction",
  "computational-perception": "Computational haptics & perception"
};

const LINK_FIELDS = [
  ["publisher_url", "Publication"],
  ["pdf_url", "PDF"],
  ["video_url", "Video"],
  ["presentation_url", "Presentation"],
  ["project_url", "Project"]
];

const state = {
  publications: [],
  showAll: false,
  showAllSelected: false
};

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createExternalLink(url, label, className = "") {
  if (!url) return null;
  const link = createElement("a", className, label);
  link.href = url;
  if (!url.startsWith("mailto:") && !url.startsWith("#")) {
    link.target = "_blank";
    link.rel = "noreferrer";
    link.append(" ", createElement("span", "", "↗"));
    link.lastElementChild.setAttribute("aria-hidden", "true");
  }
  return link;
}

function appendAuthorNames(container, authors) {
  const parts = authors.replace(/;\s*/g, ", ").split(/(Waseem Hassan\*?)/g);
  parts.forEach((part) => {
    if (/^Waseem Hassan\*?$/.test(part)) container.append(createElement("strong", "", part));
    else container.append(document.createTextNode(part));
  });
}

function primaryTheme(themes) {
  return splitList(themes)[0] || "interfaces-embodied";
}

function themePill(theme) {
  const pill = createElement("span", "theme-pill", THEME_LABELS[theme] || theme);
  pill.dataset.theme = theme;
  return pill;
}

async function loadDataset(name) {
  const response = await fetch(DATASETS[name].path);
  if (!response.ok) throw new Error(`${DATASETS[name].path}: could not be loaded (${response.status}).`);
  const rows = parseCsv(await response.text(), DATASETS[name].path);
  return validateDataset(name, rows);
}

function renderSelectedPublications() {
  const container = document.querySelector("#selected-publications-grid");
  const showAllButton = document.querySelector("#show-all-selected");
  const selected = state.publications
    .filter((publication) => isTruthy(publication.featured))
    .sort((a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10) || displayOrder(a) - displayOrder(b));
  const limit = state.showAllSelected ? selected.length : 6;

  container.replaceChildren();
  selected.slice(0, limit).forEach((publication) => {
    const card = createElement("article", "selected-publication-card");
    const media = createElement("div", "selected-publication-media");
    if (publication.image) {
      const image = createElement("img");
      image.src = publication.image;
      image.alt = `Representative image for ${publication.title}`;
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 960;
      image.height = 540;
      media.append(image);
    } else {
      media.classList.add("has-placeholder");
      media.append(createElement("span", "", "Add an image in publications.csv"));
    }

    const body = createElement("div", "selected-publication-body");
    const meta = createElement("div", "selected-publication-meta");
    meta.append(themePill(primaryTheme(publication.themes)), createElement("span", "", `${publication.venue} · ${publication.year}`));
    const authors = createElement("p", "publication-authors");
    appendAuthorNames(authors, publication.authors);
    body.append(meta, createElement("h4", "", publication.title), authors);

    const links = createElement("div", "publication-links");
    LINK_FIELDS.forEach(([field, label]) => {
      const link = createExternalLink(publication[field], label);
      if (link) links.append(link);
    });
    if (links.children.length) body.append(links);
    card.append(media, body);
    container.append(card);
  });

  showAllButton.hidden = state.showAllSelected || selected.length <= 6;
  if (!showAllButton.hidden) showAllButton.textContent = `Show all selected publications (${selected.length})`;
}

function populatePublicationFilters(publications) {
  const typeSelect = document.querySelector("#type-filter");
  const yearSelect = document.querySelector("#year-filter");
  [...new Set(publications.map((publication) => publication.type))]
    .sort()
    .forEach((type) => typeSelect.append(new Option(type, type)));
  [...new Set(publications.map((publication) => publication.year))]
    .sort((a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10))
    .forEach((year) => yearSelect.append(new Option(year, year)));
}

function publicationMatches(publication, filters) {
  const haystack = `${publication.title} ${publication.authors} ${publication.venue} ${publication.year} ${publication.award}`.toLowerCase();
  return (
    (!filters.search || haystack.includes(filters.search)) &&
    (filters.theme === "all" || splitList(publication.themes).includes(filters.theme)) &&
    (filters.type === "all" || publication.type === filters.type) &&
    (filters.year === "all" || publication.year === filters.year)
  );
}

function currentFilters() {
  return {
    search: document.querySelector("#publication-search").value.trim().toLowerCase(),
    theme: document.querySelector("#theme-filter").value,
    type: document.querySelector("#type-filter").value,
    year: document.querySelector("#year-filter").value
  };
}

function renderPublications() {
  const list = document.querySelector("#publication-list");
  const count = document.querySelector("#publication-count");
  const showAllButton = document.querySelector("#show-all-publications");
  const filters = currentFilters();
  const hasFilters = filters.search || filters.theme !== "all" || filters.type !== "all" || filters.year !== "all";
  const matches = state.publications
    .filter((publication) => publicationMatches(publication, filters))
    .sort((a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10) || displayOrder(a) - displayOrder(b));
  const limit = state.showAll || hasFilters ? matches.length : 12;

  list.replaceChildren();
  count.textContent = `${matches.length} ${matches.length === 1 ? "record" : "records"}${hasFilters ? " match the current filters" : " in the complete publication record"}`;

  if (!matches.length) {
    list.append(createElement("p", "empty-state", "No publications match these filters. Try a broader search."));
  }

  matches.slice(0, limit).forEach((publication) => {
    const selected = isTruthy(publication.featured);
    const item = createElement("article", `publication-item${selected ? " is-selected" : ""}`);
    const year = createElement("div", "publication-year", publication.year);
    const main = createElement("div", "publication-main");
    main.append(createElement("h3", "", publication.title));
    const authors = createElement("p", "publication-authors");
    appendAuthorNames(authors, publication.authors);
    main.append(authors, createElement("p", "publication-venue", publication.venue));

    const side = createElement("div", "publication-side");
    const meta = createElement("div", "publication-meta");
    meta.append(createElement("span", "type-pill", publication.type));
    if (selected) meta.append(createElement("span", "selected-pill", "Selected"));
    if (publication.award) meta.append(createElement("span", "award-pill", publication.award));
    side.append(meta);

    const links = createElement("div", "publication-links");
    LINK_FIELDS.forEach(([field, label]) => {
      const link = createExternalLink(publication[field], label);
      if (link) links.append(link);
    });
    if (links.children.length) side.append(links);
    item.append(year, main, side);
    list.append(item);
  });

  showAllButton.hidden = state.showAll || hasFilters || matches.length <= 12;
  if (!showAllButton.hidden) showAllButton.textContent = `Show complete record (${matches.length})`;
}

function renderPatents(patents) {
  const container = document.querySelector("#patents-list");
  container.replaceChildren();
  patents.sort((a, b) => displayOrder(a) - displayOrder(b)).forEach((patent) => {
    const item = createElement("article", "stack-item");
    item.append(createElement("h4", "", patent.title));
    item.append(createElement("p", "", `${patent.inventors} · ${patent.status}${patent.patent_number ? ` · ${patent.patent_number}` : ""}`));
    const link = createExternalLink(patent.publisher_url || patent.pdf_url, patent.publisher_url ? "Patent record" : "PDF", "record-link");
    if (link) item.append(link);
    container.append(item);
  });
}

function renderAwards(awards) {
  const container = document.querySelector("#awards-list");
  container.replaceChildren();
  awards.sort((a, b) => displayOrder(a) - displayOrder(b)).forEach((award) => {
    const item = createElement("article", "timeline-item");
    item.append(createElement("span", "timeline-year", award.year));
    const content = createElement("div");
    content.append(createElement("h4", "", award.title));
    content.append(createElement("p", "", [award.organization, award.related_work, award.notes].filter(Boolean).join(" · ")));
    item.append(content);
    container.append(item);
  });
}

function renderDetails(id, rows, formatter) {
  const container = document.querySelector(id);
  container.replaceChildren();
  rows.sort((a, b) => displayOrder(a) - displayOrder(b)).forEach((row) => {
    const item = createElement("article", "detail-item");
    const { title, description, link, linkLabel } = formatter(row);
    item.append(createElement("h4", "", title), createElement("p", "", description));
    const anchor = createExternalLink(link, linkLabel || "View");
    if (anchor) item.lastElementChild.append(" · ", anchor);
    container.append(item);
  });
}

function renderService(service) {
  const container = document.querySelector("#service-list");
  container.replaceChildren();

  const leadership = service.filter((row) => row.category !== "Peer review" && row.category !== "Professional membership");
  const review = service.filter((row) => row.category === "Peer review");
  const memberships = service.filter((row) => row.category === "Professional membership");

  const groups = [
    {
      title: "Editorial & committee roles",
      text: leadership.map((row) => `${row.role}, ${row.organization} (${row.years})`).join("; ")
    },
    {
      title: "Peer review",
      text: review.map((row) => `${row.organization}${row.years ? ` (${row.years})` : ""}`).join("; ")
    },
    {
      title: "Professional memberships",
      text: memberships.map((row) => row.organization).join("; ")
    }
  ];

  groups.filter((group) => group.text).forEach((group) => {
    const item = createElement("article", "service-group");
    item.append(createElement("h4", "", group.title), createElement("p", "", group.text));
    container.append(item);
  });
}

function renderFundedProjects(projects) {
  const container = document.querySelector("#funded-projects-list");
  container.replaceChildren();
  projects.sort((a, b) => displayOrder(a) - displayOrder(b)).forEach((project, index) => {
    const item = createElement("article", `funded-project${index === 0 ? " is-primary" : ""}`);
    const meta = createElement("div", "funded-project-meta");
    meta.append(createElement("span", "funded-project-years", project.years), createElement("span", "funded-project-role", project.role));
    const body = createElement("div", "funded-project-body");
    body.append(createElement("p", "funded-project-programme", project.programme), createElement("h4", "", project.title), createElement("p", "", project.description));
    item.append(meta, body);
    container.append(item);
  });
}

function setupPublicationControls() {
  const form = document.querySelector("#publication-tools");
  form.addEventListener("input", () => {
    state.showAll = false;
    renderPublications();
  });
  form.addEventListener("change", () => {
    state.showAll = false;
    renderPublications();
  });
  form.addEventListener("reset", () => {
    window.requestAnimationFrame(() => {
      state.showAll = false;
      renderPublications();
    });
  });
  document.querySelector("#show-all-publications").addEventListener("click", () => {
    state.showAll = true;
    renderPublications();
  });
  document.querySelector("#show-all-selected").addEventListener("click", () => {
    state.showAllSelected = true;
    renderSelectedPublications();
  });

  document.querySelectorAll("[data-theme-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("#theme-filter").value = button.dataset.themeJump;
      state.showAll = true;
      renderPublications();
      document.querySelector("#publications").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });
}

function setupNavigation() {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("#primary-nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = [...nav.querySelectorAll("a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  function closeNavigation() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("nav-open", !open);
  });
  navLinks.forEach((link) => link.addEventListener("click", closeNavigation));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${visible.target.id}`) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-18% 0px -66% 0px", threshold: [0, 0.15, 0.5] }
  );
  sections.forEach((section) => observer.observe(section));
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 10), { passive: true });
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}

async function initialiseContent() {
  try {
    const [publications, awards, patents, service, theses, outreach, fundedProjects] = await Promise.all(
      ["publications", "awards", "patents", "service", "theses", "outreach", "fundedProjects"].map((name) => loadDataset(name))
    );

    state.publications = publications;
    renderSelectedPublications();
    populatePublicationFilters(publications);
    renderPublications();
    renderPatents(patents);
    renderAwards(awards);
    renderDetails("#theses-list", theses, (row) => ({
      title: `${row.degree}, ${row.field} · ${row.year}`,
      description: `${row.institution} — ${row.title}${row.advisor ? ` · Advisor: ${row.advisor}` : ""}`,
      link: row.pdf_url || row.presentation_url,
      linkLabel: row.pdf_url ? "Thesis" : "Presentation"
    }));
    renderService(service);
    renderFundedProjects(fundedProjects);
    renderDetails("#outreach-list", outreach, (row) => ({
      title: `${row.title} · ${row.year}`,
      description: `${row.type} — ${row.organization}${row.location ? `, ${row.location}` : ""}`,
      link: row.url,
      linkLabel: "More"
    }));
  } catch (error) {
    console.error(error);
    const alert = document.querySelector("#data-error");
    alert.hidden = false;
    alert.textContent = `Content could not be loaded. ${error.message}`;
    document.querySelectorAll(".loading-message").forEach((message) => {
      message.textContent = "Content unavailable. See the readable error in the Publications section.";
    });
  }
}

setupNavigation();
setupPublicationControls();
document.querySelector("#current-year").textContent = new Date().getFullYear();
initialiseContent();
