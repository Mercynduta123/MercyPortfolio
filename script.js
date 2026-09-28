// ===============================
// MERCY NDUTA PORTFOLIO
// ===============================


// Add a small effect when the page loads

document.addEventListener("DOMContentLoaded", () => {

    const heroContent = document.querySelector(".hero-content");
    const heroVisual = document.querySelector(".hero-visual");

    heroContent.classList.add("show");
    heroVisual.classList.add("show");

});


// ===============================
// SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


// ===============================
// NAVBAR EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 13, 26, 0.95)";

    } else {

        navbar.style.background =
            "rgba(5, 13, 26, 0.75)";

    }

});