// ---------- Data (edit your projects here) ----------
const projectsData = {
  "Data Engineering and Anlytics": [
    {
      id: "icdm-marketplace",
      name: "Integrated Customer Data Marketplace",
      summary: "Central repository of supply-chain programs/products and common KPIs for contract tracking & monthly/query reporting.",
      outcomes: ["Consistent KPI views", "Lower ad-hoc reporting"],
      stack: ["Databricks","Delta","SQL","PySpark","ER modeling"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Program Management in supply chain needed a central place for products, customer programs (by vertical), and common KPIs to check contract performance and run monthly/query reports.</li>
    <li><strong>Task:</strong> Organize customers → colleagues → products/programs with consistent KPI definitions.</li>
    <li><strong>Action:</strong> Built a curated marketplace of KPI views and <strong>deployed an entity-relationship (ER) model</strong> to maintain relationships between customers, colleagues, products, and KPI metrics.</li>
    <li><strong>Result:</strong> A go-to marketplace for program KPIs that reduces ad-hoc reporting and increases consistency.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Databricks</span><span>Delta</span><span>SQL</span><span>PySpark</span><span>ER model</span></div>
  <p>Curated vs publish layers documented; incremental refresh patterns; program master data (customer → vertical → program).</p>

  <h3>What I had to learn</h3>
  <p>Modeling program/colleague/product relationships in an ER model that keeps KPI views reusable and governed.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Turning scattered program knowledge into a consistent catalog. <strong>Hated:</strong> Normalizing KPI names/thresholds that varied by program.</p>
</section>`
    },
    {
      id: "team-performance-dashboard",   // merged: was Team Performance + High-Volume ETL
      name: "Team Performance Platform (ETL → Dashboard, CX — NAM)",
      summary: "Daily ETL of Salesforce + Cisco Webex Contact Center into a Power BI dashboard for >300 colleagues, manager→leadership rollups.",
      outcomes: ["Backfillable pipelines","Clear lineage","Leadership rollups"],
      stack: ["ADLS","ADF","SQL","Databricks","Power BI","Salesforce","Cisco Webex Contact Center"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> CX performance across North America (NAM) needed a single, consistent view for >300 colleagues across managers → Head of CX.</li>
    <li><strong>Task:</strong> Build reliable daily ingestion (1M+ rows/day) and deliver a dashboard covering cases, customer feedback, CSAT, and phone activity.</li>
    <li><strong>Action:</strong> Orchestrated ADLS → SQL loads with ADF/Databricks, established lineage/backfills, and surfaced KPIs in Power BI combining Salesforce data with Cisco Webex Contact Center metrics.</li>
    <li><strong>Result:</strong> Stable refreshes for <strong>350+ stakeholders</strong>, predictable backfills, and leadership rollups for day-to-day reviews.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>ADLS</span><span>ADF</span><span>Databricks</span><span>SQL</span><span>Power BI</span><span>Salesforce</span><span>Cisco Webex Contact Center</span></div>
  <p>Flow: <em>Azure Data Lake Storage → ADF/Databricks → SQL → Power BI</em>. KPIs: cases, feedback, <strong>CSAT</strong> (Customer Satisfaction), phone accessibility/adherence.</p>

  <h3>What I had to learn</h3>
  <p>Designing repeatable backfill strategies and aligning KPI definitions across Salesforce objects and telephony metrics.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Resilient retries/alerts and clean org rollups. <strong>Hated:</strong> Reconciling identifiers between Salesforce users and telephony agents; scheduling around late files.</p>
</section>`
    },
    {
      id: "powerbi-optimizations",
      name: "Power BI Optimizations (Confidential Shipments)",
      summary: "Multiple dataflows + rewired transforms cut refresh time by ~50% for a confidential/military shipment dashboard.",
      outcomes: ["~50% faster refresh"],
      stack: ["Power BI","Dataflows","Transform tuning"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> A critical Power BI dashboard for confidential/military shipments held too much data and refreshed slowly.</li>
    <li><strong>Task:</strong> Re-architect refresh and transformations to cut refresh time.</li>
    <li><strong>Action:</strong> Used multiple dataflows and rewired transformations to reduce latency.</li>
    <li><strong>Result:</strong> <strong>~50% faster</strong> refresh while preserving required operational detail.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Power BI</span><span>Dataflows</span><span>Transform tuning</span></div>

  <h3>What I had to learn</h3>
  <p>Restructuring dataflows/transforms to minimize refresh time without losing fidelity.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Making a slow dashboard operationally reliable. <strong>Hated:</strong> Balancing confidentiality constraints with diagnostic visibility.</p>
</section>`
    },
    {
      id: "capacity-management",
      name: "Capacity Management",
      summary: "Every ~3 hours data load to manage capacity as part of kean process.",
      outcomes: [],
      stack: [],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Capacity needs periodic refresh.</li>
    <li><strong>Task:</strong> Quick load every ~3 hours to manage capacity (kean process).</li>
    <li><strong>Action:</strong> TBD</li>
    <li><strong>Result:</strong> TBD</li>
  </ul>

  <h3>Technical Overview</h3>
  <p>TBD</p>

  <h3>What I had to learn</h3>
  <p>TBD</p>

  <h3>Challenge I liked/hated</h3>
  <p>TBD</p>
</section>`
    }
  ],

  "Automation and Tools": [
    {
      id: "automation-toolkit",
      name: "Microsoft Ecosystem Integrations Toolkit (Python)",
      summary: "Reusable wheel for SharePoint, Power BI (500+ dashboards), SendGrid, Azure SQL helpers; centralized auth/retries.",
      outcomes: ["Faster delivery","DRY integrations","Central dashboard monitoring"],
      stack: ["Python","SharePoint","Power BI","SendGrid","Azure SQL"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Team repeatedly needed Microsoft service access, email, and SQL operations for reports/Power Apps.</li>
    <li><strong>Task:</strong> Package a reusable toolkit to standardize common operations.</li>
    <li><strong>Action:</strong> Implemented modules for SharePoint (publish/archival), Power BI (<strong>500+ dashboards</strong> status & post-pipeline refresh triggers), SendGrid (emails), and SQL DB manager (read/write/update; stored procedure triggers).</li>
    <li><strong>Result:</strong> Faster delivery and much less repeated scripting.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Python</span><span>SharePoint</span><span>Power BI</span><span>SendGrid</span><span>Azure SQL</span></div>

  <h3>What I had to learn</h3>
  <p>Packaging Microsoft integrations and SQL helpers for simple adoption with unified authentication and retries.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> One import to handle repetitive tasks. <strong>Hated:</strong> Small API/auth differences across services.</p>
</section>`
    },
    {
      id: "powerapps-data-archive",
      name: "Power Apps Data Archive",
      summary: "Archival pipeline for Power Apps data using SharePoint for publishing and long-term storage.",
      outcomes: ["Safer retention","Reliable publishing"],
      stack: ["SharePoint","Power Apps","Python/Automation"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Reports and Power Apps needed a dependable archival path for app data.</li>
    <li><strong>Task:</strong> Create a process to publish artifacts and archive app records safely.</li>
    <li><strong>Action:</strong> Implemented archival to SharePoint (Lists/files) and automated publishing hooks.</li>
    <li><strong>Result:</strong> Repeatable retention with straightforward retrieval for reporting.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>SharePoint</span><span>Power Apps</span><span>Python/Automation</span></div>

  <h3>What I had to learn</h3>
  <p>Balancing SharePoint list/file storage patterns for retrieval speed vs. governance.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Simple restore paths. <strong>Hated:</strong> Handling schema tweaks from evolving apps.</p>
</section>`
    },
    {
      id: "exception-notifier",
      name: "Exception Notifier (North America)",
      summary: "Automated exception emails with observability; ~$100k savings and ~400 hours/year saved.",
      outcomes: ["~$100k savings","~400 hours/year saved"],
      stack: ["Python","Email/API","Logging"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Shipment exceptions needed timely, templated communications.</li>
    <li><strong>Task:</strong> Automate exception emails with reliable processing and observability.</li>
    <li><strong>Action:</strong> Implemented idempotent processing, templated messages, and strong logging/metrics.</li>
    <li><strong>Result:</strong> ~<strong>$100k</strong> savings and ~<strong>400 hours/year</strong> less manual effort.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Python</span><span>Email/API</span><span>Logging</span></div>

  <h3>What I had to learn</h3>
  <p>Reliable idempotency and clear observability so operations trust automated comms.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Turning noisy exception data into clear messages. <strong>Hated:</strong> Edge-case templates for uncommon routes.</p>
</section>`
    },
    {
      id: "pm-kpi-automation",
      name: "PM KPI Automation (Asana)",
      summary: "REST-driven sync to render project KPIs; ~40 hours/month saved.",
      outcomes: ["~40 hours/month saved"],
      stack: ["APIs","Python","Automation"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Project KPIs lived in Asana and needed automated, repeatable rendering.</li>
    <li><strong>Task:</strong> Sync via REST and publish KPIs with clean transforms.</li>
    <li><strong>Action:</strong> Built a REST-driven integration with tidy transformations and publishing.</li>
    <li><strong>Result:</strong> ~<strong>40 hours/month</strong> saved and more consistent KPI visibility.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>APIs</span><span>Python</span><span>Automation</span></div>

  <h3>What I had to learn</h3>
  <p>Mapping task/project fields into a durable KPI schema that stays stable as boards evolve.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Simplifying the transforms. <strong>Hated:</strong> Normalizing inconsistent custom fields across teams.</p>
</section>`
    },
    {
      id: "cisco-webex-contact-center-api",
      name: "Cisco Webex Contact Center API (GraphQL)",
      summary: "Python package using GraphQL to extract agent stats and phone accessibility/adherence.",
      outcomes: ["Reliable metrics retrieval"],
      stack: ["Python","GraphQL","Cisco Webex Contact Center"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Needed automated access to Cisco Webex Contact Center for agent stats and company phone accessibility/adherence.</li>
    <li><strong>Task:</strong> Build a Python package that queries the API and outputs metrics for tracking.</li>
    <li><strong>Action:</strong> Wrote a package that uses GraphQL queries to extract agent stats and accessibility/adherence measures.</li>
    <li><strong>Result:</strong> Reliable retrieval of phone/agent performance data for reporting.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Python</span><span>GraphQL</span><span>Cisco Webex Contact Center</span></div>

  <h3>What I had to learn</h3>
  <p>Writing and organizing GraphQL queries to fetch the right shapes/fields for performance tracking.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Precise metrics via GraphQL. <strong>Hated:</strong> Schema/field changes that impact queries.</p>
</section>`
    },
    {
      id: "org-maintenance-automation",
      name: "Org Maintenance Automation",
      summary: "Automation for organizational maintenance (placeholder).",
      outcomes: [],
      stack: [],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> TBD</li>
    <li><strong>Task:</strong> TBD</li>
    <li><strong>Action:</strong> TBD</li>
    <li><strong>Result:</strong> TBD</li>
  </ul>

  <h3>Technical Overview</h3>
  <p>TBD</p>

  <h3>What I had to learn</h3>
  <p>TBD</p>

  <h3>Challenge I liked/hated</h3>
  <p>TBD</p>
</section>`
    }
  ],

  "Cloud Engineering": [
    {
      id: "iac-cicd-standardization",
      name: "Azure Infrastructure as Code (IaC) + CI/CD",
      summary: "Dev & prod environments in HCL with pipelines managing all resource changes.",
      outcomes: ["Repeatable environments"],
      stack: ["HCL (Terraform style)","Azure","CI/CD"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Needed consistent dev and production environments managed as code.</li>
    <li><strong>Task:</strong> Create environments using HashiCorp Configuration Language (HCL) following IaC standards and manage changes via pipelines.</li>
    <li><strong>Action:</strong> Wrote IaC for dev/prod; wired CI/CD so all resource changes move through code review and deployment.</li>
    <li><strong>Result:</strong> Repeatable environments with changes tracked and deployed through CI/CD.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>HCL</span><span>Azure</span><span>CI/CD</span></div>

  <h3>What I had to learn</h3>
  <p>Structuring environment code to keep parity between dev and prod while staying easy to evolve.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Code-reviewable infra changes. <strong>Hated:</strong> Cleaning up drift from prior manual edits.</p>
</section>`
    },
    {
      id: "github-workflows",
      name: "GitHub Workflows (Databricks & ADF)",
      summary: "CI/CD from dev → main to promote Databricks and ADF changes into production.",
      outcomes: ["Consistent releases"],
      stack: ["GitHub Actions","Azure Databricks","Azure Data Factory"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Needed a reliable path to move code from development to production for Azure Databricks and Azure Data Factory (ADF).</li>
    <li><strong>Task:</strong> Use GitHub workflows to create CI/CD from <code>dev</code> branch to <code>main</code>.</li>
    <li><strong>Action:</strong> Implemented GitHub workflows to build/test and promote Databricks/ADF changes from dev to main for production.</li>
    <li><strong>Result:</strong> A consistent release path from development to production.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>GitHub Actions</span><span>Azure Databricks</span><span>Azure Data Factory</span></div>

  <h3>What I had to learn</h3>
  <p>Sequencing Databricks and ADF promotions cleanly between branches.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Clear, repeatable releases. <strong>Hated:</strong> Timing between pipeline runs and dependent artifacts.</p>
</section>`
    }
  ],

  "AI": [
    {
      id: "customer-temperature",
      name: "Customer Temperature (Daily CX Insights)",
      summary: "Daily CX feedback app with topic clustering over free-text to surface themes and trends.",
      outcomes: ["Proactive risk spotting","Theme-level rollups"],
      stack: ["App (feedback capture)","Topic clustering","Analytics"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Leadership needed a daily read on “customer temperature” from frontline CX colleagues.</li>
    <li><strong>Task:</strong> Capture daily feedback/comments and analyze trends to proactively spot risks and highlights.</li>
    <li><strong>Action:</strong> Built an app to collect daily feedback; analyzed time trends and used <strong>topic clustering</strong> on free-text to surface themes (“what’s going well” / “issues”).</li>
    <li><strong>Result:</strong> A year-round journey view for leadership/managers, plus theme rollups that remove the need to read every comment.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Feedback App</span><span>Topic clustering</span><span>Trend analytics</span></div>

  <h3>What I had to learn</h3>
  <p>Operationalizing clustering over short, noisy free-text to produce meaningful themes.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Turning qualitative feedback into actionable themes. <strong>Hated:</strong> Very short comments that reduce separability.</p>
</section>`
    },
    {
      id: "supplier-optimization",
      name: "Supplier Assignment Optimization",
      summary: "Linear programming for weekly PO allocation by lane/supplier under FEU targets and MQC ceilings.",
      outcomes: ["Auditable runs","Targets respected"],
      stack: ["PySpark","Optimization","Delta","Python"],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Weekly purchase orders (POs) had to be allocated across lanes/suppliers with FEU and MQC constraints.</li>
    <li><strong>Task:</strong> Build an optimization that respects business rules and produces auditable allocations.</li>
    <li><strong>Action:</strong> Implemented linear programming with constraints for <strong>FEU</strong> (Forty-foot Equivalent Unit) targets and <strong>MQC</strong> (Minimum Quantity Commitment) ceilings.</li>
    <li><strong>Result:</strong> Assignments that meet targets and run reliably on a weekly cadence with clear auditability.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>PySpark</span><span>Optimization</span><span>Delta</span><span>Python</span></div>

  <h3>What I had to learn</h3>
  <p>Expressing business commitments as constraints and validating feasible solutions against historical allocations.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Translating rules into a solvable model. <strong>Hated:</strong> Edge cases when targets conflict with MQC limits.</p>
</section>`
    },
    {
      id: "scm-forward-forecasting",
      name: "SCM Forward Looking Forecasting",
      summary: "Forward-looking forecasting in supply chain management (placeholder).",
      outcomes: [],
      stack: [],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> TBD</li>
    <li><strong>Task:</strong> TBD</li>
    <li><strong>Action:</strong> TBD</li>
    <li><strong>Result:</strong> TBD</li>
  </ul>

  <h3>Technical Overview</h3>
  <p>TBD</p>

  <h3>What I had to learn</h3>
  <p>TBD</p>

  <h3>Challenge I liked/hated</h3>
  <p>TBD</p>
</section>`
    },
    {
      id: "financial-forecasting",
      name: "Financial Forecasting Analysis",
      summary: "Financial forecasting analysis (placeholder).",
      outcomes: [],
      stack: [],
      details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> TBD</li>
    <li><strong>Task:</strong> TBD</li>
    <li><strong>Action:</strong> TBD</li>
    <li><strong>Result:</strong> TBD</li>
  </ul>

  <h3>Technical Overview</h3>
  <p>TBD</p>

  <h3>What I had to learn</h3>
  <p>TBD</p>

  <h3>Challenge I liked/hated</h3>
  <p>TBD</p>
</section>`
    }
  ]
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
