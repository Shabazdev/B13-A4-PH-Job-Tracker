const jobs = [
  {id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", description:"Build cross-platform mobile applications using React Native.", status:"All"},
  {id:2, company:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:"$80,000 - $120,000", description:"Create stunning web experiences for high-profile clients.", status:"All"},
  {id:3, company:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA", type:"Full-time", salary:"$125,000 - $165,000", description:"Transform complex data into compelling visualizations.", status:"All"},
  {id:4, company:"CloudFirst Inc", position:"Backend Developer", location:"Seattle, WA", type:"Full-time", salary:"$140,000 - $190,000", description:"Design and maintain scalable backend systems using Python and AWS.", status:"All"},
  {id:5, company:"Innovation Labs", position:"UI/UX Engineer", location:"Austin, TX", type:"Full-time", salary:"$100,000 - $150,000", description:"Create beautiful and functional user interfaces.", status:"All"},
  {id:6, company:"MegaCorp Solutions", position:"JavaScript Developer", location:"New York, NY", type:"Full-time", salary:"$130,000 - $170,000", description:"Build enterprise applications with modern JavaScript frameworks.", status:"All"},
  {id:7, company:"StartupXYZ", position:"Full Stack Engineer", location:"Remote", type:"Full-time", salary:"$120,000 - $160,000", description:"Join a fast-growing startup and work on core platform.", status:"All"},
  {id:8, company:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco, CA", type:"Full-time", salary:"$130,000 - $175,000", description:"Build scalable web applications using React and TypeScript.", status:"All"}
];

let activeTab = "All";

const jobsContainer = document.getElementById("jobsContainer");

function renderJobs() {

  jobsContainer.innerHTML = "";

  const filtered = jobs.filter(job => {
    if (activeTab === "All") return true;
    return job.status === activeTab;
  });

  document.getElementById("sectionCount").innerText = filtered.length + " jobs";

  if (filtered.length === 0) {
    jobsContainer.innerHTML = `
      <div class="empty-state">
    <img src="./img/empty-state.png">

        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job => {

    const card = document.createElement("div");
    card.className = "job-card";

    const statusClass = job.status.toLowerCase();

    card.innerHTML = `
      <button class="btn-delete">X</button>
      <h3>${job.company}</h3>
      <p><strong>${job.position}</strong></p>
      <p class="meta">${job.location} • ${job.type} • ${job.salary}</p>
      <span class="status ${statusClass}">${job.status === "All" ? "NOT APPLIED" : job.status.toUpperCase()}</span>
      <p>${job.description}</p>
      <div class="buttons">
        <button class="btn-interview">Interview</button>
        <button class="btn-rejected">Rejected</button>
      </div>
    `;

    // Interview
    card.querySelector(".btn-interview").onclick = () => {
      job.status = job.status === "Interview" ? "All" : "Interview";
      updateDashboard();
      renderJobs();
    };

    // Rejected
    card.querySelector(".btn-rejected").onclick = () => {
      job.status = job.status === "Rejected" ? "All" : "Rejected";
      updateDashboard();
      renderJobs();
    };

    // Delete
    card.querySelector(".btn-delete").onclick = () => {
      const index = jobs.findIndex(j => j.id === job.id);
      jobs.splice(index, 1);
      updateDashboard();
      renderJobs();
    };

    jobsContainer.appendChild(card);
  });
}

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(j => j.status === "Interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(j => j.status === "Rejected").length;
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    renderJobs();
  };
});

updateDashboard();
renderJobs();
