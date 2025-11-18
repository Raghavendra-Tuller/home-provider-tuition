// Smooth scroll reveal + form validation
document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal: add .active when elements enter viewport
  const reveals = () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) el.classList.add('active');
    });
  };
  window.addEventListener('scroll', reveals);
  window.addEventListener('resize', reveals);
  window.addEventListener('load', reveals);
  reveals();

  // Simple nav active highlight (based on pathname)
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.href === window.location.href || window.location.href.indexOf(a.getAttribute('href')) !== -1) {
      a.classList.add('active');
    }
  });

  // Form validation (UI-only)
  const form = document.getElementById('enquiryForm');
  const result = document.getElementById('formResult');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      result.textContent = '';
      const name = form.querySelector('#name').value.trim();
      const phone = form.querySelector('#phone').value.trim();
      const cls = form.querySelector('#class').value;
      const subject = form.querySelector('#subject').value.trim();

      if (!name || !phone || !cls || !subject) {
        result.style.color = 'crimson';
        result.textContent = 'Please fill all required fields.';
        return;
      }
      const digits = phone.replace(/\D/g, '');
      if (digits.length < 10) {
        result.style.color = 'crimson';
        result.textContent = 'Enter a valid 10-digit phone number.';
        return;
      }
      // UI-only success message
      result.style.color = 'green';
      result.textContent = `Thanks ${name}! Your enquiry is recorded (UI-only). We'll contact ${phone}.`;
      form.reset();
      setTimeout(() => result.textContent = '', 5000);
    });
  }
});
// Header shrink on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 60) header.classList.add("shrink");
  else header.classList.remove("shrink");
});
