$(document).ready(function () {

	// $("h1").on("click",function(){
	// 	// $("h1").addClass("color");

	// 	 $("h1").toggleClass("color");

	// });

	$("#save").on("click",function(){
		var password1 = $("#pass1").val();
		var password2 = $("#pass2").val();


		if (password1 != "" && password2 != "" ) {
			if (password1 == password2) {
				$("#msg").text("Login Success");
			}else{
				$("#msg").text("Login fail..");
			}
		}
		else{
			$("#msg").text("something wrong");
		}
	});

	$(document).ready(function(){
	  $("#show").click(function(){
	    $("#p1").animate({
	    	 right: 'toggle',
	    },"slow");
	  });
	});





	
});




