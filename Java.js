// ajout ou retrait de la class 'category-open' pour ouverture et fermeture dans le portfolio
function toggleCategory(categoryId) {
  var categoryContent = document.getElementById(categoryId + '-content');
  if (categoryContent.classList.contains('category-open')) {
    categoryContent.classList.remove('category-open');
    categoryContent.style.maxHeight = '0px';
  } else {
    categoryContent.classList.add('category-open');
    categoryContent.style.maxHeight = categoryContent.scrollHeight + 'px';
  }
}

//tests pour afficher les images en overlay
function openOverlay(imageSrc, credits) {
  var overlay = document.querySelector('.overlay');
  var overlayImage = document.querySelector('#overlay-image');
  var overlayCredits = document.querySelector('#overlay-credits');

  overlayImage.src = imageSrc;
  overlayCredits.textContent = credits;

  overlay.classList.add('active');
}

function closeOverlay() {
  var overlay = document.querySelector('.overlay');

  overlay.classList.remove('active');
}