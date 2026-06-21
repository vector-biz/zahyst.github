
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    status.textContent = 'Відправляємо повідомлення…';
    status.className = 'form-status visible';
    status.classList.remove('success', 'error');

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Помилка відправки. Спробуйте ще раз.');
      }

      form.reset();
      status.textContent = 'Повідомлення надіслано. Дякуємо!';
      status.classList.add('success');
    } catch (error) {
      status.textContent = error.message || 'Не вдалося надіслати повідомлення.';
      status.classList.add('error');
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
