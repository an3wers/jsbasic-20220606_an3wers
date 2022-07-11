function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const inner = carousel.querySelector(".carousel__inner");
  const slides = carousel.querySelectorAll(".carousel__slide");
  const btnLeft = carousel.querySelector(".carousel__arrow_left");
  const btnRight = carousel.querySelector(".carousel__arrow_right");

  // console.log(carousel.offsetWidth); // 988 px

  let i = 0;
  let width = carousel.offsetWidth;

  if (i == 0) {
    btnLeft.style.display = "none";
  }

  btnRight.addEventListener("click", () => {
    i += 1;

    let tmp = -width * i;

    inner.style.transform = `translateX(${tmp}px)`;
    if (i == slides.length - 1) {
      btnRight.style.display = "none";
    }
    if (i != 0) {
      btnLeft.style.display = "block";
    }
  });

  btnLeft.addEventListener("click", () => {
    let tmp = -width * i + width;
    i -= 1;

    inner.style.transform = `translateX(${tmp}px)`;

    if (i == 0) {
      btnLeft.style.display = "none";
    }

    if (i != slides.length - 1) {
      btnRight.style.display = "block";
    }
  });
}
