const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("October 31 2025 00:00:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor (distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor (distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor (distance / 1000 / 60) % 60;
    const seconds = Math.floor (distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0) {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);

const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// Optional: Close menu when link is clicked (on mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});