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

 


// //mobile menu

// var burger = $('.burger');
// var mobileMenu = $('.nav').clone().html();
// var closeMenu = $('<div>').addClass('nav__close');
// var auth = $('.auth').clone().addClass('auth_mobile').removeClass('auth').append(closeMenu);
// var contacts = $('.header__contacts').clone().addClass('header__contacts_mobile').removeClass('header__contacts')

// auth.find('.auth__reg').addClass('auth__reg_mobile')
// auth.find('.auth__log').addClass('auth__log_mobile')

// contacts.find('.email').addClass('email_mobile')
// contacts.find('.email__text').addClass('email__text_mobile')
// contacts.find('.email__link').addClass('email__link_mobile')
// contacts.find('.phone__text').addClass('phone__text_mobile')
// contacts.find('.phone__link').addClass('phone__link_mobile')

// burger.on('click', function () {
//   if ($('.nav_mobile').length) {
//     $('.nav_mobile').fadeIn(300);
//   } else {
//     $('<div>').addClass('nav_mobile').prependTo('body').append(mobileMenu);
//     $('.nav_mobile').prepend(auth).append(contacts).find('.nav__item').addClass('nav__item_mobile')
//   }
//   $('body').addClass('stop_scrolling ')
// })

// closeMenu.on('click', function () {
//   $('.nav_mobile').fadeOut(300);
//   $('body').removeClass('stop_scrolling ')
// })


// $(document).on('click', '.nav__item', function () {
//   closeMenu.trigger('click');
// })


// //mobile menu


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