jQuery(document).ready(function($) {
    // Inside of this function, $() will work as an alias for jQuery()
    // and other libraries also using $ will not be accessible under this shortcut

		var oldBox = "#box-home";

		var moveArray = new Array('+=470','-=470');

		var locking = new Array();

		var indexmovement = 1;

		var zindex_count = 10;

		//lock=0;

		$(document).ready(function(){
			$(".menu-bar-color").each(function() {
				$(this).attr('id', 'barra-colorata-' + indexmovement++);
				locking[$(this).attr('id')] = 0;
				$(this).mouseover(function(){
					if(locking[$(this).attr('id')]==0) {
						openBar($(this));
					}
				});
			});
		});

		//function openBar(barBox) {
		var openBar = function (barBox) {
			locking[barBox.attr('id')] = 1;
			barBox.animate({
				height: '380px'
			}, 500, function() {
				// Animation complete.
				$(this).children(".ict-section-home").each(function() {
					$(this).fadeIn(100);
				});
				$(this).parent().children(".menu-link").each(function() {
					$(this).fadeIn(500);
				});
				setTimeout(function() { closeBar(barBox) }, 1000);

			});
		}

		//function closeBar(barBox) {
		var closeBar = function (barBox) {
			barBox.children(".ict-section-home").each(function() {
				$(this).fadeOut(100);
			});
			barBox.parent().children(".menu-link").each(function() {
				$(this).fadeOut(300, function() {
					barBox.animate({
						height: '155px'
					}, 500, function() {
						// Animation complete.
						locking[barBox.attr('id')] = 0;
					});
				});
			});
		}

});