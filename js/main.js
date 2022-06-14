//메인화면 스마트폰 목업 움직이는 효과
gsap.to(".main__images .p1", {delay: 0.5, rotation: -7, duration: 1.7});
gsap.to(".main__images .p2", {delay: 0.5, rotation: 4, duration: 1.7});


//스크롤하면 나타나는 이벤트
const controller = new ScrollMagic.Controller();

const revealElements = document.querySelectorAll('.s-event');
revealElements.forEach(function (revealElement) {
    new ScrollMagic
    .Scene ({
        triggerElement: revealElement,
        offset: 50,	
        triggerHook: .9
    })
    .setClassToggle(revealElement, "visible") 
    .addTo(controller);
})


//학습화면 슬라이드 스와이퍼
new Swiper(".mySwiper", {
    slidesPerView : 'auto',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        //시간 1000 이 1초
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//모바일 ai리포트 클릭시 텍스트 보여짐
// const aiImage = document.querySelector('.page img')

// function showText () {
//   const ai = document.querySelector(".page .contents")
//   ai.style.display = 'block';
// }

// aiImage.addEventListener("click", showText())


