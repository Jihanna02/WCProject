// A $( document ).ready() block.
$( document ).ready(function() {

console.log ("Ready!")

// "sticky" header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
       // $(".navsplash").toggleClass("out");
       $(".navsticky").addClass("in");
       $(".navsplash").addClass("out").fadeOut(800);
   } else {
       // $(".navsplash").toggleClass("in");
       $(".navsticky").removeClass("in");
       $(".navsplash").fadeIn(800).removeClass("out");
   }

});

// paralax windows
$('.parallax-window').parallax({imageSrc: 'img/scans/furst-sketch-210409-1.jpg'});

//menu for "holdings" section

	 $("#lbat").click(function () {
		
		$('#aerospace, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#batmaninc').removeClass( 'hide'); 

	  })

     $("#laero").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#aerospace').removeClass( 'hide'); 

	  })

 	$("#ltech").click(function () {
		
		$('#batmaninc, #aerospace, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#technologies').removeClass( 'hide'); 

	  }) 
 	
 	$("#lfood").click(function () {
		
		$('#batmaninc, #technologies, #aerospace, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#foods').removeClass( 'hide'); 

	  })
 	
 	$("#lship").click(function () {
		
		$('#batmaninc, #technologies, #foods, #aerospace, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#shipping').removeClass( 'hide'); 

	  }) 
 	
 	$("#lyard").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #aerospace, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#yards').removeClass( 'hide'); 

	  })

 	$("#lbio").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #aerospace, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#biotech').removeClass( 'hide'); 

	  }) 

 	$("#lmedic").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #aerospace, #electronics, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#medical').removeClass( 'hide'); 

	  })

	 $("#lelect").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #aerospace, #entertainment, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#electronics').removeClass( 'hide'); 

	  }) 

 	$("#lenter").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #aerospace, #construction, #chemicals, #steel').addClass('hide'); 
	  	$('#entertainment').removeClass( 'hide'); 

	  })

 	$("#lconst").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #aerospace, #chemicals, #steel').addClass('hide'); 
	  	$('#construction').removeClass( 'hide'); 

	  }) 

 	$("#lchemi").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #aerospace, #steel').addClass('hide'); 
	  	$('#chemicals').removeClass( 'hide'); 

	  })

 $("#lsteel").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #aerospace').addClass('hide'); 
	  	$('#steel').removeClass( 'hide'); 

	  })
});

