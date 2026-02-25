(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const w="/portfolio/assets/profile-BPvodkcI.jpg",i={name:"Clifford Sarabia",roles:["IT Developer","System Developer","Flutter","PHP/MySQL"],about:`I build web and mobile systems such as monitoring systems, attendance tracking, and admin dashboards.
     I’m currently developing Flutter applications and improving my UI/UX and backend skills.`,email:"cliffordsarabia@gmail.com",facebook:"https://www.facebook.com/cliffordsarabia.damboi",cvPath:"Clifford-Sarabia-CV.pdf"},S=["Flutter","Dart","PHP","MySQL","HTML","CSS","JavaScript","Git","Bootstrap","REST API","UI/UX","Vite","Responsive Design"],m=[{id:"sk-kabac",title:"SK Kabac Monitoring System",desc:"Web-based system for youth/residents management, approvals, and masterlist printing.",tags:["PHP","MySQL","Admin","Dashboard"],tech:["PHP","MySQL","Bootstrap","JavaScript"],highlights:["Admin approval workflow for youth registrations","Masterlist printing + filtering","User management + activity logs"],screenshots:[],link:null},{id:"attendance",title:"Attendance Monitoring System",desc:"Employee time-in/time-out tracking with automatic late computation using PHP & MySQL.",tags:["PHP","MySQL","Timekeeping"],tech:["PHP","MySQL","HTML/CSS","JavaScript"],highlights:["Time-in/time-out records with late computation","Daily/weekly reports for payroll","Search + employee filtering"],screenshots:[],link:null},{id:"flutter-app",title:"Flutter Mobile Application",desc:"Android mobile app built using Flutter and tested using Android Emulator.",tags:["Flutter","Mobile","Dart"],tech:["Flutter","Dart","Android Emulator"],highlights:["Mobile UI screens with navigation","Tested in Android Emulator","Ready for APK build"],screenshots:[],link:null}],j=[{year:"2026",title:"Freelance / System Developer",org:"Personal Projects",desc:"Built web-based monitoring systems (admin dashboards, approval workflows, printing modules) and improved UI/UX patterns for mobile-friendly layouts.",tags:["PHP","MySQL","UI/UX","Dashboards"]},{year:"2025",title:"IT Support & Tech Services",org:"Tech Support Work",desc:"Handled troubleshooting, installations, and system maintenance. Improved workflow and documentation for faster resolution.",tags:["Troubleshooting","Windows","Networking"]},{year:"2024",title:"Student / Continuous Learning",org:"IT Path",desc:"Focused on web development foundations and started building portfolio projects using modern tools and best practices.",tags:["HTML","CSS","JavaScript"]}],$=document.querySelector("#app");$.innerHTML=`
  <div class="page" data-theme="auto">
    <!-- TOP NAV -->
    <nav class="nav">
      <div class="nav-inner">
        <div class="brand">
          <span class="brand-dot"></span>
          <span class="brand-name">${i.name}</span>
        </div>

        <div class="nav-links" role="navigation" aria-label="Main Navigation">
          <a class="nav-link" href="#skills">Skills</a>
          <a class="nav-link" href="#projects">Projects</a>
          <a class="nav-link" href="#experience">Experience</a>
          <a class="nav-link" href="#contact">Contact</a>
        </div>

        <div class="nav-actions">
          <button class="icon-btn" id="themeBtn" aria-label="Toggle theme" title="Toggle theme">
            <span class="icon" aria-hidden="true">🌓</span>
          </button>
          ${D()}
        </div>

        <button class="icon-btn nav-burger" id="burgerBtn" aria-label="Open menu" title="Menu">
          ☰
        </button>
      </div>

      <div class="nav-mobile" id="mobileNav" aria-hidden="true">
        <a class="nav-link" href="#skills">Skills</a>
        <a class="nav-link" href="#projects">Projects</a>
        <a class="nav-link" href="#experience">Experience</a>
        <a class="nav-link" href="#contact">Contact</a>
        ${x()}
      </div>
    </nav>

    <!-- HERO -->
    <header class="hero" id="top">
      <div class="hero-left">
        <div class="badge">Available for Projects</div>
        <h1>${i.name}</h1>
        <p class="tagline">
          ${i.roles.map(e=>`<span class="role">${e}</span>`).join('<span class="dot">•</span>')}
        </p>

        <div class="buttons">
          <a class="btn" href="#projects">View Projects</a>
          <a class="btn btn-outline" href="#contact">Contact</a>
          ${N()}
          <button class="btn btn-ghost" id="copyEmailBtn" type="button" title="Copy email">
            Copy Email
          </button>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-num">${m.length}</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat">
            <div class="stat-num">${S.length}+</div>
            <div class="stat-label">Skills</div>
          </div>
          <div class="stat">
            <div class="stat-num">Pro</div>
            <div class="stat-label">UI/UX Focus</div>
          </div>
        </div>
      </div>

      <!-- PROFILE CARD -->
      <div class="profile-card">
        <img src="${w}" alt="${i.name}" class="avatar">
        <div class="mini">
          <h3>About Me</h3>
          <p>${i.about}</p>

          <div class="mini-actions">
            <a class="mini-link" href="mailto:${i.email}">Email</a>
            <a class="mini-link" href="${i.facebook}" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </header>

    <!-- SKILLS -->
    <section id="skills" class="section">
      <div class="section-head">
        <h2>Skills</h2>
        <p class="muted">Core technologies I use to build modern systems.</p>
      </div>
      <div class="chips" id="skillsChips"></div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section">
      <div class="section-head">
        <h2>Projects</h2>
        <p class="muted">Click a project to view details, screenshots, and highlights.</p>
      </div>

      <div class="toolbar">
        <div class="search">
          <input id="projectSearch" type="search" placeholder="Search projects..." aria-label="Search projects" />
        </div>
        <div class="filters" id="tagFilters" aria-label="Project tag filters"></div>
      </div>

      <div class="grid" id="projectGrid"></div>
      <div class="empty" id="emptyState" hidden>No projects matched your search.</div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="section">
      <div class="section-head">
        <h2>Experience</h2>
        <p class="muted">A short timeline of what I’ve been building and learning.</p>
      </div>
      <div class="timeline" id="timeline"></div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="section-head">
        <h2>Contact</h2>
        <p class="muted">Let’s build something. You can message me via email or Facebook.</p>
      </div>

      <div class="contact-box">
        <a class="contact-btn" href="mailto:${i.email}">📧 ${i.email}</a>
        <a class="contact-btn" href="${i.facebook}" target="_blank" rel="noreferrer">🌐 Facebook Profile</a>
      </div>
    </section>

    <footer class="footer">
      <span>© ${new Date().getFullYear()} ${i.name}</span>
      <a class="footer-link" href="#top">Back to top</a>
    </footer>

    <button class="to-top" id="toTopBtn" aria-label="Scroll to top" title="Scroll to top">↑</button>
    <div class="toast" id="toast" role="status" aria-live="polite" aria-atomic="true"></div>

    <!-- PROJECT MODAL -->
    <div class="modal" id="projectModal" aria-hidden="true">
      <div class="modal-backdrop" data-close="true"></div>
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-head">
          <div>
            <h3 id="modalTitle">Project</h3>
            <p class="modal-sub" id="modalSub"></p>
          </div>
          <button class="icon-btn" id="modalClose" aria-label="Close modal">✕</button>
        </div>

        <div class="modal-body">
          <div class="modal-screens" id="modalScreens"></div>

          <div class="modal-block">
            <h4>Highlights</h4>
            <ul class="modal-list" id="modalHighlights"></ul>
          </div>

          <div class="modal-block">
            <h4>Tech Stack</h4>
            <div class="pills" id="modalTech"></div>
          </div>

          <div class="modal-actions" id="modalActions"></div>
        </div>
      </div>
    </div>
  </div>
`;document.querySelector("#skillsChips").innerHTML=S.map(e=>`<span class="chip">${n(e)}</span>`).join("");const E=Array.from(new Set(m.flatMap(e=>e.tags))).sort((e,t)=>e.localeCompare(t)),p=document.querySelector("#tagFilters");p.innerHTML='<button class="tag active" data-tag="__all">All</button>'+E.map(e=>`<button class="tag" data-tag="${n(e)}">${n(e)}</button>`).join("");const k=document.querySelector("#projectGrid"),A=document.querySelector("#emptyState");let v="__all",h="";b();I();document.querySelector("#projectSearch").addEventListener("input",e=>{h=e.target.value.trim().toLowerCase(),b()});p.addEventListener("click",e=>{const t=e.target.closest("button[data-tag]");t&&(v=t.dataset.tag,p.querySelectorAll(".tag").forEach(o=>o.classList.remove("active")),t.classList.add("active"),b())});k.addEventListener("click",e=>{const t=e.target.closest("[data-project-id]");if(!t)return;const o=t.dataset.projectId,a=m.find(s=>s.id===o);a&&q(a)});document.querySelector("#copyEmailBtn").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(i.email),c("Email copied!")}catch{c("Copy failed. You can manually copy the email.")}});document.querySelector("#themeBtn").addEventListener("click",()=>{const e=B(O());T(e),c(`Theme: ${e}`)});const C=document.querySelector("#burgerBtn"),u=document.querySelector("#mobileNav");C.addEventListener("click",()=>{const e=u.classList.toggle("open");u.setAttribute("aria-hidden",e?"false":"true")});u.addEventListener("click",e=>{e.target.matches("a")&&(u.classList.remove("open"),u.setAttribute("aria-hidden","true"))});document.addEventListener("click",e=>{const t=e.target.closest('a[href^="#"]');if(!t)return;const o=t.getAttribute("href"),a=document.querySelector(o);a&&(e.preventDefault(),a.scrollIntoView({behavior:"smooth",block:"start"}))});const L=document.querySelector("#toTopBtn");window.addEventListener("scroll",()=>{L.classList.toggle("show",window.scrollY>500)});L.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const d=document.querySelector("#projectModal");document.querySelector("#modalClose").addEventListener("click",f);d.addEventListener("click",e=>{e.target?.dataset?.close==="true"&&f()});document.addEventListener("keydown",e=>{e.key==="Escape"&&f()});H();F();function b(){const e=m.filter(t=>{const o=v==="__all"||t.tags.includes(v),a=`${t.title} ${t.desc} ${(t.tags||[]).join(" ")} ${(t.tech||[]).join(" ")}`.toLowerCase(),s=!h||a.includes(h);return o&&s});k.innerHTML=e.map(t=>M(t)).join(""),A.hidden=e.length!==0}function M(e){const t=(e.tags||[]).map(o=>`<span class="pill">${n(o)}</span>`).join("");return`
    <article class="project card" tabindex="0" data-project-id="${g(e.id)}">
      <div class="card-top">
        <h3>${n(e.title)}</h3>
        <span class="card-link">Details</span>
      </div>
      <p>${n(e.desc)}</p>
      <div class="pills">${t}</div>
    </article>
  `}function I(){const e=document.querySelector("#timeline");e.innerHTML=j.map(t=>`
    <div class="t-item">
      <div class="t-dot"></div>
      <div class="t-card">
        <div class="t-top">
          <span class="t-year">${n(t.year)}</span>
          <h3 class="t-title">${n(t.title)}</h3>
        </div>
        <div class="t-org">${n(t.org)}</div>
        <p class="t-desc">${n(t.desc)}</p>
        <div class="pills">
          ${(t.tags||[]).map(o=>`<span class="pill">${n(o)}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("")}function q(e){document.querySelector("#modalTitle").textContent=e.title,document.querySelector("#modalSub").textContent=e.desc;const t=document.querySelector("#modalScreens"),o=Array.isArray(e.screenshots)?e.screenshots.filter(Boolean):[];t.innerHTML=o.length?o.map(a=>`
        <div class="shot">
          <img src="${a}" alt="${g(e.title)} screenshot" />
        </div>
      `).join(""):'<div class="shot empty-shot">No screenshots yet (optional)</div>',document.querySelector("#modalHighlights").innerHTML=(e.highlights||[]).map(a=>`<li>${n(a)}</li>`).join(""),document.querySelector("#modalTech").innerHTML=(e.tech||[]).map(a=>`<span class="pill">${n(a)}</span>`).join(""),document.querySelector("#modalActions").innerHTML=`
    <button class="btn btn-ghost" id="modalCopyTitle" type="button">Copy Project Name</button>
    ${e.link?`<a class="btn" href="${g(e.link)}" target="_blank" rel="noreferrer">Open Link</a>`:""}
  `,document.querySelector("#modalCopyTitle").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e.title),c("Project name copied!")}catch{c("Copy failed.")}},{once:!0}),d.classList.add("open"),d.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function f(){d.classList.contains("open")&&(d.classList.remove("open"),d.setAttribute("aria-hidden","true"),document.body.style.overflow="")}function c(e){const t=document.querySelector("#toast");t.textContent=e,t.classList.add("show"),clearTimeout(c._t),c._t=setTimeout(()=>t.classList.remove("show"),1800)}function H(){const t=Array.from(document.querySelectorAll('.nav-link[href^="#"]')).map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean),o=new IntersectionObserver(a=>{const s=a.filter(r=>r.isIntersecting).sort((r,P)=>P.intersectionRatio-r.intersectionRatio)[0];if(!s)return;const l=`#${s.target.id}`;document.querySelectorAll(".nav-link").forEach(r=>{r.classList.toggle("active",r.getAttribute("href")===l)})},{threshold:[.2,.35,.5,.7]});t.forEach(a=>o.observe(a))}function F(){const e=localStorage.getItem("theme")||"auto";T(e)}function O(){return localStorage.getItem("theme")||"auto"}function B(e){const t=["auto","light","dark"],o=t.indexOf(e);return t[(o+1)%t.length]}function T(e){document.querySelector(".page").setAttribute("data-theme",e),localStorage.setItem("theme",e)}function y(){return!!i.cvPath}function D(){return y()?`<a class="btn btn-sm" href="${i.cvPath}" download>Download CV</a>`:""}function x(){return y()?`<a class="nav-link" href="${i.cvPath}" download>Download CV</a>`:""}function N(){return y()?`<a class="btn btn-ghost" href="${i.cvPath}" download>Download CV</a>`:""}function n(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function g(e){return n(e).replaceAll("`","&#096;")}
