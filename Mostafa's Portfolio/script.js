// ══════════════════════════════════════════════
// PARTICLE CANVAS
// ══════════════════════════════════════════════
const canvas = document.getElementById('particles');
const ctx    = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); initParticles(); });

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x     = Math.random() * canvas.width;
    this.y     = Math.random() * canvas.height;
    this.vx    = (Math.random() - 0.5) * 0.3;
    this.vy    = (Math.random() - 0.5) * 0.3;
    this.r     = Math.random() * 1.4 + 0.3;
    this.alpha = Math.random() * 0.45 + 0.08;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,229,255,${this.alpha})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = Array.from({ length: 75 }, () => new Particle());
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = particles[i].x - particles[j].x;
      const dy   = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,229,255,${0.055 * (1 - dist / 120)})`;
        ctx.lineWidth   = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
initParticles();
animateParticles();

// ══════════════════════════════════════════════
// NAVBAR
// ══════════════════════════════════════════════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav link
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) current = s.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
});

// ══════════════════════════════════════════════
// TYPEWRITER
// ══════════════════════════════════════════════
const words = [
  'modern web experiences.',
  'responsive layouts.',
  'smart applications.',
  'impactful products.',
  'computer vision apps.',
];
let wIndex = 0, cIndex = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function typeWriter() {
  const word    = words[wIndex];
  const current = deleting ? word.substring(0, cIndex--) : word.substring(0, cIndex++);
  typeEl.textContent = current;
  let speed = deleting ? 45 : 80;
  if (!deleting && cIndex > word.length)  { speed = 1800; deleting = true; }
  else if (deleting && cIndex < 0)        { deleting = false; wIndex = (wIndex + 1) % words.length; speed = 350; }
  setTimeout(typeWriter, speed);
}
typeWriter();

// ══════════════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════════════
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const parent = entry.target.closest(
        '.about-grid,.skills-categories,.projects-grid,.contact-grid,.gallery-grid,.gallery-tabs,.about-stats'
      );
      const delay = parent
        ? Array.from(parent.querySelectorAll('.reveal')).indexOf(entry.target) * 80
        : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => revealObs.observe(el));

// ══════════════════════════════════════════════
// SKILL BARS
// ══════════════════════════════════════════════
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        setTimeout(() => { fill.style.width = fill.dataset.width; }, 250);
      });
      skillObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-category').forEach(c => skillObs.observe(c));

// ══════════════════════════════════════════════
// GALLERY TABS
// ══════════════════════════════════════════════
document.querySelectorAll('.gtab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.querySelectorAll('.gallery-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`tab-${target}`).classList.add('active');
    document.querySelectorAll(`#tab-${target} .reveal`).forEach(el => {
      if (!el.classList.contains('visible')) {
        setTimeout(() => el.classList.add('visible'), 50);
      }
    });
  });
});

// ══════════════════════════════════════════════
// LIGHTBOX
// ══════════════════════════════════════════════
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
let currentGalleryItems = [];
let currentLbIndex = 0;

function openLightbox(items, index) {
  currentGalleryItems = items;
  currentLbIndex      = index;
  lbImg.src           = items[index].dataset.src;
  lbCaption.textContent = items[index].dataset.caption || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function lbNavigate(dir) {
  currentLbIndex = (currentLbIndex + dir + currentGalleryItems.length) % currentGalleryItems.length;
  lbImg.style.opacity = '0';
  setTimeout(() => {
    lbImg.src = currentGalleryItems[currentLbIndex].dataset.src;
    lbCaption.textContent = currentGalleryItems[currentLbIndex].dataset.caption || '';
    lbImg.style.opacity = '1';
  }, 150);
}

document.querySelectorAll('.gallery-panel').forEach(panel => {
  panel.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const items = Array.from(panel.querySelectorAll('.gallery-item'));
    const index = items.indexOf(item);
    openLightbox(items, index);
  });
});

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => lbNavigate(-1));
document.getElementById('lbNext').addEventListener('click', () => lbNavigate(1));

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lbNavigate(-1);
  if (e.key === 'ArrowRight')  lbNavigate(1);
});

let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) lbNavigate(diff > 0 ? 1 : -1);
});

// ══════════════════════════════════════════════
// CLICKABLE PROJECT CARDS
// ══════════════════════════════════════════════
document.querySelectorAll('.project-card[data-github]').forEach(card => {
  card.addEventListener('click', () => {
    window.open(card.dataset.github, '_blank');
  });
});

// ══════════════════════════════════════════════
// EMAILJS — sends form to mostafasiyam29@gmail.com
// ══════════════════════════════════════════════
(function () {
  emailjs.init('vKCnRCrP58H16LWJr');
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');

  success.classList.remove('show');
  error.classList.remove('show');

  btn.textContent = '⏳ Sending...';
  btn.disabled    = true;

  const formData = {
    from_name:  document.getElementById('cname').value,
    from_email: document.getElementById('cemail').value,
    message:    document.getElementById('cmessage').value,
  };

  // Email 1 → notify Mostafa (primary — controls success/error shown to user)
  emailjs.sendForm('service_dzdzu7q', 'template_ojtssf7', this)
    .then(() => {
      // Email 2 → auto-reply to sender (silent — won't affect success message)
      emailjs.send('service_dzdzu7q', 'template_autoreply', {
        to_name:    formData.from_name,
        to_email:   formData.from_email,
        from_name:  'Mostafa Main Uddin',
        message:    formData.message,
      }).catch(() => { /* auto-reply failed silently — main email already sent */ });

      btn.textContent = 'Send Message ✉️';
      btn.disabled    = false;
      this.reset();
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 6000);
    })
    .catch(() => {
      btn.textContent = 'Send Message ✉️';
      btn.disabled    = false;
      error.classList.add('show');
      setTimeout(() => error.classList.remove('show'), 5000);
    });
});

// ══════════════════════════════════════════════
// SMOOTH SCROLL
// ══════════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});