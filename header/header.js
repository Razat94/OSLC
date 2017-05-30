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
	
	// A person on stackoverflow stated this in regards to CSS/Javascript properties.
	// "I would recommend using the JavaScript equivalent properties. e.g. borderColor instead of 'border-color'. 
	// jQuery translates it for you but any translation makes your script slower."
	
	$("#mainMenu").mouseenter(function(){
		if ($('.mainButtons').is(':hidden')) {
			$('#mainMenu').css({
				backgroundColor: 'rgb(217, 217, 217)'
			});
		}
	});
	
	$("#mainMenu").mouseleave(function(){
		if ($('.mainButtons').is(':hidden')) {
			$('#mainMenu').css({
				backgroundColor: 'rgb(242, 242, 242)'
			});
		} 
	});
	
    $("#mainMenu").click(function(){
		if ($('.mainButtons').is(':hidden')) {
			$('#mainMenu').css({
				backgroundColor: 'rgb(217, 217, 217)'
			});
		} 
		 
		else {
			$('#mainMenu').css({
				backgroundColor: 'rgb(242, 242, 242)'
			});
		}
	
        $(".mainButtons").slideToggle(300);
		
    });
	
});
