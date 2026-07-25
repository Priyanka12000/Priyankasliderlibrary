const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
const totalSlides = slides.length;

// Create navigation dots
slides.forEach((slide, index) => {

    const dot = document.createElement("span");

    dot.classList.add("dot");

    if(index === 0){

        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        currentIndex = index;

        updateSlider();

    });

    dotsContainer.appendChild(dot);

});

function updateSlider(){

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    document.querySelectorAll(".dot").forEach(dot => {

        dot.classList.remove("active");

    });

    document.querySelectorAll(".dot")[currentIndex].classList.add("active");

}

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= totalSlides){

        currentIndex = 0;
    }

    updateSlider();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = totalSlides - 1;
    }

    updateSlider();

});

// Auto Slide
setInterval(() => {

    currentIndex++;

    if(currentIndex >= totalSlides){

        currentIndex = 0;
    }

    updateSlider();

}, 4000);