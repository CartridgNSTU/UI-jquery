$(document).ready(function(){

	$("#sd1").slider();
	$("#pb1").progressbar({value:40});
	$("#tabs").tabs();
	$("#but1").click(function(){
	$("#descr1").dialog();
});

	$("#but2").click(function(){
		$("#descr2").dialog();
	});
	$("#but3").click(function(){
		$("#descr3").dialog();
	});

});