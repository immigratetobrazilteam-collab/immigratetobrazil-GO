/** GO JS - Goiânia - Golden-warm with earthy tones */
const STATE_CONFIG = {
  stateCode: 'go',
  capital: 'Goiânia',
  formspreeUrl: 'https://formspree.io/f/xgoqbddb',
  colors: { primary: '#d4af37', secondary: '#b8860b', accent: '#ffd700' },
  animations: {"enabled": true, "header": {"type": "cerradoFade", "duration": "0.7s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "savannahReveal", "duration": "1s", "easing": "ease-in-out", "stagger": "0.15s"}, "hero": {"type": "plainsParallax", "speed": 0.4, "direction": "horizontal"}, "cards": {"type": "grassSway", "amplitude": 5, "wind": "gentle"}, "images": {"type": "horizonReveal", "direction": "up", "duration": "1.1s"}},
  interactions: {"hover": "grass-wave", "scroll": "wind-flow", "transitions": "natural-sway", "click": "seed-burst"},
  premiumEffects: ["cerrado-gradient", "grass-motion", "horizon-glow", "wind-particles"]
};

const SECTIONS = ["go-index-section--map", "go-index-section-frequently-asked-questions-about-living-in-", "go-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
