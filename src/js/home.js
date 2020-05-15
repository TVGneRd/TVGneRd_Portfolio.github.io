
  $('header').parallax({
	parallax:"scroll", 
	src:"./img/header.jpg",
	// mirrorSelector: '>.main-paralax-mirror',
	afterSetup : (e) => {
		if(e.$m)
			$(e.$m[0]).css("border-radius", "0% 0% 500% 500% / 0% 0% 20% 20%");
	}
  });

  $(".card")
	.on("mousemove", fCardRotate)
	.on("mouseout", fCardDefault);
  
  
  function fCardRotate(ev) {
	this.style.transform = `scale(1.04) perspective(2000px) rotateY(${(ev.offsetX - this.offsetWidth / 2) / 16}deg) rotateX(${((ev.offsetY - this.offsetHeight / 2) / 24) * -1}deg)`;
  }
  function fCardDefault() {
	this.style.transform = ``;
  }
//Меню при скроле

