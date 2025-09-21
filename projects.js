// ---------- Helpers ----------
const slugify = (s) =>
  s.toLowerCase()
   .replace(/&/g, "and")
   .replace(/[^a-z0-9]+/g, "-")
   .replace(/(^-|-$)/g, "");

// ---------- Data (edit here to add projects) ----------
const projectsData = {
  "Data Platforms & Pipelines": [
    {
      id: "icdm-marketplace",
      name: "Integrated Customer Data Marketplace",
      summary: "One-stop KPI platform (Responsiveness & Quality) with curated Delta tables and publish views.",
      outcomes: [
        "Customer/Org model and publish layers for Power BI",
        "Historic trends and team performance rollups"
      ],
      stack: ["Databricks","Delta","SQL","PySpark"],
      details: `
        <p>Standardized KPI consumption with curated layers and publish views. Consistent definitions, documentation,
        and efficient Power BI delivery with incremental refresh patterns.</p>
      `
    },
    {
      id: "etl-to-insights",
      name: "High-Volume ETL to Insights",
      summary: "Daily 1M+ row ingestion from ADLS → SQL with Power BI delivery for CX KPIs and workload distribution.",
      outcomes: ["Used by 350+ stakeholders", "Reliable backfills and incremental updates"],
      stack: ["ADF","SQL","Power BI","Databricks"],
      details: `
        <p>Orchestrated extraction, cleansing, and model delivery; near-real-time dashboarding with strong error handling and lineage.</p>
      `
    }
  ],

  "Automation & Tools": [
    {
      id: "exception-notifier",
      name: "Exception Notifier (North America)",
      summary: "Python app that alerts customers on shipment exceptions to speed resolution.",
      outcomes: ["~$100k annual savings", "~400 hours/year efficiency gains"],
      stack: ["Python","Email/API","Logging"],
      details: `
        <p>Templated communications with idempotent processing and observability. Reduced manual triage and improved customer experience.</p>
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

  "Microsoft Ecosystem Integrations": [
    {
      id: "automation-toolkit",
      name: "Automation Toolkit",
      summary: "Reusable Python wheel: SharePoint, Graph, SendGrid, Power BI, ADF triggers.",
      outcomes: ["Faster app delivery", "Unified auth & error handling"],
      stack: ["Python","Graph API","SharePoint","SendGrid","Power BI","ADF"],
      details: `
        <p>Consolidated clients (auth, retries, upload helpers) that power multiple automations while keeping codebases DRY.</p>
      `
    }
  ],

  "Analytics & Insights": [
    // Add more analytics-heavy items here as you publish them
  ],

  "Azure Platform Admin & FinOps": [
    {
      id: "iac-cicd-standardization",
      name: "Azure IaC + CI/CD Standardization",
      summary: "Terraform patterns and GitHub Actions for consistent environments and releases.",
      outcomes: ["Reduced manual setup", "~$200k annualized savings from automation and standard work"],
      stack: ["Terraform","GitHub Actions","Azure"],
      details: `
        <p>Codified infrastructure patterns, secrets management, and deployment workflows. Faster provisioning,
        safer changes, and reproducible environments.</p>
      `
    }
  ],

  "Optimization & Operations Research": [
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
        <p>Allocates POs across valid lanes while honoring each lane's weekly FEU target and supplier MQC ceilings.
        When exceeding targets, over-assignment follows capacity percentage distribution.</p>
      `
    }
  ]
};

// Build a lookup of category slugs
const categorySlugs = Object.fromEntries(
  Object.keys(projectsData).map(name => [slugify(name), name])
);

// ---------- DOM ----------
const sideNavEl = document.getElementById('side-nav');
const contentEl = document.getElementById('project-content');
const searchEl  = document.getElementById('project-search');

// Render the sidebar (optionally highlight a single category)
function buildSidebar() {
  sideNavEl.innerHTML = "";
  Object.entries(projectsData).forEach(([group, items]) => {
    if (!items.length) return;

    const grp = document.createElement('div');
    grp.className = "side-group";
    grp.innerHTML = `<h3>${group}</h3>`;

    const ul = document.createElement('ul');
    ul.className = "side-list";

    items.forEach(p => {
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

  highlightActive();
}

function highlightActive() {
  const current = location.hash.replace('#','');
  document.querySelectorAll('.side-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
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

function renderProject(id) {
  const proj = findProject(id);
  if (!proj) {
    contentEl.innerHTML = `
      <div class="placeholder">
        <h2>Project not found</h2>
        <p>Please pick another item from the sidebar.</p>
      </div>`;
    highlightActive();
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
  contentEl.focus();
  highlightActive();
}

// Routing: support #<project-id> and #cat/<category-slug>
function route() {
  const raw = location.hash.replace('#', '');
  if (!raw) {
    // default: first project overall
    const [firstGroup, items] = Object.entries(projectsData).find(([_, arr]) => arr.length) || [];
    if (items && items[0]) location.hash = `#${items[0].id}`;
    return;
  }

  if (raw.startsWith('cat/')) {
    const slug = raw.slice(4);
    const name = categorySlugs[slug];
    const first = name && projectsData[name] && projectsData[name][0];
    if (first) {
      location.hash = `#${first.id}`;
      return;
    }
    // if no match, fall through to not found
  }

  renderProject(raw);
}

window.addEventListener('hashchange', route);

// Search (simple text match across name/summary/stack)
searchEl?.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  // Hide/show links in place
  document.querySelectorAll('.side-group').forEach(groupEl => {
    let any = false;
    groupEl.querySelectorAll('.side-link').forEach(a => {
      const txt = a.textContent.toLowerCase();
      const proj = findProject(a.getAttribute('href').slice(1));
      const hay = txt + " " + (proj?.summary || "") + " " + (proj?.stack || []).join(" ").toLowerCase();
      const hit = hay.includes(q);
      a.parentElement.style.display = hit ? "" : "none";
      any = any || hit;
    });
    groupEl.style.display = any ? "" : "none";
  });
});

buildSidebar();
route();
