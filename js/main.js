/* (function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

})(jQuery);
 */

const password= document.getElementById("password-field"),
		icon=document.querySelector(".field-icon");

icon.addEventListener("click",e=>{
	if(password.type==="password"){
		password.type="text";
	}else{
		password.type="password";
	}
})		

