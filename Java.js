// var currentIndex = 0;
// var images = [];

// function openModal(img) {
//   var modal = document.getElementById("myModal");
//   var modalImg = document.getElementById("modalImg");
//   var captionText = document.getElementById("caption");
//   var originalSrc = img.dataset.original || img.src;
//   var modalContent = document.querySelector(".modal-content");

//   modal.style.display = "block";
//   modalImg.src = originalSrc;
//   modalContent.classList.add("show");
//   captionText.innerHTML = img.alt;

//   currentIndex = Array.from(images[category]).indexOf(img);
// }

// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// function navigateGallery(direction) {
//   if (direction === "prev" && currentIndex > 0) {
//     currentIndex--;
//   } else if (direction === "next" && currentIndex < images.length - 1) {
//     currentIndex++;
//   }

//   var modalImg = document.getElementById("modalImg");
//   var captionText = document.getElementById("caption");

//   var img = images[currentIndex];
//   var originalSrc = img.dataset.original || img.src;

//   modalImg.src = originalSrc;
//   captionText.innerHTML = img.alt;
// }

// function handleModalClick(event) {
//   var target = event.target;
//   if (target.classList.contains("modal-content")) {
//     navigateGallery("next");
//   }
// }

// function toggleCategory(categoryId) {
//   var categoryContent = document.getElementById(categoryId + "-content");
//   if (categoryContent.classList.contains("category-open")) {
//     categoryContent.classList.remove("category-open");
//     categoryContent.style.maxHeight = "0px";
//   } else {
//     categoryContent.classList.add("category-open");
//     categoryContent.style.maxHeight = categoryContent.scrollHeight + "px";
//   }
// }

// // Récupérer toutes les images du portfolio
// images = document.querySelectorAll(".grid-argentique img");

// // Ajouter les gestionnaires d'événements pour les images
// images.forEach(function (img) {
//   img.addEventListener("click", function () {
//     openModal(img);
//   });
// });

// // Ajouter les gestionnaires d'événements pour les flèches de navigation
// var prevArrow = document.querySelector(".arrow.prev");
// var nextArrow = document.querySelector(".arrow.next");

// prevArrow.addEventListener("click", function () {
//   navigateGallery("prev");
// });

// nextArrow.addEventListener("click", function () {
//   navigateGallery("next");
// });
var currentIndex = 0;
var images = {};
var currentCategory = ""; // Ajoutez cette variable pour stocker la catégorie actuelle

function openModal(img, category) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  var originalSrc = img.dataset.original || img.src;
  var modalContent = document.querySelector(".modal-content");

  modal.style.display = "block";
  modalImg.src = originalSrc;
  captionText.innerHTML = img.alt;

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

// function navigateGallery(direction) {
//   var categoryImages = images[currentCategory];
//   var numImages = categoryImages.length;

//   if (direction === "prev" && currentIndex > 0) {
//     currentIndex--;
//   } else if (direction === "next" && currentIndex < numImages - 1) {
//     currentIndex++;
//   }

//   var img = categoryImages[currentIndex];
//   var modalImg = document.getElementById("modalImg");
//   var captionText = document.getElementById("caption");
//   var originalSrc = img.dataset.original || img.src;

//   modalImg.src = originalSrc;
//   captionText.innerHTML = img.alt;
// }

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
  var captionText = document.getElementById("caption");
  var modalContent = document.querySelector(".modal-content");

  modalContent.classList.remove("show");

  setTimeout(function() {
    var originalSrc = img.dataset.original || img.src;

    modalImg.src = originalSrc;
    captionText.innerHTML = img.alt;

    setTimeout(function() {
      modalContent.classList.add("show");
    }, 50);
  }, 300);
}


function handleModalClick(event) {
  var target = event.target;
  if (target.classList.contains("modal-content")) {
    navigateGallery("next");
  }
}

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
