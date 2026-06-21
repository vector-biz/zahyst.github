
document.addEventListener('DOMContentLoaded', () => {
  // Formspree official code from their docs
  window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
  formspree('initForm', {
    formElement: document.getElementById('contact-form'),
    formId: 'meebjkwg',
    onSuccess: () => {
      const status = document.getElementById('form-status');
      status.textContent = 'Повідомлення надіслано. Дякуємо!';
      status.className = 'form-status visible success';
    }
  });

  // Keep hamburger menu working
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});
