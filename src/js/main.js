function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}


var mySwiper = new Swiper('.swiper-container', {
loop :true,
slidesPerView: 2,
spaceBetween: 10,
breakpoints: {
640: {
    slidesPerView: 2,
    spaceBetween: 12,
},
768: {
    slidesPerView: 3,
    spaceBetween: 15,
},
1024: {
    slidesPerView: 4,
    spaceBetween: 20,
},
},
pagination: {
    el: '.swiper-pagination',
    clickable : true,
},
});

var mySwiper = new Swiper('.swiper-container1', {
   
    slidesPerView: 1,
    spaceBetween: 10,
    slideShadows: true,
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 12,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
    },
});

var mySwiper = new Swiper('.swiper-container2', {
   
    slidesPerView: 1,
    spaceBetween: 10,
    slideShadows: true,
    breakpoints: {
    640: {
        slidesPerView: 1,
        spaceBetween: 12,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
    },
});

$( function() {
    $( "#datepicker" ).datepicker();
} );

// RANGE SLIDER

window.onload = function () {
    slideOne();
    slideTwo();
  };
  
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;
  
  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
  }
  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
  }
  function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, transparent ${percent1}% , #A1C1C1 ${percent1}% , #A1C1C1 ${percent2}%, transparent ${percent2}%`;
  }