// import Swiper from 'swiper/bundle';
import Swiper, { Pagination, Navigation, Mousewheel, Controller, Manipulation } from 'swiper';
Swiper.use([Pagination, Navigation, Mousewheel, Controller, Manipulation]);

const historySwiper = async () => {
  
  const response = await fetch('slideData.json');
  const jsonData = await response.json();

  const { dates, mainEN, mainDE } = jsonData;

  const slideData = (window.location.pathname.includes('/de/')) ? mainDE : mainEN;

    /*** Dates slider */
    const swiperHistoryDates = new Swiper('.history-dates', {
        direction: 'horizontal',
        spaceBetween: 15,
        slidesPerView: 1,
        centeredSlides: true,
        slideToClickedSlide: true,
        touchRatio: 0.2,
        mousewheel: {
            invert: false,
        },
        breakpoints: {
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                direction: 'vertical',
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.history-dates__nav-next',
                    prevEl: '.history-dates__nav-prev',
                },
            },
        },
    });

    dates.forEach((slide) => {
        // create a new slide HTML element
        const slideEl = document.createElement('div');
        slideEl.classList.add('swiper-slide');

        // create the slide content
        const slideContent = `
        <div class="history-dates__item">
            <span class="pYear">${slide.date}</span>
        </div>
    `;

        // add the slide content to the slide element
        slideEl.innerHTML = slideContent;

        // append the slide element to the swiper container
        swiperHistoryDates.appendSlide(slideEl);
    });

    /*** Main slider */
    const swiperHistory = new Swiper('.history-swiper', {
        direction: 'horizontal',
        autoHeight: true,
        breakpoints: {
            1200: {
                direction: 'vertical',
            },
        },
    });

    slideData.forEach((slide) => {
        // create a new slide HTML element
        const slideEl = document.createElement('div');
        slideEl.classList.add('swiper-slide');

        // create the slide content
        const slideContent = `
        <div class="history-swiper__slide">
            <div class="history-swiper__description">
                <strong>${slide.title}</strong>
                <p>${slide.text}</p>
            </div>
            <div class="history-swiper__img">
                <img src="/img/${slide.img}" alt="${slide.title}">
            </div>
        </div>
    `;

        // add the slide content to the slide element
        slideEl.innerHTML = slideContent;

        // append the slide element to the swiper container
        swiperHistory.appendSlide(slideEl);
    });

    swiperHistoryDates.controller.control = swiperHistory;
    swiperHistory.controller.control = swiperHistoryDates;
};

export default historySwiper;
