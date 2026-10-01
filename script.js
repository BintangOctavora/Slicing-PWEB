const btnProjects = document.getElementById("btnprojects");

if (btnProjects) {
    btnProjects.addEventListener("click", function(event) {
        event.preventDefault();
        
        document.body.classList.add("fade-out");
        
        setTimeout(function() {
            window.location.href = "projects.html";
        }, 400);
    });
}
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute("href");

        document.body.classList.add("fade-out");

        setTimeout(function() {
            window.location.href = targetUrl;
        }, 400);
    });
});

// Fitur Smooth Scroll untuk Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById("theme-toggle");

    function updateThemeIcon() {
        if (document.body.classList.contains("light-theme")) {
            themeToggleBtn.textContent = "🌙";
        } else {
            themeToggleBtn.textContent = "☀️";
        }
    }

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
    }

    if (themeToggleBtn) {
        updateThemeIcon();

        themeToggleBtn.addEventListener("click", function() {
            document.body.classList.toggle("light-theme");
            
            if (document.body.classList.contains("light-theme")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
            
            updateThemeIcon();
        });
    }
});