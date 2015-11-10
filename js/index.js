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
$('.parallax-window1').parallax({imageSrc: 'img/scans/Oldgotham-32.jpg'});

$('.parallax-window2').parallax({imageSrc: 'img/scans/Oldgotham-4.jpg'});

// read more links
 $(".history").addClass("hide");
	$("button").click(function(){
        $(".history").toggleClass("hide");
    });

 $(".twaynefp").addClass("hide");
  $(".history").addClass("hide");
	$(".twaynefh").click(function(){
        $(".twaynefp").toggleClass("hide");
    });

 $(".mwaynefp").addClass("hide");
  $(".history").addClass("hide");
	$(".mwaynefh").click(function(){
        $(".mwaynefp").toggleClass("hide");
    });

//menu for "holdings" section

	 $("#lbat").click(function () {
		
		$('#aerospace, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#batmaninc').slideDown(600); 

	  })

     $("#laero").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#aerospace').slideDown(600); 

	  })

 	$("#ltech").click(function () {
		
		$('#batmaninc, #aerospace, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#technologies').slideDown(600);

	  }) 
 	
 	$("#lfood").click(function () {
		
		$('#batmaninc, #technologies, #aerospace, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#foods').slideDown(600); 

	  })
 	
 	$("#lship").click(function () {
		
		$('#batmaninc, #technologies, #foods, #aerospace, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#shipping').slideDown(600); 

	  }) 
 	
 	$("#lyard").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #aerospace, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600);  
	  	$('#yards').slideDown(600);  

	  })

 		$("#lindus").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #aerospace, #medical, #electronics, #entertainment, #construction, #chemicals, #steel, #bio').slideUp(600);  
	  	$('#industries').slideDown(600); 

	  }) 

 	$("#lbio").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #aerospace, #medical, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600);  
	  	$('#biotech').slideDown(600); 

	  }) 

 	$("#lmedic").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #aerospace, #electronics, #entertainment, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#medical').slideDown(600); 

	  })

	 $("#lelect").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #aerospace, #entertainment, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#electronics').slideDown(600); 

	  }) 

 	$("#lenter").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #aerospace, #construction, #chemicals, #steel').slideUp(600); 
	  	$('#entertainment').slideDown(600); 

	  })

 	$("#lconst").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #aerospace, #chemicals, #steel').slideUp(600); 
	  	$('#construction').slideDown(600);  

	  }) 

 	$("#lchemi").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #aerospace, #steel').slideUp(600); 
	  	$('#chemicals').slideDown(600); 

	  })

 $("#lsteel").click(function () {
		
		$('#batmaninc, #technologies, #foods, #shipping, #yards, #industries, #biotech, #medical, #electronics, #entertainment, #construction, #chemicals, #aerospace').slideUp(600); 
	  	$('#steel').slideDown(600); 

	  })

 // contact form

 $("form").on("submit", function(e){
    e.preventDefault();

    var fullName = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    var subject = $("select[name='subject']").val();
    var message = $("textarea[name='message']").val();

    var data = {
      userName: fullName,
      userEmailAddress: email,
      userSubject: subject,
      userMessage: message
    }
    console.log(data);
  });
});

//mobile toggle
	 // $("#batmaninc").addClass("hide");

	$("#lbat2").click(function(){
        $("#batmaninc2").toggleClass("hide");
    });


	$("#laero2").click(function(){
        $("#aerospace2").toggleClass("hide");
    });

