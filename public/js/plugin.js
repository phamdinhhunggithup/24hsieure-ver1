// ==== CAROUSEL ==== //
$(function () {
	// Banner 
	carousel(".banner--full-bottom-body .carousel__banner",8,true);
	// hot key word
	carousel(".home-hot__key-word .Slider__wrapper",9,true);
	// Flash sale
	carousel(".flash__sale-content .carousel__flash-sale",5,true);
	// hot prod
	carousel(".section-content .list__box-prod-hot",6,true);
	
	function carousel(carouselName,numItem,autoPlay)
	{
		var carousel = $(carouselName)
		carousel.owlCarousel({
			autoPlay: autoPlay,
			navigation: true,
			navigationText: true,
			paginationNumbers: true,
			pagination: true,
			stopOnHover: true,
			items: numItem, 
			itemsDesktop: [1000, 4], 
			itemsDesktopSmall: [800, 3],
			itemsTablet: [600, 2],
			itemsMobile: [375, 1] 
		});
	}
	
});