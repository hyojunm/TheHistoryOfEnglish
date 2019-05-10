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
	});

	$("#unlock1").click(function() {
		var lockCombo1 = $("#LockI").val();
		if (lockCombo1 == "1066") {
			$(".incorrectMsg").text("");
			$("lock1").hide();
			$("lock2").fadeIn(2000);
		} else {
			$(".incorrectMsg").text("The lock combination is incorrect. Please try again.")
		}
	});
});
