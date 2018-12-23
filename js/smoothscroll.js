$(document).ready(function(){
    $('a').on('click', function(event) {
        
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		if (scrollDistance >= 400) {
                $('nav').addClass('nav-visible');
				$('nav').fadeIn("fast");
                $('.icon-nav').fadeOut("fast");
		} else {
				$('nav').fadeOut("fast");
                $('.icon-nav').fadeIn("fast");
		}
	
		// Assign active class to nav links while scrolling
		$('.view').each(function(i) {
				if ($(this).position().top <= scrollDistance + 250) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
}).scroll();