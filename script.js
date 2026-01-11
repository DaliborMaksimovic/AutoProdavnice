const cars = [
  { name: "Car 1", model: "Model 1", speed: 200, price: 20000 },
  { name: "Car 2", model: "Model 2", speed: 220, price: 25000 },
  { name: "Car 3", model: "Model 3", speed: 250, price: 30000 },
];

function filterCarsBySpeed(minSpeed) {
  return cars.filter((car) => car.speed >= minSpeed);
}

function formatCarInfo(car) {
  return `${car.name} (${car.model}) - Max: ${car.speed} km/h, Cena: $${car.price}`;
}

document.getElementById("show-cars-btn").addEventListener("click", function () {
  const minSpeed = 210;
  let filtered = filterCarsBySpeed(minSpeed);
  let html = "<ul>";
  for (let i = 0; i < filtered.length; i++) {
    html += `<li>${formatCarInfo(filtered[i])}</li>`;
  }
  html += "</ul>";
  document.getElementById("cars-list").innerHTML = html;
  document.getElementById("cars-list").style.background = "#e0ffe0";
});


const form = document.getElementById("quick-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const ime = document.getElementById("ime").value.trim();
  const auto = document.getElementById("auto").value;
  let poruka = kreirajPoruku(ime, auto);
  document.getElementById("form-result").innerText = poruka;
  document.getElementById("form-result").style.color = "blue";
});

function kreirajPoruku(ime, auto) {
  if (!ime) return "Unesite ime!";

  let imeVeliko = ime.toUpperCase();
  
  let idx = cars.findIndex((c) => c.name === auto);
  return `Hvala, ${imeVeliko}! Rezervisali ste ${auto} (pozicija: ${idx + 1}).`;
}
