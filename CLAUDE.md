# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for David A Berry (Full Stack Developer). It's a single-page application built with vanilla HTML, CSS, and JavaScript - no build system or Node.js dependencies.

## Running the Project

Open `index.html` directly in a web browser. No build step required.

For deployment, upload files to any static hosting service (currently deployed on Netlify).

## Architecture

**Single-file SPA structure:**
- `index.html` - The entire site in one file (~610 lines), organized into sections: Home, Video Introduction, Services, Projects, Experience/Education, Reviews
- `assets/css/style.css` - Custom styles (~287 lines)
- `assets/js/main.js` - AOS (Animate On Scroll) initialization only (~12 lines)

**External dependencies (CDN/local minified):**
- Bootstrap 5 - Responsive grid and components
- AOS - Scroll-triggered animations
- Font Awesome 6 & Line Awesome - Icons
- Google Fonts - Bai Jamjuree and Kanit

## Key Sections in index.html

The HTML is organized with comment markers for each section:
- `<!-- ========== Home ========== -->` - Hero with intro, resume/project links
- `<!-- ========== Video Introduction ========== -->` - Loom embed
- `<!-- ========== Services ========== -->` - 6 service offerings
- `<!-- ========== Work ========== -->` - Featured projects
- `<!-- ========== Experience & Education ========== -->` - Timeline
- `<!-- ========== Reviews ========== -->` - Testimonials

## Notes

- No package.json, no build tools, no linting, no tests
- All styling uses Bootstrap utilities plus custom CSS in `style.css`
- Images stored in `assets/images/`
- `zohoverify/` contains Zoho CRM domain verification
