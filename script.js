
// Sidebar Toggle
document.getElementById('nav-toggle')?.addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('-translate-x-full');
});
document.getElementById('close-nav')?.addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('-translate-x-full');
});

// Tab Navigation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    const tab = this.getAttribute('href').replace('#', '') + '-tab';
    document.querySelectorAll('.tab-content').forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
  });
});

// Modal Toggling
const toggleModal = (triggerId, modalId, closeId) => {
  const trigger = document.getElementById(triggerId);
  const modal = document.getElementById(modalId);
  const close = document.getElementById(closeId);
  if (trigger && modal && close) {
    trigger.addEventListener('click', () => modal.classList.remove('hidden'));
    close.addEventListener('click', () => modal.classList.add('hidden'));
  }
};

toggleModal('upcoming-lecture', 'lecture-details-modal', 'close-lecture-details');
toggleModal('due-tomorrow-btn', 'homework-details-modal', 'close-homework-details');
toggleModal('performance-rank', 'performance-modal', 'close-performance-modal');

// Toast Notification Example
const showToast = (message, duration = 3000) => {
  const container = document.createElement('div');
  container.className = 'toast-container';
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.innerHTML = message;
  container.appendChild(toast);
  document.body.appendChild(container);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => container.remove(), 300);
  }, duration);
};

// Example Usage:
// showToast('Welcome to EduExcel Academy!');
