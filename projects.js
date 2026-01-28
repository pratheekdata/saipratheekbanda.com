// ---------- Data (edit your projects here) ----------
const projectsData = {
  "Data Engineering": [
  {
    id: "cx-team-performance-platform",
    name: "CX Team Performance Platform",
    summary: "Unified CX performance platform combining case data, telephony metrics, and workforce signals into a governed KPI layer.",
    outcomes: ["Single source of truth", "Consistent KPI definitions", "Reduced manual reporting"],
    stack: ["ADLS","ADF","Databricks","Delta","SQL","Power BI","Salesforce","Cisco Webex Contact Center"],
    details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> CX performance across North America relied on data spread across Salesforce, telephony systems, and operational sources, leading to fragmented and inconsistent reporting.</li>
    <li><strong>Task:</strong> Build a centralized platform delivering reliable daily KPIs for colleagues, managers, and leadership.</li>
    <li><strong>Action:</strong> Designed and implemented pipelines and a KPI analytics layer that integrates Salesforce case data with Cisco Webex Contact Center metrics, standardizes KPIs, and enables rollups from individual → manager → leadership while separating KPI logic from reporting.</li>
    <li><strong>Result:</strong> A single source of truth used by <strong>300+ colleagues and leadership</strong>, enabling consistent reviews and faster operational decisions.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>ADLS</span><span>ADF</span><span>Databricks</span><span>Delta</span><span>SQL</span><span>Power BI</span></div>
  <p>Flow: Operational Systems → ADLS → Databricks/ADF → SQL KPI Layer → Power BI</p>

  <h3>What I had to learn</h3>
  <p>Aligning KPI definitions across fundamentally different systems while ensuring business consistency.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Designing a KPI layer for large datasets and ensuring KPIs remain consistent across products. <strong>Hated:</strong> Reconciling identities without breaking rollups and dealing with inconsistent upstream data sources.</p>
</section>`
  },

  {
    id: "transit-delivery-performance",
    name: "Transit & Delivery Time Performance",
    summary: "Operational analytics on middle-mile transit performance to identify service gaps and prevent revenue leakage.",
    outcomes: ["Lane-level performance insights", "Revenue leakage reduction"],
    stack: ["Snowflake","Azure Data Platform","SQL","PySpark","KPI Modeling"],
    details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> CX lacked a clear operational view of middle-mile performance, making it hard to understand delivery delays and customer impact.</li>
    <li><strong>Task:</strong> Highlight transit delays, link them to contractual expectations, and identify lanes causing revenue loss.</li>
    <li><strong>Action:</strong> Built analytics tracking lane-level performance, comparing actuals vs contractual commitments, and identifying recurring delay patterns.</li>
    <li><strong>Result:</strong> <strong>Immediate impact</strong> — identified chronically late lanes, enabling decisions to adjust or remove underperforming lanes.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Snowflake</span><span>SQL</span><span>PySpark</span><span>KPI Modeling</span></div>

  <h3>What I had to learn</h3>
  <p>Understanding different delivery types and how their operational behavior changes contractual obligations and transit time targets.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Instant impact from clear lane-level performance insights. <strong>Hated:</strong> Obtaining and validating contractual obligations from sales in inconsistent formats.</p>
</section>`
  },

  {
    id: "financial-forecast-accuracy",
    name: "Financial Forecast Accuracy & Performance Analytics",
    summary: "Budget vs forecast vs actual financial and volume analytics measuring forecast accuracy across products.",
    outcomes: ["Forecast accuracy visibility", "Improved planning decisions"],
    stack: ["Excel","SQL","Financial KPI Modeling","Forecast Accuracy Metrics"],
    details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Limited visibility into how accurate budgets and partner forecasts were compared to actual performance.</li>
    <li><strong>Task:</strong> Analyze monthly performance across ~10 products to understand forecast quality and planning gaps.</li>
    <li><strong>Action:</strong> Built analytics comparing budget vs forecast vs actuals, validating financials and volumes, and measuring forecast accuracy using <strong>APE</strong> and <strong>MAPE</strong>.</li>
    <li><strong>Result:</strong> Structured visibility into forecasting performance, supporting better future planning decisions.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Excel</span><span>SQL</span><span>Financial Modeling</span><span>MAPE/APE</span></div>

  <h3>What I had to learn</h3>
  <p>Refreshing financial performance metrics like EBIT and profit percentage and how financial outcomes relate to operational volumes.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Improving an existing planning process in a way that could be adopted quickly. <strong>Hated:</strong> Excel as a source system — frequent structural changes and user input errors.</p>
</section>`
  },
  {
  id: "icdm-marketplace",
  name: "Integrated Customer Data Marketplace",
  summary: "Central KPI marketplace and governed data model to standardize program performance reporting and reduce ad-hoc analysis.",
  outcomes: ["Consistent KPI views", "Lower ad-hoc reporting", "Reusable KPI definitions"],
  stack: ["Databricks","Delta","SQL","PySpark","ER Modeling","KPI Governance"],
  details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Program and performance reporting needed a central place for products/programs and common KPIs to support monthly and ad-hoc decision-making.</li>
    <li><strong>Task:</strong> Create a structured marketplace of KPI views with consistent definitions and reusable relationships across key entities.</li>
    <li><strong>Action:</strong> Built a curated KPI marketplace and implemented an <strong>ER model</strong> to maintain relationships between customers, colleagues, products/programs, and KPI metrics—making KPI definitions reusable and governed.</li>
    <li><strong>Result:</strong> A go-to KPI marketplace that reduces ad-hoc reporting and improves consistency across performance views.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Databricks</span><span>Delta</span><span>SQL</span><span>PySpark</span><span>ER Modeling</span></div>
  <p>Curated vs publish layers; reusable KPI views; governed entity relationships across customer/org/product/program.</p>

  <h3>What I had to learn</h3>
  <p>Designing an ER model that keeps KPI views reusable and consistent while still flexible enough for evolving programs.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Turning scattered program knowledge into a clean, reusable catalog of KPIs. <strong>Hated:</strong> Normalizing KPI names/thresholds that varied across teams and programs.</p>
</section>`
},
  {
  id: "azure-data-platform-architecture",
  name: "Azure Data Platform Architecture & Environment Standardization",
  summary: "Standardized Azure data platform structure for environments, storage layers, governance, and pipeline patterns.",
  outcomes: ["Consistent platform foundation", "Improved maintainability", "Faster onboarding"],
  stack: ["Azure Databricks","ADLS Gen2","Delta Lake","Azure Key Vault","Data Governance"],
  details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Multiple analytics solutions were being developed without a consistent structure for environments, storage, naming, and governance.</li>
    <li><strong>Task:</strong> Design a repeatable platform structure so analytics products follow the same environment, storage, and governance standards.</li>
    <li><strong>Action:</strong> Defined the Azure data platform blueprint including dev vs prod workspace strategy, ADLS layer structure (raw → curated → publish), table standards, secret management, cluster usage patterns, and Delta maintenance conventions.</li>
    <li><strong>Result:</strong> A consistent foundation for analytics products, reducing onboarding time and improving performance and governance predictability.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Azure Databricks</span><span>ADLS Gen2</span><span>Delta Lake</span><span>Key Vault</span><span>Environment Strategy</span></div>

  <h3>What I had to learn</h3>
  <p>Balancing governance with flexibility—designing standards teams can follow without slowing delivery.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Turning scattered practices into a clear platform blueprint. <strong>Hated:</strong> Untangling legacy structures that lacked consistent conventions.</p>
</section>`
}

],


 "Automation & Data Apps": [
  {
    id: "exception-notifier-na",
    name: "Exception Notifier (North America)",
    summary: "Rule-driven automation that monitors arriving shipments and detected exceptions, notifying customers proactively to prevent port delays, fines, and operational disruptions.",
    outcomes: ["Proactive customer communication", "Reduced risk of port delays/fines", "Lower manual effort"],
    stack: ["Python","Data rules","Email/API automation","Logging & monitoring","Idempotent processing"],
    details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Arriving shipments often had operational exceptions that were not consistently communicated to customers in time, leading to port delays, financial penalties, and movement disruptions.</li>
    <li><strong>Task:</strong> Use data rules to detect shipment exceptions early and automatically inform customers, enabling smoother transitions and reduced operational risk.</li>
    <li><strong>Action:</strong> Built a rule-based automation that applies exception rules to shipment data, identifies potential issues before arrival, and sends proactive customer communications.</li>
    <li><strong>Result:</strong> Improved shipment flow and fewer last-minute escalations by reducing risk of fines and movement delays.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Python</span><span>Rules engine</span><span>Email/API</span><span>Logging</span><span>Idempotency</span></div>

  <h3>What I had to learn</h3>
  <p>The company’s data infrastructure, the operational process, and the possible outcomes tied to different shipment exception scenarios.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Leaning on SMEs across the US/Canada/Mexico to define clear, rule-based exceptions grounded in real operations. <strong>Hated:</strong> Navigating the company’s technical landscape as the sole technical person on the team.</p>
</section>`
  },

  {
    id: "microsoft-integrations-toolkit",
    name: "Microsoft Ecosystem Integrations Toolkit (Python)",
    summary: "Reusable Python toolkit for Microsoft ecosystem integrations, standardizing authentication, retries, and common operations across SharePoint, Power BI, email services, and SQL.",
    outcomes: ["Faster delivery", "Reduced repeated scripting", "More reliable integrations"],
    stack: ["Python","SharePoint API","Power BI API","SendGrid API","Azure SQL","Auth + retries"],
    details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Multiple projects required repeated integrations with Microsoft services (SharePoint, Power BI, SQL, email), causing duplicated effort and inconsistent implementation patterns.</li>
    <li><strong>Task:</strong> Create a reusable toolkit that simplifies common operations and standardizes how integrations are handled across projects.</li>
    <li><strong>Action:</strong> Packaged a Python toolkit with modules for SharePoint publishing/archival, Power BI operations (status checks + post-pipeline refresh triggers), SendGrid email automation, and SQL helpers—centralizing authentication, retries, and logging.</li>
    <li><strong>Result:</strong> Faster project delivery and less “reinvent the wheel” scripting across analytics and automation solutions.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Python</span><span>SharePoint</span><span>Power BI</span><span>SendGrid</span><span>Azure SQL</span></div>

  <h3>What I had to learn</h3>
  <p>Designing integration modules that are simple for others to use while handling complex authentication, error handling, and service-specific behaviors behind the scenes.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> Creating a “plug-and-play” toolkit where one import can handle tasks that previously required repeated custom code. <strong>Hated:</strong> Small but important differences in API behaviors, plus continuous maintenance and adding new capabilities.</p>
</section>`
  },

  {
    id: "cisco-webex-cc-graphql",
    name: "Cisco Webex Contact Center API (GraphQL)",
    summary: "Python-based GraphQL integration to extract agent and telephony performance metrics for consistent phone accessibility and adherence analytics.",
    outcomes: ["Automated telephony metrics retrieval", "Stable inputs for KPI layers"],
    stack: ["Python","GraphQL","Cisco Webex Contact Center","API integration","Data shaping"],
    details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Phone performance metrics (agent activity, accessibility, adherence) were difficult to retrieve consistently and often required manual exports.</li>
    <li><strong>Task:</strong> Build a reliable way to extract Cisco Webex Contact Center metrics on a repeatable cadence for analytics and reporting.</li>
    <li><strong>Action:</strong> Developed a Python package using GraphQL queries to retrieve agent/queue performance stats, standardize outputs for downstream KPI layers, and handle pagination/query shaping efficiently.</li>
    <li><strong>Result:</strong> Reliable, automated access to telephony performance data used in CX analytics and operational reporting.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Python</span><span>GraphQL</span><span>Cisco Webex CC</span><span>API</span><span>Data shaping</span></div>

  <h3>What I had to learn</h3>
  <p>Structuring GraphQL queries for the right data shapes and designing outputs that remain stable as reporting needs evolve.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> The precision of GraphQL—pulling exactly the fields needed for performance reporting. <strong>Hated:</strong> Pagination limitations across APIs and understanding how different objects/schemas are linked together.</p>
</section>`
  },

  {
  id: "org-maintenance-automation",
  name: "Org Maintenance Automation",
  summary: "Python automation replacing a manual FTE-driven process to maintain organizational hierarchies for downstream analytics.",
  outcomes: ["Automated hierarchy updates", "Consistent org structures", "Reduced manual effort"],
  stack: ["Python","Workday integration","Hierarchy logic","Delta Lake","Data validation"],
  details: `
<section class="proj-detail">
  <h3>Business Overview</h3>
  <ul class="bullets">
    <li><strong>Situation:</strong> Organizational hierarchy maintenance was manual and required dedicated effort, leading to inconsistencies and broken reporting rollups.</li>
    <li><strong>Task:</strong> Automate hierarchy maintenance and reflect structural changes reliably for downstream dashboards and analytics systems.</li>
    <li><strong>Action:</strong> Built a Python automation sourcing data from Workday, detecting reporting structure changes, and updating organizational hierarchies accordingly.</li>
    <li><strong>Result:</strong> Replaced a manual FTE-driven process with automation and improved consistency of org data across analytics products.</li>
  </ul>

  <h3>Technical Overview</h3>
  <div class="tagrow"><span>Python</span><span>Workday</span><span>Hierarchy logic</span><span>Delta Lake</span></div>

  <h3>What I had to learn</h3>
  <p>How organizational hierarchies behave operationally and how to translate structural changes into reliable automated logic.</p>

  <h3>Challenge I liked/hated</h3>
  <p><strong>Liked:</strong> The challenge of automating a complex, human-driven process. <strong>Hated:</strong> Accounting for multiple regional exceptions and adapting logic accordingly.</p>
</section>`
}
],

  "Machine Learning and AI": [
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
