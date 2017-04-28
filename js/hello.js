
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

	$('#arrow').click(function() {
	    count++;
	if(count < 12){
	$('#v1').attr('src', 'img/_drawing/test' + count + '.jpg');
	$('h2').text(caption[count]);
	} else if(count = 11){
		count=0;
	$('#v1').attr('src', 'img/_drawing/test' + count + '.jpg');
	$('h2').text(caption[0]);	
	}
	});


	
// SET TEXT FOR EACH OF THE IMAGES

	var caption  = ["Drawing image caption 1",			// 1
					"Drawing image caption 2",			// 2
					"Drawing image caption 3",			// 3
					"Animation for a Fathom event in Salem, MA.",			// 4
					"Drawing image caption 5",			// 5
					"Drawing image caption 6",			// 6
					"Drawing image caption 7",			// 7
					"Drawing image caption 8",			// 8
					"Drawing image caption 9",			// 9
					"Drawing image caption 10",			// 10
					"Drawing image caption 11",			// 11
					"Drawing image caption 12",			// 12
					]



// SET LARGE IMAGE WITH THUMBNAILS
	$('.b0').click(function() {
	    $('#v1').attr('src', 'img/_drawing/0_appliances.gif').css('display', 'inline-block');	    count=0;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);
	    $('#movie').css('display', 'none');
	    $('#v1, #main').css('height', '330px');
		 //    $('#imgMain').append($('<img>', { 
		 //    src : 'img/_drawing/0_appliances.gif', 
		 //    width : 640, 
		 //    height : 275
			// }));
			// $('#imgMain').append($('<img>', { 
		 //    src : 'img/_drawing/0_appliances.gif', 
		 //    width : 640, 
		 //    height : 275
			// }));

	});

		$('.b0').click(function() {
	    $('#v1').attr('src', 'img/_drawing/0_appliances.gif').css('display', 'inline-block');	    count=0;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);
	    $('#movie').css('display', 'none');
	    $('#v1, #main').css('height', '350px').css('margin-bottom', '30px');
		 //    $('#imgMain').append($('<img>', { 
		 //    src : 'img/_drawing/0_appliances.gif', 
		 //    width : 640, 
		 //    height : 275
			// }));
			// $('#imgMain').append($('<img>', { 
		 //    src : 'img/_drawing/0_appliances.gif', 
		 //    width : 640, 
		 //    height : 275
			// }));

	});


	$('.b1').click(function() {
	    $('#v1').css('display', 'none');												    count=1;
	    $("html, body").animate({ scrollTop: 0 }, 800);	
	    $('h2').text(caption[count]);   
	    $('#movie').css('display', 'inline-block').attr('src', "mov/urbag.mp4"); 

	});
	$('.b2').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test2.jpg').css('display', 'inline-block');		count=2;
	    $("html, body").animate({ scrollTop: 0 }, 800);	
	    $('h2').text(caption[count]);	
	    $('#movie').css('display', 'none'); 
	    $('#v1, #main').css('height', '550px').css('margin-bottom', '30px');

	});
	$('.b3').click(function() {
	    $('#v1').attr('src', 'img/_drawing/gato.gif').css('display', 'inline-block');		count=3;
	    $("html, body").animate({ scrollTop: 0 }, 800);	
	    $('h2').text(caption[count]);
	    $('#movie').css('display', 'none');
	});
	$('.b4').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test4.jpg').css('display', 'inline-block');		count=4;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);
	    $('#movie').css('display', 'none');
	});
	$('.b5').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test5.jpg').css('display', 'inline-block');		count=5;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);
	    $('#movie').css('display', 'none');	   

	});
	$('.b6').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test6.jpg').css('display', 'inline-block');		count=6;
	    $("html, body").animate({ scrollTop: 0 }, 800);	
	   	$('h2').text(caption[count]);	
	   	$('#movie').css('display', 'none');   
   
	});
	$('.b7').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test7.jpg').css('display', 'inline-block');		count=7;
	    $("html, body").animate({ scrollTop: 0 }, 800);	 
	    $('h2').text(caption[count]);	
	    $('#movie').css('display', 'none');  
	});
	$('.b8').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test8.jpg').css('display', 'inline-block');		count=8;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);	
	    $('#movie').css('display', 'none');
	});
	$('.b9').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test9.jpg').css('display', 'inline-block');		count=9;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);	
	    $('#movie').css('display', 'none');
	});
	$('.b10').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test10.jpg').css('display', 'inline-block');		count=10;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);	
	    $('#movie').css('display', 'none');
	});
	$('.b11').click(function() {
	    $('#v1').attr('src', 'img/_drawing/test11.jpg').css('display', 'inline-block');		count=11;
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    $('h2').text(caption[count]);
	    $('#movie').css('display', 'none');	
	});


// clicking on any image box turns on large gallery box at top + H2 description text

	for (var j=0; j<20; j++){	
	$('.b' + j).click(function() {
		$('#main').css('display', 'inline-block');
		$('h2').css('display', 'inline-block');

		});
	$('.b' + j).hover(function() {
		$(this).fadeTo(300, 0.82);
		}, function() {
		$(this).fadeTo(600, 1.0);
		});
	}

// ARROW key to advance image <-- && -->

	 $(document).keydown(function(e){ 
		if (e.keyCode == 39) { 
			count++;
			if(count == 3){ 													// rule exception for gifs
			$('#v1').attr('src', 'img/_drawing/gato.gif');
			} else if(count < 12){
			$('#v1').attr('src', 'img/_drawing/test' + count + '.jpg');
			} else if(count = 12){
				count=0;
			$('#v1').attr('src', 'img/_drawing/test' + count + '.jpg');	
			}												
			$('h2').text(caption[count]);	
		} else if (e.keyCode == 37) { 
			count = count - 1;
			if(count == 3){ 													// rule exception for gifs
			$('#v1').attr('src', 'img/_drawing/gato.gif');
			} else if(count > -1){
			$('#v1').attr('src', 'img/_drawing/test' + count + '.jpg');
			} else if(count = -1){
				count=11;
			$('#v1').attr('src', 'img/_drawing/test' + count + '.jpg');	
			}												
			$('h2').text(caption[count]);	
		}		
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

	$('.email').hover(function(){
	$(this).css('background-color', '#fff000').css('color', '#80B5FF'); 
	}, function(){
	$(this).css('background-color', '#E7E6F2').css('color', '#7194DE');	
	});
			
// hovering top navigation elements	

	$('#hola').hover(function() {
	$('#hola').css('opacity', 0.85).addClass('move').removeClass('return');

	}, function() {
			$('#hola').css('opacity', 1).addClass('return').removeClass('move');		
	});

	$('#design a').hover(function() {
			$('#design').css('opacity', 1).addClass('move').removeClass('return');
			$('#design a').css('color', '#143DE0');
			$('#hola a').css('color', '#6F98DE');
	}, function() {
			$('#design').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#design a').css('color', '#6F98DE');
			$('#hola a').css('color', '#143DE0');
	});

	$('#motion a').hover(function() {
			$('#motion').css('opacity', 1).addClass('move').removeClass('return');
			$('#motion a').css('color', '#143DE0');
			$('#hola a').css('color', '#6F98DE');
	}, function() {
			$('#motion').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#motion a').css('color', '#6F98DE');
			$('#hola a').css('color', '#143DE0');
	});

	$('#gifs a').hover(function() {
			$('#gifs').css('opacity', 1).addClass('move').removeClass('return');
			$('#gifs a').css('color', '#143DE0');
			$('#hola a').css('color', '#6F98DE');
	}, function() {
			$('#gifs').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#gifs a').css('color', '#6F98DE');
			$('#hola a').css('color', '#143DE0');
	});

	$('#drawing a').hover(function() {
			$('#drawing').css('opacity', 1).addClass('move').removeClass('return');
			$('#drawing a').css('color', '#143DE0');
			$('#hola a').css('color', '#6F98DE');
	}, function() {
			$('#drawing').css('opacity', 0.75).addClass('return').removeClass('move');
			$('#drawing a').css('color', '#6F98DE');
			$('#hola a').css('color', '#143DE0');
	});

	// hover and clicking for MOBILE size

	$('h4').click(function() {							
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('h5').css('display', 'block');	
		$('#aboutbox').css('margin-top', '345px');	
	});

	$('h4').on("tap",function() {								
		$('.menuSub').css('opacity', '1').css('height', '40px').css('padding-bottom', '8px');
		$('h5').css('display', 'block');
		$('#aboutbox').css('margin-top', '365px');			
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
			$('abouttxt').css('margin-left', '0px');
			$('#aboutbox').css('margin-top', '115px');
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
					'width': '110%', // kill dark background margins
					'min-width': '500px', // can't shrink less than size of phone screen
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
			$('#aboutbox').css('margin-top', '115px');
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
					'width': '110%', // kill dark background margins
					'min-width': '500px', // can't shrink less than size of phone screen
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

