const launchDate = new Date('2026-09-01T09:00:00-07:00');
const pad = n => String(Math.max(0, n)).padStart(2, '0');
function tick(){
  const boxes = document.querySelectorAll('[data-countdown]');
  if(!boxes.length) return;
  const diff = launchDate - new Date();
  const total = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  document.querySelectorAll('[data-days]').forEach(el=>el.textContent=pad(days));
  document.querySelectorAll('[data-hours]').forEach(el=>el.textContent=pad(hours));
  document.querySelectorAll('[data-minutes]').forEach(el=>el.textContent=pad(minutes));
  document.querySelectorAll('[data-seconds]').forEach(el=>el.textContent=pad(seconds));
}
tick();setInterval(tick,1000);
