
        // Mobile Menu Toggle
        const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
        const mobileNav = document.querySelector(".mobile-nav");
        const closeMenu = document.querySelector(".close-menu");
        const overlay = document.querySelector(".overlay");

        mobileMenuToggle.addEventListener("click", function() {
            mobileNav.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        closeMenu.addEventListener("click", function() {
            mobileNav.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "auto";
        });

        overlay.addEventListener("click", function() {
            mobileNav.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "auto";
        });

        // Mobile Dropdown Toggle
        const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

        mobileDropdownBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                const dropdownContent = this.nextElementSibling;
                dropdownContent.classList.toggle("active");

                const icon = this.querySelector("i");
                if (dropdownContent.classList.contains("active")) {
                    icon.classList.remove("fa-chevron-down");
                    icon.classList.add("fa-chevron-up");
                } else {
                    icon.classList.remove("fa-chevron-up");
                    icon.classList.add("fa-chevron-down");
                }
            });
        });

        // Form submission handler
        document.getElementById("qaidaEnrollmentForm").addEventListener("submit", function(e) {
            e.preventDefault();

            // Get form values
            const fullname = document.getElementById("fullname").value;
            const phone = document.getElementById("phone").value;

            // Show success message
            alert(`Thank you ${fullname}! Your enrollment form for Shia Basic Qaida Course has been submitted successfully. We will contact you at ${phone} within 24 hours to schedule your free trial class.`);

            // Reset form
            this.reset();

            // Scroll to top of form
            document.getElementById("enrollment").scrollIntoView({behavior: "smooth"});
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();

                const targetId = this.getAttribute("href");
                if (targetId === "#") return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth"
                    });

                    // Close mobile menu after clicking a link
                    mobileNav.classList.remove("active");
                    overlay.classList.remove("active");
                    document.body.style.overflow = "auto";
                }
            });
        });

        // Header scroll effect
        window.addEventListener("scroll", function() {
            const header = document.querySelector("header");
            if (window.scrollY > 100) {
                header.style.padding = "0.5rem 0";
                header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
            } else {
                header.style.padding = "1rem 0";
                header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
            }
        });
    