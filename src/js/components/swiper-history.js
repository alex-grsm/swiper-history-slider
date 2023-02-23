// import Swiper from 'swiper/bundle';
import Swiper, { Pagination, Navigation, Mousewheel, Controller, Manipulation } from 'swiper';
Swiper.use([Pagination, Navigation, Mousewheel, Controller, Manipulation]);

const historySwiper = () => {
  const slideDataDates = [
    { date: '1988' },
    { date: '1996' },
    { date: '1997' },
    { date: '2000' },
    { date: '2000' },
    { date: '2001' },
    { date: '2001' },
    { date: '2001' },
    { date: '2005' },
    { date: '2007' },
    { date: '2011' },
    { date: '2013' },
    { date: '2014' },
    { date: '2016' },
    { date: '2019' },
    { date: '2019' },
    { date: '2021' },
    { date: '2021' },
  ];

  const slideDataMain = [
    {
      title: '1988 – Foundation of Pollmeier Leimholz GmbH',
      text: 'Production of edge-glued panels sourcing timber (spruce, pine, beech, oak and alder) from sawmills.',
      img: '1988.webp',
    },
    {
      title: '1996 – Official opening of Creuzburg sawmill',
      text: 'Quality issues (hue/humidity of timber) with the existing suppliers lead Pollmeier to set up its own sawmill.',
      img: '1996.webp',
    },
    {
      title: '1997 – Fast expansion of production',
      text: 'Beech turns from firewood to trendy wood.',
      img: '1997.webp',
    },
    {
      title: '2000 – Pollmeier becomes shareholder of Hanses Sägewerkstechnik GmbH & Co.KG',
      text: "Pollmeier's know-how helps advance sawing technology.",
      img: '2000p.webp',
    },
    {
      title: '2000 – Start of production at second sawmill in Malchow',
      text: 'The sawing capacity is around 300,000 solid cubic metres of round wood.',
      img: '2000s.webp',
    },
    {
      title: '2001 – Pollmeier acquires a stake in Thaler & Pacher GmbH',
      text: 'The Austrian company specialises in control technology.',
      img: '2001p.webp',
    },
    {
      title: '2001 – Opening of new administrative offices in Creuzburg',
      text: '',
      img: '2001o.webp',
    },
    {
      title: '2001 — Expansion of global sales network',
      text: 'Pollmeier opens sales offices in Poland, China and the USA.',
      img: '2001e.webp',
    },
    {
      title: '2005 – Expansion of production capacity at Creuzburg plant',
      text: '',
      img: '2005.webp',
    },
    {
      title: '2007 – Production start-up at third Pollmeier sawmill in Aschaffenburg',
      text: 'Pollmeier becomes one of the largest hardwood sawmill operators worldwide.',
      img: '2007.webp',
    },
    {
      title: '2011 – Closure of Malchow sawmill due to insufficient log timber supply',
      text: '',
      img: '2011.webp',
    },
    {
      title: '2013 – Construction of first laminated veneer lumber (LVL) plant for hardwood in Creuzburg',
      text: '',
      img: '2013.webp',
    },
    {
      title: '2014 – Launch of "BauBuche" beech laminated veneer lumber',
      text: '',
      img: '2014.webp',
    },
    {
      title: '2016 – Reopening of Malchow sawmill',
      text: '',
      img: '2016.webp',
    },
    {
      title: '2019 – Launch of "Spruce LVL" at LVL plant in Creuzburg',
      text: '',
      img: '2019ls.webp',
    },
    {
      title: '2019 – Launch of "Pollmeier COMPONENTS" solid beech cut-to-size lumber',
      text: 'Pollmeier starts the production of Pollmeier COMPONENTS at the cut-to-size line at Aschaffenburg plant.',
      img: '2019l.webp',
    },
    {
      title: '2021 – Pollmeier becomes owner of Hanses Sägewerkstechnik GmbH & Co.KG',
      text: '"Hanses Sägewerkstechnik GmbH & Co.KG" is renamed to "Pollmeier Maschinenbau GmbH & Co. KG".',
      img: '2021p.webp',
    },
    {
      title: '2021 – Expansion of production capacity at Aschaffenburg plant',
      text: 'Pollmeier invests 30 million Euros in "Pollmeier COMPONENTS".',
      img: '2021e.webp',
    },
  ];

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

  slideDataDates.forEach(slide => {
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

  slideDataMain.forEach(slide => {
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

// pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     renderBullet: function (index, className) {
//       let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
//       return `<span class="${className}"><span class="pYear">${year}</span></span>`;
//     },
//   },
