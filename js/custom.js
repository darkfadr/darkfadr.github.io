$(".sidebar-btn").on('click', function() {
		$(".sidebar-overlay").toggleClass("show hidden");
		$(".sidebar-menu").toggleClass("show hidden");
		return false;
});

$('.screen:first').waypoint(function() {
	$(".navbar").toggleClass("navbar-transparent");
}, {
	offset: function() {
		return -$(this).height();
	}
});

$(".backstretch-carousel").backstretch([
	"img/0028.jpg",
	"img/0025.jpg",
	"img/0026.jpg",   
	"img/0029.jpg",   
	"img/0030.jpg",   
	"img/0031.jpg", 
	"img/0032.jpg" 
], {
		duration: 1000,
		fade: 1000
	});

$(".backstretch-carousel").backstretch("pause");

$('.screen').waypoint(function(direction) {
	if (direction === 'down') {
	 $(".backstretch-carousel").backstretch("next");
	}
	if (direction === 'up') {
	 $(".backstretch-carousel").backstretch("prev");
	}
}, { offset: '50%' });

$(document).ready(function(){
	$("body.preloader").queryLoader2({
	    barColor: "#FFF",
	    backgroundColor: "#151515",
	    percentage: true,
	    barHeight: 1,
	    completeAnimation: "fade",
	    minimumTime: 200
	});

	$('a[href=#welcome],a[href=#about], a[href=#portfolio], a[href=#pricing], a[href=#team], a[href=#features], a[href=#contact-us]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});

	 // return false;
});