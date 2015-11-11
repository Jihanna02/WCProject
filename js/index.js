// A $( document ).ready() block.
$( document ).ready(function() {

	console.log ("Ready!")

	// class switches to/from "sticky" header when user scrolls past 50px
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

	// read more/less links
	$(".history").addClass("hide");

	// hiding hidden content and "read less" link on load of page
    $("#show-this-on-click").hide();
    $(".readless").hide();

    // on click of "read more", show hidden content and "read less" link
	$(".readmore").click(function(){
		//stop page from reloading
		event.preventDefault();

        $(".history").slideDown("slow");
        $(".readless").show();

        //hide "read more" link
         $(".readmore").hide();
   	});
 	
 	// on click of "read less", hide hidden content and "read less" link
	$(".readless").click(function(){
		//stop page from reloading
		event.preventDefault();

        $(".history").slideUp("slow");
        $(".readless").hide();

        //show "read more" link
         $(".readmore").show();
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

	// menu for "holdings" section (desktop)
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

	// toggle menu for "holdings" section (mobile)

	$("#lbat2").click(function(){
	    $("#batmaninc2").toggleClass("hide");
	  });

	$("#laero2").click(function(){
	    $("#aerospace2").toggleClass("hide");
	  });

	$("#ltech2").click(function(){
	    $("#technologies2").toggleClass("hide");
	  });

	$("#lfood2").click(function(){
	    $("#foods2").toggleClass("hide");
	  });

	$("#lship2").click(function(){
	    $("#shipping2").toggleClass("hide");
	  });

	$("#lyard2").click(function(){
	    $("#yards2").toggleClass("hide");
	  });

	$("#lindus2").click(function(){
	    $("#industries2").toggleClass("hide");
	  });

	$("#lbio2").click(function(){
	    $("#biotech2").toggleClass("hide");
	  });

	$("#lmedic2").click(function(){
	    $("#medical2").toggleClass("hide");
	  });

	$("#lelect2").click(function(){
	    $("#electronics2").toggleClass("hide");
	  });

	$("#lenter2").click(function(){
	    $("#entertainment2").toggleClass("hide");
	  });

	$("#lconst2").click(function(){
	    $("#construction2").toggleClass("hide");
	  });

	$("#lchemi2").click(function(){
	    $("#chemicals2").toggleClass("hide");
	  });

	$("#lsteel2s").click(function(){
	    $("#steel2").toggleClass("hide");
	  });


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


