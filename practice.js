let slides = document.querySelectorAll(".mySlides");
let arrSlides = Array.from(slides);
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let slideIndex = 0;

function rightSlide(event) {
  for (let i = 0; i < arrSlides.length; i++) {
    arrSlides[i].style.display = "none";
  }

  if (slideIndex + 1 < arrSlides.length) {
    slideIndex++;
    arrSlides[slideIndex].style.display = "block";
  } else {
    slideIndex = 0;
    arrSlides[slideIndex].style.display = "block";
  }
}

function leftSlide(event) {
  for (let i = 0; i < arrSlides.length; i++) {
    arrSlides[i].style.display = "none";
  }

  if (slideIndex > 0) {
    slideIndex--;
    arrSlides[slideIndex].style.display = "block";
  } else {
    slideIndex = arrSlides.length - 1;
    arrSlides[slideIndex].style.display = "block";
  }
}
arrSlides[slideIndex].style.display = "block";
nextBtn.addEventListener("click", rightSlide);
prevBtn.addEventListener("click", leftSlide);
