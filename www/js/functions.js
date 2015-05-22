$(function() {
	
	$('#menu').mmenu({
			isMenu: true,
            offCanvas: {
               position  : "right"
            }
            ,onClick: {
		        close: true
		 	}
            //,searchfield: true
         }, {
         // configuration
         classNames: {
            fixedElements: {
               fixed: "fixed"
         	}
         }
   });

	// menu wersja desktop
	$('.menu').dropit({ 
		action: 'mouseenter' 
	});
	
	// obejscie do wyswietlenia 3 kwadratow naglowka w IE
	if($.browser.msie || ($.browser.mozilla && $.browser.version == 11) ){ 
		console.log($.browser);
		$('li.float-up').css("top", "2em");
	}
	
	//dodawanie klasy pomaranczowego btn pod naglowek w zaleznosci od szerokosci okna
	/*
	$(window).on("load resize", function() {
		if ($( window ).width() > 400) {
			$('#mainTitle').removeClass("btn btn-large btn-warning");
		}
		if ($( window ).width() <= 400) {
			$('#mainTitle').addClass("btn btn-large btn-warning");
		}
	});
	*/
		
	i18n.init(
		{ 	
		fallbackLng: 'pl',
		preload: ['en', 'pl']
		},
		//{ preload: ['en', 'pl'] },
		//{ lng: 'pl'},
		function(t) {
		  $(".cbdg-unit").i18n();
		  $(".lang").i18n();
		  $(".header").i18n();
		  $(".menu").i18n();
		  $("#menu").i18n();
		  $(".container").i18n();
		  
		});

	$('#flagPL').live("click", function(){
		i18n.setLng('pl', function() { 
			$(".cbdg-unit").i18n();
			$(".lang").i18n();
			$(".header").i18n();
			$(".menu").i18n();
			$("#menu").i18n();
			$(".container").i18n();
		});
	});
	
	$('#flagUK').live("click", function(){
		i18n.setLng('en', function() { 
			$(".cbdg-unit").i18n();
			$(".lang").i18n();
			$(".header").i18n();
			$(".menu").i18n();
			$("#menu").i18n();
			$(".container").i18n();
		});
	});	
	// google analytics tracker
	//_uacct = "UA-579068-6";
	//urchinTracker();
}); 
