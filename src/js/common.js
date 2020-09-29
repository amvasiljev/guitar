$(function () {
  $('.lazy').Lazy();
});


// faq

(function () {
  var youtube = $('.video__code');
  youtube.addClass('test');
  for (var i = 0; i < youtube.length; i++) {
      var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
      var image = new Image();
      // image.src = source;
      image.setAttribute('class', 'lazy');
      image.setAttribute('data-src', source);
      image.setAttribute('data-lazy', source);
      image.addEventListener("load", function () {
          youtube[i].appendChild(image);
      }(i));

      youtube[i].addEventListener("click", function () {
          var iframe = document.createElement("iframe");
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");
          iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=0");
          this.innerHTML = "";
          this.appendChild(iframe);
      });
  };
})();

$('.faq__question').on('click', function(){
  var parent = $(this).parent()
  
  var answer = $(this).next()

  $('.faq').not(parent).removeClass('faq_active')
  parent.toggleClass('faq_active')

  $('.faq__answer').not(answer).slideUp()
  answer.slideToggle()

})

$('.faq__question').eq(0).trigger('click')



// end faq


// inputs
$(document).on('focus', 'input[type="text"],input[type="tel"],textarea', function () {
  $(this).addClass('feedback_active');
})
$(document).on('blur', 'input[type="text"],input[type="tel"],textarea', function () {
  if (!$(this).val()){
    $(this).removeClass('feedback_active');
  }
})

$('input[type="tel"]').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (___) ___-__-__"
});

// // inputs



$('.nav__item_group').hover(
  function () {
    $(this).find('.nav_level2').dequeue().stop(true, true).fadeIn(300)
  },
  function () {
    $(this).find('.nav_level2').dequeue().stop(true, true).fadeOut(300)
  }
)

 



$('.offer').on('click', '.button', function(){
  var offerTitle = $(this).parent().find('.offer__title').text()

  console.log(offerTitle);
  $('.popup__title').text("Запись на " + offerTitle.toLowerCase())

})


$('.banner').on('click','.button',function(){
    if($(this).attr('href') == 'javascript:;'){
      $('.popup__title').text($(this).text())
    } return;
})




//mobile menu

var mobileNav = $('<div>').addClass('nav_mobile');
var mobileItems = $('.nav').html();
var mobileWrapper = $('<div>').addClass('nav_outer').prependTo('body');
var burger = $('.burger');
var closeButton = $('<div>').addClass('nav_close');
var mobileFake = $('<div>').addClass('nav__fake').prependTo('body');


mobileWrapper.append(mobileNav);
mobileNav.append(closeButton);
mobileNav.append(mobileItems);
mobileNav.find('.nav__link').addClass('nav__link_mobile');


var headerCallback = $('.header__callback').clone().appendTo(mobileWrapper).addClass('header__callback_mobile');


burger.on('click', function () {
  mobileWrapper.animate({
    right: 0
  }, 300).addClass('nav_active');
  $('body').addClass('stop_scrolling');
  $(this).attr('data-key', '');
  mobileFake.show();
})

closeButton.on('click', function () {
  mobileWrapper.animate({
    right: '-287px'
  }, 500).removeClass('nav_active');
  $('body').removeClass('stop_scrolling');
  $(this).attr('data-key', 'key');
  mobileFake.hide();
})


mobileFake.on('click', function () {
  closeButton.trigger('click')
})


$('.nav_mobile .nav__link_group').on('click', function (e) {
  e.preventDefault()
  var $this = $(this).next('.nav_level2');
  $('.nav_level2').not($this).slideUp()
  $this.slideToggle()
  $('.nav__link_group').not($(this)).removeClass('nav__link_open')
  $(this).toggleClass('nav__link_open')
})

//mobile menu


// // slider 


$('.slider__box_main').slick({
  lazyload: 'ondemand',
  dots: true,
  // infinite: false,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<div class="slider__arrow slider__arrow_next">',
  prevArrow: '<div class="slider__arrow slider__arrow_prev">',
  appendArrows: $('.slider__arrows_main'),
})
$('.slider__box_course').slick({
  lazyload: 'ondemand',
  dots: true,
  // infinite: false,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<div class="slider__arrow slider__arrow_next">',
  prevArrow: '<div class="slider__arrow slider__arrow_prev">',
  appendArrows: $('.slider__arrows_course'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})


$('.page_courses section').each(function(indx){
  if(indx % 2 == 0){
    $(this).addClass('section_uneven')
  }
})






var spinner = $('.ymap-container').children('.loader');
var check_if_load = false;
var myMapTemp, myPlacemarkTemp;

function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
        center: [55.635040, 37.611329],
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl'],
    });
    myMapTemp.behaviors.disable("scrollZoom");
    var myPlacemarkTemp = new ymaps.Placemark([55.635040, 37.611329], {
        balloonContent: "Здесь может быть ваш адрес",
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '/assets/img/marker.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp);
    var layer = myMapTemp.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function () {
        spinner.removeClass('is-active');
    });


    var myMapTemp_1 = new ymaps.Map("map-yandex_1", {
        center: [55.748711, 37.769819],
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl'],
    });
    myMapTemp_1.behaviors.disable("scrollZoom");
    var myPlacemarkTemp_1 = new ymaps.Placemark([55.748711, 37.769819], {
        balloonContent: "Здесь может быть ваш адрес",
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '/assets/img/marker.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -50],
    });
    myMapTemp_1.geoObjects.add(myPlacemarkTemp_1);
    var layer = myMapTemp_1.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function () {
        spinner.removeClass('is-active');
    });


}

function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
        var tc = getTileContainer(layer),
            readyAll = true;
        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function () {
                resolve();
            });
        }
    });
}

function getTileContainer(layer) {
    for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (
                layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
                layer[k] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[k];
            }
        }
    }
    return null;
}

function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) { // IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}


var ymap = function () {
    $('.ymap-container').mouseenter(function () {
        if (!check_if_load) {
            check_if_load = true;
            spinner.addClass('is-active');
            loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
                ymaps.load(init);
            });
        }
    });
}

$(function () {
    ymap();
});



$(document).scroll(function () {
  scrollTop = $(this).scrollTop();
  if (scrollTop > 0) {
    
  $('.logo').addClass('logo_hide')

   $('.header').addClass('header_fixed')
   $('.header__inner').addClass('header__inner_short')
   
  } else {
    $('.header__inner').removeClass('header__inner_short')
    $('.header').removeClass('header_fixed')
    $('.logo').removeClass('logo_hide')
  }
})