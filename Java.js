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

document.getElementById('argentique').onclick=function (){
  toggleCategory('argentique');
}

document.getElementById('danse').onclick=function (){
  toggleCategory('danse');
}

document.getElementById('portrait').onclick=function (){
  toggleCategory('portrait');
}

document.getElementById('ancolie').onclick=function (){
  toggleCategory('ancolie');
}

const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(function(categoryBtn) {
  categoryBtn.addEventListener('click', function() {
    const categoryContent = this.nextElementSibling;
    if (categoryContent.style.maxHeight) {
      categoryContent.style.maxHeight = null;
    } else {
      categoryContent.style.maxHeight = categoryContent.scrollHeight + 'px';
    }
  });
});

const photoArgentique = document.querySelector('.photo-argentique');
photoArgentique.style.display = 'grid';

const photoDanse = document.querySelector('.photo-danse');
photoArgentique.style.display = 'grid';