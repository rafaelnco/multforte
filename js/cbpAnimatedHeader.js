/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var height = document  
            .getElementsByClassName("myheader")[0]
            .offsetHeight;

	var docElem = document.documentElement,
		header = document.querySelector( '.unique' ),
		didScroll = false,
		changeHeaderOn = 300,
		changeHeaderOn2 = height;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
		}

		/*if ( sy >= changeHeaderOn2 ) {
			classie.add( header, 'navbar-fixed-top' );
		}
		else {
			classie.remove( header, 'navbar-fixed-top' );
		}*/

		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();