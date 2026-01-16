document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quick-form');
  const formResult = document.getElementById('form-result');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const ime = form.elements['ime'].value.trim();
      const auto = form.elements['auto'].value;

      if (!ime) {
        formResult.textContent = "Molimo unesite vaše ime.";
        formResult.style.color = "red";
        return;
      }

      formResult.textContent = `Vaš auto (${auto}) je uspešno rezervisan, ${ime}!`;
      formResult.style.color = "green";

      form.reset();
    });
  }
});
