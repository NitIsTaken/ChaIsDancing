function toggleCategory(categoryId) {
  var categoryContent = document.getElementById(categoryId + '-content');
  if (categoryContent.style.display === 'none') {
    categoryContent.style.display = 'grid';
  } else {
    categoryContent.style.display = 'none' ;
  }
}

document.getElementById('argentique').onclick = function (){
  toggleCategory ('argentique');
}