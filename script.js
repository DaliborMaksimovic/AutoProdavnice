document.addEventListener('DOMContentLoaded', () => {
  const cars = ['Car 1', 'Car 2', 'Car 3'];
  const btn = document.getElementById('show-cars-btn');
  const carsListDiv = document.getElementById('cars-list');

  if (btn) {
    btn.addEventListener('click', () => {
      if (carsListDiv.innerHTML.trim() !== '') return;

      const ul = document.createElement('ul');
      cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = car;
        ul.appendChild(li);
      });

      carsListDiv.appendChild(ul);
   
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form'); 

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 

      

      alert('Vaše vozilo je uspješno rezervisano!');
      form.reset(); 
    });
  }
});
