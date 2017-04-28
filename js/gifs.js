$(document).ready(function () {


	var count = 0;
	var subcount = 0;
	
	
	
// SET TEXT FOR EACH OF THE IMAGES

	var caption  = ["Welcome screen for Fathom's work retreat in Salem, Massachusetts",	// 0
					"Plant Study", 	// 1
					"Tiger Grin",  	// 2																															// 2
					"Lead-in animation for 'Celebration Cakes' (see the full movie in the <a href='motion.html'>motion section</a>)",  								// 3 
					"Series of icons originally designed for <a href='https://thenounproject.com/laraquelx/' target='blank'>the noun project</a>.",  				// 4
					"Illustrations from 'Busted', a PropPublica article about drug tests that routinely </BR>yield false positives, which Fathom assisted with on graphics. Read the full article <a href='https://www.propublica.org/article/common-roadside-drug-test-routinely-produces-false-positives' target='blank'>here</a>.",  // 5
					"Grandma's Icebox Cookies | From an animated collection of Fathom's favorite holiday recipes. Full site <a href='http://fathom.info/holiday2016' target='blank'>here</a>.", 	// 6
					"Animations for General Electric's <a href='http://www.ge.com/transformation' target='blank'>corporate timeline</a>&ensp;|&ensp; Healthcare", 	// 7
					"Animations for General Electric's <a href='http://www.ge.com/transformation' target='blank'>corporate timeline</a>&ensp;|&ensp; Appliances", 	// 8
					"Animations for General Electric's <a href='http://www.ge.com/transformation' target='blank'>corporate timeline</a>&ensp;|&ensp; Power",	 	// 9
					"Animations for General Electric's <a href='http://www.ge.com/transformation' target='blank'>corporate timeline</a>&ensp;|&ensp; Aviation", 	// 10
					"Popvers | From an animated collection of Fathom's favorite holiday recipes. Full site <a href='http://fathom.info/holiday2016' target='blank'>here</a>.", 	// 11
					"Sugar Cookies | From an animated collection of Fathom's favorite holiday recipes. Full site <a href='http://fathom.info/holiday2016' target='blank'>here</a>.", 	// 12
					"Creature Study",  //1 3
					"Rush Hour / Central Square", //14
					]	

// SET LARGE IMAGE WITH THUMBNAILS

	$('.b0').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-00.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        count=0;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// gato
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
	    $('#imgMain').css('width', '850px');
	});

	$('.b1').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-01.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			count=1;
	    $("html, body").animate({ scrollTop: 0 }, 800);														 									// flower growing
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');		
	    $('#imgMain').css('width', '550px');		
	});																		

	$('.b2').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-02.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			count=2;
	    $("html, body").animate({ scrollTop: 0 }, 800);														 									// tiger
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px')				
	    $('#imgMain').css('width', '690px');												
	});

	$('.b3').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-03.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');		    count=3;
	    $("html, body").animate({ scrollTop: 0 }, 800);															 								// Cake
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px')
		$('#imgMain').css('width', '875px');
	});

	$('.b4').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-04.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			count=4;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// noun icons
		$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '771px'); 	
	});

	$('.b5').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-05.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			count=5;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// propublica gif
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
	    $('#imgMain').css('width', '739px');	 
	});

	$('.b6').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-06.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				count=6;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// gran cookies
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');
	});

	$('.b7').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-07.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        count=7;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// GE healthcare
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	});
	$('.b8').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-08.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        count=8;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// GE appliances
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	});
	$('.b9').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-09.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        count=9;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// GE power
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	});

	$('.b10').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-10.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        count=10;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// GE aviation
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	});

	$('.b11').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-11.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				count=11;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// popovers
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');
	});
	$('.b12').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-12.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				count=12;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// sugarcookies
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');		
	});	
	$('.b13').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-13.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				count=13;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// creatures
	    $('h2').html(caption[count]).css('margin-top', '-40px').css('margin-bottom', '130px');
		$('#imgMain').css('width', '500px');		
	});	
	$('.b14').click(function() {
	    $('#m1').attr('src', 'img/_gifs/g-14.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				count=14;
	    $("html, body").animate({ scrollTop: 0 }, 800);																							// train loop
	    $('h2').html(caption[count]).css('margin-top', '-190px').css('margin-bottom', '280px');
		$('#imgMain').css('width', '600px');		
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
console.log(count);

	 $(document).keydown(function(e){ 
		if (e.keyCode == 39) {  						// forward arrow
			count++;
			if(count == 15){ 							
			count=0;
			}
		} else if (e.keyCode == 37) { 					// back arrow
			count = count - 1;
			if(count == -1){
			count=14;									// total # of images on page * must be accurate for proper looping * 
			}	
		}
		$('h2').html(caption[count]);



	if (count == 0) {
		    $('#m1').attr('src', 'img/_gifs/g-00.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // gato																						// gato
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		    $('#imgMain').css('width', '850px');
		} else if (count == 1) {
		    $('#m1').attr('src', 'img/_gifs/g-01.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// flower growing																					// sugarcookies
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '550px');		
		} else if (count == 2) {
		    $('#m1').attr('src', 'img/_gifs/g-02.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// tiger												 									// flower growing
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');				
		    $('#imgMain').css('width', '690px');												
		} else if (count == 3) {
		    $('#m1').attr('src', 'img/_gifs/g-03.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');		    // cake													 								// Cake
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px')
			$('#imgMain').css('width', '875px');
		} else if (count == 4) {
		    $('#m1').attr('src', 'img/_gifs/g-04.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// people																						// noun icons
			$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
			$('#imgMain').css('width', '771px'); 	
		} else if (count == 5) {
		    $('#m1').attr('src', 'img/_gifs/g-05.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// judge																						// propublica gif
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
		    $('#imgMain').css('width', '739px');	 
		} else if (count == 6) {
		    $('#m1').attr('src', 'img/_gifs/g-06.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// gram																						// gran cookies
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
			$('#imgMain').css('width', '850px');
		} else if (count == 7) {
		    $('#m1').attr('src', 'img/_gifs/g-07.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge health																				// GE healthcare
		    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
		    $('#imgMain').css('width', '850px');
		} else if (count == 8) {
		    $('#m1').attr('src', 'img/_gifs/g-08.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge appliance																							// GE appliances
		    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
		    $('#imgMain').css('width', '850px');
		} else if (count == 9) {
		    $('#m1').attr('src', 'img/_gifs/g-09.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge power																						// GE power
		    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
		    $('#imgMain').css('width', '850px');
		} else if (count == 10) {
		    $('#m1').attr('src', 'img/_gifs/g-10.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge aviation																					// GE aviation
		    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
		    $('#imgMain').css('width', '850px');
		} else if (count == 11) {
		    $('#m1').attr('src', 'img/_gifs/g-11.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// popovers																						// popovers
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
			$('#imgMain').css('width', '850px');
		} else if (count == 12) {
		    $('#m1').attr('src', 'img/_gifs/g-12.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// sugar																						// popovers
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
			$('#imgMain').css('width', '850px');	
		} else if (count == 13) {
		    $('#m1').attr('src', 'img/_gifs/g-13.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// creatures																						// popovers
		    $('h2').html(caption[count]).css('margin-top', '-40px').css('margin-bottom', '130px');
			$('#imgMain').css('width', '500px');	
		} else if (count == 14) {
		    $('#m1').attr('src', 'img/_gifs/g-14.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// train																						// popovers
		    $('h2').html(caption[count]).css('margin-top', '-190px').css('margin-bottom', '280px');
			$('#imgMain').css('width', '600px');
		} else if(count == 15){
			count=0;
		    $('#m1').attr('src', 'img/_gifs/g-00.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // gato																					// gato
		    $('h2').html(caption[0]).css('margin-top', '10px').css('margin-bottom', '80px');
		    $('#imgMain').css('width', '600px');
		}	
	$('h2').html(caption[count]);		// captions each image 
	subcount=0;  						//resets subcount to zero after every click
	});	

// hover and click left arrow space

	$('#arrowR').click(function() {
	    count++;

	if (count == 0) {
	    $('#m1').attr('src', 'img/_gifs/g-00.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // gato																						// gato
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
	    $('#imgMain').css('width', '850px');
	} else if (count == 1) {
	    $('#m1').attr('src', 'img/_gifs/g-01.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// flower growing																					// sugarcookies
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		$('#imgMain').css('width', '550px');		
	} else if (count == 2) {
	    $('#m1').attr('src', 'img/_gifs/g-02.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// tiger												 									// flower growing
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');				
	    $('#imgMain').css('width', '690px');												
	} else if (count == 3) {
	    $('#m1').attr('src', 'img/_gifs/g-03.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');		    // cake													 								// Cake
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px')
		$('#imgMain').css('width', '875px');
	} else if (count == 4) {
	    $('#m1').attr('src', 'img/_gifs/g-04.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// people																						// noun icons
		$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '771px'); 	
	} else if (count == 5) {
	    $('#m1').attr('src', 'img/_gifs/g-05.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// judge																						// propublica gif
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
	    $('#imgMain').css('width', '739px');	 
	} else if (count == 6) {
	    $('#m1').attr('src', 'img/_gifs/g-06.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// gram																						// gran cookies
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');
	} else if (count == 7) {
	    $('#m1').attr('src', 'img/_gifs/g-07.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge health																				// GE healthcare
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 8) {
	    $('#m1').attr('src', 'img/_gifs/g-08.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge appliance																							// GE appliances
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 9) {
	    $('#m1').attr('src', 'img/_gifs/g-09.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge power																						// GE power
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 10) {
	    $('#m1').attr('src', 'img/_gifs/g-10.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge aviation																					// GE aviation
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 11) {
	    $('#m1').attr('src', 'img/_gifs/g-11.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// popovers																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');
	} else if (count == 12) {
	    $('#m1').attr('src', 'img/_gifs/g-12.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// sugar																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');	
	} else if (count == 13) {
	    $('#m1').attr('src', 'img/_gifs/g-13.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// creatures																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '-40px').css('margin-bottom', '130px');
		$('#imgMain').css('width', '500px');	
	} else if (count == 14) {
	    $('#m1').attr('src', 'img/_gifs/g-14.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// train																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '-190px').css('margin-bottom', '280px');
		$('#imgMain').css('width', '600px');
	} else if(count == 15){
		count=0;
	    $('#m1').attr('src', 'img/_gifs/g-00.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // gato																					// gato
	    $('h2').html(caption[0]).css('margin-top', '10px').css('margin-bottom', '80px');
	    $('#imgMain').css('width', '600px');
	}	
	$('h2').html(caption[count]);		// captions each image 
	subcount=0;  						//resets subcount to zero after every click
	});	


// hover and click right arrow space

	$('#arrowL').click(function() {
	    count = count - 1;
		if (count == 0) {
	    $('#m1').attr('src', 'img/_gifs/g-00.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // gato																						// gato
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
	    $('#imgMain').css('width', '850px');
	} else if (count == 1) {
	    $('#m1').attr('src', 'img/_gifs/g-01.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// flower growing																					// sugarcookies
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		$('#imgMain').css('width', '550px');		
	} else if (count == 2) {
	    $('#m1').attr('src', 'img/_gifs/g-02.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// tiger												 									// flower growing
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');				
	    $('#imgMain').css('width', '690px');												
	} else if (count == 3) {
	    $('#m1').attr('src', 'img/_gifs/g-03.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');		    // cake													 								// Cake
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px')
		$('#imgMain').css('width', '875px');
	} else if (count == 4) {
	    $('#m1').attr('src', 'img/_gifs/g-04.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// people																						// noun icons
		$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '771px'); 	
	} else if (count == 5) {
	    $('#m1').attr('src', 'img/_gifs/g-05.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');			// judge																						// propublica gif
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
	    $('#imgMain').css('width', '739px');	 
	} else if (count == 6) {
	    $('#m1').attr('src', 'img/_gifs/g-06.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// gram																						// gran cookies
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');
	} else if (count == 7) {
	    $('#m1').attr('src', 'img/_gifs/g-07.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge health																				// GE healthcare
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 8) {
	    $('#m1').attr('src', 'img/_gifs/g-08.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge appliance																							// GE appliances
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 9) {
	    $('#m1').attr('src', 'img/_gifs/g-09.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge power																						// GE power
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 10) {
	    $('#m1').attr('src', 'img/_gifs/g-10.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // ge aviation																					// GE aviation
	    $('h2').html(caption[count]).css('margin-top', '-125px').css('margin-bottom', '215px');											
	    $('#imgMain').css('width', '850px');
	} else if (count == 11) {
	    $('#m1').attr('src', 'img/_gifs/g-11.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// popovers																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');
	} else if (count == 12) {
	    $('#m1').attr('src', 'img/_gifs/g-12.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// sugar																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '80px');
		$('#imgMain').css('width', '850px');
	} else if (count == 13) {
	    $('#m1').attr('src', 'img/_gifs/g-13.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// creatures																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '-40px').css('margin-bottom', '130px');
		$('#imgMain').css('width', '500px');	
	} else if (count == 14) {
	    $('#m1').attr('src', 'img/_gifs/g-14.gif').css('display', 'inline-block').css('object-fit', 'cover');				   				// train																						// popovers
	    $('h2').html(caption[count]).css('margin-top', '-190px').css('margin-bottom', '280px');
		$('#imgMain').css('width', '600px');
	} else if(count == -1){
		count=12;
	    $('#m1').attr('src', 'img/_gifs/g-12.gif').css('display', 'inline-block').css('object-fit', 'cover').css('width', '100%');	        // sugar																				// gato
	    $('h2').html(caption[0]).css('margin-top', '10px').css('margin-bottom', '80px');
	    $('#imgMain').css('width', '850px');
	}	
	$('h2').html(caption[count]);		// captions each image 
	subcount=0;  						//resets subcount to zero after every click
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

	$('#gifs').hover(function() {
	$('#gifs').css('opacity', 0.85).addClass('move').removeClass('return');

	}, function() {
			$('#gifs').css('opacity', 1).addClass('return').removeClass('move');		
	});

	$('#drawing a').hover(function() {
			$('#drawing').css('opacity', 1).addClass('move').removeClass('return');
			$('#drawing a').css('color', '#143DE0');
			$('#gifs a').css('color', '#6F98DE');
	}, function() {
			$('#drawing').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#drawing a').css('color', '#6F98DE');
			$('#gifs a').css('color', '#143DE0');
	});

	$('#design a').hover(function() {
			$('#design').css('opacity', 1).addClass('move').removeClass('return');
			$('#design a').css('color', '#143DE0');
			$('#gifs a').css('color', '#6F98DE');
	}, function() {
			$('#design').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#design a').css('color', '#6F98DE');
			$('#gifs a').css('color', '#143DE0');
	});

	$('#motion a').hover(function() {
			$('#motion').css('opacity', 1).addClass('move').removeClass('return');
			$('#motion a').css('color', '#143DE0');
			$('#gifs a').css('color', '#6F98DE');
	}, function() {
			$('#motion').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#motion a').css('color', '#6F98DE');
			$('#gifs a').css('color', '#143DE0');
	});

		$('#hola a').hover(function() {
			$('#hola').css('opacity', 1).addClass('move').removeClass('return');
			$('#hola a').css('color', '#143DE0');
			$('#gifs a').css('color', '#6F98DE');
	}, function() {
			$('#hola').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#hola a').css('color', '#6F98DE');
			$('#gifs a').css('color', '#143DE0');
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


