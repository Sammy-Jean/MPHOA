# Monterey Park HOA Website

A modern, professional static website for Monterey Park Homeowners Association in York, SC.

## 🎨 Features

- **Professional Design**: Clean blue & black color scheme
- **Fully Responsive**: Mobile-friendly design
- **Email Capture**: Homepage subscription form
- **Four Pillars Framework**: Safety, Community, Maintenance, Transparency
- **Multiple Pages**: Home, About, Board Priorities, Resources, FAQ, Contact
- **Modern Animations**: AOS (Animate on Scroll)
- **Font Awesome Icons**: Professional iconography
- **Contact Form**: Built-in contact functionality
- **FAQ Accordion**: Interactive frequently asked questions

## 📁 Project Structure

```
mphoa-site/
├── index.html          # Homepage with email capture
├── about.html          # About the HOA
├── priorities.html     # Board priorities organized by pillars
├── resources.html      # Documents and links (Kuster.com)
├── faq.html           # Frequently asked questions
├── contact.html        # Contact form
├── css/
│   └── style.css      # Complete styling with blue/black theme
├── js/
│   └── main.js        # JavaScript functionality
└── images/            # Place your images here
```

## 🎨 Color Scheme

- **Primary Blue**: #1e3a8a (Deep professional blue)
- **Primary Blue Dark**: #172554 
- **Primary Blue Light**: #3b82f6
- **Black**: #0f172a (Rich black with blue tint)
- **Accent Gold**: #f59e0b (CTAs and highlights)
- **Success Green**: #10b981
- **Gray Variations**: Multiple shades for text and backgrounds

## 🚀 Quick Start

### Option 1: Open Locally

1. Download/extract the `mphoa-site` folder
2. Open `index.html` in your web browser
3. Navigate through the site

### Option 2: Deploy to Netlify

1. **Push to GitHub:**
   ```bash
   cd mphoa-site
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your GitHub repository
   - Build settings: Leave empty (static site)
   - Click "Deploy"

3. **Custom Domain:**
   - In Netlify, go to Domain settings
   - Add custom domain: `mphoa.com`
   - Follow DNS instructions

### Option 3: Deploy to GitHub Pages

1. **Push to GitHub** (same as above)
2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from branch → `main`
   - Folder: `/ (root)`
   - Save
3. **Access at:** `https://yourusername.github.io/repo-name`

## 📝 Customization Guide

### Update Contact Information

Edit the footer in each HTML file:
```html
<li><i class="fas fa-envelope"></i> info@mphoa.com</li>
<li><i class="fas fa-phone"></i> (123) 456-7890</li>
```

### Add Your Logo

1. Add logo image to `images/` folder
2. Update navigation in all HTML files:
```html
<a href="index.html" class="logo">
  <img src="images/your-logo.png" alt="Monterey Park HOA">
</a>
```

### Update JotForm Link

In `contact.html`, replace the placeholder:
```html
<a href="YOUR_JOTFORM_URL" class="btn btn-primary btn-lg">
```

### Add HOA Documents

In `resources.html`, update PDF links:
```html
<a href="documents/bylaws.pdf" download>
  <span>HOA Bylaws</span>
</a>
```

### Customize Colors

Edit `css/style.css` at the top:
```css
:root {
  --primary-blue: #1e3a8a;
  --accent-gold: #f59e0b;
  /* etc. */
}
```

## 📧 Email Capture Setup

The homepage collects email addresses and stores them in browser localStorage.

**To integrate with a real service:**

Edit `js/main.js` and replace the `simulateFormSubmission` function:

```javascript
async function simulateFormSubmission(data) {
  // Replace with your email service API
  // Examples: Mailchimp, SendGrid, ConvertKit
  
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  return response.json();
}
```

## 📬 Contact Form Setup

Similar to email capture, the contact form currently stores submissions locally.

**To connect to a backend:**

1. Use a service like:
   - [Formspree](https://formspree.io) (easiest)
   - [Netlify Forms](https://www.netlify.com/products/forms/) (if using Netlify)
   - Your own backend API

2. Update the form action or JavaScript handler in `js/main.js`

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Variables
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Inter & Poppins fonts
- **Font Awesome 6**: Icons
- **AOS**: Scroll animations
- **No frameworks**: Pure HTML/CSS/JS for simplicity

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Page Descriptions

### Home (index.html)
- Hero section with email capture
- Four Pillars overview
- Quick access cards
- CTA section

### About (about.html)
- HOA mission and vision
- Board meeting schedule
- Community information

### Board Priorities (priorities.html)
- Current projects organized by Four Pillars
- Status indicators (In Progress, Planned, Completed)
- Timeline information

### Resources (resources.html)
- HOA documents (bylaws, minutes, etc.)
- Link to Kuster.com property management
- Helpful community links

### FAQ (faq.html)
- Interactive accordion
- Common questions categorized
- Easy to expand with new questions

### Contact (contact.html)
- Contact form
- Board contact information
- Emergency contacts
- JotForm integration placeholder

## 🔮 Future Enhancements

- [ ] Add actual document PDFs
- [ ] Connect email capture to Twilio/SendGrid
- [ ] Integrate JotForm
- [ ] Add blog/news section (currently commented out)
- [ ] Add photo gallery
- [ ] Implement actual backend for forms
- [ ] Add newsletter archive

## 📞 Support

For questions about this website:
- Email: info@mphoa.com
- Review the FAQ page
- Contact the board through the contact form

## 📜 License

© 2026 Monterey Park HOA. All rights reserved.

---

**Built for Monterey Park HOA - York, SC**
