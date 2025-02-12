// Preloader (with 10s delay)
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 5000); 
});

// Navigation
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      navLinks.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    }
  });
});

// Video Modal
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const closeModal = document.querySelector('.close-modal');
const videoThumbnails = document.querySelectorAll('.video-thumbnail');

videoThumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const videoUrl = thumbnail.dataset.video;
    modalVideo.src = videoUrl;
    modal.style.display = 'block';
    modalVideo.play();
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
});

// Form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', data);
  
  // Show success message
  alert('Message sent successfully! I will get back to you soon.');
  contactForm.reset();
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Navbar scroll behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
    navbar.classList.remove('scroll-up');
    navbar.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
    navbar.classList.remove('scroll-down');
    navbar.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Intersection Observer for Education Section Animation
const educationCards = document.querySelectorAll(".education-card");

const eduObserverOptions = {
  root: null,
  threshold: 0.1
};

const eduObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, eduObserverOptions);

educationCards.forEach(card => eduObserver.observe(card));


document.addEventListener("DOMContentLoaded", () => {
  const certificationBoxes = document.querySelectorAll(".certification-box");

  const observerOptions = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 400); // Delay each box by 400ms
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  certificationBoxes.forEach((box) => observer.observe(box));
});
document.addEventListener("DOMContentLoaded", () => {
  const backgroundBoxes = document.querySelectorAll(".background-box");

  const observerOptions = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 300); // Staggered effect
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  backgroundBoxes.forEach((box) => observer.observe(box));
});
