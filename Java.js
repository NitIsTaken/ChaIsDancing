var currentIndex = 0;
var images = {};
var currentCategory = "";

function openModal(img, category) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var creditsElement = document.getElementById("credits");
  var originalSrc = img.dataset.original || img.src;
  var creditsText = img.dataset.credit;
  var modalContent = document.querySelector(".modal-content");

  modal.style.display = "block";
  modalImg.src = originalSrc;
  creditsElement.innerHTML = creditsText;

  currentIndex = Array.from(images[category]).indexOf(img);
  currentCategory = category;
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

  var prevArrow = document.querySelector(".arrow.prev");
  var nextArrow = document.querySelector(".arrow.next");

  if (direction === "prev" && currentIndex > 0) {
    currentIndex--;
    nextArrow.style.display = "block";
    if (currentIndex === 0) {
      prevArrow.style.display = "none";
    }
  } else if (direction === "next" && currentIndex < numImages - 1) {
    currentIndex++;
    prevArrow.style.display = "block";
    if (currentIndex === numImages - 1) {
      nextArrow.style.display = "none";
    }
  }

  var img = categoryImages[currentIndex];
  var modalImg = document.getElementById("modalImg");
  var creditsElement = document.getElementById("credits");
  var originalSrc = img.dataset.original || img.src;
  var creditsText = img.dataset.credit;
  var modalContent = document.querySelector(".modal-content");

  modalContent.classList.remove("show");

  setTimeout(function() {
    modalImg.src = originalSrc;
    creditsElement.innerHTML = creditsText;

    setTimeout(function() {
      modalContent.classList.add("show");
    }, 50);
  }, 300);
}

images = {
  // Les images de vos différentes catégories ici
};

// Ajoutez les gestionnaires d'événements pour les images
Object.keys(images).forEach(function (category) {
  images[category].forEach(function (img) {
    img.addEventListener("click", function () {
      openModal(img, category);
    });
  });
});

// Ajoutez les gestionnaires d'événements pour les flèches de navigation
var prevArrow = document.querySelector(".arrow.prev");
var nextArrow = document.querySelector(".arrow.next");

prevArrow.addEventListener("click", function () {
  navigateGallery("prev");
});

nextArrow.addEventListener("click", function () {
  navigateGallery("next");
});

// ...

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

// Ajouter les gestionnaires d'événements pour l'ouverture des catégories
var categoryButtons = document.querySelectorAll(".category-button");
categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var categoryId = button.dataset.category;
    toggleCategory(categoryId);
  });
});

// ...
