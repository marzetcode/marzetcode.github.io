const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function()
{
	let offset = window.pageYOffset;
	console.log("offset: " + offset);
	parallax.style.backgroundPositionY = offset * 0.8 +"px";
})