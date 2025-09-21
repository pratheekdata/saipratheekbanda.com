// ---------- Data (edit your projects here) ----------
const projectsData = {
  "Data Platforms & Pipelines": [
    {
      id: "icdm-marketplace",
      name: "Integrated Customer Data Marketplace",
      summary: "KPI platform with curated Delta tables and publish views.",
      outcomes: ["Consistent KPI layer", "Power BI-ready"],
      stack: ["Databricks","Delta","SQL","PySpark"],
      details: `<p>Curated layers + publish views to standardize KPI consumption with incremental refresh patterns.</p>`
    },
    {
      id: "etl-to-insights",
      name: "High-Volume ETL to Insights",
      summary: "Daily 1M+ row ingestion from ADLS → SQL with Power BI delivery.",
      outcomes: ["350+ stakeholders", "Reliable backfills"],
      stack: ["ADF","SQL","Power BI","Databricks"],
      details: `<p>End-to-end orchestration with robust error handling and lineage.</p>`
    }
  ],
  "Automation & Tools": [
    {
      id: "exception-notifier",
      name: "Exception Notifier (North America)",
      summary: "Email alerts for shipment exceptions.",
      outcomes: ["~$100k savings", "~400 hours/year"],
      stack: ["Python","Email/API","Logging"],
      details: `<p>Templated comms, idempotent processing, strong observability.</p>`
    },
    {
      id: "pm-kpi-automation",
      name: "PM KPI Automation (Asana)",
      summary: "REST-driven sync to render project KPIs.",
      outcomes: ["~40 hours/month saved"],
      stack: ["APIs","Python","Automation"],
      details: `<p>Asana REST integration with clean transforms and publishing.</p>`
    }
  ],
  "Microsoft Ecosystem Integrations": [
    {
      id: "automation-toolkit",
      name: "Automation Toolkit",
      summary: "Reusable Python wheel: Graph, SharePoint, SendGrid, Power BI, ADF triggers.",
      outcomes: ["Faster delivery", "Unified auth/retries"],
      stack: ["Python","Graph API","SharePoint","SendGrid","Power BI","ADF"],
      details: `<p>Consolidated clients that keep codebases DRY and reliable.</p>`
    }
  ],
  "Azure Platform Admin & FinOps": [
    {
      id: "iac-cicd-standardization",
      name: "Azure IaC + CI/CD Standardization",
      summary: "Terraform patterns and Actions for consistent environments.",
      outcomes: ["Reduced manual setup", "~$200k annualized savings"],
      stack: ["Terraform","GitHub Actions","Azure"],
      details: `<p>Codified infra patterns, secrets mgmt, and deployment workflows.</p>`
    }
  ],
  "Optimization & Operations Research": [
    {
      id: "supplier-optimization",
      name: "Supplier Assignment Optimization",
      summary: "LP with business rules for lane/supplier allocation (FEU, MQC).",
      outcomes: ["Respects targets", "Auditable weekly runs"],
      stack: ["PySpark","Optimization","Delta","Python"],
      details: `<p>Allocates POs across valid lanes honoring FEU targets and MQC ceilings.</p>`
    }
  ],
  "Analytics & Insights": []
};

// ---------- Elements ----------
const sideNavEl = document.getElementById('side-nav');
const contentEl = document.getElementById('project-content');
const searchEl  = document.getElementById('project-search');
const expandBtn = document.getElementById('expand-all');
const collapseBtn = document.getElementById('collapse-all');
const compactToggle = document.getElementById('compact-toggle');
const sidebarEl = document.querySelector('.sidebar');

// ---------- State persistence ----------
const LS_SIDEBAR_OPEN = "proj-acc-open";   // map {category: boolean}
const LS_COMPACT      = "proj-compact";     // "1"|"0"

function loadOpenMap(){
  try { return JSON.parse(localStorage.getItem(LS_SIDEBAR_OPEN) || "{}"); } catch { return {}; }
}
function saveOpenMap(map){
  localStorage.setItem(LS_SIDEBAR_OPEN, JSON.stringify(map));
}

// ---------- Build sidebar with <details> accordions ----------
function buildSidebar() {
  const openMap = loadOpenMap();
  sideNavEl.innerHTML = "";

  Object.entries(projectsData).forEach(([group, items]) => {
    if (!items.length) return; // skip empty groups

    // container
    const wrapper = document.createElement('div');
    wrapper.className = "side-group";

    // details/summary
    const det = document.createElement('details');
    det.className = "acc";
    if (openMap[group]) det.setAttribute('open', '');

    // summary line
    const sum = document.createElement('summary');
    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.style.gap = '.45rem';
    const chev = document.createElement('span'); chev.className = 'chev'; chev.textContent = '▸';
    const title = document.createElement('span'); title.textContent = group;
    left.appendChild(chev); left.appendChild(title);

    const count = document.createElement('span'); count.className = 'count'; count.textContent = items.length;

    sum.appendChild(left);
    sum.appendChild(count);
    det.appendChild(sum);

    // list
    const ul = document.createElement('ul'); ul.className = 'side-list';
    items.forEach(p => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'side-link';
      a.href = `#${p.id}`;
      a.textContent = p.name;
      li.appendChild(a);
      ul.appendChild(li);
    });
    det.appendChild(ul);
    wrapper.appendChild(det);
    sideNavEl.appendChild(wrapper);

    // remember open/close per category
    det.addEventListener('toggle', () => {
      const om = loadOpenMap();
      om[group] = det.open;
      saveOpenMap(om);
    });
  });

  highlightActive();
}

// ---------- Highlight active link ----------
function highlightActive() {
  const current = location.hash.replace('#','');
  document.querySelectorAll('.side-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ---------- Finders ----------
function findProject(id) {
  for (const [_, items] of Object.entries(projectsData)) {
    const hit = items.find(p => p.id === id);
    if (hit) return hit;
  }
  return null;
}
function findCategoryByProject(id) {
  for (const [group, items] of Object.entries(projectsData)) {
    if (items.some(p => p.id === id)) return group;
  }
  return null;
}

// ---------- Render content ----------
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
      <div class="tagrow">${(proj.stack||[]).map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="block"><h3>Overview</h3>${proj.details}</div>
      ${(proj.outcomes?.length ? `
        <div class="block"><h3>Outcomes</h3>
          <ul>${proj.outcomes.map(o=>`<li>${o}</li>`).join('')}</ul>
        </div>` : ``)}
      <div class="block">
        <h3>At a glance</h3>
        <div class="kv">
          <div>Category</div><div>${findCategoryByProject(id) || ""}</div>
          <div>Deep link</div><div><code>${location.origin}${location.pathname}#${proj.id}</code></div>
        </div>
      </div>
    </article>`;
  contentEl.focus();
  highlightActive();

  // Ensure its category is expanded
  const cat = findCategoryByProject(id);
  if (cat) {
    document.querySelectorAll('.acc').forEach(d => {
      const title = d.querySelector('summary span:nth-child(2)')?.textContent;
      if (title === cat) d.open = true;
    });
    // Persist open state
    const om = loadOpenMap(); om[cat] = true; saveOpenMap(om);
  }
}

// ---------- Router: #<id> or #cat/<slug> ----------
const slugify = s => s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const catSlugs = Object.fromEntries(Object.keys(projectsData).map(n=>[slugify(n), n]));

function route() {
  const raw = location.hash.replace('#','');
  if (!raw) {
    // default: first project of first non-empty category
    const first = Object.values(projectsData).find(arr => arr.length)?.[0];
    if (first) location.hash = `#${first.id}`;
    return;
  }
  if (raw.startsWith('cat/')) {
    const name = catSlugs[raw.slice(4)];
    const first = name && projectsData[name] && projectsData[name][0];
    if (first) { location.hash = `#${first.id}`; return; }
  }
  renderProject(raw);
}

window.addEventListener('hashchange', route);

// ---------- Search: filter items + auto-expand matches ----------
searchEl?.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();

  document.querySelectorAll('.side-group').forEach(groupEl => {
    let matches = 0;
    groupEl.querySelectorAll('.side-link').forEach(a => {
      const id = a.getAttribute('href').slice(1);
      const proj = findProject(id);
      const hay = [
        a.textContent,
        proj?.summary || '',
        ...(proj?.stack || [])
      ].join(' ').toLowerCase();
      const hit = hay.includes(q);
      a.parentElement.style.display = hit ? '' : 'none';
      if (hit) matches++;
    });
    // Show/hide entire category
    groupEl.classList.toggle('hidden', matches === 0);

    // Update count badge to reflect filtered matches
    const count = groupEl.querySelector('.count');
    if (count) count.textContent = matches;

    // Auto-open categories with matches; close those without
    const det = groupEl.querySelector('.acc');
    if (det) det.open = (matches > 0);
  });

  highlightActive();
});

// ---------- Expand/Collapse all ----------
expandBtn?.addEventListener('click', () => {
  document.querySelectorAll('.acc').forEach(d => d.open = true);
  const om = {}; Object.keys(projectsData).forEach(k => om[k] = true); saveOpenMap(om);
});
collapseBtn?.addEventListener('click', () => {
  document.querySelectorAll('.acc').forEach(d => d.open = false);
  const om = {}; Object.keys(projectsData).forEach(k => om[k] = false); saveOpenMap(om);
});

// ---------- Compact mode ----------
(function initCompact(){
  const val = localStorage.getItem(LS_COMPACT) === "1";
  if (val) sidebarEl.classList.add('compact');
  compactToggle.checked = val;
  compactToggle.addEventListener('change', () => {
    const on = compactToggle.checked;
    sidebarEl.classList.toggle('compact', on);
    localStorage.setItem(LS_COMPACT, on ? "1" : "0");
  });
})();

// ---------- Init ----------
buildSidebar();
route();
