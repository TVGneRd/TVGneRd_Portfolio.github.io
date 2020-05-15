
  $('header').parallax({
	parallax:"scroll", 
	src:"./img/about_header.jpg",
	
  });

  $(".img-container")
	.on("mousemove", fCardRotate)
	.on("mouseout", fCardDefault);
  
  
  function fCardRotate(ev) {
	this.style.transform = `scale(1.1) perspective(2000px) rotateY(${(ev.offsetX - this.offsetWidth / 2) / 16}deg) rotateX(${((ev.offsetY - this.offsetHeight / 2) / 24) * -1}deg)`;
  }
  function fCardDefault() {
	this.style.transform = ``;
  }

  $('#reviews').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
      });
//Меню при скроле

