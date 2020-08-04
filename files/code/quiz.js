$(document).ready(function() {
	$("#quiz").hide();
	$("#playBtn").click(start);
	$("#submitQuiz").click(score);
});

function start() {
	$("#preQuiz").fadeOut(100);
	$("#quiz").fadeIn(1000);
}

function score() {
	var Q1 = $(".Q1:checked").val();
	var Q2 = $(".Q2:checked").val();
	var Q3 = $(".Q3:checked").val();
	var Q4 = $(".Q4").val();
	var Q5 = $(".Q5:checked").val();
	var Q6 = $(".Q6").val();
	var Q7 = $(".Q7").val();
	var Q8 = $(".Q8:checked").val();
	var Q9 = $(".Q9:checked").val();

	var score = 0;
	var total = 9;

	if (Q1 == "b") {
		$("#quizQ1").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ1").prepend("X ").css("color", "red");
	}

	if (Q2 == "c") {
		$("#quizQ2").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ2").prepend("X ").css("color", "red");
	}

	if (Q3 == "b") {
		$("#quizQ3").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ3").prepend("X ").css("color", "red");
	}

	if (Q4.toLowerCase() == "west african") {
		$("#quizQ4").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ4").prepend("X ").css("color", "red");
	}

	if (Q5 == "d") {
		$("#quizQ5").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ5").prepend("X ").css("color", "red");
	}

	if (Q6.toLowerCase() == "william the conqueror" || Q6.toLowerCase() == "william" || Q6.toLowerCase() == "conqueror william") {
		$("#quizQ6").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ6").prepend("X ").css("color", "red");
	}

	if (Q7.toLowerCase() == "industrial revolution") {
		$("#quizQ7").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ7").prepend("X ").css("color", "red");
	}

	if (Q8 == "b") {
		$("#quizQ8").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ8").prepend("X ").css("color", "red");
	}

	if (Q9 == "b") {
		$("#quizQ9").prepend("✓ ").css("color", "green");
		score++;
	} else {
		$("#quizQ9").prepend("X ").css("color", "red");
	}

	var percentage = Math.round((score / total) * 100);
	$("#score").hide().text("Your score : " + percentage + "% (" + score + "/" + total + ")").fadeIn(500);

	$("#submitQuiz").hide();
}