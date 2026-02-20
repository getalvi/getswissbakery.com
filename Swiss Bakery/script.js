
  // Loader
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 1400);
  });

  // Mobile nav
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // Close nav on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Menu tabs
  function switchTab(id, btn) {
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Newsletter
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Subscribed! ✓';
    btn.style.background = 'var(--sage)';
    e.target.querySelector('input').value = '';
    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.style.background = '';
    }, 3000);
  }

  // Sticky nav shadow
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 30px rgba(59,35,20,0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
