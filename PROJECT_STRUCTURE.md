# MiaoLab Website - Project Structure

## Overview
This is the official website for MiaoLab, a research laboratory at the University of California, San Francisco, focusing on developmental biology and stem cell research.

## Project Structure

```
miaolab/
├── assets/                          # Media assets organized by type
│   ├── images/                      # Image files
│   │   ├── portrait.png            # Dr. Miao's portrait photo
│   │   ├── research-direction.tif   # Research direction image
│   │   └── ucsf-logo.png           # UCSF logo
│   └── videos/                      # Video files
│       ├── hero-video-1.mov        # Main hero section video
│       ├── hero-video-2a.mov       # About section video
│       └── hero-video-2b.mov       # Research highlights video
├── lab website/                     # Original source materials (archived)
├── index.html                       # Homepage

├── publications.html                # Research publications
├── people.html                      # Team members and PI
├── news.html                        # Lab news and updates
├── contact.html                     # Contact information
├── article.html                     # Article detail template
├── styles.css                       # Main stylesheet
├── script.js                        # JavaScript functionality
├── README.md                        # Project README
└── .gitignore                       # Git ignore file
```

## Key Features

### Homepage (index.html)
- Hero section with background video (hero-video-1.mov)
- About section with research overview and embedded video (hero-video-2a.mov)
- Research highlights section with videos and images
- Latest news feed with filtering
- UCSF branding integration

### Research Section (index.html#research-intro)
- Comprehensive research overview
- Research areas (somites, limb buds, organoids)
- Research goals and methods
- Academic focus on developmental biology

### People Page (people.html)
- Principal Investigator profile with actual portrait
- Current team members
- Alumni section
- Join the team information

### Publications Page (publications.html)
- Research publications list
- Filter by year
- Academic journal links
- Publication statistics

### Responsive Design
- Mobile-first responsive design
- Video controls optimized for different screen sizes
- Professional academic layout

## Media Integration

### Videos
- Hero background video for visual impact
- Research demonstration videos in highlights
- Autoplay with intersection observer for performance
- Fallback handling for browsers that don't support autoplay

### Images
- High-quality portrait photography
- Research direction visualization
- UCSF institutional branding
- Proper alt text for accessibility

## Technical Stack
- Pure HTML5, CSS3, and JavaScript
- No external frameworks for maximum compatibility
- CSS Grid and Flexbox for responsive layouts
- Intersection Observer API for video performance
- CSS Custom Properties for consistent theming

## Deployment
The website is ready for deployment to any web server. All assets are self-contained and paths are relative.

## Maintenance
- Update `assets/` folder when adding new media
- Modify content directly in HTML files
- Use `styles.css` for design changes
- JavaScript functionality is in `script.js` 