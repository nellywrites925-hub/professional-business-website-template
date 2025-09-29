/**
 * Main JavaScript - Professional Business Website
 * Handles navigation, form validation, and interactive features
 */

(function () {
  "use strict";

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================

  function initMobileNavigation() {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!mobileToggle || !mainNav) return;

    // Toggle mobile menu
    mobileToggle.addEventListener("click", function () {
      const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";

      mobileToggle.setAttribute("aria-expanded", !isOpen);
      mainNav.classList.toggle("mobile-nav-open");

      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? "" : "hidden";
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          mobileToggle.setAttribute("aria-expanded", "false");
          mainNav.classList.remove("mobile-nav-open");
          document.body.style.overflow = "";
        }
      });
    });

    // Close mobile menu on window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        mobileToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("mobile-nav-open");
        document.body.style.overflow = "";
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target)) {
        if (mainNav.classList.contains("mobile-nav-open")) {
          mobileToggle.setAttribute("aria-expanded", "false");
          mainNav.classList.remove("mobile-nav-open");
          document.body.style.overflow = "";
        }
      }
    });
  }

  // ==========================================================================
  // Dark/Light Theme Toggle
  // ==========================================================================

  function initThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    const themeIcon = document.querySelector(".theme-toggle-icon");

    if (!themeToggle || !themeIcon) return;

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set initial theme
    let currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    applyTheme(currentTheme);

    // Theme toggle click handler
    themeToggle.addEventListener("click", function () {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(currentTheme);
      localStorage.setItem("theme", currentTheme);
    });

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        if (!localStorage.getItem("theme")) {
          currentTheme = e.matches ? "dark" : "light";
          applyTheme(currentTheme);
        }
      });

    function applyTheme(theme) {
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
      }
    }
  }

  // ==========================================================================
  // Scroll to Top Functionality
  // ==========================================================================

  function initScrollToTop() {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    if (!scrollToTopBtn) return;

    // Show/hide button based on scroll position
    function toggleScrollToTopBtn() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    }

    // Smooth scroll to top function
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Event listeners
    window.addEventListener("scroll", toggleScrollToTopBtn);
    scrollToTopBtn.addEventListener("click", scrollToTop);

    // Handle keyboard accessibility
    scrollToTopBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTop();
      }
    });

    // Initial check
    toggleScrollToTopBtn();
  }

  // ==========================================================================
  // Contact Form Validation and Handling
  // ==========================================================================

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const submitBtn = form.querySelector(".submit-btn");
    const btnText = submitBtn?.querySelector(".btn-text");
    const btnLoading = submitBtn?.querySelector(".btn-loading");
    const successMessage = document.getElementById("form-success");
    const errorMessage = document.getElementById("form-error");

    // Form validation rules
    const validationRules = {
      firstName: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s'-]+$/,
        message:
          "First name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes.",
      },
      lastName: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s'-]+$/,
        message:
          "Last name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes.",
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address.",
      },
      phone: {
        required: false,
        pattern: /^[\+]?[1-9][\d]{0,15}$/,
        message: "Please enter a valid phone number.",
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 2000,
        message: "Message must be between 10 and 2000 characters.",
      },
      privacy: {
        required: true,
        message: "You must agree to the privacy policy to continue.",
      },
    };

    // Validate individual field
    function validateField(field) {
      const name = field.name;
      const value = field.value.trim();
      const rules = validationRules[name];
      const errorElement = document.getElementById(`${name}-error`);

      if (!rules) return true;

      let isValid = true;
      let errorMessage = "";

      // Required field validation
      if (rules.required && !value) {
        isValid = false;
        errorMessage = `${getFieldLabel(name)} is required.`;
      }
      // Checkbox validation (privacy)
      else if (field.type === "checkbox" && rules.required && !field.checked) {
        isValid = false;
        errorMessage = rules.message;
      }
      // Pattern validation
      else if (value && rules.pattern && !rules.pattern.test(value)) {
        isValid = false;
        errorMessage = rules.message;
      }
      // Length validation
      else if (value && rules.minLength && value.length < rules.minLength) {
        isValid = false;
        errorMessage = `${getFieldLabel(name)} must be at least ${
          rules.minLength
        } characters.`;
      } else if (value && rules.maxLength && value.length > rules.maxLength) {
        isValid = false;
        errorMessage = `${getFieldLabel(name)} must not exceed ${
          rules.maxLength
        } characters.`;
      }

      // Update field validation state
      if (isValid) {
        field.classList.remove("error");
        field.classList.add("valid");
        if (errorElement) {
          errorElement.textContent = "";
          errorElement.style.display = "none";
        }
      } else {
        field.classList.remove("valid");
        field.classList.add("error");
        if (errorElement) {
          errorElement.textContent = errorMessage;
          errorElement.style.display = "block";
        }
      }

      return isValid;
    }

    // Get user-friendly field label
    function getFieldLabel(fieldName) {
      const labels = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        company: "Company",
        jobTitle: "Job Title",
        message: "Message",
        privacy: "Privacy Policy Agreement",
      };
      return labels[fieldName] || fieldName;
    }

    // Add real-time validation
    const formFields = form.querySelectorAll("input, textarea, select");
    formFields.forEach((field) => {
      // Validate on blur
      field.addEventListener("blur", function () {
        validateField(this);
      });

      // Clear errors on input (for better UX)
      field.addEventListener("input", function () {
        if (this.classList.contains("error")) {
          const errorElement = document.getElementById(`${this.name}-error`);
          if (errorElement && this.value.trim()) {
            validateField(this);
          }
        }
      });
    });

    // Form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Hide previous messages
      if (successMessage) successMessage.style.display = "none";
      if (errorMessage) errorMessage.style.display = "none";

      // Validate all fields
      let isFormValid = true;
      formFields.forEach((field) => {
        if (!validateField(field)) {
          isFormValid = false;
        }
      });

      if (!isFormValid) {
        // Focus on first error field
        const firstError = form.querySelector(".error");
        if (firstError) {
          firstError.focus();
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      // Show loading state
      if (submitBtn && btnText && btnLoading) {
        submitBtn.disabled = true;
        btnText.style.display = "none";
        btnLoading.style.display = "inline";
      }

      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        // Reset loading state
        if (submitBtn && btnText && btnLoading) {
          submitBtn.disabled = false;
          btnText.style.display = "inline";
          btnLoading.style.display = "none";
        }

        // Show success message
        if (successMessage) {
          successMessage.style.display = "block";
          successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          form.style.display = "none";
        }

        // In a real implementation, you would send the data to your server:
        /*
                const formData = new FormData(form);
                fetch('/contact-submit', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    // Handle success/error response
                })
                .catch(error => {
                    console.error('Error:', error);
                    if (errorMessage) {
                        errorMessage.style.display = 'block';
                    }
                });
                */
      }, 1500);
    });
  }

  // ==========================================================================
  // FAQ Accordion
  // ==========================================================================

  function initFAQAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const icon = question?.querySelector(".question-icon");

      if (!question || !answer) return;

      question.addEventListener("click", function () {
        const isOpen = this.getAttribute("aria-expanded") === "true";

        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherQuestion = otherItem.querySelector(".faq-question");
            const otherAnswer = otherItem.querySelector(".faq-answer");
            const otherIcon = otherQuestion?.querySelector(".question-icon");

            if (otherQuestion && otherAnswer) {
              otherQuestion.setAttribute("aria-expanded", "false");
              otherAnswer.style.maxHeight = "0";
              otherAnswer.style.opacity = "0";
              if (otherIcon) otherIcon.textContent = "+";
            }
          }
        });

        // Toggle current item
        this.setAttribute("aria-expanded", !isOpen);
        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          answer.style.opacity = "1";
          if (icon) icon.textContent = "−";
        } else {
          answer.style.maxHeight = "0";
          answer.style.opacity = "0";
          if (icon) icon.textContent = "+";
        }
      });
    });
  }

  // ==========================================================================
  // Smooth Scrolling for Anchor Links
  // ==========================================================================

  function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Handle empty hash or just "#"
        if (!href || href === "#") {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();

          const headerHeight =
            document.querySelector(".site-header")?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================

  function initHeaderScrollEffect() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let lastScrollTop = 0;
    let isScrolling = false;

    window.addEventListener("scroll", function () {
      if (!isScrolling) {
        window.requestAnimationFrame(function () {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = "translateY(-100%)";
          } else {
            // Scrolling up
            header.style.transform = "translateY(0)";
          }

          // Add shadow when scrolled
          if (scrollTop > 10) {
            header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
          } else {
            header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
          }

          lastScrollTop = scrollTop;
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
  }

  // ==========================================================================
  // Form Enhancement Utilities
  // ==========================================================================

  function initFormEnhancements() {
    // Add floating label effect
    const formInputs = document.querySelectorAll(
      ".form-input, .form-textarea, .form-select"
    );

    formInputs.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) return;

      // Add focus/blur classes for styling
      input.addEventListener("focus", function () {
        this.classList.add("focused");
      });

      input.addEventListener("blur", function () {
        this.classList.remove("focused");
        if (this.value.trim()) {
          this.classList.add("has-value");
        } else {
          this.classList.remove("has-value");
        }
      });

      // Initialize state
      if (input.value.trim()) {
        input.classList.add("has-value");
      }
    });

    // Character count for textarea
    const textarea = document.getElementById("message");
    if (textarea) {
      const maxLength = 2000;
      const counter = document.createElement("div");
      counter.className = "character-counter";
      counter.style.cssText =
        "text-align: right; margin-top: 5px; font-size: 0.875rem; color: var(--color-text-light);";

      textarea.parentNode.appendChild(counter);

      function updateCounter() {
        const remaining = maxLength - textarea.value.length;
        counter.textContent = `${textarea.value.length}/${maxLength} characters`;
        counter.style.color =
          remaining < 100 ? "var(--color-accent)" : "var(--color-text-light)";
      }

      textarea.addEventListener("input", updateCounter);
      updateCounter();
    }
  }

  // ==========================================================================
  // Intersection Observer for Animations
  // ==========================================================================

  function initScrollAnimations() {
    // Only run if user hasn't requested reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
      ".value-item, .service-card, .team-member, .process-step, .stat-item, .industry-item, .portfolio-item"
    );

    animateElements.forEach((el) => {
      el.classList.add("animate-on-scroll");
      observer.observe(el);
    });
  }

  // ==========================================================================
  // Accessibility Enhancements
  // ==========================================================================

  function initAccessibilityFeatures() {
    // Skip to main content link
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.textContent = "Skip to main content";
    skipLink.className = "skip-link";
    skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-accent);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 1000;
            border-radius: 4px;
            transition: top 0.3s;
        `;

    skipLink.addEventListener("focus", function () {
      this.style.top = "6px";
    });

    skipLink.addEventListener("blur", function () {
      this.style.top = "-40px";
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID if not present
    const mainContent = document.querySelector(".main-content");
    if (mainContent && !mainContent.id) {
      mainContent.id = "main-content";
    }

    // Ensure proper focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );

    // Add focus visible class for better keyboard navigation
    focusableElements.forEach((element) => {
      element.addEventListener("focus", function () {
        this.classList.add("focus-visible");
      });

      element.addEventListener("blur", function () {
        this.classList.remove("focus-visible");
      });
    });
  }

  // ==========================================================================
  // Initialize All Features
  // ==========================================================================

  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
      return;
    }

    // Initialize all features
    initMobileNavigation();
    initThemeToggle();
    initScrollToTop();
    initContactForm();
    initFAQAccordion();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initFormEnhancements();
    initScrollAnimations();
    initAccessibilityFeatures();

    // Log successful initialization (remove in production)
    console.log("Website initialized successfully");
  }

  // Start initialization
  init();
})();
