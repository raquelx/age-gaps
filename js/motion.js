$(document).ready(function () {

// 

// for (var j=0; j<30; j++){	
// 	$('.b' + [j]).hover(function() {
// 			$('#v1').attr('src', 'img/_drawing/test' + [j] + '.jpg');		
// 	}, function() {
// 			$('#v1').attr('src', 'img/_drawing/1.jpg');		
// 	});
// }
	
// count number of times forward arrow is clicked

	var count = 0;
	
// instances where there are multipe images in series
	

	
// SET TEXT FOR EACH OF THE IMAGES

	var caption  = ["Celebration Cakes", 								// 1
					"Urban Agriculture",								// 2
					"Gender and Global Goals",							// 3
					"Not Ten",											// 4
					"Shelters",											// 5		
					"Twelve",											// 6
					"Especially Big Data",								// 7					
					"Form in Motion",									// 8											
					"Aquarium Study",									// 9
					"Dial T for Trouble",
					]



// SET LARGE IMAGE WITH THUMBNAILS

	$('.b0').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/179673939');			count=0;
	    $("html, body").animate({ scrollTop: 0 }, 800);																// celebration cakes
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	    $('#v1').css('width', '880px').css('height', '490px');
	});

	$('.b1').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/166512664');			count=1;
	    $("html, body").animate({ scrollTop: 0 }, 800);																// farm
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	    $('#v1').css('width', '880px').css('height', '490px');
	});																		

	$('.b2').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/170487586');			count=2;
	    $("html, body").animate({ scrollTop: 0 }, 800);																// global goals
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');	
	    $('#v1').css('width', '880px').css('height', '490px');									
	});

	$('.b3').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896145');			count=3;
	    $("html, body").animate({ scrollTop: 0 }, 800);														 		// not ten
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	    $('#v1').css('width', '880px').css('height', '490px');   
	});

	$('.b4').click(function() {																							
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/197808089');	        count=4;
	    $("html, body").animate({ scrollTop: 0 }, 800);															 	// shelters
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	    $('#v1').css('width', '880px').css('height', '490px');
	});

	$('.b5').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120895781');			count=5;
	    $("html, body").animate({ scrollTop: 0 }, 800);																// 12
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	   	$('#v1').css('width', '880px').css('height', '490px');	
	});

	$('.b6').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/209006988');			count=6;
	    $("html, body").animate({ scrollTop: 0 }, 800);														 		// ebd	
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '190px');											
	    $('#imgMain').css('width', '640px');
	    $('#v1').css('width', '880px').css('height', '490px');	
	});

	$('.b7').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896211');	  		count=7;
	    $("html, body").animate({ scrollTop: 0 }, 800);																// form in motion
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	   	$('#v1').css('width', '880px').css('height', '490px');		  
	});

	$('.b8').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/208979623');	  		count=8;
	    $("html, body").animate({ scrollTop: 0 }, 800);																// aquarium study
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	   	$('#v1').css('width', '880px').css('height', '490px');		  
	});

	$('.b9').click(function() {
	    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/121542665');	  		count=9;
	    $("html, body").animate({ scrollTop: 0 }, 800);																// t for trouble
	    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
	    $('#imgMain').css('width', '880px');
	   	$('#v1').css('width', '880px').css('height', '490px');		  
	});

// clicking on any image box turns on large gallery box at top + H2 description text

	for (var j=0; j<20; j++){	
	$('.b' + j).click(function() {
		$('#main').css('display', 'inline-block');
		$('h2').css('display', 'inline-block');

		});
	$('.b' + j).hover(function() {
		$(this).fadeTo(210, 0.75).css('background-color', '#ffffff');
		}, function() {
		$(this).fadeTo(410, 1.0).css('background-color', 'none');
		});
	}

// ARROW key to advance image <-- && -->

	 $(document).keydown(function(e){ 
		if (e.keyCode == 39) { 
			count++;
			if(count == 10){ 													// rule exception for gifs
			count=0;
			}
		} else if (e.keyCode == 37) { 
			count = count - 1;
			if(count == -1){
			count=9;
			}	
		}

		if(count == 0){
	   		$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/179673939');		    	// cakes        															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 1){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/166512664');		    	// farm														
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 2){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/170487586');				// global goals															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');											
		} else if(count == 3){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896145');				// 10												 			
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 4){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/197808089');	    	    // shelter												 		
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 5){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120895781');				// 12															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 6){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/209006988');				// ebd											 				
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 7){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896211');	  			// form in motion
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 8){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/208979623');	  			// aquarium study
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 9){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/121542665');	  			// t for trouble
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		   	$('#v1').css('width', '880px').css('height', '490px');    
		} else if(count == 10){
			count=0;
		} else if (count == -1){
			count = 9;
		}
		$('h2').html(caption[count]);
	});	

// hover and click left arrow space

	$('#arrowR').click(function() {
	    count++;

		if(count == 0){
	   		$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/179673939');		    	// cakes        															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		   	$('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 1){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/166512664');		    	// farm														
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 2){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/170487586');				// global goals															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');	
		    $('#v1').css('width', '880px').css('height', '490px');										
		} else if(count == 3){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896145');				// 10												 			
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 4){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/197808089');	    	    // shelter												 		
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 5){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120895781');				// 12															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 6){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/179673939');				// ebd											 				
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '640px').css('height', '360px');
		} else if(count == 7){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896211');	  			// form in motion
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 8){
		  	$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/208979623');	  			// aquarium study
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 9){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/121542665');	  			// t for trouble
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		   	$('#v1').css('width', '880px').css('height', '490px');  
		} else if(count == 10){
			count=0;
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/179673939');		    	// cakes        															
		    $('h2').html(caption[0]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		   	$('#v1').css('width', '880px').css('height', '490px');
		}
	});


// hover and click right arrow space

	$('#arrowL').click(function() {
	    count = count - 1;
			
		if(count == 0){
	   		$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/179673939');		    	// cakes        															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		   	$('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 1){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/166512664');		    	// farm														
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 2){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/170487586');				// global goals															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');	
		    $('#v1').css('width', '880px').css('height', '490px');										
		} else if(count == 3){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896145');				// 10												 			
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 4){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/197808089');	    	    // shelter												 		
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 5){
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120895781');				// 12															
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 6){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/179673939');				// ebd											 				
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '640px').css('height', '360px');
		} else if(count == 7){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/120896211');	  			// form in motion
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 8){
		  	$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/208979623');	  			// aquarium study
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		    $('#v1').css('width', '880px').css('height', '490px');
		} else if(count == 9){
		    $('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/121542665');	  			// t for trouble
		    $('h2').html(caption[count]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		   	$('#v1').css('width', '880px').css('height', '490px');
		} else if (count == -1){
			count = 9;
			$('#v1').css('display', 'inline-block').attr('src', 'https://player.vimeo.com/video/121542665');	  			// t for trouble
		    $('h2').html(caption[9]).css('margin-top', '0px').css('margin-bottom', '65px');											
		    $('#imgMain').css('width', '880px');
		   	$('#v1').css('width', '880px').css('height', '490px');
		}	
		$('h2').html(caption[count]);
	});	

// hovering arrow to change opacity

	$('#arrowL').hover(function() {
	$('#arrowL').css('opacity', '1');		
	}, function() {
	$('#arrowL').css('opacity', '0.5');	
	});

	// hovering arrow to change opacity

	$('#arrowR').hover(function() {
	$('#arrowR').css('opacity', '1');		
	}, function() {
	$('#arrowR').css('opacity', '0.5');	
	});


// hovering email on about page

	$('#email').hover(function(){
	$(this).css('background-color', '#fff000').css('color', '#80B5FF'); 
	}, function(){
	$(this).css('background-color', '#E7E6F2').css('color', '#7194DE');	
	});
			
// hovering top navigation elements	

	$('#motion').hover(function() {
	$('#motion').css('opacity', 0.85).addClass('move').removeClass('return');

	}, function() {
			$('#motion').css('opacity', 1).addClass('return').removeClass('move');		
	});

	$('#design a').hover(function() {
			$('#design').css('opacity', 1).addClass('move').removeClass('return');
			$('#design a').css('color', '#143DE0');
			$('#motion a').css('color', '#6F98DE');
	}, function() {
			$('#design').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#design a').css('color', '#6F98DE');
			$('#motion a').css('color', '#143DE0');
	});

	$('#drawing a').hover(function() {
			$('#drawing').css('opacity', 1).addClass('move').removeClass('return');
			$('#drawing a').css('color', '#143DE0');
			$('#motion a').css('color', '#6F98DE');
	}, function() {
			$('#drawing').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#drawing a').css('color', '#6F98DE');
			$('#motion a').css('color', '#143DE0');
	});

	$('#gifs a').hover(function() {
			$('#gifs').css('opacity', 1).addClass('move').removeClass('return');
			$('#gifs a').css('color', '#143DE0');
			$('#motion a').css('color', '#6F98DE');
	}, function() {
			$('#gifs').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#gifs a').css('color', '#6F98DE');
			$('#motion a').css('color', '#143DE0');
	});

		$('#hola a').hover(function() {
			$('#hola').css('opacity', 1).addClass('move').removeClass('return');
			$('#hola a').css('color', '#143DE0');
			$('#motion a').css('color', '#6F98DE');
	}, function() {
			$('#hola').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#hola a').css('color', '#6F98DE');
			$('#motion a').css('color', '#143DE0');
	});

	// hover and clicking for MOBILE size

	$('h4').click(function() {								
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('h5').css('display', 'block');		
	});

	$('h4').on("tap",function() {									
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('h5').css('display', 'block');		
	});


	$('h4').hover(function() {
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('h5').css('display', 'block');				
	});

	$('.menuSub').hover(function() {
	$(this).css('opacity', '0.7'); 
	}, function(){
	$(this).css('opacity', '1.0');	
	});



// resizing for different screen widths and mobile on load

	$(window).load(function(){
	console.log(window.innerWidth, window.innerHeight);  
	
		if (window.innerWidth > 1080){							// fits the header over the boxes for scrolling
			$('#head').css('width', '85%');
		} else if (window.innerWidth < 1080 && window.innerWidth > 900){
			$('#head').css('width', '80%');
		} else {
			$('#head').css('width', '75%');
		}

		if (window.innerWidth > 760){
			$('#head').css('opacity', '1');
			$('#drawing, #hola, #design, #sketch, #arrowL, #arrowR').css('display', 'inline-block');
			$('#head .headlink').css('height', '45px');
			$('#box').css('margin-left', '0').css('height', '2170');
			$('#boxhidden').css('diplay', 'none');
			$('#box').css('margin-left', '5%').css('margin-right', '5%').css('width', '90%');	// restore dark background margins
			$('#menu').css('display', 'none');
			$('#head').css('display', 'block');
			$('#menu').css('display', 'none');
			$('#mobilehead').css('display', 'none');
			$('#body').css('display', 'block');
			$('.menuSub').css('height', '0px').css('padding-bottom', '0px');	// disappear mobile menu box
			$('h5').css('opacity', '0.0');										// disappear mobile menu text
			$('h1').css('display', 'block');
			$('#main').css({
					'margin-left': '20px',
					'width': '100%',
					 });
			for (var j=0; j<20; j++){	
			$('.b' + j).css({
					'width': '250px',
					'height': '240px',
					'padding-right': '0%',
					'background-color': '#E7E6F2',
					 });
			}	
		} else {

			$('#box').css({
					'margin-left': '0px',
					'margin-right': '0%',
					'width': '100%', // kill dark background margins
					'min-width': '400px', // can't shrink less than size of phone screen
					'height': '3200px', // longer window for mobile
					});
			$('#drawing, #hola, #design, #sketch, #arrow').css('display', 'none');
			$('#menu').css('display', 'inline').css('background-color', '#59D6FF');
			$('#mobilehead').css('display', 'inline-block');
			$('#body').css('display', 'none');
			$('h1').css('display', 'none');
			$('#head').css('display', 'none');
			$('.imgMobile').css('display', 'inline-block');
			$('#main').css({
					'margin-left': '0px',
					'width': '100%',
			});				
		}
	});

// resizing for different screen widths and mobile on resize

	$(window).resize(function(){
	console.log(window.innerWidth, window.innerHeight);  


		if (window.innerWidth > 1080){							// fits the header over the boxes for scrolling
			$('#head').css('width', '85%');
		} else if (window.innerWidth < 1080 && window.innerWidth > 900){
			$('#head').css('width', '80%');
		} else {
			$('#head').css('width', '75%');
		}

		if (window.innerWidth > 760){

			$('#head').css('opacity', '1');
			$('#drawing, #hola, #design, #sketch, #arrowL, #arrowR').css('display', 'inline-block');
			$('#head .headlink').css('height', '45px');
			$('#box').css('margin-left', '0').css('height', '2170');
			$('#boxhidden').css('diplay', 'none');
			$('#box').css('margin-left', '5%').css('margin-right', '5%').css('width', '90%');	// restore dark background margins
			$('#menu').css('display', 'none');
			$('#head').css('display', 'block');
			$('#menu').css('display', 'none');
			$('#mobilehead').css('display', 'none');
			$('#body').css('display', 'block');
			$('.menuSub').css('height', '0px').css('padding-bottom', '0px');	// disappear mobile menu box
			$('h5').css('opacity', '0.0');										// disappear mobile menu text
			$('h1').css('display', 'block');
			$('#main').css({
					'margin-left': '20px',
					'width': '100%',
					 });

			for (var j=0; j<20; j++){	
			$('.b' + j).css({
					'width': '250px',
					'height': '240px',
					'padding-right': '0%',
					'background-color': '#E7E6F2',
					 });
			}	
		} else {

			$('#box').css({
					'margin-left': '0px',
					'margin-right': '0%',
					'width': '100%', // kill dark background margins
					'min-width': '400px', // can't shrink less than size of phone screen
					'height': '3200px', // longer window for mobile
					});
			$('#drawing, #hola, #design, #sketch, #arrow').css('display', 'none');
			$('#menu').css('display', 'inline').css('background-color', '#59D6FF');
			$('#mobilehead').css('display', 'inline-block');
			$('#body').css('display', 'none');
			$('h1').css('display', 'none');
			$('#head').css('display', 'none');
			$('.imgMobile').css('display', 'inline-block');
			$('#main').css({
					'margin-left': '0px',
					'width': '100%',
					});				
		}
	});


});

