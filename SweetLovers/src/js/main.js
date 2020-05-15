
  //Меню при скроле
  var navbar;

  $(window).scroll(function() {
    if ($(window).scrollTop() > 80 ) {
             $("#navbar").addClass("bg-dark");
         } else {
             $("#navbar").removeClass("bg-dark");
      }
  });

  $('.navbar-toggler').click(function(){
    if ( $('.navbar-toggler').attr('aria-expanded') == 'false' ) {
             $("#navbar").addClass("bg-dark");
         } else {
             $("#navbar").removeClass("bg-dark");
      }
  });

  // прокрутка по якорям
  var $page = $('html, body');

  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
  // прокрутка по якорям


//Меню при скроле

