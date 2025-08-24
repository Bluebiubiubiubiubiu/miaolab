# MiaoLab - Personal Blog Website

A modern, responsive personal blog website built with HTML, CSS, and JavaScript. This project provides a clean, professional platform for sharing articles, thoughts, and tutorials.

## Features 11

### 🎨 Modern Design
- Clean, minimalist design with excellent typography
- Responsive layout that works on all devices
- Smooth animations and transitions
- Professional color scheme with CSS custom properties

### 📱 Mobile-First Responsive Design
- Fully responsive design that adapts to all screen sizes
- Mobile navigation with hamburger menu
- Optimized touch interactions
- Fast loading on mobile devices

### 📄 Content Management
- Research areas and methods showcase
- Publications listing with filtering
- Team member profiles and alumni
- News and events management
- Contact form with validation

### 🔍 User Experience
- Smooth scrolling navigation
- Loading states and animations
- Social sharing functionality
- Related articles suggestions
- Search and filter capabilities

### 🛠 Technical Features
- Semantic HTML5 structure
- Modern CSS with Grid and Flexbox
- Vanilla JavaScript (no frameworks)
- Syntax highlighting for code blocks
- SEO-friendly structure

## File Structure

```
miaolab/
├── index.html          # Homepage with lab overview and news

├── publications.html   # Research publications and papers
├── people.html         # Team members and alumni
├── news.html           # Lab news and upcoming events
├── contact.html        # Contact information and form
├── article.html        # Article detail page template
├── styles.css          # Main stylesheet with responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. **Clone or download the project files**
   ```bash
   git clone <repository-url>
   cd miaolab
   ```

2. **Open in a web browser**
   - Double-click `index.html` to open in your browser
   - Or use a local server for better development experience

3. **Using a local server (recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the website**
   - Open your browser and go to `http://localhost:8000`

## Customization

### Adding New Content

#### Adding New Publications

To add new publications, edit the publications section in `publications.html`:

```html
<div class="publication-item">
    <div class="publication-year">2024</div>
    <div class="publication-content">
        <h3 class="publication-title">Your Publication Title</h3>
        <p class="publication-authors">Author Names</p>
        <p class="publication-journal">Journal Name, Year</p>
        <div class="publication-links">
            <a href="#" class="publication-link">DOI</a>
            <a href="#" class="publication-link">PDF</a>
            <a href="#" class="publication-link">PubMed</a>
        </div>
    </div>
</div>
```

#### Adding New Team Members

To add new team members, edit the team section in `people.html`:

```html
<div class="team-card">
    <div class="team-image">
        <div class="placeholder-image">Member Photo</div>
    </div>
    <div class="team-content">
        <h3>Member Name</h3>
        <p class="team-role">Position</p>
        <p class="team-research">Research focus: Description</p>
    </div>
</div>
```

#### Adding News Items

To add news items, edit the news section in `news.html`:

```html
<div class="news-item" data-category="category">
    <div class="news-date">Date</div>
    <div class="news-content">
        <h3 class="news-title">News Title</h3>
        <p class="news-excerpt">News description</p>
        <div class="news-links">
            <a href="#" class="news-link">Read More</a>
        </div>
    </div>
</div>
```

### Customizing Styles

The website uses CSS custom properties for easy customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1d4ed8;       /* Darker shade for hover states */
    --text-primary: #1e293b;       /* Main text color */
    --bg-primary: #ffffff;         /* Background color */
    /* ... more variables */
}
```

### Changing Fonts

The website uses Inter font from Google Fonts. To change fonts:

1. Update the Google Fonts link in the HTML files
2. Modify the `--font-family` variable in `styles.css`

### Adding New Categories

To add new article categories:

1. Add the category to the filter buttons in `index.html`
2. Update the articles data with the new category
3. The filtering will work automatically

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized images with responsive sizing
- Minimal JavaScript bundle
- Efficient CSS with modern features
- Lazy loading support for images
- Smooth animations using CSS transforms

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Focus indicators for keyboard navigation
- Alt text for images
- Screen reader friendly
- High contrast ratios

## SEO Features

- Semantic HTML5 elements
- Meta descriptions
- Proper heading structure
- Clean URLs
- Fast loading times
- Mobile-friendly design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the blog:

1. Check the documentation above
2. Review the code comments
3. Open an issue on GitHub

## Future Enhancements

Potential features for future versions:

- [ ] Search functionality
- [ ] Comments system
- [ ] RSS feed
- [ ] Dark mode toggle
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] CMS integration
- [ ] Blog post editor
- [ ] Image optimization
- [ ] PWA features

## Credits

- **Fonts**: [Inter](https://rsms.me/inter/) by Rasmus Andersson
- **Icons**: Custom SVG icons
- **Images**: [Unsplash](https://unsplash.com/) for sample images
- **Syntax Highlighting**: [Prism.js](https://prismjs.com/)

---

Built with ❤️ for the web development community. 