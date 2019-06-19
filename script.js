
$(window).scroll(function() {
	var jumboScroll = $(this).scrollTop();

//nav

// jumbotron

	$('.jumbotron p').css({

		'transform' : 'translate(0px, '+ jumboScroll/0.5 +'%)'
	}); 

	$('.jumbotron h1').css({

		'transform' : 'translate(0px, '+ jumboScroll/2 +'%)'
	}); 

	$('.jumbotron h2').css({

		'transform' : 'translate(0px, '+ jumboScroll/0.7 +'%)'
	}); 


// about

if(jumboScroll > $('.about').offset().top - 150) {
	$('.about .muncul').addClass('anime');

}


// portofolio

if( jumboScroll > $('.portofolio').offset().top - 200 ) {

	$('.portofolio .card').each(function(i) {

		setTimeout(function() {

			$('.portofolio .card').eq(i).addClass('animasi');

	}, 300 * (i+1));

	});

}


});





	




















