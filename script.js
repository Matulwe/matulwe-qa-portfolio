
// MATULWE - QA & AI TESTING PORTFOLIO

document.addEventListener("DOMContentLoaded", () => {

    // Highlight the navigation link for the current section
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateNavigation() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateNavigation);
    updateNavigation();

    // Display the current year automatically
    const year = new Date().getFullYear();
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            `© ${year} Matulwe Masemola. Built with curiosity and code.`;
    }

});
