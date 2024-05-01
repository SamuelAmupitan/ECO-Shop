const initSlider = () => {
    const imageList = document.querySelector(".product-list");
    const slideButtons = document.querySelectorAll(".slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }


    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

function toggleMenuIcon(icon) {
  var barsIcon = document.querySelector('.fa-bars');
  var timesIcon = document.querySelector('.fa-times');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (icon.classList.contains('fa-bars')) {
    barsIcon.style.display = 'none';
    timesIcon.style.display = 'block';
    mobileMenu.style.display = 'block';
  } else {
    barsIcon.style.display = 'block';
    timesIcon.style.display = 'none';
    mobileMenu.style.display = 'none';
  }
}
