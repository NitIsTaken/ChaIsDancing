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


function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  var originalSrc = img.dataset.original || img.src;
  var modalContent = document.querySelector(".modal-content");

  modal.style.display = "block";
  modalImg.src = originalSrc;
  captionText.innerHTML = img.alt;
  setTimeout(function (){
    modalContent.classList.add("show");
  },10);

}

function closeModal() {
  var modal = document.getElementById("myModal");
  var modalContent = document.querySelector(".modal-content");

  modal.style.display = "none";
  modalContent.classList.remove("show");
}