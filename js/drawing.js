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
	var subcount = 0;
	
// instances where there are multipe images in series
	

	
// SET TEXT FOR EACH OF THE IMAGES

	var caption  = ["Greeting card",		// 0
					"To celebrate a century of women being elected to statewide office, Fathom created this 'First of Her Kind'</BR>poster, featuring the first women from each state to be elected to statewide office (including senators,</BR> governors, and members of the house). Learn more about these badass women and purchase a poster <a href='http://www.fathom.info/first' target='blank'>here</a>.",			// 1
					"Letterpress greeting card set&emsp;[&thinsp;1 of 3&thinsp;]",																	// 2					
					"Twelve months of fitness goals for the New Year, for the Washington Post [&thinsp;1 of 12&thinsp;]",							// 3										
					"Sewn illustration for an article on earning focused business certificates rather than a full MBA  |  The New York Times",		// 4		
					"Drawing for an episode of Fathom's podcast, <a href='http://fathom.info/ebd' target='blank'>Especially Big Data</a>",			// 10
					"Illustration on how different travel sites often offer identical deals&emsp;|&emsp;The New York Times",						// 5				
					"Illustration for an article about the history of Title IX&emsp;|&emsp;Bust Magazine",											// 6					
					"Sketchbook drawing: April blizzards",																							// 7
					"Drawing on location, Harvard Museum of Natural History [&thinsp;1 of 3&thinsp;]", 												// 8
					"Drawing on location, Harvard Museum of Natural History, part II [&thinsp;1 of 4&thinsp;]",										// 9
					"Valentine [ lyrics from Morrissey's 'First of the Gang to Die' ]",																// 11
					"Op-Ed illustration on navigating dietary restrictions&emsp;|&emsp;The Boston Globe",											// 12
					"Embroidery",																													// 13
					]

	var subcap0 = ["Letterpress greeting card set&ensp;[&thinsp;1 of 3&thinsp;]",
				   "Letterpress greeting card set&ensp;[&thinsp;2 of 3&thinsp;]",
				   "Letterpress greeting card set&ensp;[&thinsp;3 of 3&thinsp;]",
					]

	var subcap1 = ["Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;1 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;2 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;3 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;4 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;5 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;6 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;7 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;8 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;9 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;10 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;11 of 12&thinsp;]",
				   "Twelve months of fitness goals for the New Year, for The Washington Post &ensp;[&thinsp;12 of 12&thinsp;]",
					]

	var subcap2	= [ "Drawing on location, Harvard Museum of Natural History [&thinsp;1 of 3&thinsp;]",			
					"Drawing on location, Harvard Museum of Natural History [&thinsp;2 of 3&thinsp;]",
					"Drawing on location, Harvard Museum of Natural History [&thinsp;3 of 3&thinsp;]",
					]

	var subcap3 = ["Drawing on location, Harvard Museum of Natural History, part II [&thinsp;1 of 4&thinsp;]",
				   "Drawing on location, Harvard Museum of Natural History, part II [&thinsp;2 of 4&thinsp;]",
				   "Drawing on location, Harvard Museum of Natural History, part II [&thinsp;3 of 4&thinsp;]",
				   "Drawing on location, Harvard Museum of Natural History, part II [&thinsp;4 of 4&thinsp;]",
					]	



	$('#v1').click(function() {	
		
		if (count == 2){      						// checks to see if letterpress cards are selected
			subcount++;
				if (subcount == 3){
					subcount=0;
					}				
			$('#v1').attr('src', 'img/_drawing/a-letterpress' + subcount + '.jpg');
			$('h2').html(subcap0[subcount]);
		} else if (count == 3){          			// checks to see if washington post fruits are selected
			subcount++;
				if (subcount == 12){
					subcount=0;
					}				
			$('#v1').attr('src', 'img/_drawing/a-fruits' + subcount + '.jpg');
			$('h2').html(subcap1[subcount]);			
		} else if (count == 9){          			// harvard series part 1
			subcount++;
				if (subcount == 2){
					subcount=0;
					}				
			$('#v1').attr('src', 'img/_drawing/a-hvd' + subcount + '.jpg');
			$('h2').html(subcap2[subcount]);
		} else if (count == 10){          			// checks to see if harvard fish drawings are selected
			subcount++;
				if (subcount == 3){
					subcount=0;
					}				
			$('#v1').attr('src', 'img/_drawing/a-harvard' + subcount + '.jpg');
			$('h2').html(subcap3[subcount]);
		} else {
		subcount=0;									// for all others resets to zero
		}	
	});



// SET LARGE IMAGE WITH THUMBNAILS

	$('.b0').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-00.jpg').css('display', 'inline-block').css('object-fit', 'cover');	    	count=0;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		//  nye card
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		$('#imgMain').css('width', '390px');
	});																		

	$('.b1').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-01.gif').css('display', 'inline-block').css('object-fit', 'cover');			count=1;
	    $("html, body").animate({ scrollTop: 0 }, 800);														 				// first women
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');			
	    $('#imgMain').css('width', '880px');	   
	});

	$('.b2').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-letterpress0.jpg').css('display', 'inline-block').css('object-fit', 'cover');	count=2;
	    $("html, body").animate({ scrollTop: 0 }, 800);														 				// animal cards
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');											
	    $('#imgMain').css('width', '390px'); 
	});

	$('.b3').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-fruits0.jpg').css('display', 'inline-block').css('object-fit', 'cover');	  	count=3;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// wapo fruits
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
	    $('#imgMain').css('width', '660px');	  
	});

	$('.b4').click(function() {																							
	    $('#v1').attr('src', 'img/_drawing/a-04.jpg').css('display', 'inline-block').css('object-fit', 'cover');	      	count=4;
	    $("html, body").animate({ scrollTop: 0 }, 800);															 			// NYT badge
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px')
		$('#imgMain').css('width', '880px');
	});

	$('.b5').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-05.jpg').css('display', 'inline-block').css('object-fit', 'cover');			count=5;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// space monkey
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
	    $('#imgMain').css('width', '550px');
	});

	$('.b6').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-06.jpg').css('display', 'inline-block').css('object-fit', 'cover');			count=6;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// nyt travel
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
	    $('#imgMain').css('width', '390px');	 
	});

	$('.b7').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-07.jpg').css('display', 'inline-block').css('object-fit', 'cover');			count=7;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// title IX
	    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		$('#imgMain').css('width', '763px'); 
	});	

	$('.b8').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-08.jpg').css('display', 'inline-block').css('object-fit', 'cover');			count=8;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// snowman sketch
    	$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');;											
	    $('#imgMain').css('width', '850px');
	});

	$('.b9').click(function() {
		$('#v1').attr('src', 'img/_drawing/a-hvd0.jpg').css('display', 'inline-block').css('object-fit', 'cover');			count=9;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// harvard 1
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');											
	    $('#imgMain').css('width', '850px');
	});

	$('.b10').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-harvard0.jpg').css('display', 'inline-block').css('object-fit', 'cover');		count=10;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// more harvard?
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');
	    $('#imgMain').css('width', '650px');
	});

	$('.b11').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-11.png').css('display', 'inline-block').css('object-fit', 'cover');			count=11;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// valentine
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
		$('#imgMain').css('width', '650px'); 
	});

	$('.b12').click(function() {
		$('#v1').attr('src', 'img/_drawing/a-12.jpg').css('display', 'inline-block').css('object-fit', 'cover');			count=12;															
		$('h2').html(caption[count]).css('margin-top', '55px').css('margin-bottom', '55px');								// boston globe maze
		$("html, body").animate({ scrollTop: 0 }, 800);
		$('#imgMain').css('width', '500px'); 
	});


	$('.b13').click(function() {
	    $('#v1').attr('src', 'img/_drawing/a-13.jpg').css('display', 'inline-block').css('object-fit', 'cover');			count=13;
	    $("html, body").animate({ scrollTop: 0 }, 800);																		// embroidery
	    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
		$('#imgMain').css('width', '850px'); 
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
			if(count == 14){ 													// rule exception for gifs
			count=0;
			}
		} else if (e.keyCode == 37) { 
			count = count - 1;
			if(count == -1){
			count=13;
			}	
		}
		$('h2').html(caption[count]);

		if(count == 0){
		    $('#v1').attr('src', 'img/_drawing/a-00.jpg').css('display', 'inline-block').css('object-fit', 'cover');	    		//  nye card																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '390px');
		} else if(count == 1){
		    $('#v1').attr('src', 'img/_drawing/a-01.gif').css('display', 'inline-block').css('object-fit', 'cover');				// first women														 				
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');			
		    $('#imgMain').css('width', '880px');	
		} else if(count == 2){
		    $('#v1').attr('src', 'img/_drawing/a-letterpress0.jpg').css('display', 'inline-block').css('object-fit', 'cover');		// animal cards														 				
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');											
		    $('#imgMain').css('width', '390px'); 												
		} else if(count == 3){
		    $('#v1').attr('src', 'img/_drawing/a-fruits0.jpg').css('display', 'inline-block').css('object-fit', 'cover');	  		// wapo fruits																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		    $('#imgMain').css('width', '660px'); 
		} else if(count == 4){
		    $('#v1').attr('src', 'img/_drawing/a-04.jpg').css('display', 'inline-block').css('object-fit', 'cover');	      		// NYT badge															 			
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px')
			$('#imgMain').css('width', '880px');
		} else if(count == 5){
		    $('#v1').attr('src', 'img/_drawing/a-05.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// space monkey																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
		    $('#imgMain').css('width', '550px');
		} else if(count == 6){
		    $('#v1').attr('src', 'img/_drawing/a-06.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// nyt travel																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		    $('#imgMain').css('width', '390px');	 
		} else if(count == 7){
		    $('#v1').attr('src', 'img/_drawing/a-07.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// title IX																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '763px'); 
		} else if(count == 8){
		    $('#v1').attr('src', 'img/_drawing/a-08.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// snowman sketch																		
	    	$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');;											
		    $('#imgMain').css('width', '850px');
		} else if(count == 9){
			$('#v1').attr('src', 'img/_drawing/a-hvd0.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// harvard 1																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');											
		    $('#imgMain').css('width', '850px');
		} else if(count == 10){
		    $('#v1').attr('src', 'img/_drawing/a-harvard0.jpg').css('display', 'inline-block').css('object-fit', 'cover');			// more harvard?																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');
		    $('#imgMain').css('width', '650px'); 	 
		} else if(count == 11){
		    $('#v1').attr('src', 'img/_drawing/a-11.png').css('display', 'inline-block').css('object-fit', 'cover');				// valentine																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
			$('#imgMain').css('width', '650px'); 
		} else if(count == 12){
			$('#v1').attr('src', 'img/_drawing/a-12.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// boston globe maze														
			$('h2').html(caption[count]).css('margin-top', '55px').css('margin-bottom', '55px');					
			$('#imgMain').css('width', '500px'); 
		} else if(count == 13){
		    $('#v1').attr('src', 'img/_drawing/a-13.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// embroidery																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
			$('#imgMain').css('width', '850px'); 
		} else if(count == 14){
			count = 0;
		} else if (count == -1){
			count = 13;
		}
			subcount=0;  //resets subcount to zero after every click
		});	

// hover and click left arrow space

	$('#arrowR').click(function() {
	    count++;

		if(count == 0){
		    $('#v1').attr('src', 'img/_drawing/a-00.jpg').css('display', 'inline-block').css('object-fit', 'cover');	    		//  nye card																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '390px');
		} else if(count == 1){
		    $('#v1').attr('src', 'img/_drawing/a-01.gif').css('display', 'inline-block').css('object-fit', 'cover');				// first women														 				
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');			
		    $('#imgMain').css('width', '880px');	
		} else if(count == 2){
		    $('#v1').attr('src', 'img/_drawing/a-letterpress0.jpg').css('display', 'inline-block').css('object-fit', 'cover');		// animal cards														 				
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');											
		    $('#imgMain').css('width', '390px'); 												
		} else if(count == 3){
		    $('#v1').attr('src', 'img/_drawing/a-fruits0.jpg').css('display', 'inline-block').css('object-fit', 'cover');	  		// wapo fruits																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		    $('#imgMain').css('width', '660px'); 
		} else if(count == 4){
		    $('#v1').attr('src', 'img/_drawing/a-04.jpg').css('display', 'inline-block').css('object-fit', 'cover');	      		// NYT badge															 			
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px')
			$('#imgMain').css('width', '880px');
		} else if(count == 5){
		    $('#v1').attr('src', 'img/_drawing/a-05.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// space monkey																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
		    $('#imgMain').css('width', '550px');
		} else if(count == 6){
		    $('#v1').attr('src', 'img/_drawing/a-06.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// nyt travel																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		    $('#imgMain').css('width', '390px');	 
		} else if(count == 7){
		    $('#v1').attr('src', 'img/_drawing/a-07.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// title IX																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '763px'); 
		} else if(count == 8){
		    $('#v1').attr('src', 'img/_drawing/a-08.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// snowman sketch																		
	    	$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');;											
		    $('#imgMain').css('width', '850px');
		} else if(count == 9){
			$('#v1').attr('src', 'img/_drawing/a-hvd0.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// harvard 1																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');											
		    $('#imgMain').css('width', '850px');
		} else if(count == 10){
		    $('#v1').attr('src', 'img/_drawing/a-harvard0.jpg').css('display', 'inline-block').css('object-fit', 'cover');			// more harvard?																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');
		    $('#imgMain').css('width', '650px'); 	 
		} else if(count == 11){
		    $('#v1').attr('src', 'img/_drawing/a-11.png').css('display', 'inline-block').css('object-fit', 'cover');				// valentine																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
			$('#imgMain').css('width', '650px'); 
		} else if(count == 12){
			$('#v1').attr('src', 'img/_drawing/a-12.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// boston globe maze														
			$('h2').html(caption[count]).css('margin-top', '55px').css('margin-bottom', '55px');					
			$('#imgMain').css('width', '500px'); 
		} else if(count == 13){
		    $('#v1').attr('src', 'img/_drawing/a-13.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// embroidery																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
			$('#imgMain').css('width', '850px'); 
		} else if(count == 14){
			count = 0;
		    $('#v1').attr('src', 'img/_drawing/a-00.jpg').css('display', 'inline-block').css('object-fit', 'cover');	    		//  nye card																		
		    $('h2').html(caption[0]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '390px');
		}
			subcount=0;  //resets subcount to zero after every click
			$('h2').html(caption[count]);
		});	


// hover and click right arrow space

	$('#arrowL').click(function() {
	    count = count - 1;
				if(count == 0){
		    $('#v1').attr('src', 'img/_drawing/a-00.jpg').css('display', 'inline-block').css('object-fit', 'cover');	    		//  nye card																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '390px');
		} else if(count == 1){
		    $('#v1').attr('src', 'img/_drawing/a-01.gif').css('display', 'inline-block').css('object-fit', 'cover');				// first women														 				
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');			
		    $('#imgMain').css('width', '880px');	
		} else if(count == 2){
		    $('#v1').attr('src', 'img/_drawing/a-letterpress0.jpg').css('display', 'inline-block').css('object-fit', 'cover');		// animal cards														 				
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');											
		    $('#imgMain').css('width', '390px'); 												
		} else if(count == 3){
		    $('#v1').attr('src', 'img/_drawing/a-fruits0.jpg').css('display', 'inline-block').css('object-fit', 'cover');	  		// wapo fruits																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		    $('#imgMain').css('width', '660px'); 
		} else if(count == 4){
		    $('#v1').attr('src', 'img/_drawing/a-04.jpg').css('display', 'inline-block').css('object-fit', 'cover');	      		// NYT badge															 			
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px')
			$('#imgMain').css('width', '880px');
		} else if(count == 5){
		    $('#v1').attr('src', 'img/_drawing/a-05.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// space monkey																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');	 
		    $('#imgMain').css('width', '550px');
		} else if(count == 6){
		    $('#v1').attr('src', 'img/_drawing/a-06.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// nyt travel																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
		    $('#imgMain').css('width', '390px');	 
		} else if(count == 7){
		    $('#v1').attr('src', 'img/_drawing/a-07.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// title IX																		
		    $('h2').html(caption[count]).css('margin-top', '60px').css('margin-bottom', '50px');
			$('#imgMain').css('width', '763px'); 
		} else if(count == 8){
		    $('#v1').attr('src', 'img/_drawing/a-08.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// snowman sketch																		
	    	$('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');;											
		    $('#imgMain').css('width', '850px');
		} else if(count == 9){
			$('#v1').attr('src', 'img/_drawing/a-hvd0.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// harvard 1																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');											
		    $('#imgMain').css('width', '850px');
		} else if(count == 10){
		    $('#v1').attr('src', 'img/_drawing/a-harvard0.jpg').css('display', 'inline-block').css('object-fit', 'cover');			// more harvard?																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');
		    $('#imgMain').css('width', '650px'); 	 
		} else if(count == 11){
		    $('#v1').attr('src', 'img/_drawing/a-11.png').css('display', 'inline-block').css('object-fit', 'cover');				// valentine																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
			$('#imgMain').css('width', '650px'); 
		} else if(count == 12){
			$('#v1').attr('src', 'img/_drawing/a-12.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// boston globe maze														
			$('h2').html(caption[count]).css('margin-top', '55px').css('margin-bottom', '55px');					
			$('#imgMain').css('width', '500px'); 
		} else if(count == 13){
		    $('#v1').attr('src', 'img/_drawing/a-13.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// embroidery																		
		    $('h2').html(caption[count]).css('margin-top', '10px').css('margin-bottom', '100px');	
			$('#imgMain').css('width', '850px'); 
		} else if(count == -1){
			count=13;
		    $('#v1').attr('src', 'img/_drawing/a-13.jpg').css('display', 'inline-block').css('object-fit', 'cover');				// embroidery																		
		    $('h2').html(caption[13]).css('margin-top', '10px').css('margin-bottom', '100px');	
			$('#imgMain').css('width', '850px'); 	
		}
	$('h2').html(caption[count]);
	subcount=0;  //resets subcount to zero after every click
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

	$('#drawing').hover(function() {
	$('#drawing').css('opacity', 0.85).addClass('move').removeClass('return');

	}, function() {
			$('#drawing').css('opacity', 1).addClass('return').removeClass('move');		
	});

	$('#design a').hover(function() {
			$('#design').css('opacity', 1).addClass('move').removeClass('return');
			$('#design a').css('color', '#143DE0');
			$('#drawing a').css('color', '#6F98DE');
	}, function() {
			$('#design').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#design a').css('color', '#6F98DE');
			$('#drawing a').css('color', '#143DE0');
	});

	$('#gifs a').hover(function() {
			$('#gifs').css('opacity', 1).addClass('move').removeClass('return');
			$('#gifs a').css('color', '#143DE0');
			$('#drawing a').css('color', '#6F98DE');
	}, function() {
			$('#gifs').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#gifs a').css('color', '#6F98DE');
			$('#drawing a').css('color', '#143DE0');
	});

	$('#motion a').hover(function() {
			$('#motion').css('opacity', 1).addClass('move').removeClass('return');
			$('#motion a').css('color', '#143DE0');
			$('#drawing a').css('color', '#6F98DE');
	}, function() {
			$('#motion').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#motion a').css('color', '#6F98DE');
			$('#drawing a').css('color', '#143DE0');
	});

		$('#hola a').hover(function() {
			$('#hola').css('opacity', 1).addClass('move').removeClass('return');
			$('#hola a').css('color', '#143DE0');
			$('#drawing a').css('color', '#6F98DE');
	}, function() {
			$('#hola').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#hola a').css('color', '#6F98DE');
			$('#drawing a').css('color', '#143DE0');
	});


	// hover and clicking for MOBILE size

	$('h4').click(function() {							
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('a h5').css('display', 'block');		
	});

	$('h4').on("tap",function() {								
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('a h5').css('display', 'block');		
	});


	$('h4').hover(function() {
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('a h5').css('display', 'block');				
	});

	$('.menuSub').hover(function() {
	$(this).css('opacity', '0.7'); 
	}, function(){
	$(this).css('opacity', '1.0');	
	});

// FUSSY ASS MOBILE BUTTONS

	$('h5 #drawing').click(function() {
   	window.location = 'drawing.html';
 	});
 	$('h5 #design').click(function() {
   	window.location = 'design.html';
 	});
 	$('h5 #gifs').click(function() {
   	window.location = 'gifs.html';
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

