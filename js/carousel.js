window.addEventListener('DOMContentLoaded', function(e) {

  // 要素を取得
  const sliders = this.document.querySelectorAll('.slider')

  sliders.forEach((slider, cont_slider) => {

    let slideIndex = 1;
    let slides = slider.querySelectorAll(".slide");
    let prev = document.createElement("span");
    prev.classList.add("prev-001");
    prev.innerHTML = "&#10094;";
    slider.append(prev);
    let next = document.createElement("span");
    next.classList.add("next-001");
    next.innerHTML = "&#10095;";
    slider.append(next);

    next.addEventListener("click", (e) => {
      slideIndex == slides.length ? (slideIndex = 1) : slideIndex++;
      slides.forEach((slide, cont_slide) => {
        slide.style = "left: -" + (slideIndex - 1) * 100 + "%;";
      });
    });

    prev.addEventListener("click", (e) => {
      slideIndex == 1 ? (slideIndex = slides.length) : slideIndex--;
      slides.forEach((slide, cont_slide) => {
        slide.style = "left: -" + (slideIndex - 1) * 100 + "%;";
      });
    });

  });

});