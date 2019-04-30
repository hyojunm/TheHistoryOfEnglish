$(document).ready(function() {
	$(".links").hide();
	$(".hamburger-btn").click(function() { showLinks() });
});

function showLinks() {
	var status = $(".links").css("display");

	if (status == "flex" || status == "block") {
		$(".links").slideUp(500);
	} else if (status == "none") {
		$(".links").slideDown(500).css("display", "flex");
	}
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});