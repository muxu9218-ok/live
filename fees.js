
        // Mobile Menu Toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        const closeMenu = document.querySelector('.close-menu');
        const overlay = document.querySelector('.overlay');
        
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileNav.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (closeMenu) {
            closeMenu.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
        if (overlay) {
            overlay.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
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
                    if (mobileNav) {
                        mobileNav.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    }
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.style.padding = '0.5rem 0';
                    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                } else {
                    header.style.padding = '1rem 0';
                    header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
                }
            }
        });

        // Pricing Tabs
        const pricingTabs = document.querySelectorAll('.pricing-tab');
        const monthlyPlans = document.getElementById('monthly-plans');
        const quarterlyPlans = document.getElementById('quarterly-plans');
        const yearlyPlans = document.getElementById('yearly-plans');
        
        if (pricingTabs.length > 0) {
            pricingTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs
                    pricingTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all plan sections
                    if (monthlyPlans) monthlyPlans.style.display = 'none';
                    if (quarterlyPlans) quarterlyPlans.style.display = 'none';
                    if (yearlyPlans) yearlyPlans.style.display = 'none';
                    
                    // Show selected plan section
                    const planType = this.getAttribute('data-plan');
                    if (planType === 'monthly' && monthlyPlans) {
                        monthlyPlans.style.display = 'grid';
                    } else if (planType === 'quarterly' && quarterlyPlans) {
                        quarterlyPlans.style.display = 'grid';
                    } else if (planType === 'yearly' && yearlyPlans) {
                        yearlyPlans.style.display = 'grid';
                    }
                });
            });
        }

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (faqItems.length > 0) {
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
        }

        // WhatsApp message fix - corrected URL encoding
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            // The URL is already properly encoded in the href attribute
        }
    