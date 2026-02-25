(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="page">

    <!-- HERO -->
    <header class="hero">
      <div class="hero-left">
        <h1>Clifford Sarabia</h1>
        <p class="tagline">IT Developer • System Developer • Flutter • PHP/MySQL</p>

        <div class="buttons">
          <a class="btn" href="#projects">Projects</a>
          <a class="btn btn-outline" href="#contact">Contact</a>
        </div>
      </div>

      <!-- PROFILE CARD -->
      <div class="profile-card">
        <img src="/src/assets/profile.jpg" alt="Clifford Sarabia" class="avatar">

        <div class="mini">
          <h3>About Me</h3>
          <p>
            I build web and mobile systems such as monitoring systems,
            attendance tracking, and admin dashboards.
            Currently developing Flutter applications and improving my UI/UX and backend skills.
          </p>
        </div>
      </div>
    </header>


    <!-- SKILLS -->
    <section id="skills" class="section">
      <h2>Skills</h2>
      <div class="chips">
        ${["Flutter","Dart","PHP","MySQL","HTML","CSS","JavaScript","Git","Bootstrap"].map(a=>`<span class="chip">${a}</span>`).join("")}
      </div>
    </section>


    <!-- PROJECTS -->
    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="grid">

        <div class="project">
          <h3>SK Kabac Monitoring System</h3>
          <p>Web-based system for youth/residents management, approvals, and masterlist printing.</p>
        </div>

        <div class="project">
          <h3>Attendance Monitoring System</h3>
          <p>Employee time-in/time-out tracking with automatic late computation using PHP & MySQL.</p>
        </div>

        <div class="project">
          <h3>Flutter Mobile Application</h3>
          <p>Android mobile app built using Flutter and tested using Android Emulator.</p>
        </div>

      </div>
    </section>


    <!-- CONTACT -->
    <section id="contact" class="section">
      <h2>Contact</h2>

      <div class="contact-box">

        <a class="contact-btn" href="mailto:cliffordsarabia@gmail.com">
          📧 cliffordsarabia@gmail.com
        </a>

        <a class="contact-btn" href="https://www.facebook.com/cliffordsarabia.damboi" target="_blank">
          🌐 Facebook Profile
        </a>

      </div>
    </section>

    <footer class="footer">
      © ${new Date().getFullYear()} Clifford Sarabia
    </footer>

  </div>
`;
