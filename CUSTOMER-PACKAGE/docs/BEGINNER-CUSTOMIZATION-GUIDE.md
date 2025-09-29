# Beginner's Customization Guide

**Welcome to your new Professional Business Website Template!**

This guide will walk you through customizing your template step-by-step, even if you're new to web development. No coding experience required for basic customizations!

## 🎯 What You'll Learn

- How to change colors, fonts, and images
- How to update text content and company information
- How to customize contact forms and social media links
- How to add or remove sections
- Simple tips for making it uniquely yours

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Download and Extract

1. Download your template files
2. Extract the ZIP file to a folder on your computer
3. You'll see two main folders:
   - `client-website` - This is what you'll customize
   - `demo-site` - This is just an example (don't edit this one)

### Step 2: Choose Your Text Editor

You'll need a simple text editor to make changes:

**Free Options:**

- **Visual Studio Code** (Recommended) - Download from code.visualstudio.com
- **Notepad++** (Windows) - notepad-plus-plus.org
- **TextEdit** (Mac) - Built into macOS
- **Sublime Text** - sublimetext.com

### Step 3: Open Your Files

1. Open your text editor
2. Open the `client-website` folder
3. You're ready to customize!

---

## 📝 Basic Text Changes (15 Minutes)

### Change Company Name and Information

**File to Edit:** All `.html` files (index.html, about.html, etc.)

**What to Look For:**

```html
[COMPANY_NAME] → Replace with "Your Business Name" [YOUR_SERVICES] → Replace
with "Web Design, Consulting" [YOUR_INDUSTRY] → Replace with "Technology,
Healthcare" [YOUR_LOCATION] → Replace with "New York, NY" [TAGLINE_OR_SERVICES]
→ Replace with "Professional Web Solutions"
```

**Example Change:**

```html
Before: <title>[COMPANY_NAME] | [TAGLINE_OR_SERVICES]</title> After:
<title>Smith Consulting | Professional Business Solutions</title>
```

### Update Contact Information

**Files to Edit:** All `.html` files

**Look for these sections:**

```html
📧 info@yourcompany.com → info@smithconsulting.com 📞 (555) 123-4567 → (555)
987-6543 📍 123 Business Plaza → 456 Main Street, Your City, ST 12345
```

### Change Page Content

**Main Content Areas:**

- **Headlines:** Look for `<h1>`, `<h2>`, `<h3>` tags
- **Paragraphs:** Look for `<p>` tags
- **Button Text:** Look for `<a class="btn">` tags

**Pro Tip:** Use Ctrl+F (Windows) or Cmd+F (Mac) to search for specific text you want to change.

---

## 🎨 Visual Customization (20 Minutes)

### Change Colors

**File to Edit:** `assets/css/main.css`

**Find this section at the top:**

```css
:root {
  --color-primary: #2c3e50; /* Main brand color */
  --color-accent: #c0392b; /* Accent/link color */
  --color-background: #ffffff; /* Background color */
  --color-text-primary: #2c3e50; /* Main text color */
}
```

**Popular Color Combinations:**

**Blue & Orange (Professional):**

```css
--color-primary: #1e3a8a; /* Deep blue */
--color-accent: #f97316; /* Orange */
```

**Green & Gray (Modern):**

```css
--color-primary: #065f46; /* Forest green */
--color-accent: #6b7280; /* Gray */
```

**Purple & Pink (Creative):**

```css
--color-primary: #7c3aed; /* Purple */
--color-accent: #ec4899; /* Pink */
```

**Need Color Inspiration?**

- Visit coolors.co for color palette ideas
- Use your logo colors as a starting point

### Change Fonts

**File to Edit:** All `.html` files (in the `<head>` section)

**Current Fonts:**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
```

**Popular Font Combinations:**

**Modern & Clean:**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

**Professional & Readable:**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&display=swap"
  rel="stylesheet"
/>
```

**Then update CSS:** (in `assets/css/main.css`)

```css
--font-heading: "Playfair Display", serif;
--font-body: "Inter", sans-serif;
```

---

## 🖼️ Adding Your Images (30 Minutes)

### Replace Logo

**Files:** All `.html` files

**Look for:**

```html
<img src="assets/images/company-logo.svg" alt="Company Logo" class="logo-img" />
```

**Steps:**

1. Save your logo as `company-logo.png` or `company-logo.jpg`
2. Put it in the `assets/images/` folder
3. Update the file reference:

```html
<img
  src="assets/images/company-logo.png"
  alt="Your Company Name Logo"
  class="logo-img"
/>
```

### Replace Photos

**Current Image Locations:**

- Hero images (main banner photos)
- Service images
- Team photos
- Background images

**Easy Method:**

1. Find images you like on [Unsplash.com](https://unsplash.com) (free)
2. Download them and save to `assets/images/`
3. Replace the file names in your HTML

**Example:**

```html
Before:
<img
  src="https://images.unsplash.com/photo-1497366216548..."
  alt="Business meeting"
/>
After: <img src="assets/images/your-photo.jpg" alt="Your business photo" />
```

### Image Size Guidelines

- **Logo:** 200x60 pixels (approximately)
- **Hero Images:** 1200x600 pixels
- **Service Images:** 400x300 pixels
- **Team Photos:** 300x300 pixels (square)

**Free Image Optimization:**

- Use TinyPNG.com to compress images (makes your site load faster)

---

## 📧 Contact Form Setup (15 Minutes)

### Option 1: Netlify Forms (Easiest)

If you're hosting on Netlify, just add this attribute to your form:

**File:** `contact.html`

**Find:**

```html
<form class="contact-form" method="POST"></form>
```

**Change to:**

```html
<form class="contact-form" method="POST" data-netlify="true"></form>
```

### Option 2: Formspree (Works Anywhere)

1. Sign up at [formspree.io](https://formspree.io) (free plan available)
2. Get your form endpoint
3. Update your form:

```html
<form
  class="contact-form"
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
></form>
```

### Option 3: Email Link (Simple)

Replace the form with a simple email link:

```html
<a
  href="mailto:your-email@company.com?subject=Website Contact"
  class="btn btn-primary"
>
  Send Email
</a>
```

---

## 🔗 Social Media & Links

### Update Social Media Links

**Files:** All `.html` files (usually in footer)

**Look for:**

```html
<a href="#" class="social-link" aria-label="LinkedIn"></a>
```

**Replace with your links:**

```html
<a
  href="https://linkedin.com/company/yourcompany"
  class="social-link"
  aria-label="LinkedIn"
>
  <a
    href="https://twitter.com/yourcompany"
    class="social-link"
    aria-label="Twitter"
  >
    <a
      href="https://facebook.com/yourcompany"
      class="social-link"
      aria-label="Facebook"
    ></a></a
></a>
```

### Update Navigation Links

Make sure all your pages link correctly:

```html
<a href="index.html" class="nav-link">Home</a>
<a href="about.html" class="nav-link">About</a>
<a href="services.html" class="nav-link">Services</a>
```

---

## ✂️ Adding & Removing Content

### Add a New Service

**File:** `services.html`

**Find the services grid:**

```html
<div class="services-grid">
  <!-- Existing service cards -->
</div>
```

**Copy an existing service card and modify:**

```html
<div class="service-card">
  <h3 class="service-title">Your New Service</h3>
  <p class="service-description">
    Description of your new service and how it helps clients.
  </p>
  <a href="#" class="service-link">Learn More</a>
</div>
```

### Remove a Section

To remove any section (like testimonials or blog), simply:

1. Find the section in the HTML (look for `<section>` tags)
2. Delete everything from `<section>` to `</section>`

### Add Your Team Members

**File:** `about.html`

**Find the team section and add:**

```html
<div class="team-member">
  <img src="assets/images/team-john.jpg" alt="John Smith" class="team-photo" />
  <h3 class="team-name">John Smith</h3>
  <p class="team-title">CEO & Founder</p>
  <p class="team-bio">John brings 15 years of industry experience...</p>
</div>
```

---

## 🔍 SEO Basics (10 Minutes)

### Update Page Titles

**Every HTML file has:**

```html
<title>Your Page Title - Your Company Name</title>
```

**Make them unique and descriptive:**

- Home: "Professional Web Design - Smith Consulting"
- About: "About Our Team - Smith Consulting"
- Services: "Our Services - Smith Consulting"

### Update Meta Descriptions

```html
<meta
  name="description"
  content="Professional web design and consulting services in New York. We help businesses grow with custom websites and digital solutions."
/>
```

### Update Keywords

```html
<meta
  name="keywords"
  content="web design, consulting, New York, professional websites, digital marketing"
/>
```

---

## 📱 Testing Your Changes

### Test in Browser

1. Open your `index.html` file in a web browser
2. Click through all pages to make sure they work
3. Test on your phone (forward the link to yourself)

### Check for Errors

**Common Issues:**

- Broken images (check file names and paths)
- Broken links (make sure all pages exist)
- Missing closing tags (every `<div>` needs a `</div>`)

**Use Browser Developer Tools:**

- Right-click on your page
- Select "Inspect" or "Developer Tools"
- Look for any red error messages

---

## 🚀 Going Live (20 Minutes)

### Option 1: Netlify (Recommended for beginners)

1. Go to [netlify.com](https://netlify.com)
2. Drag your entire `client-website` folder to the deploy area
3. Your site is live instantly!
4. Get a custom domain for $12/year

### Option 2: GitHub Pages (Free)

1. Create account on [github.com](https://github.com)
2. Create new repository
3. Upload your files
4. Enable GitHub Pages in settings

### Option 3: Your Hosting Provider

1. Log into your hosting control panel
2. Find "File Manager" or use FTP
3. Upload files to `public_html` or `www` folder

---

## 🆘 Common Questions

### "I broke something! How do I fix it?"

- **Keep a backup:** Always copy your original files before making changes
- **One change at a time:** Make small changes and test frequently
- **Use undo:** Ctrl+Z (Windows) or Cmd+Z (Mac) in your text editor

### "The colors/fonts aren't changing"

- **Clear your browser cache:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- **Check file paths:** Make sure you're editing the right CSS file
- **Spelling matters:** CSS is case-sensitive

### "My images aren't showing"

- **Check file names:** Must match exactly (including .jpg, .png)
- **Check file paths:** Make sure images are in `assets/images/`
- **File size:** Large images (over 5MB) may not load quickly

### "How do I make it mobile-friendly?"

- **Good news:** Your template is already mobile-responsive!
- **Test it:** View your site on your phone to see how it looks
- **Images:** Make sure they're not too large (under 1MB each)

---

## 🛠️ Advanced Customizations

### Custom CSS (For those ready to learn more)

**Add custom styles to:** `assets/css/main.css` (at the bottom)

**Examples:**

**Rounded corners:**

```css
.service-card {
  border-radius: 15px;
}
```

**Shadow effects:**

```css
.hero-section {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

**Hover effects:**

```css
.btn:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
```

### Animation Effects

**Add smooth scrolling:**

```css
html {
  scroll-behavior: smooth;
}
```

**Fade-in animations:**

```css
.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

## 📚 Learning Resources

### Want to Learn More?

- **W3Schools:** Free HTML/CSS tutorials (w3schools.com)
- **Codecademy:** Interactive coding lessons
- **YouTube:** "HTML CSS Tutorial" for visual learners
- **Mozilla Developer Network:** Comprehensive documentation

### Design Inspiration

- **Dribbble:** Professional design inspiration
- **Behance:** Creative portfolio examples
- **Awwwards:** Award-winning web designs
- **Your competitors:** See what others in your industry are doing

---

## ✅ Customization Checklist

**Before Going Live:**

- [ ] Company name updated everywhere
- [ ] Contact information is correct
- [ ] Logo and images replaced
- [ ] Colors match your brand
- [ ] All links work correctly
- [ ] Contact form is set up
- [ ] Tested on mobile device
- [ ] Spell-checked all content
- [ ] SEO information updated
- [ ] Social media links added

**Nice to Have:**

- [ ] Custom domain name set up
- [ ] Google Analytics added
- [ ] SSL certificate enabled (usually automatic)
- [ ] Site submitted to Google Search Console

---

## 🎉 Congratulations!

You've successfully customized your professional website template!

**Remember:**

- **Start simple:** You can always add more features later
- **Keep it updated:** Refresh content regularly to keep visitors engaged
- **Ask for help:** Don't hesitate to reach out if you get stuck
- **Back up regularly:** Save copies of your work

**Your website is now ready to help grow your business online!** 🚀

---

## 📞 Need Help?

If you get stuck or need additional customization:

1. **Check the documentation:** Review this guide and other included docs
2. **Search online:** Most questions have been asked before
3. **Community forums:** Web development communities are very helpful
4. **Consider hiring help:** For complex customizations, consider hiring a developer

**Remember:** Every professional web developer started as a beginner. You've got this! 💪
