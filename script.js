// Video sequence control for hero section
class VideoSequencePlayer {
    constructor() {
        this.video1 = document.getElementById('video1');
        this.video2a = document.getElementById('video2a');
        this.video2b = document.getElementById('video2b');
        this.dualContainer = document.getElementById('video-dual-container');
        this.scaleIndicator = document.getElementById('scale-indicator');
        this.heroOverlay = document.querySelector('.hero-overlay');
        this.currentPhase = 0; // 0: movie1, 1: movie2a+2b
        this.isInitialized = false;
        this.dualVideosEnded = { video2a: false, video2b: false };
        
        this.init();
    }
    
    init() {
        if (!this.video1 || !this.video2a || !this.video2b || !this.dualContainer) {
            console.log('Videos not found, skipping video sequence initialization');
            return;
        }
        
        // Set up video event listeners
        this.video1.addEventListener('ended', () => this.playDualVideos());
        this.video1.addEventListener('loadeddata', () => {
            if (!this.isInitialized) {
                this.startSequence();
                this.isInitialized = true;
            }
        });
        
        // Set up dual video event listeners
        this.video2a.addEventListener('ended', () => this.onDualVideoEnded('video2a'));
        this.video2b.addEventListener('ended', () => this.onDualVideoEnded('video2b'));
        
        // Start playing the first video if it's already loaded
        if (this.video1.readyState >= 3) {
            this.startSequence();
            this.isInitialized = true;
        }
    }
    
    startSequence() {
        this.currentPhase = 0;
        this.playMovie1();
    }
    
    playMovie1() {
        // Hide dual container and show movie1
        this.dualContainer.style.display = 'none';
        this.video1.style.display = 'block';
        
        // Reset and play movie1
        this.video1.currentTime = 0;
        this.video1.play().catch(e => console.log('Video1 play failed:', e));
        
        // Show scale indicator for movie1
        if (this.scaleIndicator) {
            this.scaleIndicator.style.opacity = '1';
        }
        
        // Adjust overlay opacity for movie1
        if (this.heroOverlay) {
            this.heroOverlay.style.opacity = '1';
        }
        
        this.currentPhase = 0;
    }
    
    playDualVideos() {
        // Hide movie1 and show dual container
        this.video1.style.display = 'none';
        this.dualContainer.style.display = 'grid';
        
        // Reset dual videos ended tracking
        this.dualVideosEnded = { video2a: false, video2b: false };
        
        // Reset and play both videos
        this.video2a.currentTime = 0;
        this.video2b.currentTime = 0;
        
        this.video2a.play().catch(e => console.log('Video2a play failed:', e));
        this.video2b.play().catch(e => console.log('Video2b play failed:', e));
        
        // Hide scale indicator for dual videos
        if (this.scaleIndicator) {
            this.scaleIndicator.style.opacity = '0';
        }
        
        // Reduce overlay opacity for dual videos to show background colors
        if (this.heroOverlay) {
            this.heroOverlay.style.opacity = '0.3';
        }
        
        this.currentPhase = 1;
    }
    
    onDualVideoEnded(videoId) {
        this.dualVideosEnded[videoId] = true;
        
        // Check if both dual videos have ended
        if (this.dualVideosEnded.video2a && this.dualVideosEnded.video2b) {
            // Both dual videos finished, restart with movie1
            setTimeout(() => this.playMovie1(), 100); // Small delay for smooth transition
        }
    }
}

// Smooth scroll functionality for scroll down buttons
window.addEventListener('load', function() {
    console.log('Scroll functionality loading...');
    
    // Initialize video sequence player
    new VideoSequencePlayer();
    
    // First screen scroll down button
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    console.log('First button found:', scrollDownBtn);
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('First button clicked');
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

// Function to navigate to UCSF graduate programs page
function sendApplication() {
    window.open('https://ctb.ucsf.edu/graduate-programs', '_blank');
}

// Search functionality
class SearchEngine {
    constructor() {
        this.searchData = typeof searchData !== 'undefined' ? searchData : [];
        this.searchInput = null;
        this.searchResults = null;
        this.searchBtn = null;
        this.isSearching = false;
        this.searchTimeout = null;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
    }
    
    setupEventListeners() {
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.searchBtn = document.getElementById('searchBtn');
        
        if (!this.searchInput || !this.searchResults) return;
        
        // Input event with debouncing
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value.trim());
            }, 300);
        });
        
        // Search button click
        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', () => {
                this.performSearch(this.searchInput.value.trim());
            });
        }
        
        // Enter key press
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch(this.searchInput.value.trim());
            }
        });
        
        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-search')) {
                this.hideResults();
            }
        });
        
        // Show results when focusing input (if there's content)
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim() && this.searchResults.children.length > 0) {
                this.showResults();
            }
        });
    }
    
    performSearch(query) {
        if (query.length < 2) {
            this.hideResults();
            return;
        }
        
        this.showLoading();
        
        // Simulate slight delay for better UX
        setTimeout(() => {
            const results = this.search(query);
            this.displayResults(results, query);
        }, 100);
    }
    
    search(query) {
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 1);
        const results = [];
        
        this.searchData.forEach(item => {
            let score = 0;
            let matchedTerms = [];
            
            searchTerms.forEach(term => {
                // Title match (highest weight)
                if (item.title.toLowerCase().includes(term)) {
                    score += 10;
                    matchedTerms.push(term);
                }
                
                // Keywords match (high weight)
                const keywordMatch = item.keywords.some(keyword => 
                    keyword.toLowerCase().includes(term)
                );
                if (keywordMatch) {
                    score += 8;
                    matchedTerms.push(term);
                }
                
                // Content match (medium weight)
                if (item.content.toLowerCase().includes(term)) {
                    score += 5;
                    matchedTerms.push(term);
                }
                
                // Section match (low weight)
                if (item.section.toLowerCase().includes(term)) {
                    score += 3;
                    matchedTerms.push(term);
                }
                
                // Page match (low weight)
                if (item.page.toLowerCase().includes(term)) {
                    score += 2;
                    matchedTerms.push(term);
                }
            });
            
            // Only include results that match at least one term
            if (score > 0) {
                results.push({
                    ...item,
                    score,
                    matchedTerms: [...new Set(matchedTerms)]
                });
            }
        });
        
        // Sort by score (descending) and limit results
        return results.sort((a, b) => b.score - a.score).slice(0, 8);
    }
    
    displayResults(results, query) {
        this.searchResults.innerHTML = '';
        
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-no-results">
                    No results found for "${query}"
                </div>
            `;
            this.showResults();
            return;
        }
        
        results.forEach(result => {
            const resultElement = this.createResultElement(result, query);
            this.searchResults.appendChild(resultElement);
        });
        
        this.showResults();
    }
    
    createResultElement(result, query) {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        
        // Highlight search terms in content
        const highlightedContent = this.highlightSearchTerms(
            result.content.length > 150 ? 
            result.content.substring(0, 150) + '...' : 
            result.content,
            query
        );
        
        div.innerHTML = `
            <div class="search-result-title">${this.highlightSearchTerms(result.title, query)}</div>
            <div class="search-result-excerpt">${highlightedContent}</div>
            <div class="search-result-meta">
                <span class="search-result-section">${result.section}</span>
                <span class="search-result-page">${result.page}</span>
            </div>
        `;
        
        div.addEventListener('click', () => {
            this.navigateToResult(result);
        });
        
        return div;
    }
    
    highlightSearchTerms(text, query) {
        if (!query) return text;
        
        const terms = query.toLowerCase().split(' ').filter(term => term.length > 1);
        let highlightedText = text;
        
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        });
        
        return highlightedText;
    }
    
    navigateToResult(result) {
        this.hideResults();
        this.searchInput.value = '';
        
        // Navigate to the result URL
        if (result.url.startsWith('#')) {
            // Same page anchor
            const element = document.querySelector(result.url);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Different page
            window.location.href = result.url;
        }
    }
    
    showLoading() {
        this.searchResults.innerHTML = `
            <div class="search-loading">
                Searching...
            </div>
        `;
        this.showResults();
    }
    
    showResults() {
        this.searchResults.classList.add('active');
    }
    
    hideResults() {
        this.searchResults.classList.remove('active');
    }
}

// Initialize search engine
const searchEngine = new SearchEngine(); 