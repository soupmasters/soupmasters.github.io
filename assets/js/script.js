
home_id = "#banner-section";

function scrollToElement(element) {
	$('html, body').animate({
        scrollTop: $(element).offset().top
	}, 500, );
	
};

$(document).ready(function() {
	$('html, body').animate({
        scrollTop: $(home_id).offset().top
	}, 200, );
});