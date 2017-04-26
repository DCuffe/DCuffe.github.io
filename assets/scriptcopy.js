$(document).ready(function(){
	
	$("#kurds").click(function(){
		if($("#sdfinfo").hasClass("active")){
			$("#sdfinfo").hide();
			$("#sdfinfo").removeClass("active");
		} else {
			$("#sdfinfo").show();
			$("#sdfinfo").addClass("active");
			$("#everything").css("z-index", "6");
			$("#everything").css("background-color", "black");
			$("#everything").css("opacity", "0.2");
			$("#everything").removeClass("none");
		}
	});

	
	$("#syria").click(function(){
		if($("#sarinfo").hasClass("active")){
			$("#sarinfo").hide();
			$("#sarinfo").removeClass("active");
		} else {
			$("#sarinfo").show();
			$("#sarinfo").addClass("active");
			$("#everything").css("z-index", "6");
			$("#everything").css("background-color", "black");
			$("#everything").css("opacity", "0.2");
			$("#everything").removeClass("none");
		}
	});

	$("#moderate1").click(function(){
		if($("#fsainfo").hasClass("active")){
			$("#fsainfo").hide();
			$("#fsainfo").removeClass("active");
		} else {
			$("#fsainfo").show();
			$("#fsainfo").addClass("active");
			$("#everything").css("z-index", "6");
			$("#everything").css("background-color", "black");
			$("#everything").css("opacity", "0.2");
			$("#everything").removeClass("none");
		}
	});

	$("#moderate2").click(function(){
		if($("#fsainfo").hasClass("active")){
			$("#fsainfo").hide();
			$("#fsainfo").removeClass("active");
		} else {
			$("#fsainfo").show();
			$("#fsainfo").addClass("active");
			$("#everything").css("z-index", "6");
			$("#everything").css("background-color", "black");
			$("#everything").css("opacity", "0.2");
			$("#everything").removeClass("none");
		}
	});

	$("#turkey").click(function(){
		if($("#turkeyinfo").hasClass("active")){
			$("#turkeyinfo").hide();
			$("#turkeyinfo").removeClass("active");
		} else {
			$("#turkeyinfo").show();
			$("#turkeyinfo").addClass("active");
			$("#everything").css("z-index", "6");
			$("#everything").css("background-color", "black");
			$("#everything").css("opacity", "0.2");
			$("#everything").removeClass("none");
		}
	});


	$("#nusra").click(function(){
		if($("#alnusrainfo").hasClass("active")){
			$("#alnusrainfo").hide();
			$("#alnusrainfo").removeClass("active");
		} else {
			$("#alnusrainfo").show();
			$("#alnusrainfo").addClass("active");
			$("#everything").css("z-index", "6");
			$("#everything").css("opacity", "0.2");
			$("#everything").removeClass("none");
		}
	});

	$("#isis").click(function(){
		if($("#isisinfo").hasClass("active")){
			$("#isisinfo").hide();
			$("#isisinfo").removeClass("active");
		} else {
			$("#isisinfo").show();
			$("#isisinfo").addClass("active");
			$("#everything").css("z-index", "6");
			$("#everything").css("opacity", "0.2");
			$("#everything").removeClass("none");
		}
	});
});