/* ==========================================
   SPARSHA HOSPITAL
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       STICKY NAVBAR SHADOW
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
            navbar.style.background = "#ffffff";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {

            link.classList.add("active");

        }

    });

    /* ==========================
       SCROLL TO TOP BUTTON
    ========================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

    topButton.id = "scrollTop";

    document.body.appendChild(topButton);

    Object.assign(topButton.style, {
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "50px",
        height: "50px",
        border: "none",
        borderRadius: "50%",
        background: "#0066cc",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer",
        display: "none",
        zIndex: "9999",
        transition: "0.3s"
    });

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================
       BUTTON HOVER EFFECT
    ========================== */

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mouseenter", function () {

            btn.style.transform = "translateY(-3px)";

        });

        btn.addEventListener("mouseleave", function () {

            btn.style.transform = "translateY(0)";

        });

    });

    /* ==========================
       CARD ANIMATION
    ========================== */

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

        });

    });

  

    /* ==========================
       SIMPLE COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 100;

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

    /* ==========================
       LOADING EFFECT
    ========================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.6s";

        document.body.style.opacity = "1";

    }, 100);

});

/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.classList.add("hide");

        setTimeout(() => {

            preloader.remove();

        }, 500);

    }

});