
document.addEventListener('DOMContentLoaded', () => {
  // Handle form submission - NO REDIRECT!
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (form && statusDiv) {
    form.addEventListener('submit', async function(e) {
      // THIS MUST BE FIRST - STOPS REDIRECT COMPLETELY!
      e.preventDefault();
      e.stopPropagation();

      statusDiv.textContent = 'Відправка…';
      statusDiv.className = 'form-status visible';

      try {
        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/meebjkwg', {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          statusDiv.textContent = 'Дякую! Повідомлення надіслано!';
          statusDiv.className = 'form-status visible success';
          form.reset();
        } else {
          throw new Error('Помилка відправки');
        }
      } catch (err) {
        statusDiv.textContent = 'Щось пішло не так. Спробуйте ще раз.';
        statusDiv.className = 'form-status visible error';
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
