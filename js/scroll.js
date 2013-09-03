$(function() {

	var vertCenter = function () {
		$('.vert-center').css('margin-top', function() {
			return (window.innerHeight - $(this).height()) / 2
		});
	};

	vertCenter();

	var getCurrentRow = function () {
		var windowMid = $(document).scrollTop() + (window.innerHeight + $('header').height()) / 2;
		var closestMid = $(document).height()
		var currentRow = [];

		$('.scroll-row').each(function() {
			midDistance = windowMid - $(this).offset().top;

			if (midDistance < closestMid && midDistance > 0) {
				currentRow = $(this);
			}
		});

		return currentRow;
	}

	var currentRow = getCurrentRow;

	$(window).scroll(function() {
		currentRow = getCurrentRow();
		var idx = currentRow.index('.scroll-row');
		$('#subnav li').removeClass('active');
		if (idx != 0) {
			$('#subnav li').eq(idx-1).addClass('active');
		}
	});

	$('#subnav li').click(function () {
		var idx = $('#subnav li').index($(this));

		target = $('.scroll-row').eq(idx+1)

		$('html, body').animate({
		    scrollTop: target.offset().top,
		    scrollLeft: 0
		}, 1000);				
	});


	$(window).resize(function() {
		vertCenter();
		currentRow = getCurrentRow();
	});


	$("header ul li.inactive").tooltip();


	$('.nav-button').click(function() {
		direction = $(this).attr('data-direction');
		prevRow = currentRow.prevAll('.scroll-row:first');
		nextRow = currentRow.nextAll('.scroll-row:first');

		if (direction == 'next' && nextRow.length != 0) {
			goToRow = nextRow;
		}
		else if (direction == 'prev' && prevRow.length != 0) {
			goToRow = prevRow;
		}

		currentRow = goToRow;

		$('html, body').animate({
		    scrollTop: goToRow.offset().top,
		    scrollLeft: 0
		}, 1000);
	});
});