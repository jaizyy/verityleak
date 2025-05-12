document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const ageCheck = document.getElementById('age-check').checked;

  if (email && ageCheck) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('gallery-section').classList.remove('hidden');
  } else {
    alert("Veuillez entrer un e-mail valide et confirmer que vous avez plus de 18 ans.");
  }
});

// Supprimer le flou au clic
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('blurred')) {
    e.target.classList.remove('blurred');
  }
});
