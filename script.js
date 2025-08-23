// Smooth scroll functionality for scroll down buttons
window.addEventListener('load', function() {
    console.log('Scroll functionality loading...');
    
    // First screen scroll down button
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    console.log('First button found:', scrollDownBtn);
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('First button clicked');
            const targetSection = document.getElementById('second-screen');
            console.log('Target section:', targetSection);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Second screen scroll down button
    const scrollDownBtn2 = document.getElementById('scrollDownBtn2');
    console.log('Second button found:', scrollDownBtn2);
    if (scrollDownBtn2) {
        scrollDownBtn2.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Second button clicked');
            const targetSection = document.getElementById('research-intro');
            console.log('Target section:', targetSection);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // News filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    if (filterButtons.length > 0 && newsItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter news items
                newsItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (category === 'all' || category === itemCategory) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Function to send application email
function sendApplication() {
    const subject = encodeURIComponent('Application to Join Gong Lab');
    const body = encodeURIComponent('Dear Dr. Gong,\n\nI am interested in joining your research team at Gong Lab. Please find my CV and research interests attached.\n\nBest regards,\n[Your Name]');
    const mailtoLink = `mailto:bog4001@med.cornell.edu?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
} 