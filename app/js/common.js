$(document).ready(function(){

	$('.banner-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  fade: true,
	  speed:1000
	});

	//accordeons
	$(".map-country .map-country__list").hide().prev().click(function() {

		$(this).parents().find(".map-country__list").not(this).slideUp(200).prev();
		$(this).next().not(":visible").slideDown(200).prev().parents();

	});

});

Ya.share2('my-share', {
  content: {
      url: 'http://hansgrohe.elle.ru/',
      title: 'RELAX ZONE',
      description: 'Правила домашнего релакса от Hangrohe  нажатием одной кнопки.',
      image: 'http://hansgrohe.elle.ru/share.jpg'   
  },
      // hooks: {
      //     onshare: function (soc) {
      //       ga('send', 'event', 'link', 'click', 'social__link');
      //     }
      // }
});