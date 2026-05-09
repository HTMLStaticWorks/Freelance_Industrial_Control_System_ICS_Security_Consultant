document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-target]');
  const sections = document.querySelectorAll('.dashboard-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      
      if(targetId === 'logout') {
        window.location.href = 'index.html';
        return;
      }
      
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      // Activate matching tabs (sidebar and bottom bar)
      document.querySelectorAll(`[data-target="${targetId}"]`).forEach(t => t.classList.add('active'));
      document.getElementById(targetId).classList.add('active');
    });
  });
});
