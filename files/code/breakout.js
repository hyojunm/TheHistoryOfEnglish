$(document).ready(function() {
	$("#welcome").fadeIn(2000);
});

$(document).ready(function() {
	$("#playTheBreakout").click(function() {
		$("#welcome").hide();
		$("#story").fadeIn(2000);
	});

	$("#toLockI").click(function() {
		$("#story").hide();
		$("#lock1").fadeIn(2000);
	})
});
