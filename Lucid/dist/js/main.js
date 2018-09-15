
  //Меню при скроле
  var navbar
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
  //Меню при скроле
//Активация меню
var menu_selector = "#navigation"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " .nav-item").each(function(){
		var hash = $(this).children().attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " .nan-item.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}
$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$('.nav-item').click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " .nav-item.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).children().attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
});
//Активация меню
