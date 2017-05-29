$(document).ready(function(){
	
	// The resize event is sent to the window element when the size of the browser window changes:
	$( window ).resize(function() {

		// if statemnt must go within this function!
		// otherwise, if the if statement was set outside of the funciton,
		// then the code will only be executed once when the document is ready.
		
		// Behind the scene, jQuery's hide() and show() just set display: none or display: block, respectively.
		if ( $(window).width() > 752 ) {
			$(".mainButtons").hide();
			// $('.mainButtons').css('display','none'); // this also could've worked.
		}
		
	});
	
  $("#mainMenu").click(function(){
    $(".mainButtons").slideToggle();
  });
	
});
