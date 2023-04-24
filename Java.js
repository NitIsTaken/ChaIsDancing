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

document.getElementById('danse').onclick = function (){
  toggleCategory ('danse');
}

document.getElementById('portrait').onclick = function (){
  toggleCategory ('portrait');
}

document.getElementById('ancolie').onclick = function (){
  toggleCategory ('ancolie');
}