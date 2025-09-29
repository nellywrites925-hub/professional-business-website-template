# 🎨 Easy Customization Guide

**Transform this template into YOUR website in 30 minutes!**

## 📝 **Content Placeholders to Replace**

### **Company Information**

Find and replace these placeholders throughout all HTML files:

- `[COMPANY_NAME]` → Your Business Name
- `[FOUNDED_YEAR]` → Year your business was founded
- `[PHONE_NUMBER]` → Your phone number
- `[EMAIL_ADDRESS]` → Your business email
- `[STREET_ADDRESS]` → Your street address
- `[CITY_STATE_ZIP]` → Your city, state, ZIP code
- `[WEBSITE_URL]` → Your website URL

### **Team Members**

In `about.html`, replace:

- `[CEO_NAME]` → CEO's actual name
- `[COO_NAME]` → COO's actual name
- `[DIRECTOR_NAME]` → Director's actual name
- Update bio paragraphs with real information

### **Service Information**

In `services.html` and throughout:

- `[PRIMARY_SERVICES]` → Your main services
- `[INDUSTRY_FOCUS]` → Industries you serve
- `[YEARS_EXPERIENCE]` → Years in business
- `[CLIENT_COUNT]` → Number of clients served

## 🖼️ **Image Replacement Guide**

### **Logo Replacement**

1. Replace `assets/images/company-logo.svg` with your logo
2. Recommended format: SVG (scalable) or PNG (high resolution)
3. Keep dimensions around 200px width for best results

### **Team Photos**

Replace these images in about.html:

- CEO image: Use professional headshot (300x300px recommended)
- COO image: Professional headshot
- Director image: Professional headshot

### **Hero Images**

- Homepage hero: Replace with your industry-relevant image
- About page: Company photo or professional workspace
- Services page: Team collaboration or workspace

## 🎨 **Color Customization**

### **Easy Color Changes**

Edit `assets/css/main.css` - find these CSS variables and change the colors:

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #2c3e50; /* Main brand color */
  --color-accent: #c0392b; /* Accent/CTA color */
  --color-accent-light: #e74c3c; /* Hover states */

  /* Neutral Colors */
  --color-text-primary: #2c3e50; /* Main text */
  --color-text-secondary: #7f8c8d; /* Secondary text */
  --color-background: #ffffff; /* Main background */
  --color-background-light: #f8f9fa; /* Section backgrounds */
}
```

### **Color Scheme Suggestions**

**Professional Blue:**

```css
--color-primary: #1e3a8a;
--color-accent: #3b82f6;
--color-accent-light: #60a5fa;
```

**Modern Green:**

```css
--color-primary: #065f46;
--color-accent: #059669;
--color-accent-light: #10b981;
```

**Elegant Purple:**

```css
--color-primary: #581c87;
--color-accent: #7c3aed;
--color-accent-light: #8b5cf6;
```

**Classic Navy:**

```css
--color-primary: #1e293b;
--color-accent: #dc2626;
--color-accent-light: #ef4444;
```

## 📱 **Contact Form Setup**

### **Option 1: Netlify Forms (Recommended - Free)**

1. Host on Netlify
2. Add `netlify` attribute to form tag:
   ```html
   <form name="contact" method="POST" data-netlify="true"></form>
   ```
3. Netlify automatically handles submissions

### **Option 2: Formspree**

1. Sign up at formspree.io
2. Get your form endpoint
3. Update form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST"></form>
   ```

### **Option 3: Custom Backend**

- Requires server-side development
- Contact a developer for PHP, Node.js, or Python integration

## 🚀 **Publishing Your Website**

### **Free Hosting Options:**

**Netlify (Recommended):**

1. Create account at netlify.com
2. Drag and drop your website folder
3. Get instant HTTPS domain
4. Form handling included

**Vercel:**

1. Sign up at vercel.com
2. Import from GitHub or upload folder
3. Automatic deployments

**GitHub Pages:**

1. Create GitHub repository
2. Upload files
3. Enable GitHub Pages in settings

### **Custom Domain Setup:**

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Update DNS settings to point to hosting provider
3. Enable SSL certificate (usually automatic)

## 🔧 **Advanced Customization**

### **Adding New Sections**

1. Copy existing section HTML structure
2. Update content and styling classes
3. Add to navigation if needed

### **Font Changes**

1. Choose fonts from Google Fonts
2. Update the font links in HTML `<head>` sections
3. Modify CSS font variables:
   ```css
   --font-serif: "Your Serif Font", serif;
   --font-sans: "Your Sans Font", sans-serif;
   ```

### **Layout Modifications**

- Container width: Modify `--container-max-width`
- Spacing: Adjust `--spacing-*` variables
- Borders: Update `--border-radius` for different corner styles

## 📞 **Need Help?**

### **Common Issues:**

**Images not showing:**

- Check file paths match exactly
- Ensure images are in `assets/images/` folder
- Verify file extensions (.jpg, .png, .svg)

**Colors not changing:**

- Clear browser cache (Ctrl+F5)
- Check CSS syntax for typos
- Ensure you're editing the right CSS file

**Mobile menu not working:**

- Check that `main.js` is loading
- Verify JavaScript console for errors

### **Professional Services Available:**

- Logo design and branding
- Custom color schemes
- Additional pages/features
- Backend form integration
- SEO optimization
- Content writing

---

**🎉 Congratulations! Your professional website is ready to launch!**

_Remember: This template is designed to grow with your business. Start simple and add features as needed._
