
// Task 1: Dynamic Year
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// Task 2: Skill Description Interaction
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');

const skillInfo = {
  "HTML": "HTML (HyperText Markup Language) defines the structure of web pages.",
  "CSS": "CSS (Cascading Style Sheets) styles the visual layout of web pages.",
  "JavaScript": "JavaScript adds interactivity and dynamic content to web pages."
};

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.dataset.skill;
    skillDescription.textContent = skillInfo[skill];
    skillDescription.style.color = '#0056b3';
  });
});

// Task 3: Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }
});

// Task 4: Load Portfolio Items from JSON
const projectsContainer = document.getElementById('projects-container');

async function loadProjects() {
  try {zx
    const response = await fetch('data/portfolio_items.json');
    if (!response.ok) throw new Error('Failed to fetch');
    const projects = await response.json();

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank"> View Project</a>
      `;
      projectsContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    projectsContainer.innerHTML = '<p>Could not load projects. Try again later.</p>';
  }
}

loadProjects();