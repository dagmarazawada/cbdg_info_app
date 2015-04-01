$(function() {
	$('#menu').mmenu({
            offCanvas: {
               position  : "right"
            },
            //searchfield: true
         }, {
         // configuration
         classNames: {
            fixedElements: {
               fixed: "fixed"
         	}
         } 
   }); 
   // mmenu przeslania footer z linkami, obejscie
	$('#mm-0').css("z-index", "-1");

	// menu wersja desktop
	$('.menu').dropit({ 
		action: 'mouseenter' 
	});
	
}); 
