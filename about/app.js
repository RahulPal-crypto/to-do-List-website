// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    // Prevent default link navigation
    if (this.href.includes('#')) {
      e.preventDefault();
      const targetId = this.href.split('#')[1]; // Get the target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});

// Animate Section Titles on Scroll
const sectionTitles = document.querySelectorAll('.section-title');

const animateTitles = () => {
  sectionTitles.forEach(title => {
    const rect = title.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      title.classList.add('title-animate');
    }
  });
};

// Team Member Card Hover Effect
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.addEventListener('mouseenter', () => {
    member.style.transform = 'scale(1.1)';
    member.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    member.style.boxShadow = '0 10px 20px rgba(255, 221, 0, 0.7)';
  });

  member.addEventListener('mouseleave', () => {
    member.style.transform = 'scale(1)';
    member.style.boxShadow = '0 5px 10px rgba(255, 221, 0, 0.5)';
  });
});

// Reveal About Boxes
const aboutBoxes = document.querySelectorAll('.about-box');

const revealBoxes = () => {
  aboutBoxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add('box-reveal');
    }
  });
};

// Trigger animations on scroll
window.addEventListener('scroll', () => {
  animateTitles();
  revealBoxes();
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
  animateTitles();
  revealBoxes();
});
