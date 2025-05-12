// Page de connexion
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const ageCheck = document.getElementById('age-check');

  if (!email) {
    errorMessage.textContent = 'Veuillez entrer une adresse e-mail valide.';
    errorMessage.style.opacity = 1;
    return;
  }

  if (!ageCheck.checked) {
    errorMessage.textContent = 'Vous devez avoir plus de 18 ans pour accéder au site.';
    errorMessage.style.opacity = 1;
    return;
  }

  errorMessage.style.opacity = 0;
  window.location.href = 'welcome.html'; // Redirection vers la page de bienvenue
});

// Onglets galerie
function openTab(tabName) {
  const tabContentSections = document.querySelectorAll('.tab-content-section');
  tabContentSections.forEach(section => section.style.display = 'none');
  
  const activeTab = document.getElementById(tabName);
  activeTab.style.display = 'block';
}

// Par défaut, afficher la section des photos
openTab('photos');
