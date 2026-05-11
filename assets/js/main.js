document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const body = document.documentElement;
  
  const currentTheme = localStorage.getItem('threatforge-theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'light');
    
  if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
  }

  const updateIcons = () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    themeToggles.forEach(toggle => {
      toggle.innerHTML = isDark ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>';
    });
  };
  
  updateIcons();

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isDark = body.getAttribute('data-theme') === 'dark';
      if (isDark) {
        body.removeAttribute('data-theme');
        localStorage.setItem('threatforge-theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('threatforge-theme', 'dark');
      }
      updateIcons();
    });
  });

  // RTL Toggle
  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  const html = document.documentElement;
  
  rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isRtl = html.getAttribute('dir') === 'rtl';
      html.setAttribute('dir', isRtl ? 'ltr' : 'rtl');
    });
  });

  // Drawer
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.drawer');
  const drawerClose = document.querySelector('.drawer-close');
  const overlay = document.querySelector('.drawer-overlay');

  if (hamburger && drawer && drawerClose && overlay) {
    hamburger.addEventListener('click', () => {
      drawer.classList.add('open');
      overlay.classList.add('active');
    });
    
    drawerClose.addEventListener('click', () => {
      drawer.classList.remove('open');
      overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', () => {
      drawer.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  // Typewriter effect
  const typeTarget = document.querySelector('.typewriter-target');
  if (typeTarget) {
    const words = ['SCADA', 'PLC', 'DCS', 'HMI'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typeTarget.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typeTarget.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    setTimeout(type, 1000);
  }

  // Form Validation
  const forms = document.querySelectorAll('form.validate-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim() || (input.type === 'checkbox' && !input.checked)) {
          isValid = false;
          input.classList.add('error');
        } else if (input.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('error');
          } else {
            input.classList.remove('error');
          }
        } else {
          input.classList.remove('error');
        }
      });
      
      if (form.id === 'registerForm') {
        const pass = form.querySelector('#password').value;
        const confirm = form.querySelector('#confirmPassword').value;
        if (pass !== confirm) {
          isValid = false;
          form.querySelector('#confirmPassword').classList.add('error');
        }
      }

      if (isValid) {
        if(form.id === 'contactForm') {
            form.innerHTML = '<div style="color: var(--color-accent); text-align: center; padding: 40px;">Message securely transmitted. We will respond within 24-48 hours.</div>';
        } else if (form.id === 'loginForm') {
            window.location.href = 'dashboard.html';
        } else if (form.id === 'registerForm') {
            window.location.href = 'dashboard.html';
        }
      }
    });
    
    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
      });
    });
  });

  // Password Visibility Toggle
  const passwordToggles = document.querySelectorAll('.password-toggle');
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const input = toggle.parentElement.querySelector('input');
      const icon = toggle.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('ph-eye', 'ph-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.replace('ph-eye-slash', 'ph-eye');
      }
    });
  });
});
