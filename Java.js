// function toggleCategory(categoryId) {
//   var categoryContent = document.getElementById(categoryId + '-content');
//   if (categoryContent.classList.contains('category-open')) {
//     categoryContent.classList.remove('category-open');
//     categoryContent.style.maxHeight = '0px';
//     categoryContent.parentElement.querySelector('.category--hover').style.display = 'block';
//   } else {
//     categoryContent.classList.add('category-open');
//     categoryContent.style.maxHeight = categoryContent.scrollHeight + 'px';
//     categoryContent.parentElement.querySelector('.category--hover').style.display = 'none';
//   }
// }

// const categoryBtns = document.querySelectorAll('.category-btn');

// categoryBtns.forEach(function(categoryBtn) {

//   const categoryHover = categoryBtn.querySelector('.category--hover');
//   categoryBtn.addEventListener('mouseenter', function() {
//     if (!categoryBtn.classList.contains('category-open')) {
//       categoryHover.style.backgroundImage = "url('D:/Projet/cha/images/portfolio/argentique/©YANIS OURABAH DANCE IN LYON_2370.jpg')";
//     }
//   });
//   categoryBtn.addEventListener('mouseleave', function() {
//     categoryHover.style.backgroundImage = "none";
//   });


//   categoryBtn.addEventListener('click', function() {
//     const categoryContent = this.nextElementSibling;
//     if (categoryContent.style.maxHeight) {
//       categoryContent.style.maxHeight = null;
//     } else {
//       categoryContent.style.maxHeight = categoryContent.scrollHeight + 'px';
//     }
//   });
// });

// const categoryTitles = document.querySelectorAll('.titre-second');
// categoryTitles.forEach(function(categoryTitle) {
//   const CategoryHover = categoryTitle.previousElementSibling;
//   const categoryContent = categoryTitle.nextElementSibling;
//   const categoryBackground = categoryTitle.parentElement.style.backgroundImage;

//   categoryTitle.addEventListener('mouseenter', function() {
//     CategoryHover.style.backgroundImage = categoryBackground;
//   });

//   categoryTitle.addEventListener('mouseleave', function() {
//     if (!categoryContent.classList.contains('category-open')) {
//       CategoryHover.style.backgroundImage = 'none';
//     }
//   });
// });

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

const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(function(categoryBtn) {
  const categoryHover = categoryBtn.querySelector('.category--hover');
  const categoryImage = categoryHover.getAttribute('data-background-image-url');
  categoryHover.style.backgroundImage = "url('" + categoryImage + "')";
  categoryHover.style.backgroundSize = "cover";
  categoryHover.style.backgroundPosition = "center";

  categoryBtn.addEventListener('click', function() {
    const categoryContent = this.nextElementSibling;
    if (categoryContent.style.maxHeight) {
      categoryContent.style.maxHeight = null;
      this.classList.remove('category-open');
    } else {
      categoryContent.style.maxHeight = categoryContent.scrollHeight + 'px';
      this.classList.add('category-open');
    }
  });
});

const categoryTitles = document.querySelectorAll('.titre-second');
categoryTitles.forEach(function(categoryTitle) {
  const categoryHover = categoryTitle.previousElementSibling;
  const categoryImage = categoryHover.getAttribute('data-background-image-url');

  if (categoryImage) {
    categoryHover.addEventListener('mouseenter', function() {
      categoryTitle.classList.add('category--image-hide');
    });

    categoryHover.addEventListener('mouseleave', function() {
      categoryTitle.classList.remove('category--image-hide');
    });

    categoryHover.style.backgroundImage = "none";
    const categoryImg = new Image();
    categoryImg.onload = function() {
      categoryHover.style.backgroundImage = "url('" + categoryImage + "')";
      categoryHover.style.backgroundSize = "cover";
      categoryHover.style.backgroundPosition = "center";
      categoryTitle.classList.remove('category--image-hide');
    };
    categoryImg.src = categoryImage;
  }
});



