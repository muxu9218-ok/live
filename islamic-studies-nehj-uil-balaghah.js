
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
            document.querySelector('.mobile-nav').classList.add('active');
            document.querySelector('.overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        document.querySelector('.close-menu').addEventListener('click', function() {
            document.querySelector('.mobile-nav').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        document.querySelector('.overlay').addEventListener('click', function() {
            document.querySelector('.mobile-nav').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Mobile Dropdown Toggle
        document.querySelectorAll('.mobile-dropdown-btn').forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                content.classList.toggle('active');
                
                // Close other dropdowns
                document.querySelectorAll('.mobile-dropdown-content').forEach(otherContent => {
                    if (otherContent !== content) {
                        otherContent.classList.remove('active');
                    }
                });
            });
        });

        // Form Submission
        document.getElementById('islamicStudiesEnrollmentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your enrollment in our Islamic Studies & Nehj ul Balagha course! We will contact you shortly to confirm your registration and schedule your free trial class.');
            this.reset();
        });

        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '0.5rem 0';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '1rem 0';
                header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            }
        });
    