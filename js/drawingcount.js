
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
	
// multipe images in series
	

	$('#v1').click(function() {	
		
		if (count == 5){          // checks to see if washington post fruits are selected
			subcount++;
			$('#v1').css('cursor', 'pointer'); // forward arrow cursor
				if (subcount == 12){
					subcount=0;
					}
				
			$('#v1').attr('src', 'img/_main/a-fruits' + subcount + '.jpg');
			$('h2').html(subcap1[subcount]);
		} else {
		subcount=0;	
		}	
	});


	
// SET TEXT FOR EACH OF THE IMAGES

	var caption  = ["Welcome screen for Fathom's work retreat in Salem, Massachusetts", 		// 1
					"An animated collection of Fathom's favorite holiday recipes. Click the image for more recipes; full site lives <a href='http://fathom.info/holiday2016' target='blank'>here</a>",						// 2
					"Twelve months of fitness goals for the New Year [1 of 12]  |  The Washington Post",							// 3
					"To celebrate a century of women being elected to statewide office, Fathom created this 'First of Her Kind' poster, featuring the first women from each state to be elected to statewide office (including senators, governors, and members of the house). Learn more about these badass women and purchase a poster <a href='http://www.fathom.info/first' target='blank'>here</a>.",				// 4
					"Greeting card",									// 5
					"Sewn illustration for an article on earning focused business certificates rather than a full MBA  |  The New York Times",									// 6
					"Drawing on location  |  Harvard Museum of Natural History, part I",									// 7
					"Drawing on location  |  Harvard Museum of Natural History, part II",									// 8
					"Letterpress greeting card set",									// 9
					"Illustration on how different travel sites often offer identical deals  |  The New York Times",									// 10
					"Drawing for an episode of Fathom's podcast, <a href='http://fathom.info/ebd' target='blank'>Especially Big Data</a>",									// 11
					"Illustration for an article about the history of Title IX  |  Bust Magazine",									// 12
					"Valentine [ lyrics from Morrissey's 'First of the Gang to Die' ]",									// 1
					"Op-Ed illustration on navigating dietary restrictions  |  The Boston Globe",									// 2
					"Embroidery",									// 3
					"Cover illustration for St. Louis Magazine's annual education issue",									// 4
					"Sketchbook drawing: April blizzards",									// 5
					"Beastiary of International Vice. I gathered data on alcohol consumption, smoking habits, mairjuana use, BMI, and crime rates for 20 different countries. These categories correlate to the size and shape of each of the beasts. A thick cloud of hair indicates heavy smoking, more teeth indicates more violent crime, a large nose indicates high alcohol consumption, and more legs indicate higher levels of theft.",
					"Cut paper for a film about notable people whose fingers or toes do not equal ten",									// 8
					"Pattern series for activity books  |  The Girl Scouts",									// 9
					"Sketchbook drawing",									// 10
					"Sketchbook drawing",									// 11
					"Sketchbook drawing",									// 12
					]

	var subcap1  =["Twelve months of fitness goals for the New Year [1 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [2 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [3 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [4 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [5 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [6 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [7 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [8 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [9 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [10 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [11 of 12]  |  The Washington Post",
				   "Twelve months of fitness goals for the New Year [12 of 12]  |  The Washington Post",
					]


// difining count values //

	if (count == 0){																		// gran squares
		$('#v1').attr('src', 'img/_main/a-00.gif').css('display', 'inline-block').css('object-fit', 'cover');
	    $("html, body").animate({ scrollTop: 0 }, 800);	
	    $('h2').html(caption[count]);   											       
		$('#main').css('margin-bottom', '0px');
		$('#imgMain').css('width', '880px').css('height', '400px');
	} 

	if (count == 1){
		$('#v1').attr('src', 'img/_main/a-01.gif').css('display', 'inline-block').css('object-fit', 'cover');
	    $("html, body").animate({ scrollTop: 0 }, 800);	
	    $('h2').html(caption[count]);   											       
		$('#main').css('margin-bottom', '0px');
		$('#imgMain').css('width', '880px').css('height', '400px');
	} 

	if (count == 2){
	    $('#v1').attr('src', 'img/_main/a-01.gif').css('display', 'inline-block').css('object-fit', 'cover');	        
	    $("html, body").animate({ scrollTop: 0 }, 800);	
	    $('h2').html(caption[count]);   											       // gran squares
		$('#main').css('margin-bottom', '0px');
		$('#imgMain').css('width', '880px').css('height', '400px');
	}																		

	

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
			if(count == 16){ 													// rule exception for gifs
			count=0;
			}
		} else if (e.keyCode == 37) { 
			count = count - 1;
			if(count == -1){
			count=15;
			}	
		}
		$('h2').html(caption[count]);
		if(count == 0){
			$('#v1').attr('src', 'img/_main/a-00.gif');    
			} else if(count == 1){
			$('#v1').attr('src', 'img/_main/a-01.gif');
			} else if(count == 2){
			$('#v1').attr('src', 'img/_main/a-02.jpg');
			} else if(count == 3){
			$('#v1').attr('src', 'img/_main/a-03.jpg');    
			} else if(count == 4){
			$('#v1').attr('src', 'img/_main/a-04.gif');
			} else if(count == 5){
			$('#v1').attr('src', 'img/_main/a-05.jpg');
			} else if(count == 6){
			$('#v1').attr('src', 'img/_main/a-06.jpg');
			} else if(count == 7){
			$('#v1').attr('src', 'img/_main/a-07.jpg');
			} else if(count == 8){
			$('#v1').attr('src', 'img/_main/a-08.jpg');    
			} else if(count == 9){
			$('#v1').attr('src', 'img/_main/a-09.jpg');
			} else if(count == 10){
			$('#v1').attr('src', 'img/_main/a-10.jpg');
			} else if(count == 11){
			$('#v1').attr('src', 'img/_main/a-11.jpg');
			} else if(count == 12){
			$('#v1').attr('src', 'img/_main/a-12.jpg');
			} else if(count == 13){
			$('#v1').attr('src', 'img/_main/a-13.jpg');
			} else if(count == 14){
			$('#v1').attr('src', 'img/_main/a-14.jpg');
			} else if(count == 15){
			$('#v1').attr('src', 'img/_main/a-15.jpg');
			} else if(count == 16){
			$('#v1').attr('src', 'img/_main/a-16.jpg');    
			} else if(count == 17){
			$('#v1').attr('src', 'img/_main/a-17.jpg');
			} else if(count == 18){
			$('#v1').attr('src', 'img/_main/a-18.jpg');
			} else if(count == 19){
			$('#v1').attr('src', 'img/_main/a-19.jpg');
			} else if(count == 20){
			count==0;
			}
			subcount=0;  //resets subcount to zero after every click
		});	

// hover and click left arrow space

	$('#arrowR').click(function() {
	    count++;

	if(count == 0){
	$('#v1').attr('src', 'img/_main/a-00.gif');    
	} else if(count == 1){
	$('#v1').attr('src', 'img/_main/a-01.gif').css('cursor', 'default');
	} else if(count == 2){
	$('#v1').attr('src', 'img/_main/a-02.jpg').css('cursor', 'pointer');
	} else if(count == 3){
	$('#v1').attr('src', 'img/_main/a-03.jpg').css('cursor', 'default');    
	} else if(count == 4){
	$('#v1').attr('src', 'img/_main/a-04.gif');
	} else if(count == 5){
	$('#v1').attr('src', 'img/_main/a-05.jpg');
	} else if(count == 6){
	$('#v1').attr('src', 'img/_main/a-06.jpg');
	} else if(count == 7){
	$('#v1').attr('src', 'img/_main/a-07.jpg');
	} else if(count == 8){
	$('#v1').attr('src', 'img/_main/a-08.jpg');    
	} else if(count == 9){
	$('#v1').attr('src', 'img/_main/a-09.jpg');
	} else if(count == 10){
	$('#v1').attr('src', 'img/_main/a-10.jpg');
	} else if(count == 11){
	$('#v1').attr('src', 'img/_main/a-11.jpg');
	} else if(count == 12){
	$('#v1').attr('src', 'img/_main/a-12.jpg');
	} else if(count == 13){
	$('#v1').attr('src', 'img/_main/a-13.jpg');
	} else if(count == 14){
	$('#v1').attr('src', 'img/_main/a-14.jpg');
	} else if(count == 15){
	$('#v1').attr('src', 'img/_main/a-15.jpg');
	} else if(count == 16){
		count==0;
		$('#v1').attr('src', 'img/_main/a-00.gif');    
	// } else if(count == 17){
	// $('#v1').attr('src', 'img/_main/a-17.jpg');
	// } else if(count == 18){
	// $('#v1').attr('src', 'img/_main/a-18.jpg');
	// } else if(count == 19){
	// $('#v1').attr('src', 'img/_main/a-19.jpg');
	// } else if(count == 20){
	//   count==0;
	}
	$('h2').html(caption[count]);
	subcount=0;  //resets subcount to zero after every click
	});


// hover and click right arrow space

	$('#arrowL').click(function() {
	    count = count - 1;
	if(count == 0){
	$('#v1').attr('src', 'img/_main/a-00.gif');    
	} else if(count == 1){
	$('#v1').attr('src', 'img/_main/a-01.gif').css('cursor', 'default');
	} else if(count == 2){
	$('#v1').attr('src', 'img/_main/a-02.jpg').css('cursor', 'pointer');
	} else if(count == 3){
	$('#v1').attr('src', 'img/_main/a-03.jpg').css('cursor', 'default');    
	} else if(count == 4){
	$('#v1').attr('src', 'img/_main/a-04.gif');
	} else if(count == 5){
	$('#v1').attr('src', 'img/_main/a-05.jpg');
	} else if(count == 6){
	$('#v1').attr('src', 'img/_main/a-06.jpg');
	} else if(count == 7){
	$('#v1').attr('src', 'img/_main/a-07.jpg');
	} else if(count == 8){
	$('#v1').attr('src', 'img/_main/a-08.jpg');    
	} else if(count == 9){
	$('#v1').attr('src', 'img/_main/a-09.jpg');
	} else if(count == 10){
	$('#v1').attr('src', 'img/_main/a-10.jpg');
	} else if(count == 11){
	$('#v1').attr('src', 'img/_main/a-11.jpg');
	} else if(count == 12){
	$('#v1').attr('src', 'img/_main/a-12.jpg');
	} else if(count == 13){
	$('#v1').attr('src', 'img/_main/a-13.jpg');
	} else if(count == 14){
	$('#v1').attr('src', 'img/_main/a-14.jpg');
	} else if(count == 15){
	$('#v1').attr('src', 'img/_main/a-15.jpg');
	} else if(count == -1){
		count==15;  
		$('#v1').attr('src', 'img/_main/a-15.jpg');  

	// } else if(count == 17){
	// $('#v1').attr('src', 'img/_main/a-17.jpg');
	// } else if(count == 18){
	// $('#v1').attr('src', 'img/_main/a-18.jpg');
	// } else if(count == 19){
	// $('#v1').attr('src', 'img/_main/a-19.jpg');
	// } else if(count == -1){

	}
	$('h2').html(caption[count]);
	subcount=0;  //resets subcount to zero after every click
	});	

// hovering arrow to change opacity

	$('#arrowL').hover(function() {
	$(this).fadeTo('slow', 1);		
	}, function() {
	$(this).fadeTo('slow', 0.4);	
	});

	// hovering arrow to change opacity

	$('#arrowR').hover(function() {
	$(this).fadeTo('slow', 1);		
	}, function() {
	$(this).fadeTo('slow', 0.5);	
	});

// hovering email on about page

	$('#email').hover(function(){
	$(this).css('background-color', '#fff000').css('color', '#80B5FF'); 
	}, function(){
	$(this).css('background-color', '#E7E6F2').css('color', '#7194DE');	
	});
			
// hovering top navigation elements	

	$('#drawing').hover(function() {
	$('#drawing').css('opacity', 0.65).addClass('move').removeClass('return');
	$('#drawing a').css('color', '#7EE5F2');

	}, function() {
			$('#drawing').css('opacity', 1).addClass('return').removeClass('move');
			$('#drawing a').css('color', '#ffffff');
	});

	$('#motion a').hover(function() {
			$('#motion').css('opacity', 0.65).addClass('move').removeClass('return');
			$('#motion a').css('color', '#7EE5F2');
	}, function() {
			$('#motion').css('opacity', 1).addClass('return').removeClass('move');
			$('#motion a').css('color', '#ffffff');
	});

	$('#design a').hover(function() {
			$('#design').css('opacity', .65).addClass('move').removeClass('return');
			$('#design a').css('color', '#7EE5F2');
	}, function() {
			$('#design').css('opacity', 9).addClass('return').removeClass('move');
			$('#design a').css('color', '#ffffff');
	});

		$('#hola a').hover(function() {
			$('#hola').css('opacity', 0.65).addClass('move').removeClass('return');
			$('#hola a').css('color', '#7EE5F2');
	}, function() {
			$('#hola').css('opacity', 1).addClass('return').removeClass('move');
			$('#hola a').css('color', '#ffffff');
	});



// resizing for different screen widths and mobile

	$(window).resize(function(){
	console.log(window.innerWidth, window.innerHeight);  

		if (window.innerWidth > 760){

			$('#head').css('opacity', '1');
			$('#drawing, #hola, #design, #sketch, #arrow').css('display', 'inline-block');
			$('#head .headlink').css('height', '45px');
			$('#box').css('margin-left', '0');
			$('#boxhidden').css('diplay', 'none');
			$('#box').css('margin-left', '5%').css('margin-right', '5%').css('width', '90%');;	// restore dark background margins
			$('#menu').css('display', 'none');
			$('#head').css('display', 'block');
			$('#menu').css('display', 'none');
			$('#mobilehead').css('display', 'none');
			$('#body').css('display', 'block');
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

		// } else if (window.innerWidth < 1090 && window.innerWidth > 850{
		// 	$('#body').css('display', 'none');
		// 	$('#main').css({
		// 			'margin-left': '0px',
		// 			'width': '100%',
		// 			 });	
		} else {

			$('#box').css('margin-left', '0').css('margin-right', '0%').css('width', '100%'); // kill dark background margins

			$('#drawing, #hola, #design, #sketch, #arrow').css('display', 'none');
			$('#menu').css('display', 'inline').css('background-color', '#59D6FF');
			$('#mobilehead').css('display', 'inline-block');
			$('#body').css('display', 'none');
			$('#head').css('opacity', '0');
			$('#main').css({
					'margin-left': '0px',
					'width': '100%',
					 });				



		}


	});


});

