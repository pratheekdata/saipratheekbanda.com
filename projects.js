// ---------- Data (edit your projects here) ----------
const projectsData = {
  "Data Platforms & Pipelines": [
    {
      id: "icdm-marketplace",
      name: "Integrated Customer Data Marketplace",
      summary: "KPI platform with curated Delta tables and publish views.",
      outcomes: ["Consistent KPI layer", "Power BI-ready"],
      stack: ["Databricks","Delta","SQL","PySpark"],
      details: `<section class="proj-detail">
                <h3>Business Overview</h3>
                <ul class="bullets">
                  <li><strong>Situation:</strong> Analysts needed a consistent, governed way to consume KPIs across teams.</li>
                  <li><strong>Task:</strong> Create curated Delta layers and standard publish views so KPIs are analytics-ready and discoverable.</li>
                  <li><strong>Action:</strong> Built curated tables and documented publish views with incremental-refresh patterns and clear ownership/docs.</li>
                  <li><strong>Result:</strong> A consistent KPI layer that is Power BI–ready and easier to adopt across stakeholders.</li>
                </ul>

                <h3>Technical Overview</h3>
                <div class="tagrow"><span>Databricks</span><span>Delta</span><span>SQL</span><span>PySpark</span></div>

                <h3>What I had to learn</h3>
                <p>How to structure curated vs. publish layers so incremental refresh and downstream modeling remain simple and governed.</p>

                <h3>Challenge I liked/hated</h3>
                <p>Liked standardizing patterns that reduced ad-hoc SQL; disliked reconciling legacy KPI definitions during migration.</p>
              </section>`
    },
    {
      id: "etl-to-insights",
      name: "High-Volume ETL to Insights",
      summary: "Daily 1M+ row ingestion from ADLS → SQL with Power BI delivery.",
      outcomes: ["350+ stakeholders", "Reliable backfills"],
      stack: ["ADF","SQL","Power BI","Databricks"],
      details: `<section class="proj-detail">
                <h3>Business Overview</h3>
                <ul class="bullets">
                  <li><strong>Situation:</strong> Daily ingestion of 1M+ rows was required from ADLS to downstream analytics.</li>
                  <li><strong>Task:</strong> Deliver reliable, backfillable pipelines into SQL with Power BI delivery for many consumers.</li>
                  <li><strong>Action:</strong> Orchestrated end-to-end loads with robust error handling and lineage; designed repeatable backfill paths.</li>
                  <li><strong>Result:</strong> Stable delivery to <strong>350+ stakeholders</strong> with predictable refreshes and recoverable failures.</li>
                </ul>

                <h3>Technical Overview</h3>
                <div class="tagrow"><span>ADF</span><span>SQL</span><span>Power BI</span><span>Databricks</span></div>
                <p>Flow: <em>ADLS → SQL → Power BI</em>.</p>

                <h3>What I had to learn</h3>
                <p>Designing repeatable backfill strategies and documenting lineage so handoffs and audits are straightforward.</p>

                <h3>Challenge I liked/hated</h3>
                <p>Liked building resilient retries/alerts; disliked coordinating schedules around large, late-arriving files.</p>
              </section>
              `
    }
  ],
  "Automation & Tools": [
    {
      id: "exception-notifier",
      name: "Exception Notifier (North America)",
      summary: "Email alerts for shipment exceptions.",
      outcomes: ["~$100k savings", "~400 hours/year"],
      stack: ["Python","Email/API","Logging"],
      details: `<section class="proj-detail">
                  <h3>Business Overview (STAR)</h3>
                  <ul class="bullets">
                    <li><strong>Situation:</strong> Shipment exceptions needed timely, templated communications.</li>
                    <li><strong>Task:</strong> Automate exception emails with reliable processing and observability.</li>
                    <li><strong>Action:</strong> Implemented idempotent processing, templated messages, and strong logging/metrics.</li>
                    <li><strong>Result:</strong> ~<strong>$100k</strong> savings and ~<strong>400 hours/year</strong> less manual effort.</li>
                  </ul>

                  <h3>Technical Overview</h3>
                  <div class="tagrow"><span>Python</span><span>Email/API</span><span>Logging</span></div>

                  <h3>What I had to learn</h3>
                  <p>Building reliable idempotency and clear observability so operations can trust automated comms.</p>

                  <h3>Challenge I liked/hated</h3>
                  <p>Liked turning noisy exception data into clear messages; disliked handling edge-case templates for uncommon routes.</p>
                </section>
                `
    },
    {
      id: "pm-kpi-automation",
      name: "PM KPI Automation (Asana)",
      summary: "REST-driven sync to render project KPIs.",
      outcomes: ["~40 hours/month saved"],
      stack: ["APIs","Python","Automation"],
      details: `<section class="proj-detail">
                  <h3>Business Overview</h3>
                  <ul class="bullets">
                    <li><strong>Situation:</strong> Project KPIs lived in Asana and needed automated, repeatable rendering.</li>
                    <li><strong>Task:</strong> Sync via REST and publish KPIs with clean transforms.</li>
                    <li><strong>Action:</strong> Built a REST-driven integration with tidy transformations and publishing.</li>
                    <li><strong>Result:</strong> ~<strong>40 hours/month</strong> saved and more consistent KPI visibility.</li>
                  </ul>

                  <h3>Technical Overview</h3>
                  <div class="tagrow"><span>APIs</span><span>Python</span><span>Automation</span></div>
                  <p>System of record: <em>Asana (REST API)</em>.</p>

                  <h3>What I had to learn</h3>
                  <p>Mapping task/project fields into a durable KPI schema that stays stable as boards evolve.</p>

                  <h3>Challenge I liked/hated</h3>
                  <p>Liked simplifying the transforms; disliked normalizing inconsistent custom fields across teams.</p>
                </section>`
    }
  ],
  "Microsoft Ecosystem Integrations": [
    {
      id: "automation-toolkit",
      name: "Automation Toolkit",
      summary: "Reusable Python wheel: Graph, SharePoint, SendGrid, Power BI, ADF triggers.",
      outcomes: ["Faster delivery", "Unified auth/retries"],
      stack: ["Python","Graph API","SharePoint","SendGrid","Power BI","ADF"],
      details: `<section class="proj-detail">
                <h3>Business Overview (STAR)</h3>
                <ul class="bullets">
                  <li><strong>Situation:</strong> Teams repeatedly re-implemented authentication and client code for Microsoft/communications services.</li>
                  <li><strong>Task:</strong> Package a reusable toolkit to standardize calls and retries.</li>
                  <li><strong>Action:</strong> Built a Python wheel covering Graph, SharePoint, SendGrid, Power BI, and ADF triggers with unified auth/retries.</li>
                  <li><strong>Result:</strong> Faster delivery and DRY code across multiple projects.</li>
                </ul>

                <h3>Technical Overview</h3>
                <div class="tagrow">
                  <span>Python</span><span>Graph API</span><span>SharePoint</span><span>SendGrid</span><span>Power BI</span><span>ADF</span>
                </div>

                <h3>What I had to learn</h3>
                <p>Unifying authentication flows across services in a way that stays simple for downstream users.</p>

                <h3>Challenge I liked/hated</h3>
                <p>Liked making one clean client for many services; disliked chasing small differences between service endpoints.</p>
              </section>
              `
    }
  ],
  "Azure Platform Admin & FinOps": [
    {
      id: "iac-cicd-standardization",
      name: "Azure IaC + CI/CD Standardization",
      summary: "Terraform patterns and Actions for consistent environments.",
      outcomes: ["Reduced manual setup", "~$200k annualized savings"],
      stack: ["Terraform","GitHub Actions","Azure"],
      details: `<section class="proj-detail">
                  <h3>Business Overview (STAR)</h3>
                  <ul class="bullets">
                    <li><strong>Situation:</strong> Environment setup varied across teams and slowed delivery.</li>
                    <li><strong>Task:</strong> Codify infra patterns and delivery workflows.</li>
                    <li><strong>Action:</strong> Created Terraform patterns and GitHub Actions workflows with secrets management.</li>
                    <li><strong>Result:</strong> Reduced manual setup and ~<strong>$200k</strong> annualized savings.</li>
                  </ul>

                  <h3>Technical Overview</h3>
                  <div class="tagrow"><span>Terraform</span><span>GitHub Actions</span><span>Azure</span></div>

                  <h3>What I had to learn</h3>
                  <p>Designing reusable IaC patterns and pipelines that stay simple for teams adopting them.</p>

                  <h3>Challenge I liked/hated</h3>
                  <p>Liked turning common setup into templates; disliked untangling one-off environment differences.</p>
                </section>
                `
    }
  ],
  "Optimization & Operations Research": [
    {
      id: "supplier-optimization",
      name: "Supplier Assignment Optimization",
      summary: "LP with business rules for lane/supplier allocation (FEU, MQC).",
      outcomes: ["Respects targets", "Auditable weekly runs"],
      stack: ["PySpark","Optimization","Delta","Python"],
      details: `<section class="proj-detail">
                  <h3>Business Overview (STAR)</h3>
                  <ul class="bullets">
                    <li><strong>Situation:</strong> Weekly POs had to be allocated across lanes/suppliers with FEU and MQC constraints.</li>
                    <li><strong>Task:</strong> Build an optimization that respects business rules and produces auditable allocations.</li>
                    <li><strong>Action:</strong> Implemented linear programming with constraints for FEU (Forty-foot Equivalent Unit) targets and MQC (Minimum Quantity Commitment) ceilings.</li>
                    <li><strong>Result:</strong> Assignments that meet targets and run reliably on a weekly cadence with clear auditability.</li>
                  </ul>

                  <h3>Technical Overview</h3>
                  <div class="tagrow"><span>PySpark</span><span>Optimization</span><span>Delta</span><span>Python</span></div>

                  <h3>What I had to learn</h3>
                  <p>Expressing business commitments as constraints and validating feasible solutions against historical allocations.</p>

                  <h3>Challenge I liked/hated</h3>
                  <p>Liked translating rules into a solvable model; disliked handling edge cases when targets conflicted with MQC limits.</p>
                </section>
                `
    }
  ],
  "Analytics & Insights": []
};

// ---------- Elements ----------
const sideNavEl        = document.getElementById('side-nav');
const contentEl        = document.getElementById('project-content');
const searchEl         = document.getElementById('project-search');
const toggleAllBtn     = document.getElementById('toggle-all');     // chip button
const toggleCompactBtn = document.getElementById('toggle-compact'); // chip button
const resetBtn         = document.getElementById('reset-sidebar');  // in settings
const sidebarEl        = document.querySelector('.sidebar');

// ---------- State persistence ----------
const LS_SIDEBAR_OPEN = "proj-acc-open"; // map { categoryName: boolean }
const LS_COMPACT      = "proj-compact";  // "1" | "0"

const loadOpenMap = () => {
  try { return JSON.parse(localStorage.getItem(LS_SIDEBAR_OPEN) || "{}"); }
  catch { return {}; }
};
const saveOpenMap = (map) => localStorage.setItem(LS_SIDEBAR_OPEN, JSON.stringify(map));

// ---------- Helpers ----------
const slugify = s => s.toLowerCase()
  .replace(/&/g, 'and')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const catSlugs = Object.fromEntries(Object.keys(projectsData).map(n => [slugify(n), n]));

function findProject(id) {
  for (const [, items] of Object.entries(projectsData)) {
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

function highlightActive() {
  const current = location.hash.replace('#','');
  document.querySelectorAll('.side-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ---------- Toolbar label updaters ----------
function updateToggleAllLabel() {
  // Consider only visible groups (those with offsetParent) so labels match the
  // action which only affects visible groups (e.g., when a search is active).
  const acc = Array.from(document.querySelectorAll('.acc')).filter(d => d.offsetParent !== null);
  const allOpen = acc.length && acc.every(d => d.open);
  // Update header chips if present
  const icon  = toggleAllBtn?.querySelector('.chip-icon') || toggleAllBtn?.querySelector('.icon');
  const label = toggleAllBtn?.querySelector('.chip-label') || toggleAllBtn?.querySelector('.label');
  if (toggleAllBtn && icon && label) {
    if (allOpen) {
      toggleAllBtn.setAttribute('aria-pressed','true');
      toggleAllBtn.title = "Collapse";
      toggleAllBtn.setAttribute('aria-label','Collapse');
      icon.textContent  = '▾';
      label.textContent = 'Collapse';
    } else {
      toggleAllBtn.setAttribute('aria-pressed','false');
      toggleAllBtn.title = "Expand";
      toggleAllBtn.setAttribute('aria-label','Expand');
      icon.textContent  = '▸';
      label.textContent = 'Expand';
    }
  }

  // Update gear menu labels/icons if present
  const gearOpenIcon = document.getElementById('gear-open-icon');
  const gearOpenLabel = document.getElementById('gear-open-label');
  const gearToggleOpenBtn = document.getElementById('gear-toggle-open');
  if (gearOpenIcon && gearOpenLabel) {
    if (allOpen) {
      gearOpenIcon.textContent = '▾';
      gearOpenLabel.textContent = 'Collapse';
      gearToggleOpenBtn?.setAttribute('aria-pressed','true');
    } else {
      gearOpenIcon.textContent = '▸';
      gearOpenLabel.textContent = 'Expand';
      gearToggleOpenBtn?.setAttribute('aria-pressed','false');
    }
  }
}

function updateCompactLabel(on = sidebarEl.classList.contains('compact')) {
  const icon  = toggleCompactBtn?.querySelector('.chip-icon') || toggleCompactBtn?.querySelector('.icon');
  const label = toggleCompactBtn?.querySelector('.chip-label') || toggleCompactBtn?.querySelector('.label');
  if (toggleCompactBtn) {
    toggleCompactBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    // Show the action on the toggle (what will happen when clicked).
    toggleCompactBtn.title = on ? "Regular" : "Compact";
    toggleCompactBtn.setAttribute('aria-label', on ? "Regular" : "Compact");
    if (icon) icon.textContent = on ? '◻︎' : '≡';
    if (label) label.textContent = on ? 'Regular' : 'Compact';
  }

  // Update gear menu compact/regular labels/icons
  const gearCompactIcon = document.getElementById('gear-compact-icon');
  const gearCompactLabel = document.getElementById('gear-compact-label');
  const gearToggleCompactBtn = document.getElementById('gear-toggle-compact');
  const gearModeLabel = document.getElementById('gear-mode-label');
  // Always reflect current state in the Mode indicator if present
  if (gearModeLabel) gearModeLabel.textContent = on ? 'Compact' : 'Regular';

  // Set aria-pressed for the gear toggle button regardless
  if (gearToggleCompactBtn) gearToggleCompactBtn.setAttribute('aria-pressed', on ? 'true' : 'false');

  // Update the gear button icon/label to show the action (what will happen when clicked)
  if (gearCompactIcon) gearCompactIcon.textContent = on ? '◻︎' : '≡';
  if (gearCompactLabel) gearCompactLabel.textContent = on ? 'Regular' : 'Compact';
}

function setCompact(on) {
  sidebarEl.classList.toggle('compact', on);
  localStorage.setItem(LS_COMPACT, on ? "1" : "0");
  updateCompactLabel(on);
  // Debug logs removed - behavior is stable
}

// ---------- Build sidebar with accordions ----------
function buildSidebar() {
  const openMap = loadOpenMap();
  sideNavEl.innerHTML = "";

  Object.entries(projectsData).forEach(([group, items]) => {
    if (!items.length) return;

    const wrapper = document.createElement('div');
    wrapper.className = "side-group";

    const det = document.createElement('details');
    det.className = "acc";
    if (openMap[group]) det.setAttribute('open','');

    const sum = document.createElement('summary');

    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.style.gap = '.45rem';

    const chev = document.createElement('span');
    chev.className = 'chev';
    chev.textContent = '▸';

    const title = document.createElement('span');
    title.textContent = group;

    left.appendChild(chev);
    left.appendChild(title);

    const count = document.createElement('span');
    count.className = 'count';
    count.textContent = items.length;

    sum.appendChild(left);
    sum.appendChild(count);
    det.appendChild(sum);

    const ul = document.createElement('ul');
    ul.className = 'side-list';

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

    // Remember open/close per category
    det.addEventListener('toggle', () => {
      const om = loadOpenMap(); 
      om[group] = det.open; 
      saveOpenMap(om);
      updateToggleAllLabel();
    });
  });

  highlightActive();
  updateToggleAllLabel();
  updateCompactLabel();
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
      <div class="tagrow">${(proj.stack || []).map(t => `<span>${t}</span>`).join('')}</div>

      <div class="block"><h3>Overview</h3>${proj.details}</div>

      ${(proj.outcomes && proj.outcomes.length) ? `
        <div class="block">
          <h3>Outcomes</h3>
          <ul>${proj.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
        </div>` : ""}

      <div class="block">
        <h3>At a glance</h3>
        <div class="kv">
          <div>Category</div><div>${findCategoryByProject(id) || ""}</div>
          <div>Deep link</div><div><code>${location.origin}${location.pathname}#${proj.id}</code></div>
        </div>
      </div>
    </article>
  `;

  contentEl.focus();
  highlightActive();

  // Ensure its category is expanded
  const cat = findCategoryByProject(id);
  if (cat) {
    document.querySelectorAll('.acc').forEach(d => {
      const title = d.querySelector('summary span:nth-child(2)')?.textContent;
      if (title === cat) d.open = true;
    });
    const om = loadOpenMap(); om[cat] = true; saveOpenMap(om);
    updateToggleAllLabel();
  }
}

// ---------- Routing ----------
function route() {
  const raw = location.hash.replace('#','');
  if (!raw) {
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

// ---------- Search: filter + auto-expand matches ----------
searchEl?.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();

  document.querySelectorAll('.side-group').forEach(groupEl => {
    let matches = 0;

    const links = groupEl.querySelectorAll('.side-link');
    links.forEach(a => {
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

    // update badge count to reflect current matches
    const count = groupEl.querySelector('.count');
    if (count) count.textContent = matches;

    // hide whole group if no matches; open if has matches
    const det = groupEl.querySelector('.acc');
    groupEl.style.display = matches ? '' : 'none';
    if (det) det.open = matches > 0;
  });

  updateToggleAllLabel();
});

// ---------- Toolbar interactions ----------
toggleAllBtn?.addEventListener('click', () => {
  const acc = Array.from(document.querySelectorAll('.acc')).filter(d => d.offsetParent !== null); // only visible groups
  const allOpen = acc.length && acc.every(d => d.open);
  const newOpen = !allOpen;
  acc.forEach(d => d.open = newOpen);

  // Persist for all categories (visible or not) to keep intent
  const om = {};
  Object.keys(projectsData).forEach(k => om[k] = newOpen);
  saveOpenMap(om);
  updateToggleAllLabel();
});

toggleCompactBtn?.addEventListener('click', () => {
  setCompact(!sidebarEl.classList.contains('compact'));
});

// Gear menu actions (title-level dropdown) - consolidated toggles
const gearToggleOpenBtn = document.getElementById('gear-toggle-open');
const gearToggleCompactBtn = document.getElementById('gear-toggle-compact');
const gearMenu = document.querySelector('.gear-menu');

// Keyboard navigation & accessibility for gear menu
if (gearMenu) {
  const menuEl = gearMenu.querySelector('.menu');
  const items = Array.from(menuEl.querySelectorAll('[role="menuitem"]'));

  // Open/close via keyboard on summary
  const summary = gearMenu.querySelector('summary');
  // initialize aria-expanded to match details state
  summary.setAttribute('aria-expanded', gearMenu.open ? 'true' : 'false');
  // Keep aria-expanded in sync when the details element toggles
  gearMenu.addEventListener('toggle', () => {
    summary.setAttribute('aria-expanded', gearMenu.open ? 'true' : 'false');
  });
  summary.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      gearMenu.open = !gearMenu.open;
      if (gearMenu.open) items[0].focus();
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); gearMenu.open = true; items[0].focus(); }
  });

  // Menu keyboard handling
  menuEl.addEventListener('keydown', (e) => {
    const idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault(); items[(idx + 1) % items.length].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); items[(idx - 1 + items.length) % items.length].focus();
    } else if (e.key === 'Home') { e.preventDefault(); items[0].focus(); }
    else if (e.key === 'End') { e.preventDefault(); items[items.length - 1].focus(); }
    else if (e.key === 'Escape' || e.key === 'Esc') { gearMenu.open = false; summary.focus(); }
    else if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      // Activate the focused menu item
      e.preventDefault(); document.activeElement.click();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!gearMenu.contains(e.target)) {
      gearMenu.open = false;
    }
  });
}

gearToggleOpenBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  // If any visible group is closed, expand all; otherwise collapse all
  const acc = Array.from(document.querySelectorAll('.acc')).filter(d => d.offsetParent !== null);
  const allOpen = acc.length && acc.every(d => d.open);
  const newOpen = !allOpen;
  acc.forEach(d => d.open = newOpen);
  // Persist for all categories
  const om = {};
  Object.keys(projectsData).forEach(k => om[k] = newOpen);
  saveOpenMap(om);
  updateToggleAllLabel();
  if (gearMenu) gearMenu.open = false;
});

// Backwards-compatible single toggle (if present)
gearToggleCompactBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  const isCompact = sidebarEl.classList.contains('compact');
  setCompact(!isCompact);
  if (gearMenu) gearMenu.open = false;
});

// (Explicit compact/regular buttons removed - single toggle in HTML is used)

// Reset sidebar states
resetBtn?.addEventListener('click', () => {
  localStorage.removeItem(LS_SIDEBAR_OPEN);
  localStorage.removeItem(LS_COMPACT);
  sidebarEl.classList.remove('compact');
  buildSidebar();
  updateToggleAllLabel();
  updateCompactLabel(false);
});

// ---------- Init ----------
(function init() {
  const savedCompact = localStorage.getItem(LS_COMPACT) === "1";
  sidebarEl.classList.toggle('compact', savedCompact);

  buildSidebar();
  updateCompactLabel(savedCompact);
  route();
})();


// Open all categories on first load
(function openAllOnce(){
  const KEY = "proj-acc-open";
  if (!localStorage.getItem(KEY)) {
    const all = {};
    Object.keys(projectsData).forEach(k => all[k] = true);
    localStorage.setItem(KEY, JSON.stringify(all));
  }
})();