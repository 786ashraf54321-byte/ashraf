(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const state = {
    jobs: [
      { id: 1, title: "Frontend Engineer", company: "SkyNet", location: "Remote", type: "Full-time", salary: "₹12–18 LPA", tags: ["React", "TypeScript", "UI"], logo: "SE" },
      { id: 2, title: "Data Analyst", company: "DataForge", location: "Bengaluru", type: "Full-time", salary: "₹8–12 LPA", tags: ["SQL", "Python", "BI"], logo: "DF" },
      { id: 3, title: "ML Engineer", company: "AIMinds", location: "Hyderabad", type: "Internship", salary: "₹30k / mo", tags: ["PyTorch", "AIML", "MLOps"], logo: "AI" },
      { id: 4, title: "Backend Developer", company: "CloudCart", location: "Remote", type: "Contract", salary: "₹80k–120k / mo", tags: ["Node.js", "Postgres", "Microservices"], logo: "CC" },
      { id: 5, title: "Product Manager", company: "Nova Labs", location: "Pune", type: "Full-time", salary: "₹18–26 LPA", tags: ["Roadmaps", "Agile", "Stakeholders"], logo: "NL" }
    ],
    classes: [
      { id: "bba", name: "BBA Live Class", price: 1199, icon: "ri-live-line", desc: "Business fundamentals, marketing, finance" },
      { id: "bca", name: "BCA Live Class", price: 1199, icon: "ri-live-line", desc: "Programming, DBMS, OS concepts" },
      { id: "btech", name: "BTech Live Class", price: 1199, icon: "ri-live-line", desc: "Core CS, DSA, systems" },
      { id: "aiml", name: "AIML Live Class", price: 1199, icon: "ri-brain-line", desc: "ML, DL, deployment" },
      { id: "datasci", name: "Data Science Bootcamp", price: 1199, icon: "ri-bar-chart-box-line", desc: "EDA, ML, pipelines" },
      { id: "webdev", name: "Full-Stack Web Dev", price: 1199, icon: "ri-code-box-line", desc: "React, Node, DBs" }
    ],
    enrollments: JSON.parse(localStorage.getItem("enrollments") || "[]")
  };

  function setActiveSection(targetId) {
    $$(".content").forEach(s => s.classList.add("is-hidden"));
    const el = typeof targetId === "string" ? $(targetId) : targetId;
    if (el) el.classList.remove("is-hidden");
    $$(".nav-btn").forEach(b => b.classList.remove("is-active"));
    const navBtn = $$(".nav-btn").find(b => b.getAttribute("data-target") === `#${el.id}`);
    if (navBtn) navBtn.classList.add("is-active");
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.remove("is-hidden");
    setTimeout(() => toast.classList.add("is-hidden"), 2000);
  }

  function renderJobs() {
    const list = $("#jobsList");
    list.innerHTML = "";
    const locationFilter = $("#filterLocation").value;
    const typeFilter = $("#filterType").value;
    const filtered = state.jobs.filter(j => {
      const okLoc = !locationFilter || j.location === locationFilter;
      const okType = !typeFilter || j.type === typeFilter;
      return okLoc && okType;
    });
    filtered.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
        <div class="job-logo">${job.logo}</div>
        <div class="job-meta">
          <h4>${job.title}</h4>
          <div class="muted">${job.company} • ${job.location} • ${job.type} • ${job.salary}</div>
          <div class="job-tags">${job.tags.map(t => `<span class=\"tag\">${t}</span>`).join("")}</div>
        </div>
        <div>
          <button class="btn btn-primary apply-btn"><i class="ri-send-plane-2-line"></i> Apply</button>
        </div>`;
      card.querySelector(".apply-btn").addEventListener("click", () => {
        showToast(`Applied to ${job.title} at ${job.company}`);
      });
      list.appendChild(card);
    });
  }

  function renderClasses() {
    const wrap = $("#classesList");
    wrap.innerHTML = "";
    state.classes.forEach(c => {
      const card = document.createElement("div");
      card.className = "mini-card";
      card.innerHTML = `
        <i class="${c.icon} big"></i>
        <h3>${c.name}</h3>
        <p class="muted">${c.desc}</p>
        <div class="actions">
          <button class="btn btn-secondary enroll-btn"><i class="ri-shopping-bag-3-line"></i> Enroll @ ₹${c.price}</button>
        </div>
      `;
      card.querySelector(".enroll-btn").addEventListener("click", () => enrollClass(c));
      wrap.appendChild(card);
    });
  }

  function enrollClass(course) {
    const exists = state.enrollments.find(e => e.type === "class" && e.id === course.id);
    if (!exists) {
      state.enrollments.push({ type: "class", id: course.id, name: course.name, price: course.price, ts: Date.now() });
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    }
    showToast(`Enrolled in ${course.name} for ₹${course.price}`);
  }

  function openModal() {
    $("#modalOverlay").classList.remove("is-hidden");
  }
  function closeModal() {
    $("#modalOverlay").classList.add("is-hidden");
  }

  function handleResumeUpload() {
    const input = $("#resumeInput");
    const status = $("#resumeStatus");
    const file = input.files && input.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      status.textContent = "File too large. Max 5 MB.";
      status.style.color = "var(--danger)";
      return;
    }
    status.style.color = "var(--muted)";
    status.textContent = `Uploading ${file.name}...`;
    setTimeout(() => {
      status.textContent = `Uploaded ${file.name} successfully.`;
      showToast("Resume uploaded");
    }, 900);
  }

  function onReady() {
    $("#year").textContent = new Date().getFullYear();

    $$(".nav-btn").forEach(btn => btn.addEventListener("click", () => setActiveSection(btn.getAttribute("data-target"))));

    $("#filterLocation").addEventListener("change", renderJobs);
    $("#filterType").addEventListener("change", renderJobs);

    ["#openResumeBuilder", "#openResumeBuilder2", "#openResumeBuilder3"].forEach(id => {
      const el = $(id);
      if (el) el.addEventListener("click", openModal);
    });
    $("#modalClose").addEventListener("click", closeModal);

    const resumeBtn = $("#resumeUploadBtn");
    const resumeInput = $("#resumeInput");
    resumeBtn.addEventListener("click", () => resumeInput.click());
    resumeInput.addEventListener("change", handleResumeUpload);

    $("#builderForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const data = Object.fromEntries(new FormData(form).entries());
      state.enrollments.push({ type: "resume-builder", price: 299, details: data, ts: Date.now() });
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
      form.classList.add("is-hidden");
      $("#builderSuccess").classList.remove("is-hidden");
      showToast("Resume Builder purchased for ₹299");
      setTimeout(() => {
        closeModal();
        form.reset();
        form.classList.remove("is-hidden");
        $("#builderSuccess").classList.add("is-hidden");
      }, 1200);
    });

    renderJobs();
    renderClasses();
  }

  document.addEventListener("DOMContentLoaded", onReady);
})();

