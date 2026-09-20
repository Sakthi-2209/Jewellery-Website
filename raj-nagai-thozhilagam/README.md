# Raj Jewellery Workshop - Goldsmith Website

A premium, elegant, and modern single-page website for a local goldsmith business. 
Built strictly with HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.

## Features
- **Luxury Gold Design:** Carefully curated color palette (`#0B0906`, `#17120C`, `#C9A227`).
- **Responsive Layout:** fully optimized for mobile devices and tablets using Bootstrap 5.
- **Dynamic Collection Gallery:** Vanilla JavaScript-powered filtering without page reloads.
- **Interactive Modals:** Clicking a collection image opens a lightbox with a dynamic WhatsApp inquiry link.
- **WhatsApp Integration:** Easily contactable via navbar, hero, collection modal, contact section, and a floating button.
- **Smooth Scrolling & Animations:** Custom scroll-spy navigation and elegant fade-in animations on scroll.

## Configuration
To connect this website to the actual business owner's WhatsApp number:
1. Open `js/script.js`.
2. Locate the line: `const WHATSAPP_NUMBER = "91XXXXXXXXXX";`
3. Replace the placeholder with the actual number (including country code, without the `+`).

## File Structure
- `index.html`: The main single-page template.
- `css/style.css`: All custom design tokens and styling.
- `js/script.js`: Interactive functionality, filtering, and WhatsApp logic.
- `images/`: Directories prepared for final assets (`hero/`, `about/`, `collection/`).

## Deployment
This project is purely frontend static files. It can be instantly deployed to platforms like **GitHub Pages** or **Vercel** with zero backend configuration.
