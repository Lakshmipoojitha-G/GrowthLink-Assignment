let i = 0, j = 0, isDeleting = false, currentPhrase = [];
const typedText = document.getElementById("typed-text");

(function typeLoop() {
  typedText.textContent = currentPhrase.join('');

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j++]);
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 60 : 120);
})();
function toggleTheme() {
  document.body.classList.toggle("dark");
}
window.addEventListener('load', () => {
  const ctx = document.getElementById('radarChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'UI/UX'],
      datasets: [{
        label: 'Skill Level',
        data: [90, 85, 88, 80, 70, 95],
        backgroundColor: 'rgba(98, 0, 234, 0.2)',
        borderColor: 'rgba(98, 0, 234, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scale: {
        ticks: {
          beginAtZero: true
        }
      }
    }
  });
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => {
      document.getElementById('form-status').textContent = "✅ Message sent!";
    }, () => {
      document.getElementById('form-status').textContent = "❌ Something went wrong!";
    });
});
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === 'k') {
    alert("🎉 You've found the secret shortcut!");
  }
});
