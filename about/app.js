// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').split(".")[0]; // Remove file extension
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
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
  
  // Trigger animation on scroll
  window.addEventListener('scroll', animateTitles);
  
  // Team Member Card Hover Effect (Extra Animation)
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
  
  // Scroll Animation for About Boxes
  const aboutBoxes = document.querySelectorAll('.about-box');
  
  const revealBoxes = () => {
    aboutBoxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        box.classList.add('box-reveal');
      }
    });
  };
  
  // Trigger box animations on scroll
  window.addEventListener('scroll', revealBoxes);
  
  // Initial check for animations
  document.addEventListener('DOMContentLoaded', () => {
    animateTitles();
    revealBoxes();
  });
  