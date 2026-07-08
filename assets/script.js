const timer = document.querySelector('[data-launch-date]');
if (timer) {
  const launch = new Date(timer.dataset.launchDate).getTime();
  const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = String(value).padStart(2, '0'); };
  function tick(){
    const now = Date.now();
    const distance = Math.max(0, launch - now);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);
    set('days', days); set('hours', hours); set('minutes', minutes); set('seconds', seconds);
  }
  tick(); setInterval(tick, 1000);
}
