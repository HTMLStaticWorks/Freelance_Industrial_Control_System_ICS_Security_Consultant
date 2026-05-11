document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-target]');
  const sections = document.querySelectorAll('.dashboard-section');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const toggle = document.querySelector('.sidebar-toggle');

  // Sidebar Toggle Logic
  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.add('open');
      overlay.classList.add('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      
      if(targetId === 'logout') {
        window.location.href = 'index.html';
        return;
      }
      
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      // Activate matching tabs
      document.querySelectorAll(`[data-target="${targetId}"]`).forEach(t => t.classList.add('active'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // Close sidebar on mobile after selection
      if (window.innerWidth <= 1023) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      }
    });
  });
});
