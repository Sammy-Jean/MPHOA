// ========================================
// MONTEREY PARK HOA - MAIN JAVASCRIPT
// ========================================


// ========================================
// NAVIGATION
// ========================================

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = navToggle?.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active navigation link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ========================================
// EMAIL CAPTURE FORM
// ========================================

const emailForm = document.getElementById('emailForm');
if (emailForm) {
  emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const submitBtn = emailForm.querySelector('button[type="submit"]');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    // Simple validation
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Disable button during submission
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    // Simulate form submission (replace with actual backend integration)
    await simulateFormSubmission({ name, email });
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    emailForm.reset();
    
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simulate form submission (replace with actual API call)
async function simulateFormSubmission(data) {
  // Store in localStorage for now (replace with actual backend)
  const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
  subscribers.push({
    ...data,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('subscribers', JSON.stringify(subscribers));
  
  // Simulate network delay
  return new Promise(resolve => setTimeout(resolve, 1000));
}

// Show success message
function showSuccessMessage() {
  let successDiv = document.querySelector('.success-message');
  
  if (!successDiv) {
    successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! We\'ll keep you updated on community news and events.';
    emailForm.appendChild(successDiv);
  }
  
  successDiv.classList.add('show');
  
  setTimeout(() => {
    successDiv.classList.remove('show');
  }, 5000);
}

// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value
    };
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission
    await simulateContactSubmission(formData);
    
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
    
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  });
}

async function simulateContactSubmission(data) {
  // Store in localStorage (replace with actual backend)
  const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  messages.push({
    ...data,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('contactMessages', JSON.stringify(messages));
  
  return new Promise(resolve => setTimeout(resolve, 1000));
}

// ========================================
// FAQ ACCORDION
// ========================================

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains('active');
    
    // Close all other FAQs
    faqQuestions.forEach(q => {
      q.classList.remove('active');
      q.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
      question.classList.add('active');
      answer.classList.add('active');
    }
  });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ========================================
// CURRENT YEAR IN FOOTER
// ========================================

const yearElement = document.getElementById('currentYear');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.pillar-card, .card').forEach(el => {
  observer.observe(el);
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Log page view (for analytics - replace with actual analytics)
function logPageView() {
  const pageViews = JSON.parse(localStorage.getItem('pageViews') || '{}');
  const page = window.location.pathname;
  pageViews[page] = (pageViews[page] || 0) + 1;
  localStorage.setItem('pageViews', JSON.stringify(pageViews));
}

logPageView();

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c Monterey Park HOA Website ', 'background: #1e3a8a; color: white; font-size: 16px; padding: 10px;');
console.log('%c Built with ❤️ for our community ', 'color: #3b82f6; font-size: 12px;');
