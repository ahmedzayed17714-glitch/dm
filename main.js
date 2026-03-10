// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("primary-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            const isExpanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !isExpanded);
            menu.classList.toggle("active");
        });
    }

    // Basic Form Validation
    const form = document.querySelector(".form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const inputs = form.querySelectorAll("input[required], textarea[required]");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.setAttribute("aria-invalid", "true");
                } else {
                    input.removeAttribute("aria-invalid");
                }
            });

            if (!valid) {
                e.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    }
});