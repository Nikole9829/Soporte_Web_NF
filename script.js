document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.textContent = 'Mensaje enviado';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 2200);
    });
  }
});
