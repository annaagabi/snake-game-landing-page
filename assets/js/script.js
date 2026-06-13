/* =====================================
   MENU MOBILE
===================================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* =====================================
   FECHAR MENU AO CLICAR NO LINK
===================================== */

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* =====================================
   SMOOTH SCROLL
===================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });

            }

        }

    });

});


/* =====================================
   BOTÃO VOLTAR AO TOPO
===================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";
        backToTop.style.alignItems = "center";
        backToTop.style.justifyContent = "center";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================
   HEADER DINÂMICO
===================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8, 11, 22, 0.98)";
        header.style.boxShadow =
            "0 0 10px rgba(57,255,20,.3), 0 0 20px rgba(57,255,20,.15)";

    } else {

        header.style.background = "rgba(8, 11, 22, 0.95)";
        header.style.boxShadow = "none";

    }

});


/* =====================================
   REVEAL ON SCROLL
===================================== */

const revealElements = document.querySelectorAll(
    ".hero-text, .hero-image, .about-content, .feature-card, .gallery-item, .cta"
);

revealElements.forEach(element => {

    element.classList.add("hidden");

});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {
    observer.observe(element);
});


/* =====================================
   EFEITO PARALLAX SUAVE NO HERO
===================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if (heroImage) {

        heroImage.style.transform =
            `translateY(${scroll * 0.05}px)`;

    }

});