
/* =========================
   MODAL
========================= */

function openModal() {

    const modal = document.getElementById("infoModal");

    modal.style.display = "flex";

}


function closeModal() {

    const modal = document.getElementById("infoModal");

    modal.style.display = "none";

}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("infoModal");

    if (event.target === modal) {

        closeModal();

    }

});


/* =========================
   PROJECTS
========================= */

function showProject(projectName) {

    alert(projectName + " will be available soon!");

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
