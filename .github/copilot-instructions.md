# AI Agent Instructions for VOYA Travel Website

## Project Overview
This is a modern travel website built with HTML, CSS, and JavaScript, utilizing GSAP for animations. The site follows a single-page application (SPA) structure with smooth scrolling between sections.

## Key Components

### Layout Structure
- Single `index.html` with distinct sections marked by semantic HTML5 tags
- Sections: Header, Home, Features, Holiday, Popular Tours, Information, Newsletter, Footer
- Responsive design with mobile-first approach and sidebar navigation for small screens

### Core Technologies
- GSAP + ScrollTrigger for animations and scroll effects
- Boxicons for iconography (`bx` prefix in classes)
- Montserrat font family for typography

### File Organization
```
/
├── index.html         # Main HTML structure
├── style.css         # Global styles
├── js.js            # JavaScript functionality
└── images/          # Image assets
```

## Development Patterns

### Navigation Pattern
Navigation uses ID-based anchors for smooth scrolling:
```html
<nav>
    <ul class="menu1">
        <li><a href="#feature">Features</a></li>
        <li><a href="#holiday">Destination</a></li>
        <!-- etc -->
    </ul>
</nav>
```

### Section Structure Pattern
Each major section follows this structure:
```html
<section class="[section-name]" id="[section-name]">
    <div class="[section-name]-content">
        <!-- Section specific content -->
    </div>
</section>
```

### Mobile Navigation
- Sidebar toggle controlled by `openSidebar()` and `closeSidebar()` functions
- Sidebar menu mirrors main navigation items

## Key Workflows

### Adding New Tour Destinations
1. Add destination image to `/images`
2. Follow the box structure pattern in "Popular Tours" section:
```html
<div class="box">
    <img src="images/[image-name]" alt="">
    <h6>[Country]</h6>
    <h5>[Location]</h5>
</div>
```

### Styling Conventions
- Use BEM-like naming: `[block]__[element]--[modifier]`
- Section-specific styles grouped together in CSS
- Responsive breakpoints handle mobile and tablet layouts

## Common Tasks
- For new features: Add section in index.html, style in style.css
- For new tour packages: Follow box pattern in Popular Tours section
- For UI changes: Check both desktop and mobile sidebar views

## Language Support
- Site supports RTL languages through HTML `dir="rtl"` attribute
- Font stacks support both Latin and non-Latin scripts
