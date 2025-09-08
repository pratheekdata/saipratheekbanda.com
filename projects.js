// ----- Data model: add/edit projects here -----
const projectsData = {
  "Optimization": [
    {
      id: "supplier-optimization",
      name: "Supplier Assignment Optimization",
      summary: "Linear programming with business rules to allocate weekly POs by lane/supplier, balancing FEU targets and MQC.",
      outcomes: [
        "Respects lane eligibility and weekly FEU targets; over-assignment follows target ratios",
        "Independent weekly windows with full audit trail"
      ],
      stack: ["PySpark","Optimization","Delta","Python"],
      details: `
        <p>Designed to allocate POs across valid lanes while honoring each lane's weekly FEU target and the supplier MQC ceiling.
        When exceeding targets, over-assignment follows capacity percentage distribution. The engine runs per-week and remains auditable.</p>
      `
    }
  ],
  "Data Platform": [
    {
      id: "icdm-marketplace",
      name: "Integrated Customer Data Marketplace",
      summary: "One-stop KPI platform (Responsiveness & Quality) with curated Delta tables and publish views.",
      outcomes: [
        "Customer/Org data model with publish layers for Power BI",
        "Historic trends and team performance rollups"
      ],
      stack: ["Databricks","Delta","SQL","PySpark"],
      details: `
        <p>Built curated layers and publish views to standardize KPI consumption for analysts. Focused on consistency,
        documentation, and efficient Power BI delivery with incremental refresh patterns.</p>
      `
    },
    {
      id: "etl-to-insights",
      name: "High-Volume ETL to Insights",
      summary: "Daily 1M+ row ingestion from ADLS → SQL with Power BI delivery for CX KPIs and workload distribution.",
      outcomes: ["Used by 350+ stakeholders", "Reliable backfills and incremental updates"],
      stack: ["ADF","SQL","Power BI","Databricks"],
      details: `
        <p>Pipeline orchestrates extraction, cleansing, and model delivery, enabling near-real-time dashboarding with robust error handling and lineage.</p>
      `
    }
  ],
  "Automation": [
    {
      id: "exception-notifier",
      name: "Exception Notifier (North America)",
      summary: "Python app that alerts customers on shipment exceptions to speed resolution.",
      outcomes: ["~$100k annual savings", "~400 hours/year efficiency gains"],
      stack: ["Python","Email/API","Logging"],
      details: `
        <p>Templated communications with idempotent processing and strong observability. Reduced manual triage and improved customer experience.</p>
      `
    },
    {
      id: "pm-kpi-automation",
      name: "PM KPI Automation (Asana)",
      summary: "REST-driven sync to render project KPIs for multiple PMs.",
      outcomes: ["~40 hours/month saved", "Cleaner reporting cadence"],
      stack: ["APIs","Python","Automation"],
      details: `
        <p>Integrated Asana REST endpoints with lightweight transforms and a publishing layer. Emphasis on reliability and simplicity.</p>
      `
    }
  ],
  "Infrastructure / CI/CD": [
    {
      id: "iac-cicd-standardization",
      name: "Azure IaC + CI/CD Standardization",
      summary: "Terraform patterns and GitHub Actions for consistent environments and releases.",
      outcomes: ["Reduced manual setup", "~$200k annualized savings from automation and standard work"],
      stack: ["Terraform","GitHub Actions","Azure"],
      details: `
        <p>Codified infra patterns, secrets management, and deployment workflows. Faster provisioning, safer changes, and reproducible environments.</p>
      `
    }
  ]
};

// ----- Render sidebar from data -----
const sideNavEl = document.getElementById('side-nav');
const contentEl = document.getElementById('project-content');
const searchEl  = document.getElementById('project-search');

function buildSidebar(filterText = "") {
  sideNavEl.innerHTML = "";
  const ft = filterText.trim().toLowerCase();

  Object.entries(projectsData).forEach(([group, items]) => {
    // filter by search
    const filtered = items.filter(p => {
      const hay = (p.name + " " + p.summary + " " + (p.stack||[]).join(" ")).toLowerCase();
      return hay.includes(ft);
    });
    if (!filtered.length) return;

    const grp = document.createElement('div');
    grp.className = "side-group";
    grp.innerHTML = `<h3>${group}</h3>`;

    const ul = document.createElement('ul');
    ul.className = "side-list";

    filtered.forEach(p => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = "side-link";
      a.href = `#${p.id}`;
      a.textContent = p.name;
      li.appendChild(a);
      ul.appendChild(li);
    });

    grp.appendChild(ul);
    sideNavEl.appendChild(grp);
  });

  // highlight active
  highlightActive();
}

function highlightActive() {
  const current = location.hash.replace('#','');
  document.querySelectorAll('.side-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ----- Render content -----
function renderProject(id) {
  const proj = findProject(id);
  if (!proj) {
    contentEl.innerHTML = `
      <div class="placeholder">
        <h2>Project not found</h2>
        <p>Please pick another item from the sidebar.</p>
      </div>`;
    return;
  }

  contentEl.innerHTML = `
    <article>
      <h2>${proj.name}</h2>
      <div class="meta">${proj.summary}</div>
      <div class="tagrow">${(proj.stack||[]).map(t => `<span>${t}</span>`).join('')}</div>

      <div class="block"><h3>Overview</h3>${proj.details}</div>

      ${(proj.outcomes && proj.outcomes.length) ? `
        <div class="block">
          <h3>Outcomes</h3>
          <ul>${proj.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
        </div>` : ""}

      <div class="block">
        <h3>At a glance</h3>
        <div class="kv">
          <div>Category</div><div>${findCategory(id)}</div>
          <div>Deep link</div><div><code>${location.origin}${location.pathname}#${proj.id}</code></div>
        </div>
      </div>
    </article>
  `;

  // focus for accessibility
  contentEl.focus();
  highlightActive();
}

function findProject(id) {
  for (const [group, items] of Object.entries(projectsData)) {
    const hit = items.find(p => p.id === id);
    if (hit) return hit;
  }
  return null;
}
function findCategory(id) {
  for (const [group, items] of Object.entries(projectsData)) {
    if (items.some(p => p.id === id)) return group;
  }
  return "";
}

// ----- Routing -----
function route() {
  const id = location.hash.replace('#', '');
  if (!id) {
    // pick the first visible project in the current (filtered) sidebar
    const first = document.querySelector('#side-nav .side-link');
    if (first) {
      location.hash = first.getAttribute('href');
      return;
    } else {
      // nothing matches search, show placeholder
      contentEl.innerHTML = `
        <div class="placeholder">
          <h2>No matches</h2>
          <p>Try a different search term.</p>
        </div>`;
      return;
    }
  }
  renderProject(id);
}

window.addEventListener('hashchange', route);

// ----- Search -----
searchEl?.addEventListener('input', (e) => {
  buildSidebar(e.target.value);
  // after rebuild, route again to maintain selection/highlight
  route();
});

// init
buildSidebar();
route();
