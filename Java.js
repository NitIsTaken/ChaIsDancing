var currentIndex = 0;
var images = {};
var currentCategory = ""; // Ajoutez cette variable pour stocker la catégorie actuelle

function openModal(img, category) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var creditsElement = document.getElementById("credits"); // Ajoutez l'élément pour les crédits
  var originalSrc = img.dataset.original || img.src;
  var creditsText = img.dataset.credit; // Récupérez les crédits de la photo
  var modalContent = document.querySelector(".modal-content");

  modal.style.display = "block";
  modalImg.src = originalSrc;
  creditsElement.innerHTML = creditsText; // Attribuez les crédits à l'élément approprié

  currentIndex = Array.from(images[category]).indexOf(img);
  currentCategory = category; // Mettez à jour la catégorie actuelle
  setTimeout(function() {
    modalContent.classList.add("show");
  }, 10);
  
}

function closeModal() {
  var modal = document.getElementById("myModal");
  var modalContent = document.querySelector(".modal-content");
  modal.style.display = "none";
  modalContent.classList.remove("show");
}

function navigateGallery(direction) {
  var categoryImages = images[currentCategory];
  var numImages = categoryImages.length;

  if (direction === "prev" && currentIndex > 0) {
    currentIndex--;
  } else if (direction === "next" && currentIndex < numImages - 1) {
    currentIndex++;
  }

  var img = categoryImages[currentIndex];
  var modalImg = document.getElementById("modalImg");
  var creditsElement = document.getElementById("credits"); // Ajoutez l'élément pour les crédits
  var modalContent = document.querySelector(".modal-content");

  // Désactiver la flèche précédente si c'est la première photo de la catégorie
  var prevArrow = document.querySelector(".arrow.prev");
  prevArrow.style.display = (currentIndex === 0) ? "none" : "block";

  // Désactiver la flèche suivante si c'est la dernière photo de la catégorie
  var nextArrow = document.querySelector(".arrow.next");
  nextArrow.style.display = (currentIndex === numImages - 1) ? "none" : "block";

  modalContent.classList.remove("show");

  setTimeout(function() {
    var originalSrc = img.dataset.original || img.src;
    var creditsText = img.dataset.credit; // Récupérez les crédits de la photo

    modalImg.src = originalSrc;
    creditsElement.innerHTML = creditsText; // Attribuez les crédits à l'élément approprié

    setTimeout(function() {
      modalContent.classList.add("show");
    }, 50);
  }, 300);
}

// Ajouter les gestionnaires d'événements pour les flèches de navigation
var prevArrow = document.querySelector(".arrow.prev");
var nextArrow = document.querySelector(".arrow.next");

prevArrow.addEventListener("click", function () {
  navigateGallery("prev");
});

nextArrow.addEventListener("click", function () {
  navigateGallery("next");
});


function toggleCategory(categoryId) {
  var categoryContent = document.getElementById(categoryId + "-content");
  if (categoryContent.classList.contains("category-open")) {
    categoryContent.classList.remove("category-open");
    categoryContent.style.maxHeight = "0px";
  } else {
    categoryContent.classList.add("category-open");
    categoryContent.style.maxHeight = categoryContent.scrollHeight + "px";
  }
}

// Récupérer toutes les images du portfolio pour chaque catégorie
images["argentique"] = Array.from(document.querySelectorAll(".grid-argentique img"));
images["danse"] = Array.from(document.querySelectorAll(".grid-danse img"));
images ["portraits"] = Array.from(document.querySelectorAll(".grid-portrait img"));
images["ancolie"] = Array.from(document.querySelectorAll(".grid-ancolie img"))
// Ajoutez d'autres catégories si nécessaire

// Ajouter les gestionnaires d'événements pour les images de chaque catégorie
Object.keys(images).forEach(function (category) {
  var categoryImages = images[category];
  
  categoryImages.forEach(function (img) {
    img.addEventListener("click", function () {
      openModal(img, category);
    });
  });
});

// Ajouter les gestionnaires d'événements pour les flèches de navigation
var prevArrow = document.querySelector(".arrow.prev");
var nextArrow = document.querySelector(".arrow.next");

prevArrow.addEventListener("click", function () {
  navigateGallery("prev");
});

nextArrow.addEventListener("click", function () {
  navigateGallery("next");
});
