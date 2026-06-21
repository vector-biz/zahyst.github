
document.addEventListener('DOMContentLoaded', () => {
  // Formspree Ajax submission (from official docs)
  window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
  formspree('initForm', { 
    formElement: document.getElementById('contact-form'), 
    formId: 'meebjkwg',
    onSuccess: () => {
      const status = document.getElementById('form-status');
      status.textContent = 'Повідомлення надіслано. Дякуємо!';
      status.className = 'form-status visible success';
      status.classList.remove('error');
      document.getElementById('contact-form').reset();
    },
    onError: (error) => {
      const status = document.getElementById('form-status');
      status.textContent = error.message || 'Не вдалося надіслати повідомлення.';
      status.className = 'form-status visible error';
      status.classList.remove('success');
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
