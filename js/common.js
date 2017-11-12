$(function(){
	var delay = 200;

	var userAgent = window.navigator.userAgent.toLowerCase();
		// Google Chrome
	var isChrome = (userAgent.indexOf('chrome') > -1) && (userAgent.indexOf('edge') == -1);
	// Firefox
	var isFirefox = (userAgent.indexOf('firefox') > -1);
	// Safari
	var isSafari = (userAgent.indexOf('safari') > -1) && (userAgent.indexOf('chrome') == -1);

	/*******************/
	// init
	/*******************/
	function init(){
		$('.pagetop').click(function(){
			$('html,body').animate({scrollTop:0},500,"easeInOutCubic");
		})

		$("#header svg , #header_in svg").animate({opacity:1},100,"easeInOutCubic")

		if(isChrome || isSafari || isFirefox){
			$('#header , #header_in').find('path , rect , polygon').each(function(){
				this.setAttribute("class","path");
				this.setAttribute("paint-order","stroke");
			});
		}

		// $("#header svg").hover(
		// 	function(){
		// 			$('body , .works_contents').addClass('blackmode');
		// 			$(this).addClass('blackmode path_over');
		// 	},
		// 	function(){
		// 		$(this).removeClass('blackmode path_over');
		// 		$('body , .works_contents').removeClass('blackmode');
		// 	}
		// )

		$('.fade-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('fade');
			}
		});

		$('.upfade-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('upfade');
			}
		});

		$('.Lfade-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('Lfade');
			}
		});
		$('.L-oblique-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('L-oblique');
			}
		});

		$('.R-oblique-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('R-oblique');
			}
		});

		$('.displayfade-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('displayfade');
			}
		});

		$('.iphonefade-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('iphonefade');
			}
		});

		$('.macbookfade-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('macbookfade');
			}
		});

		$('.borderani-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('borderani');
			}
		});

		$('.boxfade-init').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$('.works_contents').find('.item').each(function(e){
				$(this).delay(delay*e).fadeTo(400,1,'easeInOutCubic');
			})
			}
		});
	}

	window.onload = function(){
		setTimeout(function(){
			$('#loading_overray .bg').animate({width:"100%"},1000,"easeInOutCubic",function () {
				$('#loading_overray').hide();
				$(this).hide();
				init();
			})
		},1500)

	}

});
