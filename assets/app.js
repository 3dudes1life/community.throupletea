const launchDate = new Date("2026-09-01T20:00:00-07:00").getTime();

function updateCountdown(){
  const now = Date.now();
  const distance = Math.max(0, launchDate - now);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  const values = { days, hours, minutes, seconds };
  Object.entries(values).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const form = document.querySelector("[data-application-form]");
if(form){
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "thank-you.html";
  });
}
