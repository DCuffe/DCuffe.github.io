$(document).ready(function(){
	
	$("#kurds").click(function(){
		if($("#sdfinfo").hasClass("active")){
			$("#sdfinfo").hide();
			$("#sdfinfo").removeClass("active");
		} else {
			$("#sdfinfo").show();
			$("#sdfinfo").addClass("active");
		}
	});

	
	$("#syria").click(function(){
		if($("#sarinfo").hasClass("active")){
			$("#sarinfo").hide();
			$("#sarinfo").removeClass("active");
		} else {
			$("#sarinfo").show();
			$("#sarinfo").addClass("active");
		}
	});

	$("#moderate1").click(function(){
		if($("#fsainfo").hasClass("active")){
			$("#fsainfo").hide();
			$("#fsainfo").removeClass("active");
		} else {
			$("#fsainfo").show();
			$("#fsainfo").addClass("active");
		}
	});

	$("#moderate2").click(function(){
		if($("#fsainfo").hasClass("active")){
			$("#fsainfo").hide();
			$("#fsainfo").removeClass("active");
		} else {
			$("#fsainfo").show();
			$("#fsainfo").addClass("active");
		}
	});

	$("#turkey").click(function(){
		if($("#turkeyinfo").hasClass("active")){
			$("#turkeyinfo").hide();
			$("#turkeyinfo").removeClass("active");
		} else {
			$("#turkeyinfo").show();
			$("#turkeyinfo").addClass("active");
		}
	});


	$("#nusra").click(function(){
		if($("#alnusrainfo").hasClass("active")){
			$("#alnusrainfo").hide();
			$("#alnusrainfo").removeClass("active");
		} else {
			$("#alnusrainfo").show();
			$("#alnusrainfo").addClass("active");
		}
	});

	$("#isis").click(function(){
		if($("#isisinfo").hasClass("active")){
			$("#isisinfo").hide();
			$("#isisinfo").removeClass("active");
		} else {
			$("#isisinfo").show();
			$("#isisinfo").addClass("active");
		}
	});


});