function changeColor() {
	$(".myname").toggleClass("pink");
}

function setSpinBoxHeight() {
	spinbox = $(".spinningbox");
	spinbox.each(function() {
		$(this).css("height", $(this).css("width"));
	});
}

$(function(){
	// color effect
	setInterval(changeColor, 700);
	
	// spinning box
	setSpinBoxHeight();
	$(window).resize(setSpinBoxHeight);
});