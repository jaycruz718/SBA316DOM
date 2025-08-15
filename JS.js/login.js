const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle mobile menu visibility
toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Optional: Close menu when link is clicked (on mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});