$(document).ready(function(){
	$("#but1").click(function () {

		$("#container1").effect("bounce",{},1000)
		$("#container2").effect("pulsate",{}, 1000)

	});

	$("#but2").click(function () {

	$("#container1").hide("explode",{}, 1000)
	$("#container2").hide("puff",{}, 1000)

	});

	$("#but3").click(function () {

	$("#container1").show("slide",{}, 1000)
	$("#container2").show("drop",{}, 1000)

	});

	$("#but4").click(function () {

	$("#square ").animate({
	borderColor: "red",
	borderWidth: 3,
	}, 1500);

	});

	$("#but5").click(function () {

	$("#square ").animate({
	backgroundColor: "brown",

	}, 1500);

	});

	$("#but6").click(function () {

	$("#square ").animate({
	backgroundColor: "#BEBEBE",
	borderColor: "black",
	borderWidth: 1,
		}, 1500);
	})
})