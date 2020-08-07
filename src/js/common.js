$(function () {
  $('.lazy').Lazy();
});


// faq



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
$(document).on('focus', 'input[type="text"],input[type="tel"]', function () {
  $(this).addClass('feedback__input_active');
})
$(document).on('blur', 'input[type="text"],input[type="tel"]', function () {
  if (!$(this).val()){
    $(this).removeClass('feedback__input_active');
  }
  
})

$('input[type="tel"]').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (___) ___-__-__"
});

// // inputs

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


// // slider 

// // news
// $('.news').last().addClass('news_final');
// // news


// // products
// if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//   var product = $('.product');
//   product.each(function (indx) {
//     if (indx >= 3) $(this).hide()
//   })
// }

//products