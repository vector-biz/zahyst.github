
document.addEventListener('DOMContentLoaded', () => {
  // Simple form submission with NO redirect
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // THIS STOPS THE REDIRECT!

      status.textContent = 'Відправляємо повідомлення…';
      status.className = 'form-status visible';
      status.classList.remove('success', 'error');

      try {
        const response = await fetch('https://formspree.io/f/meebjkwg', {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          form.reset();
          status.textContent = 'Повідомлення надіслано. Дякуємо!';
          status.className = 'form-status visible success';
        } else {
          const data = await response.json().catch(() => null);
          throw new Error(data?.error || 'Помилка відправки. Спробуйте ще раз.');
        }
      } catch (error) {
        status.textContent = error.message || 'Не вдалося надіслати повідомлення.';
        status.className = 'form-status visible error';
      }
    });
  }

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
