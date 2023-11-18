function changeColor() {
	$(".myname").toggleClass("pink");
}

$(function(){
	setInterval(changeColor, 700);
});