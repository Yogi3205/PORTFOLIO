# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: CSS animations and JavaScript effects

## Files Structure

```
portfolio/
 index.html          # Main HTML file
 styles.css          # CSS styles
 script.js           # JavaScript functionality
 Yogi Resume.pdf     # Your resume (for reference)
 README.md           # This file
```

## How to Customize

### 1. Personal Information

Edit the following sections in `index.html`:

#### Hero Section (Lines ~45-60)
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Your Job Title</h2>
<p class="hero-description">
    Your professional description
</p>
```

#### About Section (Lines ~75-95)
```html
<p>
    Your personal description and background
</p>
```

#### Contact Information (Lines ~280-300)
```html
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>
```

### 2. Experience Section

Replace the timeline items in the Experience section (Lines ~100-150) with your actual work experience:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <span class="timeline-date">Start Date - End Date</span>
        <p>
            Your job description and achievements
        </p>
    </div>
</div>
```

### 3. Skills Section

Update the skills in the Skills section (Lines ~160-200) with your actual skills:

```html
<span class="skill-tag">Your Skill</span>
```

### 4. Projects Section

Replace the project cards (Lines ~210-280) with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-laptop-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="#" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

### 5. Social Links

Update the social media links in the Contact section (Lines ~300-320):

```html
<a href="https://linkedin.com/in/yourprofile" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```

### 6. Add Your Photo

Replace the placeholder icon in the hero section with your actual photo:

1. Add your photo to the project folder
2. Replace the `.image-placeholder` div with:
```html
<div class="hero-image">
    <img src="your-photo.jpg" alt="Your Name" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
</div>
```

### 7. Customize Colors

You can change the color scheme by modifying the CSS variables in `styles.css`:

- Primary color: `#2563eb` (blue)
- Accent color: `#fbbf24` (yellow)
- Background: `#f8fafc` (light gray)

## Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch
6. Your site will be available at `https://yourusername.github.io/repositoryname`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed automatically

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your portfolio.
