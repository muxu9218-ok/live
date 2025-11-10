
        // Mobile Menu Toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        const closeMenu = document.querySelector('.close-menu');
        const overlay = document.querySelector('.overlay');
        
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        overlay.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Mobile Dropdown Toggle
        const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
        
        mobileDropdownBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const dropdownContent = this.nextElementSibling;
                dropdownContent.classList.toggle('active');
                
                const icon = this.querySelector('i');
                if (dropdownContent.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after clicking a link
                    mobileNav.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Header scroll effect
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

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                item.classList.toggle('active');
            });
        });

        // FAQ Category Filtering
        const categoryBtns = document.querySelectorAll('.category-btn');
        const faqCategories = document.querySelectorAll('.faq-category');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Show/hide categories based on selection
                faqCategories.forEach(cat => {
                    if (category === 'all' || cat.getAttribute('data-category') === category) {
                        cat.style.display = 'block';
                    } else {
                        cat.style.display = 'none';
                    }
                });
            });
        });

        // FAQ Search Functionality
        const searchBox = document.getElementById('faqSearch');
        const searchBtn = document.getElementById('searchButton');
        
        function performSearch() {
            const searchTerm = searchBox.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // If search is empty, show all FAQs
                faqItems.forEach(item => {
                    item.style.display = 'block';
                });
                
                // Also show all categories
                faqCategories.forEach(cat => {
                    cat.style.display = 'block';
                });
                
                // Remove any existing no-results message
                const existingNoResults = document.querySelector('.no-results');
                if (existingNoResults) {
                    existingNoResults.remove();
                }
                return;
            }
            
            // Hide all categories initially
            faqCategories.forEach(cat => {
                cat.style.display = 'none';
            });
            
            // Search through FAQ questions and answers
            let hasResults = false;
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                    // Show the parent category
                    item.closest('.faq-category').style.display = 'block';
                    // Open the FAQ item if it contains the search term
                    item.classList.add('active');
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // If no results found, show a message
            if (!hasResults) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.innerHTML = `<p>No FAQs found for "${searchTerm}". Please try a different search term.</p>`;
                
                // Check if a no-results message already exists
                const existingNoResults = document.querySelector('.no-results');
                if (existingNoResults) {
                    existingNoResults.remove();
                }
                
                document.querySelector('.faq-container').appendChild(noResults);
            } else {
                // Remove any existing no-results message
                const existingNoResults = document.querySelector('.no-results');
                if (existingNoResults) {
                    existingNoResults.remove();
                }
            }
        }
        
        searchBtn.addEventListener('click', performSearch);
        searchBox.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Prevent form submission
        document.getElementById('searchForm').addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch();
        });
    