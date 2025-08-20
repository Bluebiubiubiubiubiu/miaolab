// Sample articles data (in a real application, this would come from a backend)
const articles = [
    {
        id: 1,
        title: "Building a Modern Personal Blog",
        excerpt: "A comprehensive guide to creating a clean, modern personal blog with excellent user experience and mobile responsiveness.",
        content: `
            <p>Creating a personal blog in today's digital landscape requires more than just good content. It needs to be fast, accessible, and provide an excellent user experience across all devices.</p>
            
            <h2>Why Modern Design Matters</h2>
            <p>Modern web design isn't just about aesthetics—it's about creating an experience that users want to return to. Here are some key principles:</p>
            
            <ul>
                <li><strong>Clean Typography:</strong> Choose fonts that are easy to read and scale well across devices</li>
                <li><strong>Responsive Design:</strong> Ensure your blog looks great on phones, tablets, and desktops</li>
                <li><strong>Fast Loading:</strong> Optimize images and minimize unnecessary code</li>
                <li><strong>Accessibility:</strong> Make your content available to everyone</li>
            </ul>
            
            <h2>Technical Implementation</h2>
            <p>Here's a simple example of how to structure your CSS for responsive design:</p>
            
            <pre><code class="language-css">.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (max-width: 768px) {
    .container {
        padding: 0 1.5rem;
    }
}</code></pre>
            
            <h2>Performance Optimization</h2>
            <p>Performance is crucial for user experience. Here are some tips:</p>
            
            <blockquote>
                "The best performance optimization is the one you don't have to make." - Anonymous
            </blockquote>
            
            <p>Focus on:</p>
            <ol>
                <li>Optimizing images and using modern formats like WebP</li>
                <li>Minimizing HTTP requests</li>
                <li>Using a CDN for static assets</li>
                <li>Implementing lazy loading for images</li>
            </ol>
            
            <h2>Conclusion</h2>
            <p>Building a modern personal blog requires attention to both design and technical details. By focusing on user experience, performance, and accessibility, you can create a blog that not only looks great but also serves your readers effectively.</p>
        `,
        category: "technology",
        date: "2024-01-15",
        tags: ["Web Development", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
        id: 2,
        title: "The Future of Web Development",
        excerpt: "Exploring emerging trends and technologies that will shape the future of web development in the coming years.",
        content: `
            <p>Web development is constantly evolving, with new technologies and frameworks emerging regularly. Let's explore what the future holds for web developers.</p>
            
            <h2>Emerging Technologies</h2>
            <p>Several technologies are gaining momentum and will likely become mainstream:</p>
            
            <ul>
                <li><strong>WebAssembly:</strong> Bringing near-native performance to the web</li>
                <li><strong>Progressive Web Apps:</strong> Bridging the gap between web and native apps</li>
                <li><strong>AI and Machine Learning:</strong> Automating development tasks</li>
                <li><strong>Edge Computing:</strong> Processing data closer to users</li>
            </ul>
            
            <h2>Development Workflow Changes</h2>
            <p>The way we develop websites is also changing:</p>
            
            <pre><code class="language-javascript">// Example of modern async/await pattern
async function fetchUserData() {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}</code></pre>
            
            <h2>Performance and User Experience</h2>
            <p>Performance will continue to be a top priority, with new metrics like Core Web Vitals becoming standard.</p>
        `,
        category: "technology",
        date: "2024-01-10",
        tags: ["Web Development", "Future Tech", "Performance"],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Thoughts on Minimalism in Design",
        excerpt: "How embracing minimalism can lead to better user experiences and more effective communication.",
        content: `
            <p>Minimalism in design isn't just about removing elements—it's about creating focus and clarity. In a world full of distractions, minimal design can be a powerful tool for communication.</p>
            
            <h2>The Power of White Space</h2>
            <p>White space, or negative space, is one of the most powerful tools in minimalist design. It helps to:</p>
            
            <ul>
                <li>Create visual hierarchy</li>
                <li>Improve readability</li>
                <li>Guide user attention</li>
                <li>Create a sense of elegance</li>
            </ul>
            
            <h2>Less is More</h2>
            <p>When we remove unnecessary elements, we force ourselves to focus on what's truly important. This principle applies to both design and content.</p>
            
            <blockquote>
                "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry
            </blockquote>
            
            <h2>Practical Applications</h2>
            <p>Minimalism can be applied to various aspects of web design:</p>
            
            <ol>
                <li>Typography: Choose one or two fonts maximum</li>
                <li>Color: Use a limited color palette</li>
                <li>Layout: Focus on content hierarchy</li>
                <li>Navigation: Keep it simple and intuitive</li>
            </ol>
        `,
        category: "thoughts",
        date: "2024-01-08",
        tags: ["Design", "Minimalism", "UX"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Getting Started with CSS Grid",
        excerpt: "A beginner-friendly tutorial on CSS Grid, one of the most powerful layout tools in modern CSS.",
        content: `
            <p>CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. Let's explore the basics and some practical examples.</p>
            
            <h2>Basic Grid Concepts</h2>
            <p>CSS Grid works by creating a grid container and placing items within it. Here's a simple example:</p>
            
            <pre><code class="language-css">.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.grid-item {
    background: #f0f0f0;
    padding: 1rem;
    text-align: center;
}</code></pre>
            
            <h2>Responsive Grid Layouts</h2>
            <p>One of the best features of CSS Grid is its ability to create responsive layouts:</p>
            
            <pre><code class="language-css">.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}</code></pre>
            
            <h2>Grid Areas</h2>
            <p>Grid areas allow you to create complex layouts with named areas:</p>
            
            <pre><code class="language-css">.layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
            
            <h2>Practical Tips</h2>
            <ul>
                <li>Use <code>fr</code> units for flexible columns</li>
                <li>Combine with Flexbox for complex layouts</li>
                <li>Use <code>minmax()</code> for responsive behavior</li>
                <li>Don't forget about browser support</li>
            </ul>
        `,
        category: "tutorials",
        date: "2024-01-05",
        tags: ["CSS", "Grid", "Layout", "Tutorial"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
    },
    {
        id: 5,
        title: "JavaScript Best Practices for 2024",
        excerpt: "Essential JavaScript best practices and patterns that every developer should know in 2024.",
        content: `
            <p>JavaScript has evolved significantly over the years. Here are some best practices that will help you write better, more maintainable code in 2024.</p>
            
            <h2>Modern JavaScript Features</h2>
            <p>Take advantage of modern JavaScript features:</p>
            
            <pre><code class="language-javascript">// Use const and let instead of var
const API_URL = 'https://api.example.com';
let userCount = 0;

// Template literals for string interpolation
const message = `Hello, ${userName}! You have ${unreadCount} messages.`;

// Arrow functions for concise syntax
const multiply = (a, b) => a * b;

// Destructuring for cleaner code
const { name, email, age } = user;</code></pre>
            
            <h2>Error Handling</h2>
            <p>Proper error handling is crucial for robust applications:</p>
            
            <pre><code class="language-javascript">async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        // Handle error appropriately
        throw error;
    }
}</code></pre>
            
            <h2>Performance Optimization</h2>
            <p>Consider these performance tips:</p>
            
            <ul>
                <li>Use <code>requestAnimationFrame</code> for animations</li>
                <li>Implement debouncing for frequent events</li>
                <li>Use Web Workers for heavy computations</li>
                <li>Optimize bundle size with tree shaking</li>
            </ul>
            
            <h2>Code Organization</h2>
            <p>Organize your code for better maintainability:</p>
            
            <blockquote>
                "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
            </blockquote>
        `,
        category: "tutorials",
        date: "2024-01-03",
        tags: ["JavaScript", "Best Practices", "ES6+"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    }
];

// Global variables
let currentPage = 1;
let currentCategory = 'all';
const articlesPerPage = 6;

// DOM elements
const articlesGrid = document.getElementById('articlesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const paginationInfo = document.getElementById('paginationInfo');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    
    // Check which page we're on and initialize accordingly
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage === '/') {
        loadArticles();
        initializeFilters();
        initializePagination();
    } else if (currentPage.includes('article.html')) {
        loadArticleDetail();
        initializeShareButtons();
    } else if (currentPage.includes('news.html')) {
        initializeNewsFilters();
        initializeNewsPagination();
    } else if (currentPage.includes('contact.html')) {
        initializeContactForm();
    }
});

// Navigation functionality
function initializeNavigation() {
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Load and display articles
function loadArticles() {
    if (!articlesGrid) return;

    const filteredArticles = filterArticlesByCategory(articles, currentCategory);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);

    articlesGrid.innerHTML = '';

    if (articlesToShow.length === 0) {
        articlesGrid.innerHTML = `
            <div class="no-articles">
                <h3>No articles found</h3>
                <p>Try selecting a different category or check back later.</p>
            </div>
        `;
        return;
    }

    articlesToShow.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });

    updatePagination(filteredArticles.length);
}

// Create article card element
function createArticleCard(article) {
    const card = document.createElement('article');
    card.className = 'article-card';
    
    const formattedDate = formatDate(article.date);
    
    card.innerHTML = `
        <div class="article-card-image" style="background-image: url('${article.image}')"></div>
        <div class="article-card-content">
            <div class="article-card-meta">
                <span class="article-card-category">${article.category}</span>
                <span class="article-card-date">${formattedDate}</span>
            </div>
            <h3 class="article-card-title">${article.title}</h3>
            <p class="article-card-excerpt">${article.excerpt}</p>
            <a href="article.html?id=${article.id}" class="article-card-link">
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    `;

    return card;
}

// Filter articles by category
function filterArticlesByCategory(articles, category) {
    if (category === 'all') {
        return articles;
    }
    return articles.filter(article => article.category === category);
}

// Initialize filter functionality
function initializeFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current category and reset to first page
            currentCategory = this.dataset.category;
            currentPage = 1;
            
            // Reload articles
            loadArticles();
        });
    });
}

// Initialize pagination
function initializePagination() {
    if (prevPageBtn && nextPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                loadArticles();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        nextPageBtn.addEventListener('click', function() {
            const filteredArticles = filterArticlesByCategory(articles, currentCategory);
            const maxPages = Math.ceil(filteredArticles.length / articlesPerPage);
            
            if (currentPage < maxPages) {
                currentPage++;
                loadArticles();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// Update pagination controls
function updatePagination(totalArticles) {
    if (!prevPageBtn || !nextPageBtn || !paginationInfo) return;

    const maxPages = Math.ceil(totalArticles / articlesPerPage);
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === maxPages;
    
    paginationInfo.textContent = `Page ${currentPage} of ${maxPages}`;
}

// Load article detail page
function loadArticleDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    const article = articles.find(a => a.id === articleId);
    
    if (!article) {
        showError('Article not found');
        return;
    }
    
    // Update page title and meta description
    document.title = `${article.title} - MiaoLab`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
    }
    
    // Update article content
    const articleTitle = document.getElementById('articleTitle');
    const articleExcerpt = document.getElementById('articleExcerpt');
    const articleCategory = document.getElementById('articleCategory');
    const articleDate = document.getElementById('articleDate');
    const articleContent = document.getElementById('articleContent');
    
    if (articleTitle) articleTitle.textContent = article.title;
    if (articleExcerpt) articleExcerpt.textContent = article.excerpt;
    if (articleCategory) articleCategory.textContent = article.category;
    if (articleDate) articleDate.textContent = formatDate(article.date);
    if (articleContent) articleContent.innerHTML = article.content;
    
    // Update tags
    const articleTags = document.querySelector('.article-tags');
    if (articleTags) {
        articleTags.innerHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }
    
    // Load related articles
    loadRelatedArticles(article);
    
    // Highlight syntax in code blocks
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// Load related articles
function loadRelatedArticles(currentArticle) {
    const relatedArticlesGrid = document.getElementById('relatedArticlesGrid');
    if (!relatedArticlesGrid) return;
    
    const relatedArticles = articles
        .filter(article => article.id !== currentArticle.id && article.category === currentArticle.category)
        .slice(0, 3);
    
    relatedArticlesGrid.innerHTML = '';
    
    relatedArticles.forEach(article => {
        const articleCard = createArticleCard(article);
        relatedArticlesGrid.appendChild(articleCard);
    });
}

// Initialize share buttons
function initializeShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.dataset.platform;
            const url = window.location.href;
            const title = document.title;
            
            shareArticle(platform, url, title);
        });
    });
}

// Share article functionality
function shareArticle(platform, url, title) {
    let shareUrl = '';
    
    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'copy':
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Link copied to clipboard!');
            });
            return;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showError(message) {
    const main = document.querySelector('.main');
    if (main) {
        main.innerHTML = `
            <div class="error-page">
                <h1>Error</h1>
                <p>${message}</p>
                <a href="index.html" class="btn">Go Home</a>
            </div>
        `;
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// News page functionality
function initializeNewsFilters() {
    const newsFilterButtons = document.querySelectorAll('.news-filter .filter-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    newsFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            newsFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter news items
            newsItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initializeNewsPagination() {
    const prevNewsPageBtn = document.getElementById('prevNewsPage');
    const nextNewsPageBtn = document.getElementById('nextNewsPage');
    const newsPaginationInfo = document.getElementById('newsPaginationInfo');
    
    if (prevNewsPageBtn && nextNewsPageBtn && newsPaginationInfo) {
        // Add pagination functionality for news items
        // This can be implemented similar to the main articles pagination
        prevNewsPageBtn.addEventListener('click', function() {
            // Implementation for news pagination
        });
        
        nextNewsPageBtn.addEventListener('click', function() {
            // Implementation for news pagination
        });
    }
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

// Intersection Observer for lazy loading (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
} 